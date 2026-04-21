import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';  // adjust path if needed
import Footer from './components/Footer';  // adjust path if needed
import Books from './components/Books';    // ← ADD THIS IMPORT

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      <div>
        {/* Your other components/pages */}
        
        <Books />  {/* ← ADD THIS to show your books/images */}
        
        <Footer onNavigate={navigate} />
      </div>
    </CartProvider>
  );
}

export default App;
