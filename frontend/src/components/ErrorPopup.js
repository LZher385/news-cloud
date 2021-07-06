import React from "react";

import useStyles from "../styles";

const ErrorPopup = ({ error, setError }) => {
  const classes = useStyles();

  const closePopup = (e) => {
    setError(null);
  };

  return (
    <div>
      <h3>{error.text}</h3>
      <button onClick={closePopup}>Close error</button>
    </div>
  );
};

export default ErrorPopup;
