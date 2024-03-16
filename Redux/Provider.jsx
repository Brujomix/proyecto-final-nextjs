"use client"
import React from 'react'
import { Provider } from "react-redux";
import { Store } from "./Store.js";

export function ProviderRedux({children}) {
  return (
    <Provider store={Store} >
        {children}
    </Provider>
  )
}
