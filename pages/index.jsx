import Footer from "../components/Footer/Footer";
import FreeTrail from "../components/FreeTrail/FreeTrail";
import Header from "../components/Header/Header";
import Feature from "../components/HomePage/Feature";
import HeroSection from "../components/HomePage/HeroSection";
import SpeedSheetFeature from "../components/HomePage/SpeedSheetFeature";
import VideoFeature from "../components/HomePage/VideoFeature";
import PartnerSlider from "../components/Partner/PartnerSlider";

export default function Home() {

  const noManualInput = {
    imgUrl: "/images/features/standardize.png",
    title: "No Manual Input",
    subTitle: "You data at your fingertips",
    desc: "Data streams from your accounting software, datasheets, and Google Spreadsheets giving access to all your financial data needed to create powerful financial insights. Your data is always in Reach.",
    list: [
      "CONNECTING XERO AND QB",
      "QUICKBOOKS DESKTOP",
      "DATA SHEETS",
      "GOOGLE SHEETS INTEGRATION",
    ],
  };
  
  const autometicInsight = {
    imgUrl: "/images/features/automated.png",
    title: "Automate Insightful Reports.",
    subTitle: "Reports that make a difference for businesses",
    desc: "Reach Reporting auto-populates every report, dashboard, statement, and metric with your data leaving you with spare time. Now you can really dive into the data to analyze and arrange the information in such a way to provide actionable business insight that is understandable.",
    list: ["BUILDING A REPORT", "REPORT BUILDER ELEMENTS", "LIVE TEXT"],
  };
  
  
  const quickShare = {
    imgUrl: "/images/features/reports-how-you-want-them.png",
    title: "Quick Share.",
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
      <HeroSection />
      <PartnerSlider />
      <VideoFeature />
      <FreeTrail />
      <Feature data={noManualInput} />
      <SpeedSheetFeature />
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
