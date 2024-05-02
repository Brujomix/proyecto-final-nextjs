"use client";
import React from 'react'
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";

export function FormPrecioCategoria({cat_desc}) {
  return (
    <div>
    <Formik
      initialValues={{
        cat_precio: ""
      }}
      validate={(values) => {
        const errors = {};

        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={style.formBody} onSubmit={handleSubmit}>
          <label>Editar Precio de Categoria</label>
          <input
            className={style.inputData}
            type="text"
            placeholder="Ingresa Nombre"
            name="cat_precio"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={style.errosForm}>{errors.cat_precio}</div>

          <div className={style.containerBotones}>
            <BotonDinamico type="submit">Editar</BotonDinamico>
            <BotonDinamico type="reset">Reset Form</BotonDinamico>
          </div>
        </form>
      )}
    </Formik>
  </div>
  )
}
