import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import css navbar
import styles from "../styles/Navbar.module.css";

// import image
import icon_coffee from "../asset/icon_titlebar.png";
import { useDispatch } from "react-redux";
import authAction from "../redux/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NavbarAdmin() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const [show, setShow] = useState(false);

   const handleShow = () => {
      setShow(true);
   };
   const handleClose = () => {
      setShow(false);
   };
   const handleSearch = (e) => {
      // console.log(e);
      if (e.key === "Enter") {
         const search = e.target.value;
         navigate(`/product?name_product=${search}`);
      }
   };
   const SuccessMessage = () => {
      toast.success("Logout Success", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   const handleLogout = async () => {
      try {
         dispatch(authAction.logoutThunk(localStorage.getItem("token")));
         SuccessMessage();
         navigate("/login");
         setShow(false);
      } catch (err) {
         toast.error(err.response.data.msg, {
            position: toast.POSITION.TOP_RIGHT,
         });
      }
   };

   return (
      <>
         <ToastContainer />
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
                  <span className="mt-1">Bujank Coffee</span>
               </div>
               <div
                  id="navbarNav"
                  className={`${styles["center-nav"]} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}
               >
                  <Link to="/" className="nav-link">
                     Home
                  </Link>
                  <span
                     onClick={() => {
                        navigate(
                           `/product?category=favorite&sorting=favorite&page=1&limit=12`
                        );
                     }}
                     className="nav-link"
                  >
                     Product
                  </span>
                  <Link to="/history" className="nav-link">
                     Order
                  </Link>
                  <Link to="/dashboard" className="nav-link">
                     Dashboard
                  </Link>
               </div>
               <div
                  id="navbarNav"
                  className={`${styles["right-nav"]} d-flex justify-content-center align-items-center `}
               >
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
                  <button
                     className={`${styles["logout-style"]} ms-3 `}
                     onClick={handleShow}
                  >
                     Logout
                  </button>
                  {/* style burger button when size tablet and phone */}
                  <Link to="#" className="nav-link d-lg-none d-sm-block">
                     <span className={styles.burger}>
                        <i class="bi bi-list fs-4"></i>
                     </span>
                  </Link>
               </div>
            </nav>
         </div>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
               <Button
                  variant="success"
                  className="fw-bold text-bg-success text-white"
                  onClick={handleLogout}
               >
                  Yes
               </Button>
               <Button
                  variant="danger"
                  className="fw-bold text-bg-danger text-white"
                  onClick={handleClose}
               >
                  No
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default NavbarAdmin;
