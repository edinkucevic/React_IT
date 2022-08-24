import React, { useState } from "react";
import "./CryptoList.css";

const CryptoList = ({
  name,
  value,
  deleteCrypto,
  showMore,
  isDescriptionVisible,
}) => {
  return (
    <div className="crypto-list">
      <div className="crypto-list-item">
        <p>{name}</p>
        <p>$ {value}</p>
        <button className="btn2" onClick={() => showMore()}>
          {!isDescriptionVisible ? "Show More" : "Show less"}
        </button>
        <button className="btn2" onClick={deleteCrypto}>
          X
        </button>
      </div>
      {isDescriptionVisible && (
        <div className="description">
          <p>
            {name}  is one of safe tokens. The value $
            {value} goes higher everyday.
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoList;