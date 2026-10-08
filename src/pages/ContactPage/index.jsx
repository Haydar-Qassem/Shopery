import { Form, FormikProvider, useFormik } from "formik";
import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import {
  ContactPageStyles,
  FormSection,
  InfoCard,
  InfoSidebar,
  MapWrapper,
} from "./styles";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import FormControl from "../../components/Forms/FormControl";
import Button from "../../components/common/Button";
import { contactSchema } from "../../Validation/ContactSchema";

// <CiLocationOn />

function ContactPage() {
  const formik = useFormik({
    initialValues: {
      templateCookies: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Contact Form Submitted:", values);
      resetForm();
    },
  });

  return (
    <AppTemplate
      pageTitle="Contact Us"
      pageDescription="Contact Meta Description"
      path={path.contact}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Contact Meta Description",
      }}
    >
      <MyBreadcrumb />
      <ContactPageStyles className="container">
        <InfoSidebar>
          <InfoCard style={{ borderBottom: "1px solid var(--gray-1)" }}>
            <div className="icon-wrapper">
              <FiMapPin />
            </div>
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </InfoCard>

          <InfoCard style={{ borderBottom: "1px solid var(--gray-1)" }}>
            <div className="icon-wrapper">
              <FiMail />
            </div>
            <p>
              Proxy@gmail.com <br />
              Help.proxy@gmail.com
            </p>
          </InfoCard>

          <InfoCard>
            <div className="icon-wrapper">
              <FiPhoneCall />
            </div>
            <p>
              (219) 555-0114
              <br />
              (164) 333-0487
            </p>
          </InfoCard>
        </InfoSidebar>

        <FormSection>
          <h2>Just Say Hello!</h2>
          <p>
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <FormikProvider value={formik}>
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <FormControl
                name="templateCookies"
                type="text"
                placeholder="Template Cookies"
              />
              <FormControl name="email" type="email" placeholder="Email" />
              <FormControl
                name="subject"
                type="text"
                placeholder="Subject"
                span={2}
              />
              <FormControl
                name="message"
                type="textarea"
                placeholder="Message"
                span={2}
              />

              <Button
                type="submit"
                variant="fill"
                size="medium"
                style={{ width: "fit-content" }}
              >
                Send Message
              </Button>
            </Form>
          </FormikProvider>
        </FormSection>
      </ContactPageStyles>
      <MapWrapper>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590415!3d-37.81720974202124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1614749298418!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapWrapper>
    </AppTemplate>
  );
}

export default ContactPage;
