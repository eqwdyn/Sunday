import { Hero } from "./components/Hero";
import { Contacts } from "./components/Contacts";
import { Atmosphere } from "./components/Atmosphere";
import { Meeting } from "./components/Meeting";

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <Atmosphere />
      <Meeting />
      <Contacts />
    </>
  );
}
