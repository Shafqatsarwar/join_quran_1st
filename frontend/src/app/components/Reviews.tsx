// frontend/src/app/components/Reviews.tsx
const Reviews = () => {
  const reviews = [
    {
      name: "Asghar Ali",
      location: "USA",
      text: "You are doing a nice job keep it. My one son finished Quran in 7 months and other daughter who is 7 and is on 10 parah. My children are very glad to be their students. My son will also start soon from JOINQURAN.Com. In a non Muslim country we had such a great opportunity it's not less than any blessings of Allah Almighty on us."
    },
    {
      name: "Asif Walji",
      location: "Texas USA",
      text: "My son Mehdi Walji who is just 4 years is having his classes from JOINQURAN.Com. First we thought it will not work but now we are 100% satisfied with his fast progress as he is about to finish his Qaida. I am very thankful to joinquran.com."
    },
    {
      name: "Naseem Abbas",
      location: "UK",
      text: "My son Hussain who is just 5 years is having his classes from joinquran.com. First we thought it will not work but now we are 100% satisfied with his fast progress as he is about to finish his Qaida. I am very thankful to joinquran.com."
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Student Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">"{review.text}"</p>
              <p className="font-semibold text-right">- {review.name}, {review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
