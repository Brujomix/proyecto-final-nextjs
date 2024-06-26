"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "@/app/Components/Forms/form.module.css";
import { Formik, Field } from "formik";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { handleInputChange } from "@/app/Utilidades/Util_Productos";
import Image from "next/image";
import { editProducto } from "@/app/CRUD/update";

export function FormEditProducto({ ObjProducto, Categorias }) {
  const inputRef = useRef(null);
  const [urlImg, setUrlImg] = useState(ObjProducto.pro_imagen);

  return (
    <div>
      <Formik
        initialValues={{
          pro_name: ObjProducto.pro_name,
          pro_desc: ObjProducto.pro_desc,
          pro_precio: ObjProducto.pro_precio,
          pro_cat_iden: ObjProducto.pro_cat_iden,
        }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const NewValues = {
            pro_imagen: urlImg,
            pro_name: values.pro_name,
            pro_desc: values.pro_desc,
            pro_precio: values.pro_precio,
            pro_cat_iden: parseInt(values.pro_cat_iden),
          };

          try {
            await editProducto(ObjProducto.pro_iden, NewValues).then((res) => {
              if (res.status === 200) {
                Toast_Dinamico("success", "Producto Editado");
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
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <span className="text-sm italic">
              Selecciona la Imagen del Producto
            </span>
            <BotonDinamico onClick={() => inputRef.current.click()}>
              {
                <Image
                  width={120}
                  height={120}
                  alt="Imagen Producto"
                  src={urlImg}
                />
              }
            </BotonDinamico>
            <input
              style={{ display: "none" }}
              type="file"
              ref={inputRef}
              onChange={async (e) => {
                const urlImg = await handleInputChange(e);
                setUrlImg(urlImg);
              }}
            />
            <div className={style.errorsForm}>{errors.pro_imagen}</div>
            <input
              className={style.inputData}
              type="string"
              name="pro_name"
              placeholder={ObjProducto.pro_name}
              onChange={handleChange}
              required
            />
            <div className={style.errorsForm}>{errors.pro_name}</div>
            <textarea
              className={style.areaTexto}
              placeholder={ObjProducto.pro_desc}
              name="pro_desc"
              required
              onChange={handleChange}
            />
            <div className={style.errorsForm}>{errors.pro_desc}</div>
            <input
              className={style.inputData}
              type="number"
              name="pro_precio"
              placeholder={ObjProducto.pro_precio}
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
              <BotonDinamico disabled={isSubmitting} type="submit">
                Editar
              </BotonDinamico>
              <BotonDinamico type="reset">Reset Form</BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
