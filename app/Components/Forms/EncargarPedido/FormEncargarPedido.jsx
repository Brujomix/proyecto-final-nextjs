"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "./formEncegar.module.css";
import { useSelector } from "react-redux";
import { getDateTime } from "@/app/Utilidades/NowDate";
import { ConvierteCarrito } from "@/app/Utilidades/Utils_Carrito";
import { addComanda } from "@/app/Api/ComandasApi/route";
import Swal from "sweetalert2";

export function FormEncargarPedido() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  
  return (
    <div className={style.containerForm}>
      <Formik
        initialValues={{
          com_date: getDateTime(),
          com_us_iden: currentUser.us_iden,
          com_pago_iden: "",
          com_env_iden: "",
          com_precioEnvio: "",
          com_carrito: ConvierteCarrito(itemsCarrito),
          com_exep: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.com_env_iden) {
            errors.com_env_iden = "Selecciona una Casilla";
          }

          if (!values.com_pago_iden) {
            errors.com_pago_iden = "Selecciona una Casilla";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          try {
            await addComanda(values).then(res=>{
              if (res.status === 200) {
                Swal.fire({
                  icon:"success",
                  text:"Procesaremos tu Pedido",
                  confirmButtonText:"Ok",
                  showConfirmButton:true,
                  allowEnterKey:false         
                })
              }else{
                Swal.fire({
                  icon:"error",
                  text:"No Pudimos Procesar el Pedido",
                  showConfirmButton:false,
                  toast:true,
                  timer:2500,
                  position:"top-end"
                })
              }
            })
          } catch (error) {
            console.log(error);
          }
          
        }}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <div className={style.containerUser}>
              <strong>{currentUser.us_name}</strong>
              <span>{currentUser.us_dire}</span>
              <span>{currentUser.us_tel}</span>
              <span>{currentUser.us_email}</span>
            </div>

            <strong>Alguna Aclaracion sobre el Pedido ?</strong>
            <span className={style.errorsForm}>No Es Obligatorio.</span>
            <div>
              <textarea
                className={style.aclaracionPedido}
                name="com_exep"
                defaultValue={null}
                onChange={handleChange}
                placeholder="Ej: La Pizza Napolitana no debe contener ajo"
              />
            </div>

            <strong>Forma de Entrega ?</strong>
            <div>
              {[
                { env_iden: 1, env_desc: "Delivery", env_precio:500 },
                { env_iden: 3, env_desc: "Retiro en Local", env_precio: 0 },
              ].map((e) => (
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
                  <span>{e.env_desc}</span>
                </div>
              ))}
              <div>
                {values.PrecioEnvio === 0 ? (
                  ""
                ) : (
                  <div className={`text-center ${style.errorsForm}`}>
                    <span className="block">El Envio Costará: ${values.com_precioEnvio}</span>
                    <span className="block">Envio No Incluido en Comanda</span>
                  </div>
                )}
              </div>
            </div>
            <div className={style.errorsForm}>{errors.com_env_iden}</div>

            <strong>Como Deseas Abonar el Pedido ?</strong>
            <div>
              {[
                { pago_iden: 1, pago_desc: "Efectivo" },
                { pago_iden: 2, pago_desc: "Mercadopago" },
              ].map((e) => (
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
                  <span>{e.pago_desc}</span>
                </div>
              ))}
            </div>
            <div className={style.errorsForm}>{errors.com_pago_iden}</div>

            {values.com_pago_iden === 1 ? (
              <div className={`text-center ${style.errorsForm}`}>
                <span className="block">Deberás efectuar el pago</span>
                <span className="block">
                  en Efectivo al Delivery o en Local
                </span>
              </div>
            ) : (
              <span className={style.errorsForm}>Pagarás con Mercadopago</span>
            )}

            <div className={style.containerBotones}>
              <BotonDinamico className="text-black text-sm" type="submit">
                Encargar Pedido
              </BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
