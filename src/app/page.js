import Head from "next/head";
import Image from "next/image";
import Services from "./components/Services";
import FAQS from "./components/FAQS";

export default function Home() {
  return (
    <main className="px-6">
      <Services />
      <FAQS />
    </main>
  );
}
