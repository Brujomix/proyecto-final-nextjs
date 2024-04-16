"use client";
import React, { useState } from "react";
import { BotonDinamico } from "@/app/Components";
import styles from "./modal.module.css";

export function ModalDinamico({ children, title, body, footer }) {
  const [show, setShow] = useState(false);
  const modalShow = styles.modalshow;
  const modalHidden = styles.modalhidden;
  return (
    <div>
      <BotonDinamico onClick={() => setShow(!show)}>{children}</BotonDinamico>
      <div className={`${styles.modal} ${show ? modalShow : modalHidden}`}>
        <div className={styles.modalcontent}>
          <div className={styles.modalheader}>
            <span>{title}</span>
          </div>
          <div className={styles.modalbody}>{body}</div>
          <div className={styles.modalfooter}>{footer}</div>
          <div className={styles.modalclose}>
            <BotonDinamico className="font-bold" onClick={() => setShow(false)}>X</BotonDinamico>
          </div>
        </div>
      </div>
    </div>
  );
}