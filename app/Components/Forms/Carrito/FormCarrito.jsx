"use client";
import {
  ConvierteCarrito,
  envioIcons,
  pagoIcons,
} from "@/app/Utilidades/Utils_Carrito";
import { Formik } from "formik";
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { format } from "date-fns";
import { getPagos } from "@/app/Api/MetodosPagoAppi/route";
import { getEnvios } from "@/app/Api/MetodosEnvioApi/route";

export async function FormCarrito({ itemsCarrito, currentUser }) {
  const Pagos = await getPagos();
  const Envios = await getEnvios();
  const date = new Date();
  console.log(date);
  return (
    <Formik
      initialValues={{
        com_date: "",
        com_hora: "",
        com_us_iden: `${currentUser === null ? "" : currentUser.us_iden}`,
        com_pago_iden: "",
        com_env_iden: "",
        com_precioEnvio: 0,
        com_carrito: ConvierteCarrito(itemsCarrito),
        com_entrega: "",
        com_exep: "",
      }}
      validate={(values) => {
        const errors = {};

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div>
            <span className="italix underline font-semibold">
              Completa el Formulario
            </span>
          </div>
          <div>
            <strong>Rtiras en Local o Enviamos tu Pedido?</strong>
            <div className="flex flex-row gap-7 justify-center">
              {Envios.map((e) => (
                <div key={e.env_iden}>
                  <input
                    type="checkbox"
                    name="com_env_iden"
                    value={e.env_iden}
                    checked={values.com_env_iden === e.env_iden}
                    onChange={() => {
                      const newValue =
                        values.com_env_iden === e.env_iden ? "" : e.env_iden;

                      setFieldValue("com_env_iden", newValue);
                      setFieldValue("com_precioEnvio", e.env_precio);
                    }}
                  />
                  <span>{envioIcons(e.env_desc)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <strong>Como Deseas Abonar el Pedido ?</strong>
            <div className="flex flex-row gap-7 justify-center">
              {Pagos.map((e) => (
                <div key={e.pago_iden}>
                  <input
                    type="checkbox"
                    name="com_pago_iden"
                    value={e.pago_iden}
                    checked={values.com_pago_iden === e.pago_iden}
                    onChange={() => {
                      const newValue =
                        values.com_pago_iden === e.pago_iden ? "" : e.pago_iden;
                      setFieldValue("com_pago_iden", newValue);
                    }}
                  />
                  <span>{pagoIcons(e.pago_desc)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>{errors.com_pago_iden}</div>
          <div>
            {currentUser === null ? (
              <div className="border border-red-300 rounded-md p-2 italic text-sm bg-red-400">
                Debes Iniciar Session
              </div>
            ) : (
              <BotonDinamico type="submit" disabled={isSubmitting}>
                Hacer Pedido
              </BotonDinamico>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}
