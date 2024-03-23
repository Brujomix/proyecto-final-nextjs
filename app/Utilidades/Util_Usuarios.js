export const validarStorageUser = async () => {
  const userStorage = localStorage.getItem("currentUser");
  if (userStorage !== null) {
    const userStorageParse = JSON.parse(userStorage);
    await validarUserLs(userStorageParse).then(res=>{
      return res
    });
  }
};
