import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-[#0e0f19] text-white px-8 py-4 flex justify-between items-center">
        <div class="text-xl font-bold">
          <span class="text-red-500">G</span> SPORTS.
        </div>
        <ul class="flex gap-6 uppercase text-sm">
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Esports</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
        </ul>
        <div class="flex items-center gap-4">
          <button class="text-lg">🛒</button>
          <button class="text-lg">👤</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
            Play Now →
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
