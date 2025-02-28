import { Outlet } from "react-router";
import AboutMe from "../aboutMe/aboutMe";
import ContentNav from "../contentNav/contentNav";
import './layout..css';
import Footer from "../footer/footer";

export default function Layout() {
  return (
    <div className="container">
      <AboutMe />
      <ContentNav />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
}
