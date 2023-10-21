"use client"
import { useState } from "react";

const pharmacyFAQs = [
  {
    faq: "What services do you offer?",
    description:
      "We provide prescription filling, medication counseling, immunizations, and more.",
  },
  {
    faq: "Which insurance plans do you accept?",
    description:
      "We accept a variety of insurance plans; check our website for details.",
  },
  {
    faq: "What are your operating hours?",
    description:
      "Our hours are [Opening Time] to [Closing Time], [Days of the Week].",
  },
  {
    faq: "Can I transfer my prescriptions to your pharmacy?",
    description:
      "Yes, we make prescription transfers easy. Contact us for assistance.",
  },
  {
    faq: "Do you offer delivery or curbside pickup?",
    description:
      "We provide both delivery and curbside pickup for your convenience.",
  },
];

const FAQS = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-7xl w-full m-auto mb-10">
      <h1 className="text-center text-3xl font-black lg:text-5xl md:text-4xl mb-4">
        FAQS
      </h1>

      <div className="flex flex-col px-4">
        {pharmacyFAQs.map(({ faq, description }, index) => {
          return (
            <div className="py-6 border-b" key={index}>
              <div className="flex items-center justify-between">
                <p>{faq}</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="add"
                    width="20"
                    height="20"
                    version="1.1"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M14.5 22V7M7 14.5h15"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQS;
