import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DoctorSection from "@/components/DoctorSection";
import TeamSection from "@/components/TeamSection";
import SprechzeitenSection from "@/components/SprechzeitenSection";
import KontaktSection from "@/components/KontaktSection";
import ImpressumSection from "@/components/ImpressumSection";
import DatenschutzSection from "@/components/DatenschutzSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
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

export default Index;
