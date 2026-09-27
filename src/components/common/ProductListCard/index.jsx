import ProductPrice from "../common/ProductPrice";
import { ListCardStyles, ImageContainer, InfoContainer } from "./styles";

function ProductListCard({ product }) {
  return (
    <ListCardStyles>
      <ImageContainer>
        <img src={product.image} alt={product.name} />
      </ImageContainer>
      
      <InfoContainer>
        <h4>{product.name}</h4>
        <ProductPrice price={product.price} oldPrice={product.oldPrice} />
      </InfoContainer>
    </ListCardStyles>
  );
}

export default ProductListCard;