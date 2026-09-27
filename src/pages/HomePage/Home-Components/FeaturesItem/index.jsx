import { FeaturesItemStyles } from "./styles";

function FeaturesItem({ feature }) {
  return (
    <FeaturesItemStyles>
      <div className="Image-Container">
        <img src={feature.image} alt={feature.title} />
      </div>
      <div className="Text-Container">
        <div className="title">{feature.title}</div>
        <div className="description">{feature.description}</div>
      </div>
    </FeaturesItemStyles>
  );
}

export default FeaturesItem;
