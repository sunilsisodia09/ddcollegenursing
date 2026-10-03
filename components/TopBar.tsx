
import { Mail, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-[#103d68] text-white md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-5">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-yellow-300">
            <Phone size={15} /> Contact Admissions
          </a>
          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-yellow-300">
            <Mail size={15} /> Email Us
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={15} /> Dehradun, Uttarakhand
        </div>
      </div>
    </div>
  );
}