import Link from 'next/link'
import React from 'react'

function SubMenuReportes() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className="Link" href={"/Reportes/ComandasDiaria"}>
        Reporte Comandas del Día
      </Link>
      <Link className="Link" href={"/Reportes/FiltroFecha"}>
        Rango de Fechas
      </Link>
      <Link className="Link" href={"/Reportes/FiltroComandaIden"}>
        Nº Comanda
      </Link>
    </div>
  );
}

export default SubMenuReportes