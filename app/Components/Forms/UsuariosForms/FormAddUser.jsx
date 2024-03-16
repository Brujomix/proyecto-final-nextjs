"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "@/app/Components/Forms/form.module.css";

export function FormAddUser() {
  return (
    <div>
      <Formik
        initialValues={{
          us_email: "",
          us_pass: "",
          confirmPass: "",
          us_name: "",
          us_ro_iden: 1,
          us_dire: "",
          us_tel: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.us_email) {
            errors.us_email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.us_email)
          ) {
            errors.us_email = "Revisa email Ej: nombre@gmail.com";
          }
          if (values.us_pass !== values.confirmPass) {
            errors.confirmPass = "Contraseñas deben coincidir";
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
            <label>Registrarme</label>
            <input
              className={style.inputData}
              type="email"
              placeholder="Direccion Email"
              name="us_email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_email}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder="Nombre"
              name="us_name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_name}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder="Dirección"
              name="us_dire"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_dire}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder="Telefono"
              name="us_tel"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_tel}</div>

            <input
              className={style.inputData}
              type="password"
              placeholder="Contraseña"
              name="us_pass"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_pass}</div>

            {values.us_pass && (
              <input
                className={style.inputData}
                type="password"
                placeholder="Repite Contraseña"
                name="confirmPass"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            <div className={style.errosForm}>{errors.confirmPass}</div>

            <div className={style.containerBotones}>
              <BotonDinamico type="submit">Agregar Usuario</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
