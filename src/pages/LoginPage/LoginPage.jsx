import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
const LoginPage = () => {
  const FeedbackSchema = Yup.object().shape({
    userPassword: Yup.string()
      .min(8, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    userEmail: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        userEmail: "",
        userPassword: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label>
          <span>Email</span>
          <Field
            className={css.input}
            // id={userNameId}
            type="email"
            name="userEmail"
          />
          <ErrorMessage
            className={css.error}
            name="userEmail"
            component="span"
          />
        </label>
        <label className={css.labelForm}>
          <span>Pasword</span>
          <Field
            className={css.input}
            // id={userNumberId}
            type="password"
            name="userPassword"
          />
          <ErrorMessage
            className={css.error}
            name="userPassword"
            component="span"
          />
        </label>
        <button className={css.btnSubmit} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
