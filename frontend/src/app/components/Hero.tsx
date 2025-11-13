// frontend/src/app/components/Hero.tsx
const Hero = () => {
  return (
    <section className="bg-green-700 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Learn Quran with Tajweed and Qirath</h1>
        <p className="text-xl mb-8">at your home, at any your convenient time online</p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Start Learning Today
        </button>
      </div>
    </section>
  );
};

export default Hero;
