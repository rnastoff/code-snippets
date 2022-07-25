
export default function validateInfo(values) {
  let errors = {};

  // USERNAME
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  // EMAIL
  if (!values.email) {
    errors.email = 'Email required';
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // PASSWORD
  if (!values.password) {
    errors.password = 'Password is required';
  }
  else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  // PASSWORD 2
  if (!values.password2) {
    errors.password2 = "Password is required";
  }
  else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords dot no match';
  }

  return errors;
}


