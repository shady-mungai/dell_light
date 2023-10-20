import Head from "next/head";
import Image from "next/image";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="px-4">
      <Services />
    </main>
  );
}
