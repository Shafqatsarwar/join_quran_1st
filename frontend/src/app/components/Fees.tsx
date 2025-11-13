// frontend/src/app/components/Fees.tsx
const Fees = () => {
  return (
    <section id="fees" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Fees</h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          We are proud that since our start we have not accepted any single dollar donation from any organization or person. We are running institution on small monthly fees that we receive from students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Fee Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Monthly Fee (Single Student)</h3>
            <p className="text-gray-700 mb-4">The below mentioned cost is exclusive of Free Trial Classes.</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Students Who want to register in 2 days/week Plan are given 2 days Free Trial.</li>
              <li>Students Who want to register in 3 days/week Plan are given 3 days Free Trial.</li>
            </ul>
            <div className="mb-4">
              <p className="font-semibold">Plan A (6 days/week)</p>
              <p>Class Duration: 30 min/day</p>
              <p>Monthly Fee USA & Canada: <span className="line-through">$50</span> $45</p>
              <p>Monthly Fee UK: <span className="line-through">£35</span> £30</p>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">Sign Up</button>
          </div>

          {/* Family Package */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Family Package</h3>
            <p className="text-gray-700 mb-4">We have discounts for multiple family members. A family having two or more than two classes can benefit from this package.</p>
            <div className="mb-4">
              <p className="font-semibold">Plan A (6 days/week)</p>
              <p>Class Duration: 30 min/day</p>
              <p>Monthly Fee USA & Canada: <span className="line-through">$45</span> $40</p>
              <p>Monthly Fee UK: <span className="line-through">£30</span> £25</p>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">Sign Up</button>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-8">
          Note : Students other than USA & UK can use Google currency converter to see
        </p>
      </div>
    </section>
  );
};

export default Fees;
