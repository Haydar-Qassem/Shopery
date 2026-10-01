import { CheckoutPageStyles, ItemContainer, OrderSummary, Total } from "./styles";
import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import FormControl from "../../components/Forms/FormControl";
import { FIELD_TYPE } from "../../Constants/fieldTypes";
import { checkoutSchema } from "../../Validation/CheckoutSchema";
import { Formik, FormikProvider, useFormik } from "formik";
import { selectCart } from "../../store/ShoppingCart/cartSelectors";
import { useSelector } from "react-redux";
import PriceAmount from "../../components/common/PriceAmount";
import { LiaTimesSolid } from "react-icons/lia";
import Button from "../../components/common/Button";

const CHECKOUT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  streetAddress: "",
  country: "",
  state: "",
  zipCode: "",
  orderNotes: "",
  shipToDifferentAddress: false,
  differentAddress: "",
  paymentMethod: "",
};

function CheckoutPage() {
  const cart = useSelector(selectCart);
  const items = cart?.items || [];

  const formik = useFormik({
    initialValues: CHECKOUT_INITIAL_VALUES,
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = "Free";
  const shippingCost = shipping === "Free" ? 0 : 10;

  return (
    <AppTemplate
      pageTitle="Checkout"
      pageDescription="Checkout Meta Description"
      path={path.checkout}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Checkout Meta Description",
      }}
    >
      <MyBreadcrumb />
      <FormikProvider value={formik}>
        <CheckoutPageStyles
          className="container"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <h2>Billing Information</h2>
            <div className="billing-info">
              <FormControl
                name="firstName"
                type={FIELD_TYPE.text}
                label="First Name"
                placeholder="Your first name"
                span={2}
              />
              <FormControl
                name="lastName"
                type={FIELD_TYPE.text}
                label="Last Name"
                placeholder="Your last name"
                span={2}
              />
              <FormControl
                name="companyName"
                type={FIELD_TYPE.text}
                label="Company Name"
                placeholder="Your company name"
                span={2}
                optional
              />
              <FormControl
                name="streetAddress"
                type={FIELD_TYPE.text}
                label="Street Address"
                placeholder="Your street address"
                span={6}
              />

              <FormControl
                name="country"
                type={FIELD_TYPE.text}
                label="Country / Region"
                placeholder="Your country"
                span={2}
              />
              <FormControl
                name="state"
                type={FIELD_TYPE.text}
                label="State / Province"
                placeholder="Your state"
                span={2}
              />
              <FormControl
                name="zipCode"
                type={FIELD_TYPE.text}
                label="Zip / Postal Code"
                placeholder="Your zip code"
                span={2}
              />
              <FormControl
                name="email"
                type={FIELD_TYPE.text}
                label="Email"
                placeholder="Email address"
                span={3}
              />
              <FormControl
                name="phone"
                type={FIELD_TYPE.text}
                label="Phone"
                placeholder="Phone number"
                span={3}
              />
              <FormControl
                name="shipToDifferentAddress"
                type={FIELD_TYPE.checkbox}
                label="Ship to a different address"
                placeholder="Ship to a different address"
                span={3}
              />
              {formik.values.shipToDifferentAddress && (
                <FormControl
                  name="differentAddress"
                  type={FIELD_TYPE.text}
                  label="Different Address"
                  placeholder="Your different address"
                  span={6}
                />
              )}
            </div>
            <div className="additional-info">
              <h2>Additional Information</h2>

              <FormControl
                name="orderNotes"
                type={FIELD_TYPE.textarea}
                label="Order Notes"
                placeholder="Notes about your order, e.g. special notes for delivery"
                span={6}
                optional
              />
            </div>
          </div>
          <OrderSummary>
            <h3>Order Summary</h3>
            <div>
              {items.map((item) => (
                <ItemContainer key={item.id}>
                  <div>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                  </div>
                  <PriceAmount
                    price={item.price * item.quantity}
                    size="small"
                  />
                  {/* <p>{item.quantity}</p> */}
                </ItemContainer>
              ))}
            </div>
            <Total>
              <div>
                Subtotal:
                <PriceAmount
                  price={subtotal}
                  style={{
                    font: "var(--body-small-500)",
                    color: "var(--gray-9)",
                  }}
                />
              </div>
              <div>
                Shipping:{" "}
                <span
                  style={{
                    font: "var(--body-small-500)",
                    color: "var(--gray-9)",
                  }}
                >
                  {shipping === "Free" ? (
                    shipping
                  ) : (
                    <PriceAmount price={shippingCost} />
                  )}
                </span>
              </div>
              <div>
                Total:{" "}
                <PriceAmount
                  price={subtotal + shippingCost}
                  style={{
                    font: "var(--body-medium-600)",
                    color: "var(--gray-9)",
                  }}
                />
              </div>
            </Total>
            <Button variant="fill" size="large" type="submit">
              Proceed to Checkout
            </Button>
          </OrderSummary>
        </CheckoutPageStyles>
      </FormikProvider>
    </AppTemplate>
  );
}

export default CheckoutPage;
