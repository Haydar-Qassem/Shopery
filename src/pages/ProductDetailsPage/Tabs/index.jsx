import { useState } from "react";
import { FaCheckCircle, FaPlay, FaTag, FaLeaf } from "react-icons/fa";
import {
  TabsContainer,
  TabList,
  Tab,
  DescriptionGrid,
  TextContent,
  FeatureList,
  InfoTable,
  InfoRow,
  InfoLabel,
  InfoValue,
  FeedbackContainer,
  LoadMoreBtn,
  FeaturesRow,
} from "./styles";
import CustomerFeedback from "../../../components/common/CustomerFeedback";
import Video from "../../../components/common/Video";
import FeaturesItem from "../../HomePage/Home-Components/FeaturesItem";
import { features } from "../../../Constants/Features";
import { mockReviews } from "../../../MockData/Reviews";
import { motion, AnimatePresence } from "framer-motion";

function Tabs({ product }) {
  const [activeTab, setActiveTab] = useState("descriptions");

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <TabsContainer>
      <TabList>
        <Tab
          $active={activeTab === "descriptions"}
          onClick={() => setActiveTab("descriptions")}
        >
          Descriptions
        </Tab>
        <Tab
          $active={activeTab === "additional"}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </Tab>
        <Tab
          $active={activeTab === "feedback"}
          onClick={() => setActiveTab("feedback")}
        >
          Customer Feedback
        </Tab>
      </TabList>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {activeTab === "descriptions" && (
            <motion.div
              key="descriptions"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DescriptionGrid>
                <TextContent>
                  {product?.description?.map((block, index) => {
                    if (block?.type === "paragraph") {
                      return <p key={index}>{block?.content}</p>;
                    }
                    if (block?.type === "list") {
                      return (
                        <FeatureList key={index}>
                          {block?.items.map((item, i) => (
                            <li key={i}>
                              <FaCheckCircle className="check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </FeatureList>
                      );
                    }
                    return null;
                  })}
                </TextContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <Video />
                  <FeaturesRow>
                    <FeaturesItem feature={features[0]} />
                    <FeaturesItem feature={features[1]} />
                  </FeaturesRow>
                </div>
              </DescriptionGrid>
            </motion.div>
          )}

          {activeTab === "additional" && (
            <motion.div
              key="additional"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DescriptionGrid>
                <InfoTable>
                  {product?.additionalInfo.map((info, index) => (
                    <InfoRow key={index}>
                      <InfoLabel>{info.label}:</InfoLabel>
                      <InfoValue>{info.value}</InfoValue>
                    </InfoRow>
                  ))}
                </InfoTable>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <Video />
                  <FeaturesRow>
                    <FeaturesItem feature={features[0]} />
                    <FeaturesItem feature={features[1]} />
                  </FeaturesRow>
                </div>
              </DescriptionGrid>
            </motion.div>
          )}

          {activeTab === "feedback" && (
            <motion.div
              key="feedback"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <FeedbackContainer>
                {mockReviews.map((review) => (
                  <CustomerFeedback review={review} key={review.id} />
                ))}
                <LoadMoreBtn>Load More</LoadMoreBtn>
              </FeedbackContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TabsContainer>
  );
}

export default Tabs;
