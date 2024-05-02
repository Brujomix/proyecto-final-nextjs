"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import style from "@/app/Components/Forms/form.module.css";
import { editUsuario } from "@/app/CRUD/update";

export function FormEditUser({ ObjUser }) {
  return (
    <div>
      <Formik
        initialValues={{
          us_email: ObjUser.us_email,
          us_pass: ObjUser.us_pass,
          confimPass: "",
          us_name: ObjUser.us_name,
          us_dire: ObjUser.us_dire,
          us_tel: ObjUser.us_tel,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.us_email) {
            errors.us_email = "Campo Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.us_email)
          ) {
            errors.us_email = "Revisa Email Ej: nombre@gmail.com";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await editUsuario(values).then((res) => {
              if (res.status === 200) {
                Toast_Dinamico("success", "Usuario Editado");
                setSubmitting(true);
              }
            });
          } catch (error) {
            console.log(error);
            Toast_Dinamico("error", "Intenta Más Tarde");
          }
        }}
      >
        {({ errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <label>Editar Usuario</label>
            <input
              className={style.inputData}
              type="email"
              placeholder={ObjUser.us_email}
              name="us_email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_email}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder={ObjUser.us_name}
              name="us_name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_name}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder={ObjUser.us_dire}
              name="us_dire"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_dire}</div>
            <input
              className={style.inputData}
              type="text"
              placeholder={ObjUser.us_tel}
              name="us_tel"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}></div>
            {errors.us_tel}

            <input
              className={style.inputData}
              type="password"
              placeholder="*************"
              name="us_pass"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.us_pass}</div>

            <input
              className={style.inputData}
              type="password"
              placeholder="confirmar Contraseña"
              name="confirmPass"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style.errosForm}>{errors.confimPass}</div>

            <div className={style.containerBotones}>
              <BotonDinamico disabled={isSubmitting} type="submit">
                Editar Usuario
              </BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
