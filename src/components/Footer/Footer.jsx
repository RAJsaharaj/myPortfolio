import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Rajsaha03583@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/saha7123/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100007487386877">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/RAJsaharaj">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/rajib-saha-5b60741b0/">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://www.youtube.com/channel/UChOOvNJZVqLGe8i-RZKTG2A">
            <Youtube color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
