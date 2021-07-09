import React from 'react';
// import OkIcon from '../images/Ok-icon.svg';
// import FailIcon from '../images/Fail-icon.svg';
import PopupWithForm from './PopupWithForm';
import SuccessIcon from '../images/Ok-icon.svg';
import ErrorIcon from '../images/Fail-icon.svg';


const iconImage = {
  success: SuccessIcon,
  error: ErrorIcon
}


function InfoTooltip({ isOpen, onClose, infotooltipData: {message, status} = {} }) {

console.log(`В ИнфотТултип ИзОпен такой - ${isOpen}`);
  
  return (
    <PopupWithForm name="infotooltip" isOpen={isOpen} onClose={onClose}>
      <img style={{display: "block", margin: "24px auto 8px"}} src={iconImage[status]} alt={message}></img>
      <p style={{fontSize: "24px", fontWeight: "900", lineHeight: "29px", textAlign: "center"}}>{message}</p>
    </PopupWithForm>
  )
}


export default InfoTooltip;