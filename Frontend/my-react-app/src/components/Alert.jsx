import React, { useEffect } from "react";

function Alert(props) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.setalert({
        show: false,
        message: "",
        type: ""
      });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className={`alert alert-${props.alertvalue.type} d-flex align-items-center role=alert`}>
        <div>
        {props.alertvalue.message||"Something want wrong"}
        </div>
      </div>
    </div>
  );
}

export default Alert;
