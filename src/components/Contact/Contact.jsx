'use client';
import styles from "./Contact.module.scss";
import instagram from "@assets/icons/instagram.svg";
import facebook from "@assets/icons/facebook.svg";
import linkedin from "@assets/icons/linkedin.svg";
import telegram from "@assets/icons/telegram.png";
import whatsapp from "@assets/icons/whatsapp.svg";


import Image from "next/image";
import Link from "next/link";

const Contact = ((props) => {
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
        <Link href='mailto:gokulkrih80@gmail.com' className={`${styles["btn"]}`}>Contact Me</Link>
         <div
          className={`${styles["icons-social"]} 
        `}
        >
           
           <Link href="https://in.linkedin.com/in/gokul-krishnan-2000" target="_blank"><Image src={linkedin} width={25} height={25} alt="linkedin" quality={100}/></Link>
           <Link href="https://t.me/gooku_12" target="_blank"><Image src={telegram} width={25} height={25} alt="telegram" quality={100}/></Link>
           <Link href="https://www.instagram.com/g.o.g.u_?igsh=MXY3dmNsdmo5OGR5aw==" target="_blank"> <Image src={instagram} width={25} height={25} alt="instagram" quality={100}/></Link>
           <Link href="https://api.whatsapp.com/send/?phone=919497294324&text&type=phone_number&app_absent=0" target="_blank"> <Image src={whatsapp} width={25} height={25} alt="whatsapp" quality={100}/></Link>

        </div> 
      </div>
    </div>
  );
});


export default Contact;
