import { Percent, Crown, ArrowRight, Gift } from 'lucide-react';

interface SpecialOffersProps {
  onNavigate: (page: string) => void;
}

export default function SpecialOffers({ onNavigate: _onNavigate }: SpecialOffersProps) {
  void _onNavigate;
  return (
    <section className="relative py-24 px-5 lg:px-10 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C0973E] text-sm tracking-[0.3em] uppercase mb-3">
            Limited Time
          </p>
          <h2 className="font-serif text-[#04302C] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Special Offers
          </h2>
          <div className="w-24 h-0.5 bg-[#C0973E] mx-auto mt-6" />
        </div>

        {/* Offer Cards - 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Bundle Offer */}
          <div className="group relative bg-gradient-to-br from-[#04302C] to-emerald-900 rounded-2xl overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="grid1"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid1)" />
              </svg>
            </div>

            <div className="relative p-8 lg:p-12 flex flex-col h-full min-h-[360px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C0973E]/20 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[#C0973E]" />
                </div>
                <span className="text-[#C0973E] text-xs tracking-wider uppercase font-medium">
                  Bundle Deal
                </span>
              </div>

              <h3 className="text-[#F6F3EE] font-serif text-3xl lg:text-4xl font-semibold mb-4">
                Complete Collection
              </h3>
              <p className="text-[#F6F3EE]/70 text-sm leading-relaxed mb-6 max-w-md">
                Purchase all publications from Mishkath Research Institute at a
                special discounted price. The complete library of authentic
                Islamic knowledge at your fingertips.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-[#C0973E] text-4xl font-bold">
                  Rs 4,500
                </span>
                <span className="text-[#F6F3EE]/40 line-through text-lg">
                  Rs 5,400
                </span>
                <span className="bg-[#C0973E]/20 text-[#C0973E] text-xs font-bold px-3 py-1 rounded-full">
                  SAVE 17%
                </span>
              </div>

              <div className="mt-auto">
                <a
                  href="https://wa.me/94777891344?text=I%20would%20like%20to%20order%20the%20Complete%20Collection%20Bundle%20(Rs%204,500)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0973E] hover:bg-[#C0973E]/90 text-[#04302C] rounded-full text-sm font-semibold transition-all duration-300 hover:gap-3"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Limited Edition */}
          <div className="group relative bg-gradient-to-br from-amber-950 to-amber-900 rounded-2xl overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="grid2"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="1"
                      fill="white"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
              </svg>
            </div>

            <div className="relative p-8 lg:p-12 flex flex-col h-full min-h-[360px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C0973E]/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#C0973E]" />
                </div>
                <span className="text-[#C0973E] text-xs tracking-wider uppercase font-medium">
                  Limited Edition
                </span>
              </div>

              <h3 className="text-[#F6F3EE] font-serif text-3xl lg:text-4xl font-semibold mb-4">
                Premium Hardcover Set
              </h3>
              <p className="text-[#F6F3EE]/70 text-sm leading-relaxed mb-6 max-w-md">
                Exclusive hardcover editions of our best-selling titles.
                Premium binding with gold foil stamping. Limited print run of
                only 100 sets.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-[#C0973E] text-4xl font-bold">
                  Rs 6,500
                </span>
                <span className="text-[#F6F3EE]/40 line-through text-lg">
                  Rs 8,000
                </span>
                <span className="bg-[#C0973E]/20 text-[#C0973E] text-xs font-bold px-3 py-1 rounded-full">
                  SAVE 19%
                </span>
              </div>

              <div className="mt-auto">
                <a
                  href="https://wa.me/94777891344?text=I%20would%20like%20to%20order%20the%20Premium%20Hardcover%20Set%20(Rs%206,500)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0973E] hover:bg-[#C0973E]/90 text-[#04302C] rounded-full text-sm font-semibold transition-all duration-300 hover:gap-3"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#04302C] via-emerald-900 to-[#04302C] rounded-xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C0973E]/20 flex items-center justify-center flex-shrink-0">
              <Percent className="w-6 h-6 text-[#C0973E]" />
            </div>
            <div>
              <h4 className="text-[#F6F3EE] font-semibold">
                Free Delivery Within Sri Lanka
              </h4>
              <p className="text-[#F6F3EE]/60 text-sm">
                On orders above Rs 2,000
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/94777891344"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-[#C0973E] text-[#C0973E] rounded-full text-sm hover:bg-[#C0973E] hover:text-[#04302C] transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
