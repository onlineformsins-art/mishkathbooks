import { useState, useEffect, useCallback } from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import CategoryCards from '@/sections/CategoryCards';
import FeaturedBooks from '@/sections/FeaturedBooks';
import NewReleases from '@/sections/NewReleases';
import SpecialOffers from '@/sections/SpecialOffers';
import CategoryPage from '@/sections/CategoryPage';
import Footer from '@/sections/Footer';

type Page =
  | 'home'
  | 'tamil'
  | 'english'
  | 'sinhala'
  | 'newreleases'
  | 'offers';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((page: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page as Page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Scroll to section handler
  useEffect(() => {
    if (currentPage === 'home') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'tamil':
        return <CategoryPage language="tamil" onNavigate={navigate} />;
      case 'english':
        return <CategoryPage language="english" onNavigate={navigate} />;
      case 'sinhala':
        return <CategoryPage language="sinhala" onNavigate={navigate} />;
      case 'newreleases':
        return (
          <div className="min-h-screen bg-[#04302C]">
            <div className="pt-28 pb-8 px-5 lg:px-10">
              <div className="max-w-7xl mx-auto text-center">
                <button
                  onClick={() => navigate('home')}
                  className="text-[#C0973E]/60 hover:text-[#C0973E] text-sm mb-6 transition-colors"
                >
                  &larr; Back to Home
                </button>
                <h1 className="font-serif text-[#F6F3EE] text-4xl sm:text-5xl font-semibold">
                  New Releases
                </h1>
                <p className="text-[#F6F3EE]/50 mt-3">
                  Our latest publications, fresh from the press
                </p>
              </div>
            </div>
            <NewReleases />
          </div>
        );
      case 'offers':
        return (
          <div className="min-h-screen bg-[#F6F3EE]">
            <div className="pt-28 pb-8 px-5 lg:px-10">
              <div className="max-w-7xl mx-auto text-center">
                <button
                  onClick={() => navigate('home')}
                  className="text-[#04302C]/40 hover:text-[#C0973E] text-sm mb-6 transition-colors"
                >
                  &larr; Back to Home
                </button>
                <h1 className="font-serif text-[#04302C] text-4xl sm:text-5xl font-semibold">
                  Special Offers
                </h1>
                <p className="text-[#2A3430]/50 mt-3">
                  Exclusive deals and limited-time bundles
                </p>
              </div>
            </div>
            <SpecialOffers onNavigate={navigate} />
          </div>
        );
      default:
        return (
          <>
            <Hero onNavigate={navigate} />
            <CategoryCards onNavigate={navigate} />
            <FeaturedBooks onNavigate={navigate} />
            <NewReleases />
            <SpecialOffers onNavigate={navigate} />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F6F3EE]">
        <Navbar onNavigate={navigate} currentPage={currentPage} />

        {/* Page transition overlay */}
        <div
          className={`fixed inset-0 bg-[#04302C] z-[100] pointer-events-none transition-opacity duration-300 ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <main>{renderPage()}</main>

        {currentPage !== 'newreleases' && currentPage !== 'offers' && (
          <Footer onNavigate={navigate} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
// src/App.tsx or src/components/Books.tsx

const base = import.meta.env.BASE_URL;

function Books() {
  return (
    <div>
      <h1>My Books</h1>
      <img src={`${base}books/image1.jpg`} alt="Book 1" />
      <img src={`${base}books/image2.jpg`} alt="Book 2" />
      {/* Add more books here */}
    </div>
  );
}

export default Books;
