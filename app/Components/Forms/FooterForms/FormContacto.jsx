"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "@/app/Components/Forms/form.module.css";

export function FormContacto() {
  return (
    <div>
      <Formik
        initialValues={{
          contacto_email: "",
          contacto_nombre: "",
          contacto_mensaje: "",
        }}
        validate={(values) => {
          const errors = {};
          if (
            !values.contacto_email ||
            !values.contacto_nombre ||
            !values.contacto_mensaje
          ) {
            errors.contacto_email = "Requerido";
            errors.contacto_nombre = "Requerido";
            errors.contacto_mensaje = "Requerido";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className={style.formBodyFooter}  onSubmit={handleSubmit}>
            <input
              className={style.inputData}
              type="text"
              placeholder="Tu Email"
              name="contacto_email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.contacto_email}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder="Tu Nombre"
              name="contacto_nombre"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.contacto_nombre}</div>
           
            <textarea
              name="contacto_mensaje"
              id=""
              cols="26"
              rows="8"
              className={style.areaTexto}
              placeholder="Dejanos un mensaje"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.contacto_mensaje}</div>

            <div className={style.containerBotones}>
              <BotonDinamico type="submit">Enviar Mensaje</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
