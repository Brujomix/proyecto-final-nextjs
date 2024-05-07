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
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { getEnvios, getPagos } from "@/app/CRUD/gets";
import { resetCarrito } from "@/Redux/Slices/CarritoSlice";
import { addComanda } from "@/app/CRUD/post";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "@/app/Utilidades/Util_Socket";
import { useRouter } from "next/navigation";

export async function FormCarrito() {
  const router = useRouter();
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  const dispatch = useDispatch();
  const Pagos = await getPagos();
  const Envios = await getEnvios();
  const date = format(new Date(), "dd-MM-yyyy");
  const hora = format(new Date(), "HH:mm:ss");

  const navegarHacia = (path) => {
    router.push(path);
  };

  return (
    <Formik
      initialValues={{
        com_date: date,
        com_hora: hora,
        com_us_iden: checkUser(currentUser),
        com_pago_iden: "",
        com_env_iden: "",
        com_precioEnvio: 0,
        com_carrito: ConvierteCarrito(itemsCarrito),
        com_exep: "",
        com_escom_iden: 1,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.com_pago_iden) {
          errors.com_pago_iden = "Campo Obligatorio";
        }
        if (!values.com_env_iden) {
          errors.com_env_iden = "Campo Obligatorio";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await addComanda(values);
        if (res.status === 200) {
          setSubmitting(false);
          dispatch(resetCarrito());
          socket.emit("agregarComanda", true);
          Swal.fire({
            icon: "success",
            titleText: "Prepararemos Tu Pedido",
            text: "El tiempo promedio de entrega es de 20 minutos",
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
          navegarHacia("/");
        } else {
          Toast_Dinamico("error", "No Pudimos Agregar el Pedido");
        }
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-2">
            <span className="italix underline font-semibold">
              Completa el Formulario
            </span>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <strong>Retiras en Local o Enviamos tu Pedido?</strong>
            <div className="grid grid-cols-2 gap-4">
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
          </div>
          <div className="text-sm italic text-red-700">
            {errors.com_env_iden}
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <strong>Como Deseas Abonar el Pedido ?</strong>
            <div className="grid grid-cols-3 gap-4">
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
            <div className="space-x-4">
              <span className="italic text-blue-700">Metodo de Pago</span>
              {values.com_pago_iden && (
                <strong>{getPagoDesc(values.com_pago_iden)}</strong>
              )}
            </div>
          </div>
          <div className="text-sm italic text-red-700">
            {errors.com_pago_iden}
          </div>

          <div className="grid grid-cols-1 gap-2 md:col-span-2">
            <strong>Algun Detalle Adicional ?</strong>
            <textarea
              placeholder="No es Obligatorio"
              name="com_exep"
              cols="15"
              rows="4"
              onChange={handleChange}
              className="p-2 text-sm italic resize-none overflow-y-auto"
            />
          </div>
          <div className="md:col-span-2">
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
