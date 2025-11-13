import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-10 px-5 mt-30 sm:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-3">
            <img className='w-10 h-13' src="https://i.ibb.co.com/3mshTGkY/Scarica-Vettori-Immagini-Foto-e-Video-Gratuiti-1-removebg-preview.png" alt="" />

            <span className="text-xl font-bold">KrishiLink</span>
          </div>
          <p className="text-center md:text-left  max-w-xs">
            Connecting farmers and buyers digitally to grow together sustainably.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="/" className="text-secondary hover:text-yellow-300">Home</a>
          <a href="/allcrops" className= "text-secondary hover:text-yellow-300">Crops</a>
          <a  className="text-secondary hover:text-yellow-300">Dashboard</a>
          <a  className="text-secondary hover:text-yellow-300">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
           <img src="https://i.ibb.co.com/CKr5Kr3Q/Twitter-x-logo-png-free-download.jp" alt="" />
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-secondary border-t border-green-700 pt-5">
        <p>© {new Date().getFullYear()} KrishiLink - All rights reserved 🌱</p>
      </div>
    </footer>
  );
};

export default Footer;
