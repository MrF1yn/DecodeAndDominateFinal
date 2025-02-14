import { FC } from "react";
import { CarouselDemo } from "@/CarouselDemo";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full bg-[#17D059] p-2 text-white flex">
        <span className="p-2 rounded">SAP Portal</span>
        <span className="p-2 rounded">Library</span>
        <span className="p-2 rounded">Notices</span>
        <span className="p-2 rounded">Alumni</span>
        <span className="p-2 rounded">Staff</span>
        <span className="p-2 rounded">Sports</span>
        <span className="p-2 rounded">Examinations</span>
        <span className="p-2 rounded">Placement</span>
        <span className="p-2 rounded">Careers</span>
        <span className="p-2 rounded">Founder</span>
        <span className="p-2 rounded">A-Z Index</span>
        <span className="p-2 rounded">Brochure</span>
        <span className="p-2 rounded">KIIT 2025</span>
        <span className="p-2 rounded bg-blue-600">Fee Payment</span>
      </div>
      <header className="w-full bg-white p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/KIIT-University-Logo-640.png"
            alt="KIIT Logo"
            className="h-10"
          />
          <div>KIIT</div>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            About KIIT
          </a>
          <a href="#" className="hover:underline">
            Academics
          </a>
          <a href="#" className="hover:underline">
            Research
          </a>
          <a href="#" className="hover:underline">
            News & Events
          </a>
          <a href="#" className="hover:underline">
            Explore KIIT
          </a>
          <a href="#" className="hover:underline">
            Virtual Tour
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Admission 2025
          </a>
        </nav>
      </header>
      <main className="">
        <CarouselDemo />
      </main>
      <footer className="bg-[#EAEA93] text-black w-full">
        <div className="bg-yellow-200 text-center py-2">
          <p className="text-sm">
            KIIT has only one permanent campus in Bhubaneswar, Odisha. It has no
            other campus / off campus anywhere else in the country and the
            globe.
          </p>
        </div>
        <div className="flex justify-center text-white">
          <div className="w-1/4 text-center py-4">
            <p className="text-lg font-semibold bg-[#009688]">Know KIIT</p>
          </div>
          <div className="w-1/4 text-center py-4">
            <p className="text-lg font-semibold bg-[#00897B]">Academics</p>
          </div>
          <div className="w-1/4 text-center py-4">
            <p className="text-lg font-semibold bg-[#00796B]">Campus Life</p>
          </div>
          <div className="w-1/4 text-center py-4">
            <p className="text-lg font-semibold bg-[#00695C]">Know Founder</p>
          </div>
        </div>
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 text-white py-2 px-4">
          <p className="text-sm">Quick Help</p>
        </div>
        <div className="text-center p-4 border-t border-gray-300">
          <p className="text-sm">
            © {new Date().getFullYear()} KIIT University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
