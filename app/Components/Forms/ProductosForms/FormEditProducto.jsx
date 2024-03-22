"use client";
import React from 'react'
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";

export function FormEditProducto({pro_iden}) {
  return (
    <div>
    <Formik
      initialValues={{
        pro_desc: ""
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
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={style.formBody} onSubmit={handleSubmit}>
          <label>Editar Producto</label>
          <input
            className={style.inputData}
            type="text"
            placeholder="Ingresa Nombre"
            name="pro_desc"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={style.errorsForm}>{errors.pro_desc}</div>

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