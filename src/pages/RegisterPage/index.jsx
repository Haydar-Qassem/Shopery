import { Formik, FormikProvider, useFormik } from "formik";
import {
  RegisterPageStyles,
  FormCard,
  Title,
  StyledForm,
  CardFooter,
} from "./styles";
import AppTemplate from "../../components/AppTemplate";
import environment from "../../environment";
import { path } from "../../Constants/Paths";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { registerationSchema } from "../../Validation/RegisterationSchema.js";
import { FIELD_TYPE } from "../../Constants/fieldTypes";
import FormControl from "../../components/Forms/FormControl";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

function RegisterPage() {
  // const formik = useFormik();
  return (
    <AppTemplate
      pageTitle="Sign Up"
      pageDescription="Register Meta Description"
      path={path.register}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Register Meta Description",
      }}
    >
      <MyBreadcrumb />

      <RegisterPageStyles>
        <FormCard>
          <Title>Create an Account</Title>

          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              terms: false,
            }}
            validationSchema={registerationSchema}
            onSubmit={(values) => {
              console.log("Register info:", values);
            }}
          >
            <StyledForm>
              <FormControl
                id="email"
                name="email"
                type={FIELD_TYPE.email}
                placeholder="Email"
              />
              <FormControl
                id="password"
                name="password"
                type={FIELD_TYPE.password}
                placeholder="Password"
              />
              <FormControl
                // label="confirm please"
                id="confirmPassword"
                name="confirmPassword"
                type={FIELD_TYPE.password}
                placeholder="Confirm Password"
              />
              <FormControl
                id="terms"
                name="terms"
                label="Accept all terms & conditions"
                type={FIELD_TYPE.checkbox}
              />
              <Button type="submit" size="medium">
                Create Account
              </Button>
              <CardFooter>
                Already have an account? <Link to={path.login}>Login</Link>
              </CardFooter>
            </StyledForm>
          </Formik>
        </FormCard>
      </RegisterPageStyles>
    </AppTemplate>
  );
}

export default RegisterPage;
