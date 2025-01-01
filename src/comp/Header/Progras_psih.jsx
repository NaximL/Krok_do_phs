import React, { useState, useEffect } from "react";

const Progres = ({ value }) => {

  return (
    <div className="circle">

<div className="progress d" role="progressbar" aria-label="Basic example"  aria-valuemin="0" aria-valuemax={100}>
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
      <p className="Prosh">{value+"%"}</p>
    </div>
    </div>
  );
};

export default Progres;