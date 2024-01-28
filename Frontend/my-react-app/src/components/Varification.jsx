import "./css/verify.css";
import varifyimg from "../assets/img/verify.jpg";
import { Link } from "react-router-dom";
import check from "../assets/img/Check.png";
import { useLocation } from "react-router-dom";

function Verification() {
  const location = useLocation();
  const isValid = location.state?.isValid

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
