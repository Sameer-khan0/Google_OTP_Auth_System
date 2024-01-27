import axios from "axios";
import "./css/verify.css";
import React, { useEffect, useState } from "react";
import varifyimg from "../assets/img/verify.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import check from "../assets/img/Check.png";

function Verification() {
  const [isValid, setIsValid] = useState(false);
  const { id, token } = useParams();

  useEffect(() => {
  	const verifyEmailUrl = async () => {
  		try {
  			const url = `http://localhost:4022/api/user/${id}/verify/${token}`;
  			const { data } = await axios.get(url);
      console.log(data)
  			setIsValid(true);
  		} catch (error) {
  			console.log(error);
  			setValidUrl(false);
  		}
  	};
  	verifyEmailUrl();
  }, [ id, token ]);

  return (
    <>
      {isValid && (
        <div className="varifymain">
          <div className="varleft">
            <img src={varifyimg} alt="img" />
          </div>
          <div className="varight">
            <img src={check} alt="img" />
            <div className="varcontent">
              <h2>Your account has been verified</h2>
              <p>You can now log in go back and login</p>
              <Link to="/">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Verification;
