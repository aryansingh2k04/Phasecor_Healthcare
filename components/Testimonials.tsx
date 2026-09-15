"use client";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "After a month of using Primathion, I noticed my skin looking clearer and more radiant from within. It’s now part of my daily routine",
      author: "Priya",
      city: "Delhi"
    },
    {
      quote:
        "Uvothera feels lightweight and non-greasy, yet gives excellent sun protection. Perfect for daily use.",
      author: "Sonali",
      city: "Dehradun"
    },
    {
      quote:
        "This serum absorbs quickly and leaves my skin smooth and hydrated.",
      author: "Shristi",
      city: "Pune"
    },
    {
      quote:
        "Since using Uvothera daily, my tanning and sun sensitivity have reduced noticeably.",
      author: "Megha",
      city: "Chandigarh"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="p-6 rounded-md bg-[#f9faf9] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#2D8F7A] transition-colors"
            >
              <p className="text-sm text-slate-600 italic leading-relaxed">
                “{rev.quote}”
              </p>
              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-sm font-bold text-slate-900 block">
                  {rev.author}
                </span>
                <span className="text-xs text-[#2D8F7A] font-medium">
                  {rev.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
