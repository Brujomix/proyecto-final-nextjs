"use client";
import React from "react";
import style from "@/app/Components/Forms/form.module.css";
import { Formik, Field } from "formik";
import { BotonDinamico } from "@/app/Components";
import Image from "next/image";

export function FormAddProducto() {
 
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
            <input
              className={style.inputData}
              type="file"
              required
              onChange={(e) => {
                const reader = new FileReader();
                reader.onload = function (event) {
                  const img = new Image();

                  img.onload = function () {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const context = canvas.getContext("2d");
                    context.drawImage(img, 0, 0, img.width, img.height);

                    const webpDataURL = canvas.toDataURL("image/webp");
             

                    setFieldValue("pro_imagen", webpDataURL);
                  };
                  img.src = event.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
            />
            <div className={style.errosForm}>{errors.pro_imagen}</div>
            <input
              className={style.inputData}
              type="string"
              name="pro_name"
              placeholder="Nombre Producto"
              onChange={handleChange}
              value={values.pro_name}
              required
            />
            <div className={style.errosForm}>{errors.pro_name}</div>
            <textarea
              className={style.areaTexto}
              placeholder={"Descripcion Del Producto"}
              name="pro_desc"
              required
              defaultValue={""}
              onChange={handleChange}
            />
            <div className={style.errosForm}>{errors.pro_desc}</div>
            <input
              className={style.inputData}
              type="number"
              name="pro_precio"
              placeholder="Precio Producto"
              onChange={handleChange}
              value={values.pro_precio}
              required
            />
            <div className={style.errosForm}>{errors.pro_precio}</div>

            <label>Seleccione Categoria:</label>
            <Field
              as="select"
              name="pro_cat_iden"
              onChange={handleChange}
              required
            >
              <option></option>
              {[].map((e) => (
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
