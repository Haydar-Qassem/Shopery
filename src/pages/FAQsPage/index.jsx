import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import {
  AccordionItem,
  AccordionList,
  FAQContent,
  FAQImageWrapper,
  FAQsPageStyles,
} from "./styles";
import { faqs } from "../../MockData/FAQs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import FAQimage from "../../assets/images/FAQ-image.png";

function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AppTemplate
      pageTitle="FAQs"
      pageDescription="Frequently Asked Questions"
      path={path.faqs}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Frequently Asked Questions Meta Description",
      }}
    >
      <MyBreadcrumb />

      <FAQsPageStyles className="container">
        <FAQContent>
          <h2>Welcome, Let's Talk About Our Ecobazar</h2>

          <AccordionList>
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <AccordionItem key={faq.id} $isActive={isActive}>
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </div>
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </AccordionItem>
              );
            })}
          </AccordionList>
        </FAQContent>

        <FAQImageWrapper>
          <img src={FAQimage} alt="" />
        </FAQImageWrapper>
      </FAQsPageStyles>
    </AppTemplate>
  );
}

export default FAQsPage;
