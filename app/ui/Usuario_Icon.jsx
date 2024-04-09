"use client"
import Link from "next/link";
import React, {useState, useEffect}from "react";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

export function Usuario_Icon() {
  const currentUserRedux = useSelector(state=>state.Usuario.currentUser)
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
    const currentUserStorage = localStorage.getItem("currentUser")
    const checkUser = ()=>{
      if(currentUserStorage === null){
        setCurrentUser(currentUserRedux)
      }else{
        const userParse = JSON.parse(currentUserStorage)
        setCurrentUser(userParse)
      }
    }
    checkUser()
  },[currentUserRedux])
  
  return (
    <div>
      {currentUser === null ? (
        <Link href={"/Usuarios"} className="flex flex-row justify-center items-center gap-2">
          <FaUserAltSlash color="#666" size={40} />
          <span className="text-blue-500 text-sm italic">Inicia Sessión</span>
        </Link>
      ) : (
        <Link href={"/Usuarios"}  className="flex flex-row justify-center items-center gap-2">
          <FaUserCheck color="#666" size={40} />
          <span className="text-blue-500 text-sm italic">
            {currentUser.us_email}
          </span>
        </Link>
      )}
    </div>
  );
}
