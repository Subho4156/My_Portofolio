'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Subhayan Paul. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Subho4156/My_Portofolio" className="text-gray-400 hover:text-white transition-colors duration-200">
              Project Link
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}