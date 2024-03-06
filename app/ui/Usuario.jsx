import React from 'react'
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa";

export function Usuario() {
  return (
   <Link href={`/Usuarios/${2}`}>
        <FaUserCircle size={30}/>
   </Link>
  )
}
