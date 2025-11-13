// frontend/src/app/components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/images/about-us.jpg" alt="About Us" className="rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <p className="text-lg leading-relaxed mb-4">
              Learning Quran Institute is one of the Leading Online Islamic Academy for those that want to learn Islam and Quran online by way of distance courses. We have developed an extensive curriculum for learning Quran and basic islamic education.
            </p>
            <p className="text-lg leading-relaxed">
              Our distance courses utilize unique online learning tools, and combine both ancient and modern methods of teaching. Study Islam online through our innovative online Islamic classes and experience it for yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
