import { BookOpen, ArrowRight } from 'lucide-react';
import { tamilBooks, englishBooks, sinhalaBooks } from '@/data/books';

interface CategoryCardsProps {
  onNavigate: (page: string) => void;
}

const categories = [
  {
    id: 'tamil',
    number: '01',
    label: 'Tamil Language Books',
    nativeLabel: 'தமிழ் மொழி புத்தகங்கள்',
    count: tamilBooks.length,
    bgClass: 'bg-gradient-to-br from-emerald-950 to-emerald-800',
    borderColor: 'border-emerald-600/30',
    hoverBorder: 'hover:border-emerald-500',
    accentColor: 'text-emerald-300',
  },
  {
    id: 'english',
    number: '02',
    label: 'English Language Books',
    nativeLabel: 'English Language Books',
    count: englishBooks.length,
    bgClass: 'bg-gradient-to-br from-slate-900 to-slate-700',
    borderColor: 'border-slate-500/30',
    hoverBorder: 'hover:border-slate-400',
    accentColor: 'text-slate-300',
  },
  {
    id: 'sinhala',
    number: '03',
    label: 'Sinhala Language Books',
    nativeLabel: 'සිංහල භාෂා පොත්',
    count: sinhalaBooks.length,
    bgClass: 'bg-gradient-to-br from-amber-950 to-amber-800',
    borderColor: 'border-amber-600/30',
    hoverBorder: 'hover:border-amber-500',
    accentColor: 'text-amber-300',
  },
];

export default function CategoryCards({ onNavigate }: CategoryCardsProps) {
  return (
    <section className="relative py-24 px-5 lg:px-10 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C0973E] text-sm tracking-[0.3em] uppercase mb-3">
            Browse Our Collection
          </p>
          <h2 className="font-serif text-[#04302C] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Select Your Language
          </h2>
          <div className="w-24 h-0.5 bg-[#C0973E] mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className={`group relative ${cat.bgClass} rounded-2xl border ${cat.borderColor} ${cat.hoverBorder} p-8 lg:p-10 text-left transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {cat.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <BookOpen className="w-7 h-7 text-[#C0973E]" />
              </div>

              {/* Content */}
              <h3 className="text-[#F6F3EE] text-2xl font-serif font-semibold mb-1">
                {cat.label}
              </h3>
              <p className={`${cat.accentColor} text-sm mb-4`}>
                {cat.nativeLabel}
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-white/50 text-sm">
                  {cat.count} books
                </span>
                <span className="flex items-center gap-2 text-[#C0973E] text-sm font-medium group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
