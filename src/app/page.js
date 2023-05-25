"use client";
import "./page.css";
import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Post, galery } from "./api/upload/route";
import logo from "../assets/logoByN.svg";
// import GaleryImages from "./components/galery";

export default function Home() {
  const [file, setFile] = useState();
  const [label, setLabel] = useState("");

  const handleLabelOnChange = (event) => {
    setLabel(event.target.files[0].name);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log("event.target", event.target.files[0]);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      Swal.fire({
        title: "upload error",
        text: "You must select a file",
        icon: "error",
      });
    }
    try {
      const result = await Post(file);
      console.log(result);
      if (file) {
        Swal.fire({
          title: "Congratulations",
          text: "File uploaded",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Advertencia",
        text: "Error de funcionalidad",
        icon: "warning",
      });
    }
    setFile();
    setLabel("");
  };

  return (
    <div className="containerHome">
      <div className="logo">
        <Image src={logo} width={230} height={60} alt="logo" />
      </div>
      <h1 className="title"> Upload a file:</h1>
      <section className="uploadSection">
        <form className="containerForm" onSubmit={handleOnSubmit}>
          <div className="containerInput">
            <label className="divisionInput" onChange={handleLabelOnChange}>
              {" "}
              Select file
              <input
                className="inputForm"
                onChange={handleFileChange}
                type="file"
              />
            </label>
            <label>{label}</label>
          </div>
          <button className="buttonForm">Upload</button>
        </form>
        {file && (
          <Image
            width={50}
            height={50}
            src={URL.createObjectURL(file)}
            alt="preview file"
            className="previewImg"
          />
        )}
      </section>
      <section className="containerGalery">
        {galery.map((element, index) => (
          <ul key={index}>
            <li className="objList">
              <img className="img" src={element} alt="imageGalery" />
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}

/* 
//Para subida a carpeta public
const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!file) return;
    try {
      //archivo que quiero enviar
      const form = new FormData();
      form.set("file", file);

      //response: sending file to server con un método post
      const response = await fetch("api/upload", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        Swal.fire({
          title: "Congratulations",
          text: "File uploaded",
          icon: "success",
        })
      }
      console.log(response)
      setFile()

    } catch (error) {
      console.log(message.error);
    }
  };
 */
