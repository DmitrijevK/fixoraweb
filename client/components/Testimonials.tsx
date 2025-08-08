import React from "react";
import { testimonials } from "../data/testimonials";

export const Testimonials: React.FC = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Отзывы наших клиентов</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            {t.avatarUrl ? (
              <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full mx-auto mb-4" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-4" />
            )}
            <p className="text-gray-700 italic mb-2">"{t.text}"</p>
            <div className="text-sm font-semibold text-gray-900 text-center">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;