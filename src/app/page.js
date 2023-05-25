"use client";
import "./page.css";
import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Post, galery} from "../app/api/upload/route";

export default function Home() {
  const [file, setFile] = useState();

console.log("galery", galery);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
      setFile();
    } catch (error) {
      Swal.fire({
        title: "Advertencia",
        text: "Error de funcionalidad",
        icon: "warning",
      });
    }
  };

  return (
    <div className="containerHome">
      <h1 className="title"> Upload a file:</h1>
      <form className="containerForm" onSubmit={handleOnSubmit}>
        <input
          className="inputForm"
          onChange={handleFileChange}
          type="file"
          />
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
      <section>
        {
          galery.map((element, index) => (
            <ul>
              <li key={index}>
                <img src={element} alt="image" />
              </li>
            </ul>
          ))
        }
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
