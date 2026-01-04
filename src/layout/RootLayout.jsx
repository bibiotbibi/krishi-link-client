import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
 <div className="bg-green-50 max-h-[70vh] min-h-screen md:mx-15 flex flex-col">
  {/* Header */}
  <header className="w-full border-b bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
    </div>
  </header>

  {/* Main Content */}
  <main className="flex-1 w-full">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Outlet />
    </div>
  </main>

  {/* Footer */}
  <footer className="w-full bg-white border-t">
    <div className="max-w-7xl mx-auto px-4">
      <Footer />
    </div>
  </footer>
</div>

    );
};

export default RootLayout;