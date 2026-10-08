import { BillingAddress, PasswordCard, SettingsPageStyles } from "./styles";
import AppTemplate from "../../components/AppTemplate";
import AccountNavigation from "../../components/common/AccountNavigation";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import { AccountSettings } from "./styles";
import { users } from "../../MockData/Users";
import PriceAmount from "../../components/common/PriceAmount";
import { Form, Link } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import {
  accountSettingsSchema,
  billingAddressSchema,
  changePasswordSchema,
} from "../../Validation/AccountSettings";
import FormControl from "../../components/Forms/FormControl";
import Button from "../../components/common/Button";

function SettingsPage() {
  const user = users[0];

  const accountFormik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    },
    validationSchema: accountSettingsSchema,
    onSubmit: (values) => {
      console.log("Saving Account Settings:", values);
    },
  });

  const billingFormik = useFormik({
    initialValues: {
      firstName: user.billingAddress.firstName || "",
      lastName: user.billingAddress.lastName || "",
      companyName: "",
      streetAddress: user.billingAddress.street,
      country: "United States",
      states: user.billingAddress.state,
      zipCode: user.billingAddress.zipCode,
      email: user.email,
      phone: user.phone,
    },
    validationSchema: billingAddressSchema,
    onSubmit: (values) => {
      console.log("Saving Billing Address:", values);
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Changing Password:", values);
      resetForm();
    },
  });

  return (
    <AppTemplate
      pageTitle="Settings"
      pageDescription="Settings Meta Description"
      path={path.settings}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Settings Meta Description",
      }}
    >
      <MyBreadcrumb />

      <SettingsPageStyles className="container">
        <AccountNavigation />
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <AccountSettings>
            <FormikProvider value={accountFormik}>
              <h2>Account Settings</h2>
              <div>
                <div className="fields">
                  <FormControl
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={accountFormik.values.firstName}
                    onChange={accountFormik.handleChange}
                    onBlur={accountFormik.handleBlur}
                  />
                  <FormControl
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={accountFormik.values.lastName}
                    onChange={accountFormik.handleChange}
                    onBlur={accountFormik.handleBlur}
                  />
                  <FormControl
                    label="Email"
                    name="email"
                    type="text"
                    value={accountFormik.values.email}
                    onChange={accountFormik.handleChange}
                    onBlur={accountFormik.handleBlur}
                  />
                  <FormControl
                    label="Phone number"
                    name="phone"
                    type="text"
                    value={accountFormik.values.phone}
                    onChange={accountFormik.handleChange}
                    onBlur={accountFormik.handleBlur}
                  />
                  <Button size="medium" style={{ width: "fit-content" }}>
                    Save Changes
                  </Button>
                </div>
                <div className="photo">
                  <div>
                    {user.profileImage ? (
                      <img src={user.profileImage} alt={user.firstName} />
                    ) : (
                      <div
                        style={{
                          width: "224px",
                          height: "224px",
                          borderRadius: "999px",
                          backgroundColor: "var(--gray-2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "48px",
                            color: "var(--gray-5)",
                            fontWeight: "bold",
                          }}
                        >
                          {user.firstName.charAt(0)}
                        </span>
                      </div>
                    )}
                    <Button
                      size="medium"
                      variant="border"
                      style={{ width: "fit-content" }}
                    >
                      Choose Image
                    </Button>
                  </div>
                </div>
              </div>
            </FormikProvider>
          </AccountSettings>
          <BillingAddress>
            <h2>Billing Address</h2>
            <FormikProvider value={billingFormik}>
              <div>
                <FormControl
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={billingFormik.values.firstName}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={billingFormik.values.lastName}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="Company Name"
                  name="companyName"
                  type="text"
                  value={billingFormik.values.companyName}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  optional
                  span={2}
                />
                <FormControl
                  label="Street Address"
                  name="streetAddress"
                  type="text"
                  value={billingFormik.values.streetAddress}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={6}
                />
                <FormControl
                  label="Country / Region"
                  name="country"
                  type="select"
                  // options =
                  value={billingFormik.values.country}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="State"
                  name="states"
                  type="select"
                  value={billingFormik.values.states}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="Zip Code"
                  name="zipCode"
                  type="text"
                  value={billingFormik.values.zipCode}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="Email"
                  name="email"
                  type="text"
                  value={billingFormik.values.email}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={3}
                />
                <FormControl
                  label="Phone number"
                  name="phone"
                  type="text"
                  value={billingFormik.values.phone}
                  onChange={billingFormik.handleChange}
                  onBlur={billingFormik.handleBlur}
                  span={3}
                />
                <div style={{ gridColumn: "span 6" }}>
                  <Button size="medium">Save Changes</Button>
                </div>
              </div>
            </FormikProvider>
          </BillingAddress>
          <PasswordCard>
            <h2>Password Change</h2>
            <FormikProvider value={passwordFormik}>
              <div>
                <FormControl
                  label="Current Password"
                  name="currectPassword"
                  type="password"
                  placeholder="Password"
                  value={passwordFormik.values.currentPassword}
                  onChange={passwordFormik.handleChange}
                  onBlur={passwordFormik.handleBlur}
                  span={2}
                />
                <FormControl
                  label="New Password"
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  value={passwordFormik.values.newPassword}
                  onChange={passwordFormik.handleChange}
                  onBlur={passwordFormik.handleBlur}
                />
                <FormControl
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="type password again"
                  value={passwordFormik.values.confirmPassword}
                  onChange={passwordFormik.handleChange}
                  onBlur={passwordFormik.handleBlur}
                />
                <Button size="medium" style={{ width: "fit-content" }}>
                  Change Password
                </Button>
              </div>
            </FormikProvider>
          </PasswordCard>
        </div>
      </SettingsPageStyles>
    </AppTemplate>
  );
}

export default SettingsPage;
