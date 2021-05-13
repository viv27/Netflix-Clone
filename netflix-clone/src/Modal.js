import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import './Modal.css'
const Background = styled.div`


`
const ModalWrapper = styled.div`
 width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 2fr 2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  background-color: purple

`
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({modal,modelOpen}) {
    return (
        <div>
            {modal ? (
        <div className="modal">
        <h2>Hello</h2>
        <button onClick={()=> modelOpen(prev=>!prev)}>Close</button>
           
        </div>):null }
            
        </div>
    )
}

export default Modal
