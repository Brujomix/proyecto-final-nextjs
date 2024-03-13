import React from 'react'

export function TablaCategoriaSkeleton() {
  return (
    <div className='h-4/6 w-2/6'>
      <table className="w-3/5 border opacity-50">
        <thead>
          <tr>
            <td>Descripcion</td>
            <td>Editar</td>
            <td>Borrar</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Descripcion</td>
              <td>
                Editar
              </td>
              <td>
                <div>
                  Borrar
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
