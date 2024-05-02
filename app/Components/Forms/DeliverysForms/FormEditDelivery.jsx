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
        del_desc: objDelivery.del_desc
      }}
      validate={(values) => {
        const errors = {};
        if (!values.del_desc) {
          errors.del_desc = "Campo Obligatorio"
        }
        return errors;
      }}
      onSubmit={async (values, {setSubmitting}) => {
        try {
          await editDelivery(objDelivery.del_iden, values).then((res) => {
            if (res.status === 200) {
              Toast_Dinamico("success", "Delivery Editado");
              setSubmitting(true);
            }
          });
        } catch (error) {
          console.log(error);
          Toast_Dinamico("error", "Intenta Más Tarde");
        }
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
            <BotonDinamico type="reset">Reset Form</BotonDinamico>
          </div>
        </form>
      )}
    </Formik>
  </div>
  )
}