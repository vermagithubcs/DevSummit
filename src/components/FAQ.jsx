import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the eligibility criteria to participate in the hackathon?",
      answer: "Anyone who is interested in coding and innovation can participate."
    },
    {
      question: "What is the format of the hackathon?",
      answer: "The hackathon will be a 24-hour event where participants will work in teams."
    },
    {
      question: "Are there any prizes for the winners?",
      answer: "Yes, there are exciting prizes for the top teams!"
    },
    {
      question: "How can I register for the hackathon?",
      answer: "You can register through our official website."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className='h-80 w-full items-start justify-around flex bg-white text-black'>
      <div className="faq relative top-8">
        <h1 className='text-3xl'>Frequently <br /> Asked Questions</h1>
        <p className='font-sans bg-[#EDEDED] inline-block px-3 py-2 rounded-md relative top-4'>Question List</p>
      </div>
      <div className="qa relative top-3">
        {faqs.map((faq, index) => (
          <div className='m-6 text-xl' key={index}>
            <div onClick={() => toggleAnswer(index)} className='cursor-pointer'>
              {faq.question}
            </div>
            {openIndex === index && (
              <div className='mt-2 text-lg'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default FAQ
