import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <small>Akshaya System © {new Date().getFullYear()} — All Rights Reserved</small>
      </div>
    </footer>
  );
}