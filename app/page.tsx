import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Travel from "@/components/Travel";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav className="" navItems={navItems} />
        <Hero />
        <Grid />
        <TechStack />
        <Experience />
        <Certificates />
        <RecentProjects />
        {/* <Travel /> */}
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
