import React from 'react'

export function CheckIsLogin() {
  const isLogin = true
  return (
    <div>
      {isLogin ? (
        <Link href={"/Carrito/EncargarPedido"} className={"Link"}>
          Encargar
        </Link>
      ) : (
        <Link href={"/Usuarios"} className={"Link"}>
          Iniciar Session
        </Link>
      )}
    </div>
  );
}
