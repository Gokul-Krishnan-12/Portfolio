'use client';
import styles from "./Contact.module.scss";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea} from "@nextui-org/react";
import instagram from "@assets/icons/instagram.svg";
import facebook from "@assets/icons/facebook.svg";
import linkedin from "@assets/icons/linkedin.svg";
import skype from "@assets/icons/skype.svg";
import gmail from "@assets/icons/gmail.svg";
import whatsapp from "@assets/icons/whatsapp.svg";


import Image from "next/image";

const Contact = ((props) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div
      className={`${styles.Contact} container `}
    >
      <div
        className={`${styles["text-container"]} 
        `}
      >
        <h1>Let's Create Something Amazing Together</h1>
      
          <div className={`${styles["text"]}`}>
            I’m basically everywhere. So feel free to pick which mode of
            communciation works for you.
        
        </div>
      </div>
      <div
        className={`${styles["social-container"]} 
        `}
      >
        <button className={`${styles["btn"]}`}>Contact Me</button>
         <div
          className={`${styles["icons-social"]} 
        `}
        >
           <Image src={gmail} width={25} height={25} alt="instagram" quality={100}/>
           <Image src={linkedin} width={25} height={25} alt="instagram" quality={100}/>
           <Image src={skype} width={25} height={25} alt="instagram" quality={100}/>
        <Image src={instagram} width={25} height={25} alt="instagram" quality={100}/>
        <Image src={facebook} width={25} height={25} alt="instagram" quality={100}/>
        <Image src={whatsapp} width={25} height={25} alt="instagram" quality={100}/>

        </div> 
      </div>
    </div>
  );
});


export default Contact;
