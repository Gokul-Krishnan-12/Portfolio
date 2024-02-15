import Contact from "@components/Contact/Contact";
import HeroBanner from "@components/HeroBanner";
import ProjectSection from "@components/ProjectSection";
import SideText from "@components/SideText/SideText";
import SkillSection from "@components/SkillSection";

export default function Home() {
  return (
    <main>
     
      <SideText/>
      <HeroBanner />
      <SkillSection />
      <ProjectSection/>
      <Contact/>
    </main>
  );
}
