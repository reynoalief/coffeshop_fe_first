import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import css navbar
import styles from "../styles/Navbar.module.css";

// import image
import icon_chat from "../asset/icon_chat.png";
import icon_coffee from "../asset/icon_titlebar.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = useSelector((state) => state.auth.profile);
  useEffect(() => {}, [profile.image]);
  const handleSearch = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      const search = e.target.value;
      navigate(`/product?search=${search}`);
    }
  };
  return (
    <>
      <div className={`${styles.navbar_bar} container`}>
        <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
          <div
            onClick={() => navigate("/")}
            id="navbarNav"
            className={`${styles["left-nav"]} d-flex py-4`}
          >
            <img
              src={icon_coffee}
              alt=""
              className="me-2"
              widht="27px"
              height="27px"
            />
            <span className="mt-1">Coffeshop</span>
          </div>
          <div
            id="navbarNav"
            className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <span
              className="nav-link"
              onClick={() => {
                navigate(
                  `/product?category=favorite&sorting=favorite&page=1&limit=12`
                );
              }}
            >
              Product
            </span>
            <Link to="/payment" className="nav-link">
              Your Cart
            </Link>
            <Link to="/history" className="nav-link">
              History
            </Link>
          </div>
          <div id="navbarNav" className={`${styles["right-nav"]} d-flex `}>
            {/* <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"><img src={icon_search} alt="" widht="30" height="30" /></Link> */}
            {location.pathname === "/product" ? (
              <div className={styles["box-search"]}>
                <input
                  type="search"
                  className={styles["input-search"]}
                  onKeyDown={handleSearch}
                />
                <i className={`fa fa-search ${styles["fa_icon"]}`}></i>
              </div>
            ) : null}
            <Link
              to="#"
              className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none"
            >
              <img src={icon_chat} alt="" widht="30" height="30" />
            </Link>
            <Link to="/profile" className="nav-link">
              <img
                className={styles.img_userprofile}
                src={profile.image}
                alt=""
                widht="30"
                height="30"
              />
            </Link>
            {/* style burger button when size tablet and phone */}
            <Link to="#" className="nav-link d-lg-none d-sm-block">
              <span className={styles.burger}>
                <i class="bi bi-list fs-4"></i>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
