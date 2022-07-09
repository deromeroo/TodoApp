import { createPortal } from 'react-dom';
import '../styles/Modal.css';

export const Modal = ({children}) => {
  return createPortal(
    <div className='Modal-Bg'>
        {children}
    </div>,
    document.querySelector('#modal')
  )
}
