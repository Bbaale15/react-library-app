import React from 'react';

const button = props =>{
    return <button disabled={props.disabled} onClick={props.Onclick} type={props.type}  className={`btn ${props.className}`} >{props.action}</button>
}

export  default  button;
