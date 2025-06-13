"use client";
import { useState } from "react";

export const FAQSection = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="bgTheme text-white py-16 px-4">
        <p className="text-2xl md:text-4xl text-center mb-12 arial-regular">
          {props.sectionTitle}
        </p>
        <div className="container max-w-[1200px] mx-auto">
          <div className="w-full md:w-4/5 mx-auto">
            {props.question_answers.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div
                  key={index}
                  className={`faq p-3 rounded-xl bgFaq mb-2 ${activeIndex === index ? "active" : ""}`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer roboto-normal text-light-gray"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="font-medium md:font-medium roboto textGredient">
                      {faq.question}
                    </p>
                    <button
                      className={`text-2xl font-bold ${
                        activeIndex === index ? "×" : "+"
                      }`}
                    >
                      {activeIndex === index ? "×" : "+"}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <p
                      className="mt-3 text-sm text-muted"
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
