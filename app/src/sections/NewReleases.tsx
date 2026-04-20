import { useRef, useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { getNewReleases } from '@/data/books';
import { useCart } from '@/context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Book } from '@/data/books';

export default function NewReleases() {
  const newBooks = getNewReleases();
  const { addToCart } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Create text ring items
  const ringText = 'NEW RELEASES \u2022 ';
  const ringItems = Array.from({ length: 20 }, (_, i) => ({
    text: ringText,
    rotateY: i * 18,
  }));

  return (
    <section className="relative py-24 px-5 lg:px-10 bg-[#04302C] overflow-hidden">
      {/* 3D Text Ring Header */}
      <div className="relative h-48 mb-8 flex items-center justify-center perspective-[1000px]">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute animate-spin-slow"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'spin 20s linear infinite',
            }}
          >
            {ringItems.map((item, i) => (
              <span
                key={i}
                className="absolute text-[#C0973E]/20 text-lg font-serif tracking-widest whitespace-nowrap"
                style={{
                  transform: `rotateY(${item.rotateY}deg) translateZ(300px)`,
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
          {/* Center text */}
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-[#C0973E]" />
              <p className="text-[#C0973E] text-sm tracking-[0.3em] uppercase">
                Just Published
              </p>
              <Sparkles className="w-5 h-5 text-[#C0973E]" />
            </div>
            <h2 className="font-serif text-[#F6F3EE] text-4xl sm:text-5xl font-semibold">
              New Releases
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollCarousel('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#C0973E]/20 hover:bg-[#C0973E]/40 flex items-center justify-center text-[#C0973E] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#C0973E]/20 hover:bg-[#C0973E]/40 flex items-center justify-center text-[#C0973E] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {newBooks.map((book) => (
            <div
              key={book.id}
              className="flex-shrink-0 w-64 bg-[#F6F3EE] rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-[#C0973E]/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={book.image}
                  alt={book.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* New badge */}
                <div className="absolute top-3 left-3 bg-[#C0973E] text-[#04302C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  New
                </div>
              </div>

              {/* Book Info */}
              <div className="p-5">
                <p className="text-[#C0973E] text-[10px] tracking-wider uppercase font-medium">
                  {book.code}
                </p>
                <h4 className="text-[#04302C] font-serif text-base font-semibold mt-1 leading-tight line-clamp-2">
                  {book.titleEn}
                </h4>
                <p className="text-[#2A3430]/60 text-xs mt-1">
                  {book.author}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[#04302C] font-semibold text-lg">
                    Rs {book.price}
                  </span>
                  <button
                    onClick={() => addToCart(book)}
                    className="w-9 h-9 rounded-full bg-[#04302C] hover:bg-[#C0973E] flex items-center justify-center text-white hover:text-[#04302C] transition-all duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedBook(book)}
                  className="w-full mt-3 text-center text-[#04302C]/50 hover:text-[#C0973E] text-xs transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Dialog */}
      <Dialog
        open={!!selectedBook}
        onOpenChange={() => setSelectedBook(null)}
      >
        <DialogContent className="bg-[#04302C] border-[#C0973E]/20 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#F6F3EE] font-serif text-2xl">
              {selectedBook?.titleEn}
            </DialogTitle>
          </DialogHeader>
          {selectedBook && (
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.titleEn}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Book Code
                    </p>
                    <p className="text-[#F6F3EE] font-medium">
                      {selectedBook.code}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Original Title
                    </p>
                    <p className="text-[#F6F3EE] font-medium text-lg">
                      {selectedBook.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Author
                    </p>
                    <p className="text-[#F6F3EE]">{selectedBook.author}</p>
                  </div>
                  <div className="pt-2 border-t border-[#C0973E]/20">
                    <p className="text-[#C0973E] text-2xl font-semibold">
                      Rs {selectedBook.price}
                    </p>
                  </div>
                  <p className="text-[#F6F3EE]/70 text-sm leading-relaxed">
                    {selectedBook.description}
                  </p>
                  <Button
                    onClick={() => {
                      addToCart(selectedBook);
                      setSelectedBook(null);
                    }}
                    className="w-full bg-[#C0973E] hover:bg-[#C0973E]/90 text-[#04302C] font-semibold"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        @keyframes spin {
          to { transform: rotateY(-360deg); }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
