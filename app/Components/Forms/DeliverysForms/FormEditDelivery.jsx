"use client";
import React from 'react'
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { editDelivery } from '@/app/CRUD/update';

export function FormEditDelivery({objDelivery}) {

  return (
    <div>
    <Formik
      initialValues={{
        del_iden : objDelivery.del_iden,
        del_desc: objDelivery.del_desc
      }}
      validate={(values) => {
        const errors = {};

        return errors;
      }}
      onSubmit={async (values, {setSubmitting, resetForm}) => {

        try {
          await editDelivery(values).then((res) => {
            if (res.status === 200) {
              Toast_Dinamico("success", "Delivery Editado");
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
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm
      }) => (
        <form className={style.formBody} onSubmit={handleSubmit}>
          <label>Editar Delivery</label>
          <input
            className={style.inputData}
            type="text"
            placeholder={objDelivery.del_desc}
            name="del_desc"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className={style.errorsForm}>{errors.del_desc}</div>

          <div className={style.containerBotones}>
            <BotonDinamico disabled={isSubmitting} type="submit">Editar</BotonDinamico>
            <BotonDinamico onClick={resetForm} type="reset">Reset Form</BotonDinamico>
          </div>
        </form>
      )}
    </Formik>
  </div>
  )
}