import React from 'react';
import styles from './InfoSectionStyle.module.css'; // Importa los estilos

function InfoSection() {
  return (
    <div className={styles.container}>
      <div>
        <h3>¿Necesitas nuestra ayuda?</h3>
      </div>
      <div className={styles.sections}>
        {/* Primer div */}
        <div className={styles.section}>
          <div className={styles.iconContainer} style={{ backgroundColor: '#FF5733' }}></div>
          <p>Envíanos un mensaje</p>
          <button className={styles.button}>+54 387 4800908</button>
        </div>

        {/* Segundo div */}
        <div className={styles.section}>
          <div className={styles.iconContainer} style={{ backgroundColor: '#33AFFF' }}></div>
          <p>Contactate con nosotros</p>
          <div className={styles.addresses}>
            <p>Salta capital | San Luis 660</p>
            <p>S. S. de Jujuy | Colectora Ruta Nac. 9 Km 1007</p>
            <p>Concepción Tucumán | Shipton 1585</p>
          </div>
        </div>

        {/* Tercer div */}
        <div className={styles.section}>
          <div className={styles.iconContainer} style={{ backgroundColor: '#FFAC33' }}></div>
          <p>Probá tu próximo Fiat</p>
          <button className={styles.button}>Reservar test drive</button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
