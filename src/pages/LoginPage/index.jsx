import { LoginPageStyles } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik, FormikProvider, Form } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  FormCard,
  Title,
  StyledForm,
  ForgotPassword,
  CardFooter,
} from "./styles";
import AppTemplate from "../../components/AppTemplate";
import environment from "../../environment";
import { path } from "../../Constants/Paths";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { schema } from "../../Validation/LoginSchema";
import { FIELD_TYPE } from "../../Constants/fieldTypes";
import FormCheckbox from "../../components/Forms/CustomCheckbox";
import FormControl from "../../components/Forms/FormControl";
import Button from "../../components/common/Button";

function LoginPage() {
  // const formik = useFormik();

  return (
    <AppTemplate
      pageTitle="Sign In"
      pageDescription="Login Meta Description"
      path={path.login}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Login Meta Description",
      }}
    >
      <MyBreadcrumb />

      <LoginPageStyles>
        <FormCard>
          <Title>Sign In</Title>

          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log("Login info:", values);
            }}
          >
            <StyledForm>
              {/* <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              > */}
              <FormControl
                name="email"
                type={FIELD_TYPE.email}
                placeholder="Email"
              />
              <FormControl
                name="password"
                type={FIELD_TYPE.password}
                placeholder="Password"
              />
              {/* </div> */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControl
                  name="rememberMe"
                  label="Remember me"
                  type={FIELD_TYPE.checkbox}
                />
                <ForgotPassword to="/forgot-password">
                  Forgot Password
                </ForgotPassword>
              </div>

              <Button type="submit" size="medium">
                Login
              </Button>
              <CardFooter>
                Don't have an account? <Link to={path.register}>Register</Link>
              </CardFooter>
            </StyledForm>
          </Formik>
        </FormCard>
      </LoginPageStyles>
    </AppTemplate>
  );
}

export default LoginPage;
