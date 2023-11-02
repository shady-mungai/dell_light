import Head from "next/head";
import Image from "next/image";
import Services from "./components/Services";
import FAQS from "./components/FAQS";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Services />
      <FAQS />
    </main>
  );
}
