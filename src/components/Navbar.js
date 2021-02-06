import React, { useState, useEffect } from "react";

import "../style/navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [images] = useState({
    logo: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
    avatar:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
  });
  const { logo, avatar } = images;

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__contents">
        <img className="navbar__logo" src={logo} alt="logo" />

        <img className="navbar__avatar" src={avatar} alt="avatar" />
        {/* <div className="navbar__buttons">
          <button>Sign Up</button>
          <button>Login</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
