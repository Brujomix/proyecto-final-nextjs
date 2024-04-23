"use client";
import React, { useState, useEffect } from "react";
import { BotonDinamico, User_Login, User_NoLogin } from "@/app/Components";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/Redux/Slices/UsuarioSlice";
import { FaUserCheck, FaUserAltSlash } from "react-icons/fa";

export function Modal_User() {
  const isLogin = useSelector(state=> state.Usuario.isLogin)
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  
  const modalShow = styles.modalshow;
  const modalHidden = styles.modalhidden;
  
  useEffect(() => {
    const currentUserStorage = localStorage.getItem("currentUser");
    function checkUser() {
      if (currentUserStorage !== null) {
        const parseUser = JSON.parse(currentUserStorage);
        dispatch(loginUser(parseUser));
        setCurrentUser(parseUser);
      } else {
        setCurrentUser(null);
      }
    }
    checkUser();
  }, [isLogin]);

  return (
    <div>
      <BotonDinamico onClick={() => setShow(!show)}>
        {currentUser === null ? (
          <div className="text-sm flex justify-center items-center gap-2">
            <FaUserAltSlash color="#666" size={25} />
            <span>Iniciar Session</span>
          </div>
        ) : (
          <div className="text-sm flex justify-center items-center gap-2">
            <FaUserCheck color="#666" size={25} />
            <span>{currentUser.us_name}</span>
          </div>
        )}
      </BotonDinamico>
      <div className={`${styles.modal} ${show ? modalShow : modalHidden}`}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
            <span className="text-xl italic font-semibold">
              {currentUser === null ? "Login" : "Usuarios"}
            </span>
          </div>
          <div className={styles.modalbody}>
            {currentUser === null ? (
              <div>
                <User_NoLogin />
              </div>
            ) : (
              <div>
                <User_Login objUser={currentUser} />
              </div>
            )}
          </div>
          <div className={styles.modalclose}>
            <BotonDinamico
              className="font-semibold"
              onClick={() => setShow(false)}
            >
              X
            </BotonDinamico>
          </div>
        </div>
      </div>
    </div>
  );
}
