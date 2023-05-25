import { galery } from "../api/upload/route";

const GaleryImages = () => {


  return (
    <section className="containerGalery">
      {galery.map((element, index) => (
        <ul key={index} >
          <li className="objList">
            <img src={element} alt="imageGalery" width={50} height={50} />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default GaleryImages;
