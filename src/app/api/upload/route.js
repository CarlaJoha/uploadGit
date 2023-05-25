import { NextResponse } from "next/server";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { storage } from "../../../firebase/config.js"
import { v4 } from "uuid";//instalo npm i uuid

/**
 * upload a file using firebase
 * @param {File} file  the file to upload
 * @returns {Promise<string>}url of the uploaded file
*/
export const galery = []; 

export async function Post(file) {
  try {
    const storageRef = ref(storage, v4()); //referencia para subir archivos de firebase
    await uploadBytes(storageRef, file);
   const urlImage = await getDownloadURL(storageRef);
  //  return urlImage;
   return galery.push(urlImage);

  } catch (err) {
    return NextResponse.json(
      JSON.stringify(
        { message: "No file to upload" },
        {
          status: 400,
        }
      )
    );
  }
};

// const galeryImages = () => {

// }
////Configuración para subir a la carpeta public
// import { writeFile } from "fs/promises";
// import { NextResponse } from "next/server";
// import path from "path"; //para concatenar directorios

// export async function POST(request) {
//   try {
//     const data = await request.formData();
//     const file = data.get("file");

//     //para que lo guarde en la memoria en este caso una carpeta
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     //writeFile espera un lugar para guardar el archivo y el buffer que es el valor de la imagen
//     const filePath = path.join(process.cwd(), "public", file.name); //cwd: current working directory
//     // filePath es donde lo voy a guardar

//     writeFile(filePath, buffer);

//     console.log(`File save in ${filePath}`);

//     return new Response(
//       JSON.stringify({
//         message: "Uploaded file",
//       })
//     );
//   } catch (err) {
//     return NextResponse.json(
//       JSON.stringify(
//         { message: "No file to upload" },
//         {
//           status: 400,
//         }
//       )
//     );
//   }
// }