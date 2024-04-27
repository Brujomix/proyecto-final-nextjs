"use client";
import React from "react";
import style from "@/app/Components/Forms/form.module.css";
import { Formik } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { addDelivery } from "@/app/CRUD/post";

export function FormAddDelivery() {
  return (
    <div>
      <Formik
        initialValues={{
          del_desc: "",
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await addDelivery(values).then((res) => {
              if (res.status === 200) {
                Toast_Dinamico("success", "Producto Agregado");
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
          resetForm,
        }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <label>Agregar Delivery</label>
            <input
              className={style.inputData}
              type="text"
              placeholder="Ingresa Nombre"
              name="del_desc"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errorsForm}>{errors.del_desc}</div>

            <div className={style.containerBotones}>
              <BotonDinamico disabled={isSubmitting} type="submit">
                Agregar
              </BotonDinamico>
              <BotonDinamico onClick={resetForm} type="reset">
                Reset Form
              </BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
