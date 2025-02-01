import React from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: "What is the eligibility criteria to participate in the hackathon?",
      answer: "Anyone who is interested in coding and innovation can participate."
    },
    {
      question: "What is the eligibility criteria to participate in the hackathon?",
      answer: "Anyone who is interested in coding and innovation can participate."
    },
    {
      question: "What is the eligibility criteria to participate in the hackathon?",
      answer: "Anyone who is interested in coding and innovation can participate."
    },
    {
      question: "What is the eligibility criteria to participate in the hackathon?",
      answer: "Anyone who is interested in coding and innovation can participate."
    }
  ]
  return (
    <>
    <div className='h-80 w-full items-start justify-around flex bg-white text-black'>
      <div className="faq relative top-8">
        <h1 className='text-3xl'>Frequently <br /> Asked Questions</h1>
        <p className='font-sans bg-[#EDEDED] inline-block px-3 py-2 rounded-md relative top-4'>Question List</p>
      </div>
      <div className="qa relative top-3">
        {faqs.map((faq,index)=>(
          <div className='m-6 text-xl' key={index}>
            {faq.question}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default FAQ
