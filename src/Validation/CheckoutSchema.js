import * as Yup from "yup";

export const checkoutSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  companyName: Yup.string().optional(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  streetAddress: Yup.string().required("Address is required"),
  country: Yup.string().required("Country / Region is required"),
  state: Yup.string().required("State is required"), // Aligned with initialValues 'state'
  zipCode: Yup.string().required("Zip code is required"),
  phone: Yup.string().required("Phone number is required"),
  
  shipToDifferentAddress: Yup.boolean(),

  // Conditional validation: both branches must return a schema
  differentAddress: Yup.string().when(
    ["shipToDifferentAddress"],
    ([shipToDifferentAddress], schema) => {
      return shipToDifferentAddress
        ? schema.required("Alternate shipping address is required")
        : schema.notRequired();
    }
  ),

  orderNotes: Yup.string().optional(),
  paymentMethod: Yup.string()
    .required("Payment method is required")
    .oneOf(["cashOnDelivery", "paypal", "amazonPay"], "Invalid payment method"),
});