import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, BookOpen } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const { totalItems, items, totalPrice, removeFromCart, updateQuantity } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Tamil Books', page: 'tamil' },
    { label: 'English Books', page: 'english' },
    { label: 'Sinhala Books', page: 'sinhala' },
    { label: 'New Releases', page: 'newreleases' },
    { label: 'Offers', page: 'offers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04302C]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-[#C0973E] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <div className="text-[#F6F3EE] font-semibold text-sm tracking-widest uppercase leading-none">
              Mishkath
            </div>
            <div className="text-[#C0973E] text-[10px] tracking-wider uppercase mt-0.5">
              Research Institute
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                currentPage === link.page
                  ? 'text-[#C0973E] font-medium'
                  : 'text-[#F6F3EE]/80 hover:text-[#C0973E]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/94777891344"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[#C0973E] hover:text-[#F6F3EE] transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>+94 77789 1344</span>
          </a>

          {/* Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative p-2 text-[#F6F3EE] hover:text-[#C0973E] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C0973E] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#04302C] border-[#C0973E]/20 w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="text-[#F6F3EE] text-xl font-serif">
                  Your Cart
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
                {items.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <ShoppingCart className="w-16 h-16 text-[#C0973E]/30 mb-4" />
                    <p className="text-[#F6F3EE]/60 text-sm">
                      Your cart is empty
                    </p>
                    <p className="text-[#F6F3EE]/40 text-xs mt-2">
                      Add books to get started
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                      {items.map((item) => (
                        <div
                          key={item.book.id}
                          className="flex gap-3 bg-[#F6F3EE]/5 rounded-lg p-3"
                        >
                          <img
                            src={item.book.image}
                            alt={item.book.titleEn}
                            className="w-16 h-20 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[#F6F3EE] text-sm font-medium truncate">
                              {item.book.titleEn}
                            </h4>
                            <p className="text-[#C0973E] text-xs mt-1">
                              Rs {item.book.price}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.book.id,
                                    item.quantity - 1
                                  )
                                }
                                className="w-6 h-6 rounded-full bg-[#F6F3EE]/10 text-[#F6F3EE] flex items-center justify-center text-xs hover:bg-[#C0973E] transition-colors"
                              >
                                -
                              </button>
                              <span className="text-[#F6F3EE] text-sm w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.book.id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-6 h-6 rounded-full bg-[#F6F3EE]/10 text-[#F6F3EE] flex items-center justify-center text-xs hover:bg-[#C0973E] transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.book.id)}
                            className="text-[#F6F3EE]/40 hover:text-red-400 transition-colors self-start"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[#C0973E]/20 pt-4 mt-4">
                      <div className="flex justify-between text-[#F6F3EE] mb-4">
                        <span className="text-sm">Total</span>
                        <span className="font-semibold text-[#C0973E]">
                          Rs {totalPrice}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/94777891344?text=${encodeURIComponent(
                          generateOrderMessage(items, totalPrice)
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-[#C0973E] hover:bg-[#C0973E]/90 text-[#04302C] font-semibold py-6">
                          Order via WhatsApp
                        </Button>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#F6F3EE] hover:text-[#C0973E] transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#04302C]/98 backdrop-blur-md border-t border-[#C0973E]/20">
          <div className="px-5 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm tracking-wide transition-colors ${
                  currentPage === link.page
                    ? 'text-[#C0973E] font-medium'
                    : 'text-[#F6F3EE]/80'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/94777891344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C0973E] py-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+94 77789 1344</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function generateOrderMessage(
  items: { book: { titleEn: string; code: string }; quantity: number }[],
  total: number
) {
  let msg = '*Mishkath Research Institute - Book Order*\n\n';
  items.forEach((item, i) => {
    msg += `${i + 1}. ${item.book.code} - ${item.book.titleEn} x${item.quantity}\n`;
  });
  msg += `\n*Total: Rs ${total}*\n\nPlease confirm my order.`;
  return msg;
}
