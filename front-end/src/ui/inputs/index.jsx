import React from 'react';
import Form from 'react-bootstrap/Form';

export function SelectBasic(props) {
  return (
        <Form.Select className={props.className} name={props.name} aria-label="Default select example">
            {props.value.map((v)=>{return<option name={v} key={v} value={v}>{v}</option>})}
        </Form.Select>
  
  );
}

export function InputButton(props){
  return <input style={props.style} className= {props.className} onClick={props.onClick} type="button" value={props.value}/>
}

