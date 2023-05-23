import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"; //para concatenar directorios

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    //para que lo guarde en la memoria en este caso una carpeta
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    //writeFile espera un lugar para guardar el archivo y el buffer que es el valor de la imagen
    const filePath = path.join(process.cwd(), "/src/assets", file.name); //cwd: current working directory
    // filePath es donde lo voy a guardar

    writeFile(filePath, buffer);

    console.log(`File save in ${filePath}`);

    return new Response(
      JSON.stringify({
        message: "Uploaded file",
      })
    );
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
}

// export async function GET(request){
//     return new Response(JSON.stringify({
//         message: "Uploading file",
//     }))
// }
