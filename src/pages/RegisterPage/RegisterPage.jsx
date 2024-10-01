import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from './RegisterPage.module.css'
const RegisterPage = () => {
  const FeedbackSchema = Yup.object().shape({
    userEmail: Yup.string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    userPassword: Yup.string()
      .min(8, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
    const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        userEmail: "",
        userPassword: "",
        userName: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.labelForm}>
          <span className={css.text}>Name</span>
          <Field
            className={css.input}
            // id={userNameId}
            type="text"
            name="userName"
          />
          <ErrorMessage
            className={css.error}
            name="userName"
            component="span"
          />
          <span className={css.text}>Email</span>
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
          <span className={css.text}>Pasword</span>
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

export default RegisterPage;
