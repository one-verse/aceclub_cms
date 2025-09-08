"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ViewFaqItem {
  title: string;
  link: string;
  target?: string | null;
}
interface FAQSectionProps {
  sectionTitle: string;
  question_answers: FAQItem[];
  viewFaq: ViewFaqItem[];
}

export const FAQSection = ({ sectionTitle, question_answers, viewFaq  }: FAQSectionProps) => {
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
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Title */}
            <div className="md:col-span-3 flex flex-col justify-start faqTitle">
              <h2>
                {sectionTitle}
              </h2>
              {viewFaq?.length > 0 && (
                <Link
                  className="normalBtn mt-4 inline-block"
                  href={viewFaq[0].link}
                  target={viewFaq[0].target || "_self"}
                >
                  {viewFaq[0].title}
                </Link>
              )}
            </div>

            {/* Right Column: FAQs */}
            <div className="md:col-span-9">
              {uniqueFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq bgFaq mb-3 transition-all duration-300 ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="faqListTitle">
                      {faq.question}
                    </p>
                    <button
                      aria-label="Toggle FAQ"
                      className={`text-2xl font-bold transition-all duration-300 
                        ${activeIndex === index ? "downArrow rotate-180" : "downArrow"}`}
                    >
                      {/* {activeIndex === index ? "×" : "+"} */}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <div className="faqCntText">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
