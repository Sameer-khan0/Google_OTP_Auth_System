import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/otp.css";

function OTP() {
  const navigate=useNavigate()
  const [otp, setotp] = useState();
  const location = useLocation();
  const id = location.state?.id

  const handelSubmnit = async () => {
    try {
      const url = `http://localhost:4023/api/user/varifying/otp`;
      document.getElementById("verifying").value = "Loading...";
      console.log(otp, id);
      if (otp.length == '' || otp.length !== 4 || !id) {
        alert("Enter vaild crudation");
        return;
      }
      const response = await axios.post(url, {
        userId: id,
        otp: otp,
      });
      if (response.data.status === "ok") {
        console.log(response.data);
        navigate('/varify',{state:{isValid:true}})
      }
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById("otp").value = "";
      document.getElementById("verifying").value = "Verify";
    }
  };

  return (
    <div id="otpauth">
      <div className="otp-con">
        <h2>OTP VARIFICATION</h2>
        <div className="otp-inputs">
          <input
            onChange={(e) => setotp(e.target.value)}
            type="number"
            placeholder="OTP"
            id="otp"
            pattern="[0-9]{4}"
            maxLength={4}
            minLength={4}
            title="Please enter exactly 4 digits"
          />

          <input
            type="button"
            value="Verify"
            id="verifying"
            onClick={() => handelSubmnit()}
          />
        </div>
        <p>
          Resend otp <b>Resend</b>
        </p>
      </div>
    </div>
  );
}

export default OTP;
