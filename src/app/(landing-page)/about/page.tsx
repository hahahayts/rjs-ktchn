"use client";

import Image from "next/image";
import { Award, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/app/_components/footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="text-center px-6 py-12 bg-yellow-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Story
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          How RJ’s KTCHN turned homemade flavors into a beloved food journey.
        </p>
      </section>

      {/* Origin Story */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Born from Tradition
          </h2>
          <p className="text-gray-600 text-lg">
            RJ’s KTCHN started with our brother's love for sharing his homemade
            Bagoong Alamang and Chicken Pastil. What began in our family kitchen
            has now become a flavorful staple for many Filipino households.
          </p>
          <p className="text-gray-600 text-lg">
            We use only fresh, locally sourced ingredients and traditional
            cooking methods passed down from generations. Every jar and dish
            tells a story.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <Image
            src="/images/founder-cooking.jpg"
            alt="Founder cooking"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-white px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <Award className="h-10 w-10 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold">Authentic Flavor</h3>
            <p className="text-gray-600">
              Handcrafted recipes passed through generations.
            </p>
          </div>
          <div className="text-center space-y-3">
            <Star className="h-10 w-10 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold">5-Star Quality</h3>
            <p className="text-gray-600">
              Consistent taste, loved by locals and first-timers.
            </p>
          </div>
          <div className="text-center space-y-3">
            <ChevronRight className="h-10 w-10 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold">Quick Delivery</h3>
            <p className="text-gray-600">Freshly prepared, always on time.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-20 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Taste the Love.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Ready to experience the warmth of home cooking?
        </p>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full">
          Order Now
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
