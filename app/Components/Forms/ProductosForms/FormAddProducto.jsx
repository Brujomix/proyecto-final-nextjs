"use client";
import React, { useRef } from "react";
import style from "@/app/Components/Forms/form.module.css";
import { Formik, Field } from "formik";
import { BotonDinamico, GestionImagenProducto } from "@/app/Components";
import { handleInputChange } from "@/app/Utilidades/Util_Productos";

export function FormAddProducto({Categorias}) {
  const inputRef = useRef(null)
  return (
    <div>
      <Formik
        initialValues={{
          pro_imagen: "",
          pro_name: "",
          pro_desc: "",
          pro_precio: "",
          pro_cat_iden: "",
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values) => {
          const NewValues = {
            pro_imagen: values.pro_imagen,
            pro_name: values.pro_name,
            pro_desc: values.pro_desc,
            pro_precio: values.pro_precio,
            pro_cat_iden: parseInt(values.pro_cat_iden),
          };
          console.log(NewValues);
        }}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <GestionImagenProducto />
            <input
              style={{ display: "none" }}
              type="file"
              ref={inputRef}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <div className={style.errorsForm}>{errors.pro_imagen}</div>
            <input
              className={style.inputData}
              type="string"
              name="pro_name"
              placeholder="Nombre Producto"
              onChange={handleChange}
              value={values.pro_name}
              required
            />
            <div className={style.errorsForm}>{errors.pro_name}</div>
            <textarea
              className={style.areaTexto}
              placeholder={"Descripcion Del Producto"}
              name="pro_desc"
              required
              defaultValue={""}
              onChange={handleChange}
            />
            <div className={style.errorsForm}>{errors.pro_desc}</div>
            <input
              className={style.inputData}
              type="number"
              name="pro_precio"
              placeholder="Precio Producto"
              onChange={handleChange}
              value={values.pro_precio}
              required
            />
            <div className={style.errorsForm}>{errors.pro_precio}</div>

            <label>Seleccione Categoria:</label>
            <Field
              as="select"
              name="pro_cat_iden"
              onChange={handleChange}
              required
            >
              <option></option>
              {Categorias.map((e) => (
                <option key={e.cat_iden} value={e.cat_iden}>
                  {e.cat_desc}
                </option>
              ))}
            </Field>

            <div className={style.containerBotones}>
              <BotonDinamico type="submit">Agregar</BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
