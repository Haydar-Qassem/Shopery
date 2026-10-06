import { FaUser } from "react-icons/fa";
import { BlogPostCommentStyles, ImageContainer } from "./styles";
import { LuDot } from "react-icons/lu";

function BlogPostComment({ comment }) {
  return (
    <BlogPostCommentStyles>
      <ImageContainer>
        {comment.profileImage ? (
          <img src={comment.profileImage} alt="User profile" />
        ) : (
          <FaUser size={16} />
        )}
      </ImageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "2px",
            color: "var(--gray-9)",
          }}
        >
          <strong>{comment.name}</strong>
          <LuDot />
          <span>{comment.time}</span>
        </div>
        <p>{comment.text}</p>
      </div>
    </BlogPostCommentStyles>
  );
}

export default BlogPostComment;
