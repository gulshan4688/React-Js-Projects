const faqData = [
  {
    id: 1,
    question: "What is an accordion component?",
    answer: "A UI element that expands to show content and collapses to hide it."
  },
  {
    id: 2,
    question: "How many items can an accordion have?",
    answer: "As many as you want. It’s usually a list of question–answer pairs."
  },
  {
    id: 3,
    question: "Can multiple accordion items stay open?",
    answer: "Yes, if you implement multi-open logic. Otherwise allow one at a time."
  },
  {
    id: 4,
    question: "Do accordions improve UX?",
    answer: "Yes. They keep the UI clean by hiding long content until needed."
  },
  {
    id: 5,
    question: "How do I detect which accordion is opened?",
    answer: "Track the id in state and compare it with the clicked item."
  }
];

export default faqData;