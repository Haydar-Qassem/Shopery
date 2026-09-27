import { useState } from "react";
import ProductCard from "../ProductCard";
import BigProductCard from "../BigProductCard";

export default function InteractiveProductCard({
  product,
  isRightEdge,
  isBottomEdge,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const anchorY = isBottomEdge ? { bottom: 0 } : { top: 0 };
  const anchorX = isRightEdge ? { right: 0 } : { left: 0 };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <ProductCard product={product} variant="medium-sharp" />
      </div>

      <div
        style={{
          position: "absolute",
          ...anchorY,
          ...anchorX, 
          zIndex: 10,

          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
          transition: "var(--transition)",
        }}
      >
        <BigProductCard product={product} />
      </div>
    </div>
  );
}
