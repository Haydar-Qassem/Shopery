import SocialMediaList from "../../Footer/FooterComponents/SocialMediaList";
import WishlistProduct from "../WishlistProduct";
import { HeaderRow, TableBody, FooterRow, WishlistTableStyles } from "./styles";

function WishlistTable({ products }) {
  return (
    <WishlistTableStyles className="container">
      <HeaderRow>
        <span>Product</span>
        <span>Price</span>
        <span>Stock Status</span>
        <span></span>
      </HeaderRow>
      <TableBody>
        {products.map((product) => (
          <div style={{ width: "100%" }} key={product.id}>
            <WishlistProduct key={product.id} product={product} />
          </div>
        ))}
      </TableBody>
      <FooterRow>
        <div>
          Share: <SocialMediaList />
        </div>
      </FooterRow>
    </WishlistTableStyles>
  );
}

export default WishlistTable;
