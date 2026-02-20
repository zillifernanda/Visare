import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DoctorSection from "@/components/sections/DoctorSection";
import TeamSection from "@/components/sections/TeamSection";
import SprechzeitenSection from "@/components/sections/SprechzeitenSection";
import KontaktSection from "@/components/sections/KontaktSection";
import ImpressumSection from "@/components/sections/ImpressumSection";
import DatenschutzSection from "@/components/sections/DatenschutzSection";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorSection />
        <TeamSection />
        <SprechzeitenSection />
        <KontaktSection />
        <ImpressumSection />
        <DatenschutzSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
