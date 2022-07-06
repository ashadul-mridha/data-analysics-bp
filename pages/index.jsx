import Footer from "../components/Footer/Footer";
import FreeTrail from "../components/FreeTrail/FreeTrail";
import Header from "../components/Header/Header";
import Feature from "../components/HomePage/Feature";
import HeroSection from "../components/HomePage/HeroSection";
import { HeroSectionSlider } from "../components/HomePage/HeroSectionSlider";
import SpeedSheetFeature from "../components/HomePage/SpeedSheetFeature";
import VideoFeature from "../components/HomePage/VideoFeature";
import PartnerSlider from "../components/Partner/PartnerSlider";

export default function Home() {

  const noManualInput = {
    imgUrl: "/images/features/features4.svg",
    title: "Unlocking unique solutions",
    subTitle: "drive your business forward",
    desc: "When it comes to business solutions, there is no one-size-fits-all technology. At Best Practicify, we listen to you to get to the bottom of your business’s unique needs, obstacles and goals, and we develop customized solutions to enable your success. Your unique business solution will feature a holistic approach that incorporates best practices and is designed to integrate into your existing business systems.",
    list: [
      "CONNECTING XERO AND QB",
      "QUICKBOOKS DESKTOP",
      "DATA SHEETS",
      "GOOGLE SHEETS INTEGRATION",
    ],
  };
  
  const autometicInsight = {
    imgUrl: "/images/features/features6.svg",
    title: "Customized support.",
    subTitle: "Reports that make a difference for businesses",
    desc: "Reach Reporting auto-populates every report, dashboard, statement, and metric with your data leaving you with spare time. Now you can really dive into the data to analyze and arrange the information in such a way to provide actionable business insight that is understandable.",
    list: ["BUILDING A REPORT", "REPORT BUILDER ELEMENTS", "LIVE TEXT"],
  };
  
  
  const quickShare = {
    imgUrl: "/images/features/features7.svg",
    title: "Data Analysics.",
    subTitle: "The most insightful information they’ve ever had.",
    desc: "Business decision-makers will be impressed with the insightful information you provide them. Best of all, they can access it anywhere and quickly share it with other decision-makers.",
    list: [
      "ADDING A CLIENT PORTAL",
      "INTRO TO DASHBOARDS",
      "PUBLISHING A DASHBOARD",
      "DASHBOARD TEMPLATES",
    ],
  };

  return (
    <>
      {/* <HeroSection /> */}
      {/* <PartnerSlider /> */}
      {/* <VideoFeature /> */}
      <HeroSectionSlider />
      <FreeTrail />
      <Feature data={noManualInput} />
      <Feature className="reverse" data={quickShare} />
      {/* <SpeedSheetFeature /> */}
      <FreeTrail />
      <Feature data={autometicInsight} />
      <Feature className="reverse" data={quickShare} />
      <FreeTrail />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
