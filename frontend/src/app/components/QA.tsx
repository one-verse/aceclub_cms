"use client";
import { useState } from "react";

export default function QA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is an Opinion trading platform?",
      answer:
        "An opinion trading platform allows users to make predictions on future events in categories like sports, entertainment, politics, and more. If your prediction is accurate, you earn rewards based on the outcome.",
    },
    {
      question: "How do I make a prediction?",
      answer:
        "Choose a market (like sports or politics), pick an event, and place your prediction by buying or selling opinion shares. Prices fluctuate based on demand, similar to a stock market.",
    },
    {
      question: "How do I earn money from my predictions?",
      answer:
        "When the event is resolved, your predictions are finalised. If you were correct, you earn profits based on the value of the opinion shares you own.",
    },
    {
      question: "Do I need luck to win?",
      answer:
        "Success depends on strategy, research, and staying informed. The more you know, the better your chances of making accurate predictions and earning rewards.",
    },
    {
      question: "Can I trade on multiple categories at once?",
      answer:
        "Yes, you can explore and trade on multiple categories at the same time, including sports, politics, entertainment, and more, giving you more chances to profit.",
    },
    {
      question: "How are opinion share prices determined?",
      answer:
        "Opinion share prices alter based on demand and market sentiment, similar to a stock market. As more people buy or sell a specific prediction, the price is accordingly adjusted.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <p className="text-6xl text-center mb-12 poppins-regular">
        We’ve got the answers
      </p>
      <div className="container max-w-[1200px] mx-auto">
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq p-5 ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="flex justify-between items-center cursor-pointer inter-normal text-light-gray"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-2xl inter-semibold text-light-gray">
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
                <p className="mt-3 text-lg text-muted">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
