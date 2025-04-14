import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "../_components/footer";
import { ChevronRight, Award, Star } from "lucide-react";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-[90vh] relative">
        {/* Decorative background element */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 md:gap-14 px-6 py-12 md:py-0">
          <div className="text-center space-y-4 md:space-y-6 relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-8 bg-yellow-400"></div>
              <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                Taste the Best
              </h2>
              <div className="h-1 w-8 bg-yellow-400"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Bagoong Alamang
            </h1>
            <h1 className="text-4xl md:text-5xl font-medium text-gray-600">
              &
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Chicken Pastil
            </h1>

            <div className="flex items-center justify-center gap-2 mt-6">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>

            <h2 className="text-xl md:text-3xl mt-2 text-gray-600">
              With Love
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-lg md:text-xl text-center text-gray-600 italic">
              "Savor the rich, homemade taste of our signature Bagoong Alamang &
              creamy Chicken Pastil."
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md justify-center">
            <Button className="w-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              Order Now
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
              <span className="text-sm font-medium">Authentic Recipe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Made Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative py-8 md:py-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-400 rounded-full opacity-20 blur-md"></div>
          <div className="relative w-[280px] h-[280px] md:w-[600px] md:h-[600px] border-4 border-yellow-400 rounded-full shadow-2xl">
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
              src={"/images/alamang-bg.png"}
              alt="Bagoong Alamang and Chicken Pastil"
              width={700}
              height={700}
              priority
            />

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 font-bold rounded-full py-2 px-4 shadow-lg transform rotate-12">
              Best Seller!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 font-bold rounded-full py-2 px-4 shadow-lg transform -rotate-12">
              Homemade
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
