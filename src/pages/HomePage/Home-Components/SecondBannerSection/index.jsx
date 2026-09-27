import { PromoGrid, PromoCard, HighlightText, DarkBadge } from "./styles";
import IconButton from "../../../../components/common/IconButton";
import banner4 from "../../../../assets/images/Banners/Banner_4.png";
import banner5 from "../../../../assets/images/Banners/Banner_5.png";
import banner6 from "../../../../assets/images/Banners/Banner_6.png";
import PromoCountDown from "../PromoCountDown/index";

export default function SecondBannerSection() {
  return (
    <PromoGrid>
      <PromoCard
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <span>Best Deals</span>
          <h3>Sale of the Month</h3>

          <PromoCountDown
            targetDate={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
          />

          <IconButton variant="fill-white" size="large">
            Shop Now
          </IconButton>
        </div>
      </PromoCard>

      <PromoCard
        style={{
          backgroundImage: `url(${banner5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <span>85% Fat Free</span>
          <h3>Low-Fat Meat</h3>

          <div>
            Started at <HighlightText>$79.99</HighlightText>
          </div>

          <IconButton variant="fill-white" size="large">
            Shop Now
          </IconButton>
        </div>
      </PromoCard>

      <PromoCard
        style={{
          backgroundImage: `url(${banner6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <span dark>Summer Sale</span>
          <h3 dark>100% Fresh Fruit</h3>

          <div>
            Up to <DarkBadge>64% OFF</DarkBadge>
          </div>

          <IconButton variant="fill-white" size="large">
            Shop Now
          </IconButton>
        </div>
      </PromoCard>
    </PromoGrid>
  );
}
