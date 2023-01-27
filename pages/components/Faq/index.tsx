import React from 'react'
import styles from "./faq.module.scss"

const questionAnswer = [
  {
    question: "What is the time to trade in the stock market?",
    answer: "It is between IST 9:15AM to IST 3:30PM. Market closes on Saturday and Sunday except some special sessions such as Muhurat (Trading) on Diwali. (For BSE and NSE)"
  },
  {
    question: "Can anyone Trade after market hours?",
    answer: "No, you cannot trade. But many stockholders (passively) trade after market hours and it is known as ‘after market orders’."
  },
  {
    question: "Is there sector wise segregation in the stock market?",
    answer: "Yes, There is sector wise segregation in the stock market which further helps to diversify the portfolio. There are 11 sectors at present.",
  },
  {
    question: "What is fundamental analysis?",
    answer: "By knowing industry trends and calculating companies’ assets one can do fundamental analysis. It helps investor to find shares with below fair prices as well.",
  },
  {
    question: "What is technical analysis?",
    answer: "It a method of evaluating the market trends with the help of past data. You may require some logical and technical understanding to read out the conclusions of the charts.",
  },
  {
    question: "Is there any good method to find investible companies in India?",
    answer: "There are many online tools available find the same. You can also use different charts available on major exchange platforms.",
  },
  {
    question: "How should I research about the market with limited time?",
    answer: "It is completely subjective because if you are looking for long term investment then you should study the market trends and future plans of those companies. But, if you only have short term investment goal then you can rely on historic data.",
  },
  {
    question: "Is there any place to get past data of companies?",
    answer: "Anyone can have reports and any other basic information about specific company on NSE/BSE or any other website.",
  },
  {
    question: "What is IPO and how can buy it?",
    answer: "When company first time offers their shares in the market for general public is called an IPO (Initial Public Offering). To buy it, one needs to have demat account. When you open an account and search for the specific IPO, you would have details on your screen and by few clicks; you can book the allotment by paying mentioned price.",
  },
  {
    question: "What are Small Caps, large Caps and Mid Caps?",
    answer: "It is determined by the market capitalization of any company. At present Small Caps = USD$300 Millions – USD$ 2 Billion Market Capitalization. Mid Caps = USD$2 Billion – USD$ 10 Billion Market Capitalization. Large Caps = More than USD$ 10 Billion Market Capitalization.",
  },
  {
    question: "Should I invest in Small or Large Caps?",
    answer: "It depends on your investment goal, but small caps sometimes has higher market potential as there is still room for expansion and development for the these companies.",
  },
  {
    question: "When should I buy the shares?",
    answer: "You should not buy the stocks when the prices are higher. Continuous watch on the market would help you to understand the answer of this question.",
  },
  {
    question: "What should be the ideal size of the portfolio?",
    answer: "There is nothing like ideal size but it should be traceable and manageable at the same.",
  },
  {
    question: "What should be the ideal returns from the market?",
    answer: "This is very hypothetical to say but the returns will depend upon performance of the stocks and particularly your portfolio.",
  },
  {
    question: "Is it possible to make millions of money by trading in the stock market?",
    answer: "Well, everyone who enters in the market wishes to become millionaire. It is possible as well but, it requires lot of efforts to study about the market and the companies you are investing in.",
  },
  {
    question: "What are BSE and NSE?",
    answer: "They both are share trading platforms where companies list their share for trading. BSE = Bombay Stock Exchange. NSE = National Stock Exchange",
  },
  {
    question: "What are the ‘Call’ and ‘Put’ when it comes to stock market?",
    answer: "CALL is simply a right to buy and on the other hand PUT is right to sale. Both are future course of activities.",
  },
]

interface FaqAccordionProps {
  question: string
  answer: string
  index: number
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({question, answer, index}) => {
  return <div className="accordion-item mb-3">
  <h2 className="accordion-header" id={`flush-heading${index}`}>
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
      {question}
    </button>
  </h2>
  <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">{answer}</div>
  </div>
</div>
}

const faq = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4 mt-5">FAQs</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {
          questionAnswer.map((elem, index )=> <FaqAccordion key={index} question={elem.question} answer={elem.answer} index={index} />)
        }
        {/* <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              What is the time to trade in the stock market?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">It is between IST 9:15AM to IST 3:30PM. Market closes on Saturday and Sunday except some special sessions such as Muhurat (Trading) on Diwali. (For BSE and NSE)</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default faq