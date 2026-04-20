import { useState, useRef } from 'react';
import { Plus, Eye } from 'lucide-react';
import { getFeaturedBooks } from '@/data/books';
import { useCart } from '@/context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Book } from '@/data/books';

interface FeaturedBooksProps {
  onNavigate: (page: string) => void;
}

export default function FeaturedBooks({ onNavigate }: FeaturedBooksProps) {
  const featured = getFeaturedBooks();
  const { addToCart } = useCart();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - (scrollRef.current?.offsetTop || 0));
    setScrollTop(scrollRef.current?.scrollTop || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY - (scrollRef.current.offsetTop || 0);
    const walk = (y - startY) * 2;
    scrollRef.current.scrollTop = scrollTop - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Split featured books into 3 columns
  const columns = [
    featured.filter((_, i) => i % 3 === 0),
    featured.filter((_, i) => i % 3 === 1),
    featured.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section className="relative py-24 px-5 lg:px-10 bg-[#04302C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C0973E] text-sm tracking-[0.3em] uppercase mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-[#F6F3EE] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Featured Publications
          </h2>
          <div className="w-24 h-0.5 bg-[#C0973E] mx-auto mt-6" />
          <p className="text-[#F6F3EE]/50 mt-4 text-sm max-w-md mx-auto">
            Drag to explore our most sought-after titles across all languages
          </p>
        </div>

        {/* 3-Column Drag Gallery */}
        <div
          ref={scrollRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-h-[80vh] overflow-y-auto cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ scrollbarWidth: 'none' }}
        >
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 lg:gap-6">
              {col.map((book) => (
                <div
                  key={book.id}
                  className="group relative overflow-hidden rounded-xl bg-[#F6F3EE]/5 border border-[#C0973E]/10 hover:border-[#C0973E]/40 transition-all duration-500"
                  onMouseEnter={() => setHoveredId(book.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.titleEn}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === book.id ? 'scale-110' : 'scale-100'
                      }`}
                      draggable={false}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#04302C] via-[#04302C]/60 to-transparent flex flex-col justify-end p-5 transition-opacity duration-300 ${
                      hoveredId === book.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase mb-1">
                      {book.code}
                    </p>
                    <h4 className="text-[#F6F3EE] font-serif text-lg leading-tight mb-1">
                      {book.titleEn}
                    </h4>
                    <p className="text-[#F6F3EE]/60 text-xs mb-3">
                      Rs {book.price}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[#F6F3EE] text-xs transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                      <button
                        onClick={() => addToCart(book)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#C0973E] hover:bg-[#C0973E]/90 rounded-lg text-[#04302C] text-xs font-medium transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Always-visible info at bottom */}
                  <div
                    className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#04302C] to-transparent transition-opacity duration-300 ${
                      hoveredId === book.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <p className="text-[#C0973E] text-xs font-medium">
                      Rs {book.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('tamil')}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#C0973E]/50 text-[#C0973E] rounded-full text-sm tracking-wider uppercase hover:bg-[#C0973E] hover:text-[#04302C] transition-all duration-300"
          >
            View All Books
          </button>
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
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Category
                    </p>
                    <p className="text-[#F6F3EE]">
                      {selectedBook.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Language
                    </p>
                    <p className="text-[#F6F3EE] capitalize">
                      {selectedBook.language}
                    </p>
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
    </section>
  );
}
