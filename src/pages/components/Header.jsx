import React from 'react';

const Header = () => {
  return (
    <div className="relative space-y-2 w-full h-40 bg-cover bg-center flex flex-col items-center justify-center text-white md:h-60 lg:h-60 xl:h-80 2xl:h-80" style={{ backgroundImage: "url('/react/pizzeria_mammamia/Header.jpg')" }}>
      <img src="../react/pizzeria_mammamia/logo.jpg" alt="Logo Pizzeria Mamma Mía" className="object-cover rounded-full h-20 md:h-28 lg:h-28 xl:h-40 2xl:h-40"/>
      <h1 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold">¡Pizzería Mamma Mía!</h1>
      <p className="mt-2 font-bold text-xs md:text-base lg:text-base xl:text-lg 2xl:text-lg">Tradición Italiana directa a tu mesa</p>
    </div>
  );
};

export default Header;
