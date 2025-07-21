import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => (
  <section className="relative py-10 px-5 bg-white dark:bg-gray-800 rounded-3xl max-w-screen-xl mx-auto transition-colors duration-300">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          <span className="text-[#0D9488]">Haven</span>
          <span className="text-[#B68C63]">haus</span>
          <span className="block">
            <br className="sm:hidden" />
            is changing the way people shop
          </span>
        </h1>

        <p className="text-md text-slate-600 dark:text-gray-300 max-w-md leading-snug font-light mb-6">
          Discover timeless elegance and comfort with our handcrafted furniture
          collection. From luxurious sofas to functional workspaces, every piece
          is designed to elevate your home with style and warmth. Explore
          premium materials, curated designs, and lasting craftsmanship — all at
          your fingertips. Start your transformation today and bring home
          furniture that truly feels like home.
        </p>

        <Link
          to="/products"
          className="inline-block px-6 py-3 rounded-xl text-base font-bold shadow-md bg-[#0D9488] hover:bg-[#B68C63] transition-colors text-white focus:ring-4 focus:ring-[#B68C63]/30"
        >
          Our Products
        </Link>
      </div>

      {/* Image Collage */}
      <div className="relative flex flex-wrap justify-center gap-5">
        {[hero1, hero2, hero3, hero4].map((img, i) => (
          <img
            key={i}
            src={img}
            srcSet={`${img} 1x, ${img} 2x`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={`Showcase ${i + 1}`}
            width="250"
            height="250"
            loading="lazy"
            draggable="false"
            className={`rounded-3xl object-cover shadow-lg ${
              i === 1
                ? "w-40 h-44 mt-10"
                : i === 2
                ? "w-64 h-72 mt-5"
                : i === 3
                ? "w-48 h-54 mt-7"
                : "w-56 h-60"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
