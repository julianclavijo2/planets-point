import Image from "next/image";
import styles from "./page.module.css";

import Planets from "../app/planets/page";
import { Footer } from "../components/shared/Footer/Footer";
import { Header } from "../components/shared/Header/Header";
import { Search } from "../components/features/Search/Search";

export default function Home() {
  console.log(process.env.API_KEY);
  return (
   <main>
    <Header />
    <Planets />
    <Footer />
    </main>
    
  );
}
