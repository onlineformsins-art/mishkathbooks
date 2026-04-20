import { useState, useMemo } from 'react';
import {
  Plus,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ArrowLeft,
  Search,
} from 'lucide-react';
import { getBooksByLanguage, languageInfo } from '@/data/books';
import { useCart } from '@/context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Book } from '@/data/books';

interface CategoryPageProps {
  language: 'tamil' | 'english' | 'sinhala';
  onNavigate: (page: string) => void;
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'name';
type ViewMode = 'grid' | 'list';

export default function CategoryPage({
  language,
  onNavigate,
}: CategoryPageProps) {
  const books = useMemo(() => getBooksByLanguage(language), [language]);
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [sortOpen, setSortOpen] = useState(false);

  const info = languageInfo[language];

  const filteredBooks = useMemo(() => {
    let result = [...books];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.titleEn.toLowerCase().includes(q) ||
          b.title.toLowerCase().includes(q) ||
          b.code.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
        break;
    }

    return result;
  }, [books, sortBy, searchQuery]);

  const sortLabels: Record<SortOption, string> = {
    default: 'Default',
    'price-low': 'Price: Low to High',
    'price-high': 'Price: High to Low',
    name: 'Name',
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Category Header */}
      <div className="relative pt-28 pb-16 px-5 lg:px-10 bg-gradient-to-b from-[#E8F0EE] to-[#F6F3EE]">
        {/* Decorative rotating star */}
        <div className="absolute right-10 lg:right-20 top-24 w-40 h-40 lg:w-56 lg:h-56 opacity-[0.06]">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <polygon
              points="100,10 120,80 190,80 135,120 155,190 100,150 45,190 65,120 10,80 80,80"
              fill="none"
              stroke="#04302C"
              strokeWidth="1"
            />
            <polygon
              points="100,30 115,80 170,80 125,110 140,170 100,135 60,170 75,110 30,80 85,80"
              fill="none"
              stroke="#04302C"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-[#2A3430]/60 hover:text-[#C0973E] text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-3 h-3 rounded-full ${
                language === 'tamil'
                  ? 'bg-emerald-600'
                  : language === 'sinhala'
                  ? 'bg-amber-600'
                  : 'bg-slate-600'
              }`}
            />
            <p className="text-[#2A3430]/60 text-sm tracking-wider uppercase">
              {info.count} Publications
            </p>
          </div>

          <h1 className="font-serif text-[#04302C] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            {info.label.toUpperCase()} PUBLICATIONS
          </h1>
          <p className="text-[#2A3430]/60 mt-3 text-lg">
            {info.nativeLabel}
          </p>
        </div>

        <style>{`
          @keyframes spin-slow {
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 60s linear infinite;
          }
        `}</style>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-[#F6F3EE]/95 backdrop-blur-sm border-b border-[#04302C]/10 px-5 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2A3430]/40" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#04302C]/10 rounded-lg text-sm text-[#04302C] placeholder:text-[#2A3430]/40 focus:outline-none focus:border-[#C0973E] transition-colors"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#04302C]/10 rounded-lg text-sm text-[#04302C] hover:border-[#C0973E] transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>{sortLabels[sortBy]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-[#04302C]/10 rounded-lg shadow-lg z-20 overflow-hidden">
                  {(Object.keys(sortLabels) as SortOption[]).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSortBy(opt);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        sortBy === opt
                          ? 'bg-[#C0973E]/10 text-[#C0973E]'
                          : 'text-[#04302C] hover:bg-[#F6F3EE]'
                      }`}
                    >
                      {sortLabels[opt]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-white border border-[#04302C]/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#04302C] text-white'
                    : 'text-[#04302C]/60 hover:text-[#04302C]'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#04302C] text-white'
                    : 'text-[#04302C]/60 hover:text-[#04302C]'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Grid/List */}
      <div className="px-5 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-[#04302C]/10 mx-auto mb-4" />
              <p className="text-[#04302C]/40 text-lg">
                No books found matching your search
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#C0973E] text-sm mt-2 hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group bg-white rounded-xl overflow-hidden border border-[#04302C]/5 hover:border-[#C0973E]/30 hover:shadow-xl hover:shadow-[#C0973E]/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={book.image}
                      alt={book.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {book.isNew && (
                      <div className="absolute top-3 left-3 bg-[#C0973E] text-[#04302C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        New
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-[#04302C]/80 text-white text-[10px] font-medium px-2 py-1 rounded">
                      {book.code}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[#04302C] font-serif text-base font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">
                      {book.titleEn}
                    </h4>
                    <p className="text-[#2A3430]/50 text-xs mt-1">
                      {book.author}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[#04302C] font-bold text-lg">
                        Rs {book.price}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedBook(book)}
                          className="text-[#2A3430]/40 hover:text-[#C0973E] text-xs transition-colors px-2 py-1"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => addToCart(book)}
                          className="w-8 h-8 rounded-full bg-[#04302C] hover:bg-[#C0973E] flex items-center justify-center text-white transition-all duration-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group flex gap-5 bg-white rounded-xl p-4 border border-[#04302C]/5 hover:border-[#C0973E]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#C0973E] text-[10px] tracking-wider uppercase font-medium">
                          {book.code}
                        </span>
                        {book.isNew && (
                          <span className="bg-[#C0973E]/10 text-[#C0973E] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <h4 className="text-[#04302C] font-serif text-lg font-semibold">
                        {book.titleEn}
                      </h4>
                      <p className="text-[#2A3430]/50 text-sm mt-1">
                        {book.author} &middot; {book.category}
                      </p>
                      <p className="text-[#2A3430]/60 text-xs mt-2 line-clamp-2">
                        {book.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[#04302C] font-bold text-xl">
                        Rs {book.price}
                      </span>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedBook(book)}
                          className="text-[#2A3430]/50 hover:text-[#C0973E] text-sm transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => addToCart(book)}
                          className="flex items-center gap-2 px-4 py-2 bg-[#04302C] hover:bg-[#C0973E] text-white rounded-full text-sm transition-all duration-300"
                        >
                          <Plus className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Book Detail Dialog */}
      <Dialog
        open={!!selectedBook}
        onOpenChange={() => setSelectedBook(null)}
      >
        <DialogContent className="bg-[#F6F3EE] border-[#04302C]/10 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#04302C] font-serif text-2xl">
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
                    <p className="text-[#04302C] font-medium">
                      {selectedBook.code}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Original Title
                    </p>
                    <p className="text-[#04302C] font-medium text-lg">
                      {selectedBook.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Author
                    </p>
                    <p className="text-[#04302C]">{selectedBook.author}</p>
                  </div>
                  <div>
                    <p className="text-[#C0973E] text-xs tracking-wider uppercase">
                      Category
                    </p>
                    <p className="text-[#04302C]">
                      {selectedBook.category}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#04302C]/10">
                    <p className="text-[#04302C] text-2xl font-bold">
                      Rs {selectedBook.price}
                    </p>
                  </div>
                  <p className="text-[#2A3430]/70 text-sm leading-relaxed">
                    {selectedBook.description}
                  </p>
                  <Button
                    onClick={() => {
                      addToCart(selectedBook);
                      setSelectedBook(null);
                    }}
                    className="w-full bg-[#04302C] hover:bg-[#C0973E] text-white font-semibold"
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
    </div>
  );
}
