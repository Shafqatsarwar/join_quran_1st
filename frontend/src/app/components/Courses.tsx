// frontend/src/app/components/Courses.tsx
const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Nazra-e-Quran / Hifz-e-Quran</h3>
            <p className="text-gray-700 mb-4">
              Nazra is to read the Holy Quran verbally, without translation and memorization and Hifz is the memorization of the Holy Quran by heart.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tajweed (Pronunciation of Holy Quran with the rules of Tajweed)</li>
              <li>Memorization of five time daily Prayers.</li>
              <li>Method of Funeral and Eid Prayers.</li>
              <li>Memorization of various Prayers (Duas)</li>
              <li>Memorization of a few short Suras for Nazra Students (chapters)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Translation of Holy Quran</h3>
            <p className="text-gray-700 mb-4">
              It is to read the Holy Quran through meanings and word to word translation into English and Urdu.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tajweed-e-Quran (Pronunciation of Holy Quran)</li>
              <li>Memorization of five time daily Prayers.</li>
              <li>Method of Funeral and Eid Prayers.</li>
              <li>Memorization of various Prayers (Duas)</li>
              <li>Memorization of a few short Suras (chapters)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Tafseer-e-Quran (interpretation of Holy Quran)</h3>
            <p className="text-gray-700 mb-4">
              It is to read the Holy Quran through its meaning, translation and interpretation of the Holy Quran, so as to comprehend the meaning of its application and intention of the Holy Quran.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tajweed-e-Quran (Pronunciation of Holy Quran)</li>
              <li>Memorization of five time daily Prayers.</li>
              <li>Method of Funeral and Eid Prayers.</li>
              <li>Memorization of various Prayers (Duas)</li>
              <li>Memorization of a few short Suras (chapters)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
