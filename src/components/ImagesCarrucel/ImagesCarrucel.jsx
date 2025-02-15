import ImagesCards from "../ImagesCards/ImagesCards";
import style from "./ImagesCarrucelStyle.module.css";

function ImagesCarrucel() {
  const imagesData = ["Imagen 1", "Imagen 2", "Imagen 3"];

  return (
    <div className={style.imagesCarrusel}>
      {imagesData.map((title, index) => (
        <ImagesCards key={index} title={title} />
      ))}
    </div>
  );
}

export default ImagesCarrucel;
