import React from 'react'

export function TablaGenericaSkeleton() {
  return (
    <div>
      <table className="w-[320px] h-[450px] border-2 rounded-md border-neutral-500' opacity-50">
        <thead className="bg-neutral-200">
          <tr>
            <td>*******</td>
            <td>*******</td>
            <td>*******</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
            <tr>
              <td>**********</td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>**********</td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>**********</td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>**********</td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
              <td>
                <div className='border w-5 h-5 border-md bg-slate-300'>
                  
                </div>
              </td>
            </tr>
      </table>
    </div>
  );
}
