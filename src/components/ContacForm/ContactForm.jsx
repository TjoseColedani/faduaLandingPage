import React, { useState } from 'react';
import styles from './ContactFormStyle.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    telefono: '',
    sucursal: '',
    consulta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerText}>
        <h3>
          Queremos asesorarte sobre tu Fiat. Por favor completa el siguiente formulario y nos pondremos en contacto.
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombreApellido" className={styles.label}>Nombre y Apellido</label>
          <input
            type="text"
            id="nombreApellido"
            name="nombreApellido"
            placeholder="Ingresa tu nombre y apellido"
            value={formData.nombreApellido}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefono" className={styles.label}>Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="sucursal" className={styles.label}>Sucursal</label>
          <input
            type="text"
            id="sucursal"
            name="sucursal"
            placeholder="Ingresa la sucursal"
            value={formData.sucursal}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="consulta" className={styles.label}>Consulta</label>
          <textarea
            id="consulta"
            name="consulta"
            placeholder="Escribe tu consulta"
            value={formData.consulta}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>

        <div className={styles.submitButtonContainer}>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
