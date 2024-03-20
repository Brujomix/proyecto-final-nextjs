"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "@/app/Components/Forms/form.module.css";

export function FormLogin() {
  return (
    <div>
      <Formik
        initialValues={{
          us_email: "",
          us_pass: "",
          confirmPass: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.us_email) {
            errors.us_email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.us_email)
          ) {
            errors.us_email = "Revisa Email Ej: nombre@gmail.com";
          }
          if (values.us_pass !== values.confirmPass) {
            errors.confirmPass = "Contraseñas no Coinciden";
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
          <form className={style.formBody} onSubmit={handleSubmit}>
            <input
              className={style.inputData}
              type="email"
              placeholder="Ingresa Email"
              name="us_email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_email}</div>
            <input
              className={style.inputData}
              type="password"
              placeholder="Ingresa Contraseña"
              name="us_pass"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {values.us_pass && (
              <input
                className={style.inputData}
                type="password"
                placeholder="confirmar Contraseña"
                name="confirmPass"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            <div className={style.errosForm}>{errors.confirmPass}</div>

            <div className={style.containerBotones}>
              <BotonDinamico type="submit">Iniciar</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
