// frontend/src/app/components/Mission.tsx
const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed mb-4">
              Tajweed means to pronounce or recite every letter correctly, i.e. from its proper origin of pronunciation coupled with its stipulated attributes such as prolongation (Madd), merging (Idgham), conversion (Iqlab), and pauses (Waqaf) etc. Tajweed and its application can only be learned with a qualified Quran teacher.
            </p>
            <p className="text-lg leading-relaxed">
              The rules themselves can be studied independently, but the correct application and proper pronunciation of the alphabets of Quran can only be done by reading to, listening to, reciting to, and being corrected by a qualified teacher of the Quran.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
