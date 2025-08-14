"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sectionTitle: string;
  question_answers: FAQItem[];
}

export const FAQSection = ({ sectionTitle, question_answers }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Optional: remove duplicates based on question text
  const uniqueFaqs = Array.from(
    new Map(question_answers.map((item) => [item.question, item])).values()
  );

  return (
    <section id="faq" className="faqRow scroll-mt-24">
      <div className="text-white py-2 px-4">
        <p className="text-2xl md:text-4xl text-center mb-8">
          {sectionTitle}
        </p>
        <div className="container max-w-[1200px] mx-auto">
          <div className="w-full md:w-4/5 mx-auto">
            {uniqueFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq p-3 md:p-3 bgFaq mb-3 transition-all duration-300 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer text-light-gray"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-medium roboto textGredient text-base md:text-lg">
                    {faq.question}
                  </p>
                  <button
                    aria-label="Toggle FAQ"
                    className="text-2xl font-bold text-white"
                  >
                    {activeIndex === index ? "×" : "+"}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="mt-3 text-sm text-muted leading-relaxed">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
