import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "@/app/Components/Forms/form.module.css";

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
            errors.us_email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.us_email)
          ) {
            errors.us_email = "Revisa Email Ej: nombre@gmail.com";
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
              <BotonDinamico type="submit">Editar Usuario</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
