import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import css
import styles from "../styles/Home.module.css";
import icon_coffee from "../asset/icon_titlebar.png";
import { ToastContainer, toast } from "react-toastify";

export default function Navbar_notLogin() {
   const navigate = useNavigate();
   const location = useLocation();
   console.log("location :", location);
   const onClick = () => {
      console.log("click");
      toast.error("please login first", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   const handleSearch = (e) => {
      // console.log(e);
      if (e.key === "Enter") {
         const search = e.target.value;
         navigate(`/product?name_product=${search}`);
      }
   };
   return (
      <>
         <ToastContainer />
         {/* <!-- Start Navbar --> */}
         <div className={`${styles.navbar_bar} container`}>
            <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
               <div
                  className={`${styles["left-nav"]} d-flex py-4`}
                  onClick={() => navigate("/")}
               >
                  <img
                     src={icon_coffee}
                     alt=""
                     className="me-2"
                     widht="27px"
                     height="27px"
                  />
                  <span>Bujank Coffee</span>
               </div>
               <div
                  className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row`}
               >
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
                  <span
                     style={{ color: "#4f5665" }}
                     className="nav-link"
                     onClick={() => {
                        navigate(
                           "/product?category=favorite&sorting=favorite&page=1&limit=12"
                        );
                     }}
                  >
                     Product
                  </span>
                  <Link onClick={onClick} className="nav-link">
                     Your Cart
                  </Link>
                  <Link onClick={onClick} className="nav-link">
                     History
                  </Link>
               </div>
               <div className={`${styles["right-nav"]} d-flex`}>
                  {location.pathname === "/" ? null : (
                     <div className={styles["box-search"]}>
                        <input
                           type="search"
                           onKeyDown={handleSearch}
                           className={styles["input-search"]}
                        />
                        <i className={`fa fa-search ${styles["fa_icon"]}`}></i>
                     </div>
                  )}
                  <Link
                     to="/login"
                     className={`${styles["login-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}
                  >
                     <span>Login</span>
                  </Link>
                  <Link
                     to="/signup"
                     className={`${styles["sign-up-nav"]} d-none d-sm-block d-md-none d-lg-block d-sm-none`}
                  >
                     <span>Sign Up</span>
                  </Link>
                  <Link to="#" className="nav-link d-lg-none d-sm-block">
                     <span className={styles.burger}>
                        <i className="bi bi-list fs-4"></i>
                     </span>
                  </Link>
               </div>
            </nav>
         </div>
         {/* <!-- End Navbar --> */}
      </>
   );
}
