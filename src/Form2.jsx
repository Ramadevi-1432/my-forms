import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

const Form2 = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Please enter the name")
          .max(6, "length should be less than or equal to 6"),
        email: Yup.string()
          .required("Please enter the email")
          .max(8, "length should be less than or equal to 8"),
        password: Yup.string()
          .required("Please enter the password")
          .max(8, "length should be less than or equal to 8"),
      })}
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
      }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />

            <br />
          </div>
          {errors.name && touched.name ? errors.name : null}
          <br />
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <br />
          </div>
          {errors.email && touched.email ? errors.email : null}
          <br />
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <br />
          </div>
          {errors.password && touched.password ? errors.password : null}
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  );
};

export default Form2;
