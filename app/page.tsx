
import Hero from "@/components/Hero";
import AboutSection from "@/components/Home/AboutSection";
import Statistics from "@/components/Home/Statistics";
import CoursesSection from "@/components/Home/CoursesSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import FacilitiesSection from "@/components/Home/FacilitiesSection";
import PrincipalMessage from "@/components/Home/PrincipalMessage";
import CampusSection from "@/components/Home/CampusSection";
import GalleryPreview from "@/components/Home/GalleryPreview";
import NewsSection from "@/components/Home/NewsSection";
import AdmissionCTA from "@/components/Admission/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <CampusSection />
      <Hero />
      <Statistics />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <PrincipalMessage />
    
      <GalleryPreview />
      <NewsSection />
      <AdmissionCTA />
    </>
  );
}