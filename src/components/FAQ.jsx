import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "Who is this course for?",
    answer:
      "This course is designed for law students, legal professionals, freelancers, and anyone interested in mastering contract drafting.",
  },
  {
    question: "Will I get lifetime access?",
    answer:
      "Yes, you'll receive lifetime access to all course recordings, templates, and future updates.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, a certificate of completion will be provided after successfully completing the course.",
  },
  {
    question: "Are live sessions recorded?",
    answer:
      "Absolutely! Every live session is recorded and made available for future access.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Find answers to the most common questions about the course.
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;