import React, { Component } from "react";
import styles from "../../styles/adminCSS/Dashboard.module.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import icon_persen from "../../asset/icon_dashboardpersen.png";
import icon_userdashboard from "../../asset/img_userdashboard.png";
import goals from "../../asset/img_goals.png";
// import goals_slide from "../../asset/img_goals_slide.png";
import monthly_report from "../../asset/img_monthly_report.png";
class Dashboard extends Component {
   render() {
      return (
         <>
            <NavbarAdmin />
            <main className="mt-5">
               <section>
                  <section className={`${styles.pickDate} text-center`}>
                     <h2 className={`${styles.title} text-center`}>
                        See how your store progress so far
                     </h2>
                     <div
                        className={`${styles.input__radiobar} d-flex justify-content-center my-5`}
                     >
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label
                              htmlFor="daily"
                              className={styles.radio_label}
                           >
                              Daily
                           </label>
                           <input type="radio" name="pickradio" id="daily" />
                        </div>
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label htmlFor="week" className={styles.radio_label}>
                              Weekly
                           </label>
                           <input type="radio" name="pickradio" id="week" />
                        </div>
                        <div
                           className={`${styles.input__radio} d-flex flex-column-reverse align-items-center justify-content-center`}
                        >
                           <label
                              htmlFor="month"
                              className={styles.radio_label}
                           >
                              Monthly
                           </label>

                           <input
                              defaultChecked
                              type="radio"
                              name="pickradio"
                              id="month"
                           />
                        </div>
                     </div>
                  </section>
               </section>
               <section className="row justify-content-center align-items-center">
                  <div className={`${styles.content_left} col-7`}>
                     <img src={monthly_report} alt="report" />
                     <button
                        className={`${styles.btn_report} ${styles.download}`}
                     >
                        Download Report
                     </button>
                  </div>
                  <div className={`${styles.content_right} col-4`}>
                     <section
                        className={`${styles.best_staff} d-flex flex-column p-3 justify-items-center align-items-center text-center mb-3`}
                     >
                        <div
                           className={`${styles.header_card} d-flex justify-content-center align-items-center`}
                        >
                           <img
                              src={icon_userdashboard}
                              alt="icon_userdashboard"
                              width={80}
                              height={80}
                              className={`rounded-circle`}
                           />
                           <div className="text-start p-3 mb-2">
                              <h4 className="fw-bold">Cheryn Laurent</h4>
                              <p>Keep up the good work and spread love!</p>
                           </div>
                        </div>
                        <div>
                           <h4 className="fw-bold py-3">
                              Best Staff of the Month
                           </h4>
                           <img src={icon_persen} alt="icon_persen" />
                           <p className="text-muted fs-5 ">
                              Achieved 3.5M of total <br /> 5M 478 Customer
                           </p>
                        </div>
                     </section>
                     <section
                        className={`${styles.goals} text-center d-flex flex-column justify-content-center align-items-center mb-5`}
                     >
                        <h4 className="mb-3 fw-bold">Goals</h4>
                        <p className="text-muted">
                           Your goals is still on 76%. Keep up
                           <br />
                           the good work!
                        </p>
                        <img
                           src={goals}
                           width={200}
                           height={200}
                           alt="goals"
                           className="my-3"
                        />
                        {/* <img src={goals_slide} width={60} alt="goals_slide" /> */}
                     </section>
                     <button className={`${styles.btn_report} ${styles.share}`}>
                        Share Report
                     </button>
                  </div>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}

export default Dashboard;
