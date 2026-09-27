import { TagStyles } from "./styles";

function Tag(props) {
  return (
    <TagStyles {...props}>
      {/* {props.variant === "sale" && <span>Sale</span>} */}
      {props.children}
    </TagStyles>
  );
}

export default Tag;
