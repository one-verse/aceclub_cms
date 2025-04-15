"use client";
import { useState } from "react";

export const FAQSection = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq">
      <div className="bg-black text-white py-16 px-4">
        <p className="text-2xl md:text-6xl text-center mb-12 arial-regular">
          {props.sectionTitle}
        </p>
        <div className="container max-w-[1200px] mx-auto">
          <div className="">
            {props.question_answers.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div
                  key={index}
                  className={`faq p-5 ${activeIndex === index ? "active" : ""}`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer poppins-normal text-light-gray"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-xl md:text-2xl poppins text-light-gray">
                      {faq.question}
                    </p>
                    <button
                      className={`text-3xl font-bold ${
                        activeIndex === index ? "×" : "+"
                      }`}
                    >
                      {activeIndex === index ? "×" : "+"}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <p
                      className="mt-3 text-lg text-muted"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
