import craftArtisans from "../assets/craftArtisans.avif";

const timeline = [
  {
    year: "2016",
    title: "Our Beginning",
    desc: "Started in a countryside workshop using reclaimed timber and natural oils.",
  },
  {
    year: "2018",
    title: "Brand & Vision",
    desc: "Launched the first collection — a blend of Nordic and Japanese design influences.",
  },
  {
    year: "2021",
    title: "Ethical Evolution",
    desc: "Fully transitioned to low-impact materials and eco-packaging.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    desc: "Featured in sustainable design magazines and loved by 100k+ homes worldwide.",
  },
];

const testimonials = [
  {
    name: "Narendra Modi",
    quote:
      "The pieces feel custom-made. The materials, the texture, even the smell — it feels warm and personal.",
  },
  {
    name: "Rahul Gandhi",
    quote:
      "Our bedroom finally feels like a retreat thanks to Havenhaus.The wood grains are stunning.",
  },
  {
    name: "Yogi Adityanath",
    quote:
      "A refreshing shift from mass-produced furniture. It’s art disguised as utility.",
  },
];

const About = () => (
  <section className=" rounded-xl min-h-screen bg-white dark:bg-[#111827] text-[#232B2B] dark:text-gray-100 font-sans transition-colors duration-300 pt-0 sm:pt-10 pb-10">
    {/* Hero */}
    <div className="max-w-5xl mx-auto bg-gradient-to-bl from-[#fff] via-[#f5fcfb] to-[#ecf6f4] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] rounded-3xl shadow-2xl px-6 sm:px-12 py-14 mb-14">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Welcome to <span className="text-[#0D9488]">Haven</span>
          <span className="text-[#B68C63]">haus</span>
        </h1>
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488] mb-3" />
        <p className="text-xl max-w-2xl mx-auto text-[#3E3E3E] dark:text-gray-300">
          Where comfort meets craftsmanship. We don’t just build furniture — we
          create timeless spaces.
        </p>
        <div className="inline-block bg-gradient-to-r from-[#B68C63] via-[#e2bc91] to-[#0D9488] text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide shadow-lg font-medium">
          Crafted for Calm Living
        </div>
      </div>
    </div>

    {/* Philosophy */}
    <div className="max-w-5xl mx-auto bg-gradient-to-bl from-white via-[#f7fafc] to-[#e6f4f3] dark:from-[#1e293b] dark:via-[#0f172a] dark:to-[#0b1120] rounded-3xl shadow-lg px-6 sm:px-12 py-12 mb-14 space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488]">
        Our Philosophy
      </h2>
      <div className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488]" />
      <p className="text-lg leading-relaxed text-[#3C4A49] dark:text-gray-300">
        Havenhaus is rooted in one belief: home should feel like a refuge. Our
        collections are built to reflect that — simple forms, enduring
        materials, and gentle textures that help you breathe easier.
      </p>
      <p className="text-lg leading-relaxed text-[#3C4A49] dark:text-gray-300">
        We favor natural wood, soft linens, and mindful design that values
        calmness over clutter. Every piece is created not just for how it looks,
        but how it makes you feel.
      </p>
    </div>

    {/* Materials */}
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#f7fafc] via-white to-[#f0ece9] dark:from-[#1e1e1e] dark:via-[#111111] dark:to-[#0a0a0a] rounded-3xl shadow-lg px-6 sm:px-12 py-12 mb-14">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B68C63] via-[#0D9488] to-[#B68C63]">
            What We’re Made Of
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#B68C63] via-[#0D9488] to-[#B68C63]" />
          <p className="text-lg leading-relaxed text-[#3C4A49] dark:text-gray-300">
            Our materials tell a story — from responsibly sourced oak to
            handwoven rattan, every choice we make reflects a deep respect for
            nature. We use eco-friendly finishes and avoid plastic-based
            composites.
          </p>
          <p className="text-lg leading-relaxed text-[#3C4A49] dark:text-gray-300">
            We work closely with artisans who treat their craft with reverence.
            The result? Furniture that not only lasts, but lives beautifully in
            your space.
          </p>
        </div>
        <div>
          <img
            src={craftArtisans}
            alt="Crafting furniture"
            className=" h-96 mx-24 rounded-2xl shadow-xl border border-[#ede9e4] dark:border-gray-700"
          />
        </div>
      </div>
    </div>

    {/* Timeline */}
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-white via-[#fafdff] to-[#ffeede] dark:from-[#1e1e1e] dark:via-[#111827] dark:to-[#1f2937] rounded-3xl shadow-lg px-6 sm:px-12 py-12 mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488] mb-10">
        Our Journey
      </h2>
      <div className="space-y-10 border-l-4 border-[#B68C63] pl-7">
        {timeline.map((step, i) => (
          <div key={i}>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0D9488] dark:text-teal-400">
              {step.year}{" "}
              <span className="text-[#B68C63] dark:text-yellow-300">
                — {step.title}
              </span>
            </h3>
            <p className="mt-1 text-[#4A4A4A] dark:text-gray-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Testimonials */}
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#f6fcfa] via-white to-[#fff8f6] dark:from-[#1a1a1a] dark:via-[#0f172a] dark:to-[#111827] rounded-3xl shadow-lg px-6 sm:px-12 py-12 mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488] mb-10">
        Words From Our Customers
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-br from-[#f8fcfa] to-[#fff] dark:from-[#1f2937] dark:to-[#111827] border border-[#ede9e4] dark:border-gray-700 shadow rounded-2xl"
          >
            <p className="italic text-[#3E3E3E] dark:text-gray-300">
              “{t.quote}”
            </p>
            <p className="mt-4 font-semibold text-right text-[#B68C63] dark:text-yellow-300">
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Final CTA */}
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-white via-[#f7fafc] to-[#f2fbfa] dark:from-[#111827] dark:via-[#1e293b] dark:to-[#0f172a] rounded-3xl shadow-xl px-6 sm:px-12 py-12 text-center space-y-5 mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#B68C63] to-[#0D9488]">
        Your Haven Starts Here
      </h2>
      <p className="text-lg max-w-xl mx-auto text-[#4A4A4A] dark:text-gray-300">
        Discover furniture with soul — ethically made, gently styled, and
        beautifully built to last.
      </p>
      <a
        href="/shop"
        className="inline-block mt-4 bg-gradient-to-br from-[#0D9488] via-[#15a19b] to-[#B68C63] hover:from-[#B68C63] hover:to-[#0D9488] text-white px-8 py-3 rounded-full font-semibold tracking-wider shadow-lg transition"
      >
        Shop the Collection
      </a>
    </div>
  </section>
);

export default About;
