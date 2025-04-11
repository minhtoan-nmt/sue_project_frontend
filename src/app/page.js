import Image from "next/image";
import styles from "./page.module.css";
import { Section1, Section2, Section3 } from "@/component/Home";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
