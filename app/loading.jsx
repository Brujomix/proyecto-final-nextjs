import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
function loading() {
  return (
    <div className="p-7 flex flex-col justify-center items-center">
      <ClipLoader
        color="#000"
        loading={true}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default loading;
