export default function Hero() {
  return (
    <header
      className="min-h-screen flex items-center bg-cover bg-fixed bg-center relative bg-[linear-gradient(#00000080,#00000080),url('/assets/hero-bg.webp')] "
      //   style={{
      //     backgroundImage:
      //       //   "linear-gradient(#00000099,#000000bb), url('assets/hero-bg.webp')",
      //       "linear-gradient(#00000099,#000000bb), url('assets/Mountain.jpg')",
      //   }}
    >
      <div className="max-w-7xl lg:mx-50 mx-auto px-10 lg:px-2">
        <h1 className="text-6xl font-black text-white leading-tight scale-y-[0.88]">
          <span className="block">Hi, I&apos;m Laukik Lanje</span>
        </h1>
        <span className="block text-4xl font-black text-[#fbbb7a] leading-tight">
          Full-Stack Web Developer
        </span>

        <p className="mt-6 max-w-2xl text-2xl text-gray-300">
          A Full-Stack Developer with a passion for building robust, scalable,
          and user-friendly web applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="bg-white text-black px-12 py-4 font-bold rounded">
            Hire me
          </a>
          <a
            href="/projects"
            className="border border-gray-500 px-12 py-4 font-bold rounded">
            See my work
          </a>
        </div>
      </div>
    </header>
  );
}
