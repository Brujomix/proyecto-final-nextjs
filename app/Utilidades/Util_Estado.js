
export const cambiaValorEstado = (currentEstado)=>{
    return currentEstado ? 1 : 0
}
export const verificaUserRol = (ObjUser) => {
    switch (ObjUser.us_ro_iden) {
      case 2:
        return"block"
        break;
      case 3:
        return"block"
        break;
      default:
        return"hidden"
        break;
    }
  };
