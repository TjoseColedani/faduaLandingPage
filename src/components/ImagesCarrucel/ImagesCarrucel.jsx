import style from "./ImagesCarrucelStyle.module.css";

function ImagesCarrucel() {
  // Datos de las imágenes y sus descripciones
  const imagesData = [
    {
      id: 1,
      image: "/assets/CONFORT.jpg",  // Ruta de la imagen
      title: "CONFORTABILIDAD PARA 5 PASAJEROS",
      description: "Disponible en todas las versiones."
    },
    {
      id: 2,
      image: "/assets/CAJA.jpg",
      title: "NUEVA TECNOLOGIA EN LA CAJA DE CARGA",
      description: "Capaz de abrirse con una sola mano"
    },
    {
      id: 3,
      image: "/assets/SILLABEBE.jpg",
      title: "ISOFIX",
      description: "Trava de uso practico y seguro para fijar la silla del bebe en el asiento trasero de tu fiat strada. Disponible en las versiones cabina doble"
    },
  ];

  return (
    <div className={style.imagesCarrusel}>
      <h3 className={style.title}>CONOCE MAS SOBRE STRADA</h3>
      <div className={style.images}>
        {imagesData.map((image) => (
          <div key={image.id} className={style.card}>
            <img src={image.image} alt={image.title} className={style.image} />
            <p className={style.imageTitle}>{image.title}</p>
            <p className={style.imageDescription}>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesCarrucel;
