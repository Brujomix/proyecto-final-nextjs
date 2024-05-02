"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "../form.module.css";

export function FormContacto() {
  return (
    <div className={style.containerForm}>
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
            errors.contacto_email = "Campo Obligatorio";
            errors.contacto_nombre = "Campo Obligatorio";
            errors.contacto_mensaje = "Campo Obligatorio";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values))
        }, 1000);
          setSubmitting(true)
        }}
      >
        {({
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <input
              className={style.inputData}
              type="text"
              placeholder="Tu Email"
              name="contacto_email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errorsForm}>{errors.contacto_email}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder="Tu Nombre"
              name="contacto_nombre"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errorsForm}>{errors.contacto_nombre}</div>
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
            <div className={style.errorsForm}>{errors.contacto_mensaje}</div>

            <div className={style.containerBotones}>
              <BotonDinamico disabled={isSubmitting} className="text-black text-sm" type="submit">
                Enviar Mensaje
              </BotonDinamico>
              <BotonDinamico className="text-black text-sm" type="reset">
                Reset Form
              </BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
