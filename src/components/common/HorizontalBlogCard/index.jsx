import { SlCalender } from "react-icons/sl";
import { HorizontalBlogCardStyles } from "./styles";

function HorizontalBlogCard({ data }) {
  return (
    <HorizontalBlogCardStyles>
      <div className="imgContainer">
        <img src={data.image} alt="" />
      </div>
      <div className="infoContainer">
        <h4>{data.title}</h4>
        <span>
          <SlCalender size={16} color="var(--primary)" />
          <span>
            {data.date.month} {data.date.day}
            {", "}
            {data.date.year}
          </span>
        </span>
      </div>
    </HorizontalBlogCardStyles>
  );
}

export default HorizontalBlogCard;
