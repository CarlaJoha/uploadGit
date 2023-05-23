"use client";
// import Image from 'next/image'
import "./page.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Home() {

  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

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

  return (
    <div className="containerHome">
      <h1 className="title"> Upload a file:</h1>
      <form className="containerForm" onSubmit={handleOnSubmit}>
        <input
          className="inputForm"
          onChange={handleFileChange}
          type="file"
          name="file"
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
    </div>
  );
}
