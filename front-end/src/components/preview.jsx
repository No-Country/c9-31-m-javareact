import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { useRecoilState } from 'recoil';
import "../components/sell-form/sellForm.css"
import { LoadPhoto } from "../img/index";
import { picturesURLState } from '../hooks';

const thumb = {
  marginBottom: 8,
  marginRight: 8,
  width: "100%",
  height:"100%",
  padding: 4,
  boxSizing: 'border-box',
  borderRadius:"15px"
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '100%',
  height: '90%',
  borderRadius:"15px"
};


export function Previews() {
  const [files, setFiles] = useState([]);
  const [pictureURL, SetpictureURL] = useState("")
  const [savePicture, setSavePicture] = useRecoilState(picturesURLState)
  const {getRootProps, getInputProps} = useDropzone({
    maxFiles:6,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
    })));
    const currentfile = acceptedFiles[0]
    const reader = new FileReader();
    reader.readAsDataURL(currentfile)
    reader.onloadend = ()=>{
    SetpictureURL( reader.result)
    setSavePicture(savePicture.concat(reader.result))
    }
    }
});

console.log(savePicture);

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>    
    </div>
  ));
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
      <section className="dropzone-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {pictureURL?<div>{thumbs}</div>
        :
          <div>
            <LoadPhoto/>
            <p className="sell-form_photo_instructions">Agregá o arrastrá tu foto aquí</p>
          </div>}
      </div>
    </section>
    
  );
}

