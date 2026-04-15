import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="font-sans antialiased bg-slate-950 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
