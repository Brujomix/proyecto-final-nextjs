import React from 'react'

export function TablaGenericaSkeleton() {
  return (
    <div className='h-4/6 w-2/6'>
      <table className="w-3/5 border opacity-50">
        <thead>
          <tr>
            <td>*******</td>
            <td>*******</td>
            <td>*******</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>**********</td>
              <td>
                ********
              </td>
              <td>
                <div>
                  ******
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
