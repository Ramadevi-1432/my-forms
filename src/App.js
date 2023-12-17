import "./App.css";
import { Formik } from "formik";

const App = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        return errors;
      }}
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

export default App;
