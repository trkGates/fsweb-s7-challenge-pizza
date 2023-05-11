import React, { useEffect, useState } from "react";
import './css/ArtirmaEksiltme.css'
const ArtirmaEksiltme = ({ adet, setAdet }) => {
  const [butondisabled, setButondisabled] = useState("");

  const handleIncrease = () => setAdet(adet + 1);
  const handleDecrease = () => {
    if (adet <= 1) {
      setAdet(1);
    } else {
      setAdet(adet - 1);
    }
  };

  useEffect(() => {
    if (adet == 1) {
      setButondisabled(true);
    } else {
      setButondisabled(false);
    }
  }, [handleDecrease]);

  return (
    <div id="artirma-main">
        <div id="artirma-container">
        <div >
          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>
        <div><p>{adet}</p></div>
<div>
        <button type="button" onClick={handleDecrease} disabled={butondisabled}>
          -
        </button>
        </div>
        </div>
    </div>
  );
};

export default ArtirmaEksiltme;
