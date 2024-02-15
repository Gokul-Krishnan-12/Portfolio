'use client';
import Image from "next/image";
import styles from "./HeroBanner.module.scss";
import profileImage from "@assets/images/gogu-image.png";
import { useEffect, useState } from "react";

const HeroBanner = (props) => {
  const { className, variant } = props;
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    setLoaded(true)
  },[]);

  return (
    <div className={`${styles.HeroBanner} ${loaded?styles['HeroBanner--loaded']:''} container `}>
      <figure>
        <Image
          src={profileImage}
          alt="Image of Gokul"
          width={450}
          height={350}
          quality={100}
        />
      </figure>

      <div className="textContainer">
        <h1>Gokul Krishnan</h1>
        <span>
          <p>
            Also known as <b>Goku</b>,I am a front-end developer based in
            Kochi, Kerala, India. With a strong background in crafting various
            front-end solutions, I have experience in developing diverse
            applications.
          </p>
          <p>
            I am deeply passionate about creating cutting-edge, pixel-perfect
            interfaces and implementing user experiences that are not only
            visually appealing but also intuitive. My goal is to consistently
            deliver beautiful and functional designs that enhance user
            interactions.
          </p>
        </span>
         <button className="btn">Download Resume</button>
      </div>
    </div>
  );
};

export default HeroBanner;
