"use client";
import { useEffect, useState } from "react";
import styles from "./ProjectSection.module.scss";
import Image from "next/image";
import phone from "@assets/images/phone.jpg";
import pet from "@assets/images/pet.jpg";

import calculator from "@assets/images/phone.jpg";

import backIcon from "@assets/icons/back-icon.png";
import nextIcon from "@assets/icons/next-icon.png";
import Link from "next/link";

const ProjectSection = (props) => {
  useEffect(() => {
    const activate = (e) => {
      const slider = document.querySelector(".slider");
      const items = document.querySelectorAll(".item");

      e.target.matches(".next") && slider.append(items[0]);
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    };

    document.addEventListener("click", activate, false);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);

  return (
    <div className={`${styles.ProjectSection} `}>
      <ul className="slider">
        {/* Render items based on the active index */}

        <li
          className={`item`}
          style={{
            backgroundImage: `url(${phone.src})`,
          }}
        >
          <div className="content">
            <h2 className="title">Smart Calculator</h2>
            <p className="description">
              A smart calculator using Python that understands both voice and
              text inputs. It can handle spoken commands and typed mathematical
              expressions,
            </p>
            <Link href="#" title="Github link">
              Go to Github
            </Link>
          </div>
        </li>
        <li
          className={`item`}
          style={{
            backgroundImage: `url(${pet.src})`,
          }}
        >
          <div className="content">
            <h2 className="title">Screen Pet</h2>
            <p className="description">
              An interactive screen pet using Python and the tkinter library.
              This virtual companion responds dynamically to both text input and
              cursor actions. The tkinter library facilitates the creation of a
              visually appealing and responsive environment, allowing the screen
              pet to engage with users through input interactions and respond to
              cursor movements, providing an engaging and interactive user
              experience.
            </p>
            <Link href="#" title="Github link">
              Go to Github
            </Link>
          </div>
        </li>
        <li
          className={`item`}
          style={{
            backgroundImage: `url(${calculator.src})`,
          }}
        >
          <div className="content">
            <h2 className="title">Video Popup : Chrome Extension</h2>
            <p className="description">
              A Chrome extension designed as a popup video player allows users
              to stream videos directly from websites without the need to open
              them in a separate tab or window.
            </p>
            <Link href="#" title="Github link">
              Go to Github
            </Link>
          </div>
        </li>

        <li
          className={`item`}
          style={{
            backgroundImage: `url(${calculator.src})`,
          }}
        >
          <div className="content">
            <h2 className="title">Portfolio Website</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <Link href="#" title="Github link">
              Go to Github
            </Link>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <Image
          className="btn prev"
          name="arrow-back-outline"
          src={backIcon}
          width={50}
          height={50}
          quality={100}
        />
        <Image
          className="btn next"
          name="arrow-forward-outline"
          src={nextIcon}
          width={50}
          height={50}
          quality={100}
        />
      </nav>
    </div>
  );
};

export default ProjectSection;
