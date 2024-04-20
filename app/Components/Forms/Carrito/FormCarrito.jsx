"use client";
import {
  ConvierteCarrito,
  checkUser,
  envioIcons,
  getPagoDesc,
  pagoIcons,
} from "@/app/Utilidades/Utils_Carrito";
import { Formik } from "formik";
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { format } from "date-fns";
import { getPagos } from "@/app/Api/MetodosPagoApi/route";
import { getEnvios } from "@/app/Api/MetodosEnvioApi/route";

export async function FormCarrito({ itemsCarrito, currentUser }) {
  const Pagos = await getPagos();
  const Envios = await getEnvios();
  const date = format(new Date(), "dd/mm/yyyy, HH:mm:ss");
  return (
    <Formik
      initialValues={{
        com_date: date,
        com_us_iden: checkUser(currentUser),
        com_pago_iden: "",
        com_env_iden: "",
        com_precioEnvio: 0,
        com_carrito: ConvierteCarrito(itemsCarrito),
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
            <strong>Retiras en Local o Enviamos tu Pedido?</strong>
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
          <div className="space-x-4">
            <span className="italic text-blue-700">Costo del Envio</span>
            <strong>
              {values.com_env_iden === 1 ? (
                <span className="text-red-500">$ {Envios[0].env_precio}</span>
              ) : (
                "Sin Costo"
              )}
            </strong>
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
          <div className="space-x-4">
            <span className="italic text-blue-700">Metodo de Pago</span>
            {values.com_pago_iden && (
              <strong>{getPagoDesc(values.com_pago_iden)}</strong>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <strong>Algun detalle adicional ?</strong>
            <textarea
              placeholder="No es Obligatorio"
              name="com_exep"
              cols="15"
              rows="4"
              onChange={handleChange}
              className="p-2 text-sm italic resize-none overflow-y-auto"
            />
          </div>
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
