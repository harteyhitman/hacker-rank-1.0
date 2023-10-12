import Button from "./Button";


const Modal = ({ onClose }) => {


    return (
      <div className="modal">
       <ul>
        <li><a href="#timeline " onClick={onClose}>Timeline</a></li>
        <li><a href="# " onClick={onClose}>Overview</a></li>
        <li><a href="#faq-container " onClick={onClose}>FAQs</a></li>
        <li><a href="#contact-us " onClick={onClose}>Contact</a></li>
       </ul>
        <Button className="primary Register modal-btn" label="Register" />
          <span className="close-button" onClick={onClose}>x</span>
          
          
       
      </div>
    );
  };
  
  export default Modal;