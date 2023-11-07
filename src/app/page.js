import Head from "next/head";
import Image from "next/image";
import Services from "./components/Services";
import FAQS from "./components/FAQS";
import HomePage from "./components/Home";
import Location from "./components/Location";

export default function Home() {
  return (
    <main className="px-4">
      <HomePage />
      <Services />
      <Location/>
      <FAQS />
    </main>
  );
}

