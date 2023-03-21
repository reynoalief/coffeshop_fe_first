import React, { useState } from "react";
import axios from "axios";

// import css
import styles from "../styles/ForgotPWD.module.css";

// import footer
import Footerloginsignup from "../components/Footer-login-signup";
import titlebar from "../utility/WebDinamis";

// import images
import bg_left_forgotpwd from "../asset/forgotpwd_bgleft.png";
import icon_coffee from "../asset/icon_titlebar.png";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import icon react bawaan
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

const ForgotPWD = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [notif, setNotif] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const sendMail = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!email) return setLoading(false), setNotif(false);
    axios
      .patch(`${process.env.REACT_APP_BACKEND_HOST}/users/forgot/${email}`)
      .then((res) => {
        console.log(res.data.result.msg);
        setNotif(true);
        setLoading(false);
        setTimeout(() => {
          navigate("/resetpassword");
        }, 4000);
      })

      .catch((err) => {
        console.log(err);
        setNotif(true);
        setLoading(false);
      });
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const valueEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  titlebar("Coffee | Forgot Password");
  return (
    <>
      <main className={styles["container"]}>
        <aside className={styles["left-heading"]}>
          <img
            src={bg_left_forgotpwd}
            width="100%"
            height="100%"
            alt="homepage"
          />
        </aside>

        <aside className={styles["right-heading"]}>
          <div className={styles["icon-coffee"]}>
            <img src={icon_coffee} alt="icon_coffee" width={100} />
          </div>
          <form className={styles.register}>
            <div className={`${styles["forgot-text"]} text-center`}>
              <h3 className={styles.text_one}>Forgot your password?</h3>
              <p className={styles.text_two}>Don't worry, we got your back!</p>
            </div>
            <div className={styles.input}>
              <input
                type={type}
                onChange={valueEmail}
                placeholder="Enter your email address to get link"
              />
              <Icon
                icon={icon}
                onClick={handleToggle}
                className={`${styles.iconEye}`}
              />
            </div>
            <div className={styles.button}>
              {loading ? (
                <div className="d-flex justify-content-center align-items-center mx-auto">
                  <Spinner animation="grow" variant="warning" />
                </div>
              ) : (
                <button onClick={sendMail}>Send</button>
              )}
            </div>
            <div className={`${styles["send-text"]} text-center`}>
              {notif ? (
                <p className={styles.send_one}>
                  Please Check your email to get otp
                </p>
              ) : null}
            </div>

            <a href="/Signup" className={styles["button-login"]}>
              <span>Resign Link</span>
            </a>
          </form>

          <Footerloginsignup />
        </aside>
      </main>
    </>
  );
};

export default ForgotPWD;
