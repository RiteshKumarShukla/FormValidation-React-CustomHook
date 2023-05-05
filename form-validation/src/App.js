import useFormValidation from "./useFormValidation";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  return errors;
};

const SignupForm = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormValidation(initialState, validate);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit" disabled={isSubmitting}>
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
