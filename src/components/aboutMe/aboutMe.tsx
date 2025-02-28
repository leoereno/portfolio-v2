import fotoMe from "../../assets/img/me.jpg";
import Button from "../button/button";
import SocialButtons from "../socialButtons/socialButtons";
import cvPdf from '../../assets/Resume - Leonardo Ereno(en)-2.pdf';

import "./aboutMe.css";
export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <img
          src={fotoMe}
          alt="Minha foto sorriso maroto"
          className="profile-pic"
        />
        <h1>Leo Ereno</h1>
        <p className="subtitle">Software Developer</p>
        <SocialButtons />
        <Button highlighted link={cvPdf} text="Download CV" download/>
        <Button highlighted={false} link="mailto:leo.ereno@outlook.com" text="Contact Me"/>
        {/* 
        </p> */}
      </div>
    </>
  );
}
