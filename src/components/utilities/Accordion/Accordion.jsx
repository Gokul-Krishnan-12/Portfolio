"use client";
import { memo, useEffect, useState } from "react";
import styles from "./Accordion.module.scss";
import Image from "next/image";
import frontendImage from "@assets/images/frontend-image.jpg";
import backendImage from "@assets/images/backend-image.jpg";
import otherImage from "@assets/images/other-image.jpg";
import html from "@assets/icons/html.svg";
import css from "@assets/icons/css.svg";
import sass from "@assets/icons/sass.svg";
import js from "@assets/icons/javascript.svg";
import vue from "@assets/icons/vue-js.svg";
import nodejs from "@assets/icons/nodejs.svg";
import redux from "@assets/icons/redux.svg";
import nextjs from "@assets/icons/nextjs.svg";
import contentful from "@assets/icons/contentful.svg";
import graphql from "@assets/icons/graphql.svg";
import mysql from "@assets/icons/mysql.svg";
import wp from "@assets/icons/wordpress.svg";
import mongodb from "@assets/icons/mongodb.svg";
import php from "@assets/icons/php.svg";
import laravel from "@assets/icons/laravel.svg";
import figma from "@assets/icons/figma.svg";
import filezilla from "@assets/icons/filezilla.svg";

import useMountTransition from "helper/useMountTransition";

const Accordion = (props) => {
  const [activeCard, setActiveCard] = useState(1);

  const handleClick = (index) => {
    setActiveCard(index);
  };

  const skills = {
    frontend: {
      title: "Frontend",
      icon: `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path
          fill="white"
          d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"
        />
      </svg>
        `,
      coverImage: frontendImage,
      images: [
        { src: nextjs, alt: "next js" },
        { src: js, alt: "javascript" },
        { src: html, alt: "html" },
        { src: css, alt: "css" },
        { src: sass, alt: "sass" },
        { src: vue, alt: "vue js" },
        { src: redux, alt: "redux" },
      ],
    },
    backend: {
      title: "Backend",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="white" d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>      `,
      coverImage: backendImage,
      images: [
        { src: nodejs, alt: "node js" },
        { src: contentful, alt: "contentful" },
        { src: wp, alt: "wordpress" },
        { src: graphql, alt: "graphql" },
        { src: mongodb, alt: "mongodb" },
        { src: php, alt: "PHP" },
        { src: mysql, alt: "mysql" },
        { src: laravel, alt: "laravel" },
      ],
    },
    other: {
      title: "Other",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="white" d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
        `,
      coverImage: otherImage,
      images: [
        { src: figma, alt: "figma" },
        { src: filezilla, alt: "filezilla" },
      ],
    },
  };

  const Card = ({ data, index }) => {
    const { title, icon, images, coverImage } = data;
    return (
      <div
        className={`card ${index == activeCard && "active"}`}
        data-index={index}
        onClick={() => {
          handleClick(index);
        }}
      >
        <figure className="background">
          {index === activeCard ? (
            images.map((img, index) => (
              <Image
                className="skillImages"
                src={img.src}
                width={100}
                height={100}
                alt={img.alt}
                title={img.alt}
                quality={100}
                key={index}
              />
            ))
          ) : (
            <Image
              className="coverImage"
              src={coverImage}
              width={500}
              height={200}
              quality={100}
              alt=""
            />
          )}
        </figure>
        <div className="card-content">
          <div
            className="profile-image"
            dangerouslySetInnerHTML={{ __html: icon }}
          />

          <h3 className="title">{title}</h3>
        </div>
        <div className="backdrop"></div>
      </div>
    );
  };

  const { className, variant } = props;
  return (
    <div
      className={`${styles.Accordion} ${
        styles[`Accordion__${variant}`]
      } ${className}`}
    >
      <div className="container">
        {Object.values(skills).map((skill, index) => (
          <Card key={index} data={skill} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
