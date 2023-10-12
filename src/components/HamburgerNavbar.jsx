import { useState } from "react";
import HamburgerImg from '../Assets/hamburger-img.png'
import Modal from "./Modal";



const HamburgerNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img onClick={toggleModal} src={HamburgerImg} alt="" />
      </div>
    
      {isModalOpen && <Modal onClose={toggleModal} />}
    </nav>
  );
}

export default HamburgerNavbar