import AbouteClient from "./about/AbouteClient";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Service from "./components/service/Service";
import ContactUsClient from "./conectUs/ConectUsClient";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <Menu/>
     <AbouteClient/>
     <Service/>
     <ContactUsClient/>
    </div>
  );
}
