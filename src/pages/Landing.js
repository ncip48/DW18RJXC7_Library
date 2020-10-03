import React, { useState } from "react";
//import { CustomButton, CustomJumbotron, CustomModal } from "../components";
import { Navbar } from "./components";
import Login from "./Login";
import Register from "./Register";
import CustomModal from "../components/CustomModal";

console.log(localStorage.getItem("user"));

function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // function show_modal_login() {
  //   setShowLogin(true);
  //   setShowRegister(false);
  // }
  // function close_modal_login() {
  //   setShowLogin(false);
  // }
  // function show_modal_reg() {
  //   setShowRegister(true);
  //   setShowLogin(false);
  // }
  // function close_modal_reg() {
  //   setShowRegister(false);
  // }

  return (
    <>
      <Navbar />
      <div
        className="jumbotron m-0 d-flex justify-content-center flex-column"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "white",
          position: "fixed",
          backgroundImage: "url(" + require("../assets/img/bg1.png") + ")",
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6 ml-5">
            <h1 style={style.style_h1}>
              <i>Your</i> library anywhere
            </h1>
            <h5 style={style.style_sub}>
              Sign-up today and receive unlimited accesss to all of your reading
              - share your book.
            </h5>
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-danger btn-block"
                  style={{ height: 50, backgroundColor: "#EE4622" }}
                  onClick={() => setShowRegister(true)}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-block"
                  style={{
                    height: 50,
                    backgroundColor: "#E9E9E9",
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomModal
        height={680}
        width={416}
        bgcolor="#ffffff"
        show={showRegister}
        name="Register"
        close={() => close_modal_reg()}
      >
        <Register />
      </CustomModal>

      <CustomModal
        height={408}
        width={416}
        bgcolor="#ffffff"
        show={showLogin}
        name="Login"
        close={() => close_modal_login()}
      >
        <Login />
      </CustomModal> */}
      <CustomModal
        title="Register"
        show={showRegister}
        onHide={() => setShowRegister(false)}
      >
        <Register />
      </CustomModal>
    </>
  );
}

const style = {
  style_h1: {
    //position: "absolute",
    marginBottom: 50,
    // width: 572,
    // height: 182,
    // left: 78,
    // top: 235,
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 110,
    lineHeight: "82.49%",
    textAlign: "left",
    color: "#000000",
  },
  style_sub: {
    //position: "absolute",
    marginBottom: 25,
    // width: 500,
    // height: 107,
    // left: 78,
    // top: 483,
    maxWidth: 500,
    fontFamily: "Poppins",
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: "33px",
  },
  style_img: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100vh",
  },
  style_icon: {
    position: "absolute",
    width: 175,
    height: 50,
    left: 78,
    top: 37,
  },
};

export default Landing;
