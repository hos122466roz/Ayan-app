import { Suspense } from "react";
import AbouteClient from "./about/AbouteClient";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Service from "./components/service/Service";
import ContactUsClient from "./conectUs/ConectUsClient";
import getMenu from "./actions/getMenu";

export default async function Home() {
        const getMenus = await getMenu();
        console.log(getMenus)
  
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="">
        <Hero />
        <Menu itemMenu={getMenus} />
        <AbouteClient />
        <Service />
        <ContactUsClient />
      </div>
    </Suspense>
  );
}
