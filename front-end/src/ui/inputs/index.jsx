import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export function SelectBasic(props) {
  return (
        <Form.Select className={props.className} name={props.name} aria-label="Default select example">
            {props.value.map((v)=>{return<option name={v} key={v} value={v}>{v}</option>})}
        </Form.Select>
  
  );
}

export function InputButton(props){

  const [select, setSelect] = useState(false)
  const styleSelect = {
    borderRadius: props.radius || "10px",
    boxShadow: "0px 3px 24px 11px rgba(0,0,0,1)",
  }
  const styleNoSelect = {
    border: "none",
  }

const style = select? styleSelect : styleNoSelect

  return <div style={style} onClick={()=>{setSelect(!select)}}>
    <input className= {props.className} onClick={props.onClick} type="button" value={props.value}/>
  </div>
  
}