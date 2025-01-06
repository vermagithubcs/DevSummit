import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is DevSummit?",
      answer: "DevSummit is a premier hackathon event bringing together developers, designers, and innovators from around the world to collaborate and solve real-world problems."
    },
    {
      question: "How can I apply for DevSummit?",
      answer: "You can apply through the 'Apply' button on the homepage. Simply fill out the registration form, and you'll receive a confirmation email after successful submission."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, the registration for DevSummit is completely free! We aim to make this opportunity accessible to everyone."
    },
    {
      question: "What kind of projects can I work on during the hackathon?",
      answer: "You can work on a variety of projects, including web development, mobile apps, AI/ML projects, IoT, and more. The event is open to all kinds of innovations!"
    },
    {
      question: "Can teams participate?",
      answer: "Yes, teams can participate! Teams should have a maximum of 4 members. You can either form your own team or join one during the event."
    },
  ];

  return (
    <section className="faq py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="cursor-pointer text-lg font-semibold text-left text-gray-800"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="text-gray-600 text-base mt-2 text-left">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
