import style from "./CarCardsStyle.module.css";

function CarCards() {
  // Datos de los autos dentro del mismo archivo
  const cars = [
    {
      id: 1,
      title: "Fastback",
      models: ["Fastback", "Fastback Abarth"],
      image: "/assets/FASTBACK.jpg"
    },
    {
      id: 2,
      title: "Mobi",
      models: ["Mobi"],
      image: "/assets/MOBI.jpg"
    },
    {
      id: 3,
      title: "Cronos",
      models: [
        "Like 1.3MT",
        "Drive 1.3MT",
        "Stile 1.3MT",
        "Drive 1.3 CVT",
        "Precision 1.3 CVT",
      ],
      image: "/assets/CRONOS.jpg"
    },
    {
      id: 4,
      title: "Toro",
      models: ["Freedom", "Volcano Nafta", "Volcano Diesel", "Ultra"],
      image: "/assets/TORO.jpg"
    },
  ];

  return (
    <div className={style.container}>
      {cars.map((car) => (
        <div key={car.id} className={style.card}>
          <h3>{car.title}</h3>
          {/* Aquí se muestra la imagen del auto */}
          <img src={car.image} alt={car.title} className={style.image} />
          <details>
            <summary>Ver versiones</summary>
            <ul>
              {car.models.map((model, index) => (
                <li key={index}>{model}</li>
              ))}
            </ul>
          </details>
        </div>
      ))}
    </div>
  );
}

export default CarCards;
