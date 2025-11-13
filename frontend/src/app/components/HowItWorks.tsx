// frontend/src/app/components/HowItWorks.tsx
const HowItWorks = () => {
  return (
    <section id="how-we-teach" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">How We Teach</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              You can see how convenient and easy method where anyone can learn Quran at anywhere anytime. Feel free to contact us. Sign up for free 3 days trail if you satisfy so then you need to continue. We are offering classes on daily bases just Sunday is off.
            </p>
            <p className="text-lg leading-relaxed">
              We are the first and undoubtedly the best online Holy Quran tutoring and Islamic School provider working since 2008. There is no other way but to check for yourself as to why our services are above all the others in quality and excellence.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/how-we-teach.jpg" alt="How We Teach" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
