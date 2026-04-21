import { BookOpen, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-[#2A3430] text-[#F6F3EE]">
      {/* Main Footer */}
      <div className="px-5 lg:px-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Large Wordmark */}
          <div className="mb-16 overflow-hidden">
            <h2 className="font-serif text-[12vw] lg:text-[10vw] font-bold text-[#F6F3EE]/[0.04] leading-none tracking-tighter whitespace-nowrap">
              MISHKATH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#C0973E] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[#F6F3EE] font-semibold text-sm tracking-widest uppercase">
                    Mishkath
                  </div>
                  <div className="text-[#C0973E] text-[10px] tracking-wider uppercase">
                    Research Institute
                  </div>
                </div>
              </div>
              <p className="text-[#F6F3EE]/50 text-sm leading-relaxed max-w-xs">
                Dedicated to publishing authentic Islamic literature across
                Tamil, English, and Sinhala languages for the benefit of
                seekers of knowledge.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C0973E] text-xs tracking-wider uppercase font-medium mb-5">
                Publications
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigate('tamil')}
                    className="text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors"
                  >
                    Tamil Books
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('english')}
                    className="text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors"
                  >
                    English Books
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('sinhala')}
                    className="text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors"
                  >
                    Sinhala Books
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('newreleases')}
                    className="text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors"
                  >
                    New Releases
                  </button>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-[#C0973E] text-xs tracking-wider uppercase font-medium mb-5">
                Information
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigate('offers')}
                    className="text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors"
                  >
                    Special Offers
                  </button>
                </li>
                <li>
                  <span className="text-[#F6F3EE]/60 text-sm">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-[#F6F3EE]/60 text-sm">
                    Shipping Info
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#C0973E] text-xs tracking-wider uppercase font-medium mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/94777891344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#F6F3EE]/60 hover:text-[#C0973E] text-sm transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C0973E]/10 flex items-center justify-center group-hover:bg-[#C0973E]/20 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F6F3EE]/40 uppercase tracking-wider">
                        WhatsApp Order
                      </p>
                      <p className="font-medium">+94 77789 1344</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#F6F3EE]/60 text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#C0973E]/10 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#F6F3EE]/40 uppercase tracking-wider">
                      Email
                    </p>
                    <p>info@mishkath.lk</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-[#F6F3EE]/60 text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#C0973E]/10 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#F6F3EE]/40 uppercase tracking-wider">
                      Location
                    </p>
                    <p>Colombo, Sri Lanka</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Order Bar */}
      <div className="bg-[#04302C] px-5 lg:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C0973E] flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#F6F3EE] font-semibold">
                Order via WhatsApp
              </p>
              <p className="text-[#F6F3EE]/50 text-sm">
                Quick and easy ordering through WhatsApp
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/94777891344"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0973E] hover:bg-[#C0973E]/90 text-[#04302C] rounded-full text-sm font-semibold transition-all duration-300"
          >
            +94 77789 1344
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F6F3EE]/5 px-5 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F6F3EE]/30 text-xs">
            &copy; {new Date().getFullYear()} Mishkath Research Institute.
            All rights reserved.
          </p>
          <p className="text-[#F6F3EE]/20 text-xs">
            Designed for seekers of authentic knowledge
          </p>
        </div>
      </div>
    </footer>
  );
}
