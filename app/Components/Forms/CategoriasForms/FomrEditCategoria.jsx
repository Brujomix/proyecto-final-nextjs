"use client";
import React from 'react'
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { editCategoria } from '@/app/CRUD/update';

export function FormEditCategoria({objCategoria}) {
  console.log(objCategoria);
  return (
    <div>
      <Formik
        initialValues={{
          cat_iden: objCategoria.cat_iden,
          cat_desc: objCategoria.cat_desc,
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await editCategoria(values).then((res) => {
              if (res.status === 200) {
                Toast_Dinamico("success", "Categoria Editada");
                setSubmitting(false);
                resetForm();
              }
            });
          } catch (error) {
            console.log(error);
            Toast_Dinamico("error", "Intenta Más Tarde");
            resetForm();
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm
        }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <label>Editar una Categoria</label>
            <input
              className={style.inputData}
              type="text"
              placeholder={objCategoria.cat_desc}
              name="cat_desc"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.cat_desc}</div>

            <div className={style.containerBotones}>
              <BotonDinamico disabled={isSubmitting} type="submit">Editar</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}