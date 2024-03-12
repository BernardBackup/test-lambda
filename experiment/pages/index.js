import Image from "next/image";
import { Inter } from "next/font/google";
import IndexPage from "./page";
import Header from "./Header";
import Slider from "../components/Slider"

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
<div className=' relative' >
  <Header/>
  <Slider/>
  <IndexPage/>
</div>
  );
}
