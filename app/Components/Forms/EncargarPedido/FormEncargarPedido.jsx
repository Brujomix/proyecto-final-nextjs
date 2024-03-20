"use client";
import React from "react";
import { Formik } from "formik";
import { BotonDinamico } from "@/app/Components";
import style from "../form.module.css";
import { useSelector } from "react-redux";

export function FormEncargarPedido() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemscarrito);
  const currentUser = useSelector(state => state.Usuario.currentUser)
  const horariosEntrega = [
    { Id: 0, Hora: "Cuando Esté Listo" },
    { Id: 1, Hora: "19:00" },
    { Id: 2, Hora: "19:30" },
    { Id: 3, Hora: "20:00" },
    { Id: 4, Hora: "20:30" },
    { Id: 5, Hora: "21:00" },
    { Id: 6, Hora: "21:30" },
    { Id: 7, Hora: "22:00" },
    { Id: 8, Hora: "22:30" },
    { Id: 9, Hora: "23:00" },
  ];
  return (
    <div className={style.containerForm}>
      <Formik
        initialValues={{
          com_date: "",
          com_hora: "",
          com_us_iden: "",
          com_pago_iden: "",
          com_env_iden: "",
          com_precioEnvio: 0,
          com_carrito: JSON.stringify(itemsCarrito),
          com_entrega: "",
          com_exep: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.com_env_iden) {
            errors.com_env_iden = "Selecciona una Casilla";
          }
          if (!values.com_entrega) {
            errors.com_entrega = "Selecciona una Casilla";
          }

          if (!values.com_pago_iden) {
            errors.com_pago_iden = "Selecciona una Casilla";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form className={style.formBody} onSubmit={handleSubmit}>
            <div className={style.currentUser}>
              <strong>{currentUser.us_name}</strong>
              <span>{currentUser.us_dire}</span>
              <span>{currentUser.us_tel}</span>
              <span>{currentUser.us_email}</span>
            </div>

            <strong>Especificar una Hora de Entrega ?</strong>
            <div>
              <div>
                {[horariosEntrega].map((e) => (
                  <div key={e.Id}>
                    <input
                      type="checkbox"
                      name="com_entrega"
                      value={e.Id}
                      checked={values.com_entrega === e.Hora}
                      onChange={() => {
                        const newValue =
                          values.com_entrega === e.Hora ? "" : e.Hora;
                        setFieldValue("com_entrega", newValue);
                      }}
                    />
                    <span>{e.Hora}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.errorsForm}>{errors.com_entrega}</div>

            <strong>Alguna Aclaracion sobre el Pedido ?</strong>
            <div className="MensajeErrorForm">No Es Obligatorio.</div>
            <div className="AclaracionPedido">
              <textarea
                name="com_exep"
                defaultValue={null}
                onChange={handleChange}
                placeholder="Ej: La Pizza Napolitana va sin ajo"
              />
            </div>

            {values.com_entrega && (
              <>
                <strong>Como Entregaremos el Pedido ?</strong>
                <div>
                  {[].map((e) => (
                    <div className="ContainerCheckBox" key={e.env_iden}>
                      <input
                        type="checkbox"
                        name="com_env_iden"
                        value={e.env_iden}
                        checked={values.com_env_iden === e.env_iden}
                        onChange={() => {
                          const newValue =
                            values.com_env_iden === e.env_iden
                              ? ""
                              : e.env_iden;

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
                      <>
                        <span>El Envio Costará: ${values.com_precioEnvio}</span>
                        <span>Envio No Incluido en Comanda</span>
                      </>
                    )}
                  </div>
                </div>
                <div className={style.errorsForm}>{errors.com_env_iden}</div>
              </>
            )}

            {values.com_env_iden && (
              <>
                <strong>Como Deseas Abonar el Pedido ?</strong>
                <div>
                  {[].map((e) => (
                    <div className="ContainerCheckBox" key={e.pago_iden}>
                      <input
                        type="checkbox"
                        name="com_pago_iden"
                        value={e.pago_iden}
                        checked={values.com_pago_iden === e.pago_iden}
                        onChange={() => {
                          const newValue =
                            values.com_pago_iden === e.pago_iden
                              ? ""
                              : e.pago_iden;
                          setFieldValue("com_pago_iden", newValue);
                        }}
                      />
                      <span>{e.pago_desc}</span>
                    </div>
                  ))}
                </div>
                <div className={style.errorsForm}>{errors.com_pago_iden}</div>
              </>
            )}

            {values.com_pago_iden && (
              <>
                {values.com_pago_iden === 1 ? (
                  <b style={{ textAlign: "center" }}>
                    Deberás efectuar el pago en Efectivo al Delivery o en Local
                  </b>
                ) : (
                  <b style={{ textAlign: "center" }}>Pagarás con Mercadopago</b>
                )}
              </>
            )}

            <div className={style.containerBotones}>
              <BotonDinamico className="text-black text-sm" type="submit">
                Efectuar el Pago
              </BotonDinamico>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
