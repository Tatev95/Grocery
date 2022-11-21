import React, { useEffect } from 'react';

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return (
    <div className="list">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
}

export default Alert;
