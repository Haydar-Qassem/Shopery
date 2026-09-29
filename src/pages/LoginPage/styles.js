import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { Form } from "formik";

export const LoginPageStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  width: 100%;
`;

export const FormCard = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(from var(--gray-9) r g b / 0.05);
  width: 100%;
  max-width: 520px;
  padding: 24px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center;
  justify-content: flex-start; */
`;

export const Title = styled.h2`
  font: var(--heading-5-600);
  color: var(--gray-9);
  text-align: center;
  /* margin-bottom: 24px; */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ForgotPassword = styled(Link)`
  font: var(--body-small-400);
  color: var(--gray-6);
  transition: var(--transition);
  &:hover {
    color: var(--primary);
  }
`;

export const CardFooter = styled.div`
  text-align: center;
  padding-top: 4px;
  font: var(--body-small-400);
  color: var(--gray-6);

  a {
    color: var(--gray-9);
    font: var(--body-small-500);
    /* text-decoration: none; */

    &:hover {
      color: var(--primary);
    }
  }
`;
