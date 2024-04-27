"use client";
import React from 'react'
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { addCategoria } from '@/app/CRUD/post';

export function FormAddCategoria() {
  return (
    <div>
      <Formik
        initialValues={{
          cat_desc: ""
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          try {
            await addCategoria(values).then((res) => {
              if (res.status === 200) {
                Toast_Dinamico("success", "Categoria Agregada");
                setSubmitting(false);
                resetForm();
              }
            });
          } catch (error) {
            console.log(error);
            Toast_Dinamico("error", "Error del Servidor");
          }
        }}
      >
        {({
          errors,
          isSubmitting,
          resetForm,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <label>Agregar una Categoria</label>
            <input
              className={style.inputData}
              type="text"
              placeholder="Ingresa Nombre"
              name="cat_desc"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.cat_desc}</div>

            <div className={style.containerBotones}>
              <BotonDinamico disabled={isSubmitting} type="submit">Agregar</BotonDinamico>
              <BotonDinamico onClick={resetForm} type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
