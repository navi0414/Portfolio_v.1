import { Roboto as Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"], weight: "900" });

export default function Home() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable"
      />
      <Layout>
        <div className="bannerCont px-48 pt-32 pb-12 bg-gradient-to-tl from-secondary via-transparent to-slate-500">
          <div className="container">
            <Banner />
          </div>
        </div>

        <div id="About" className="container">
          <About />
        </div>
        <div id="Projects" className="container ">
          <Projects />
        </div>
        <div id="Contacts" className="container">
          <Contact />
        </div>
      </Layout>
    </>
  );
}
