export const validateName = (value) => {
  // Check if the name contains special characters
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  if (specialChars.test(value)) {
    return 'Name should not contain special characters';
  }

  const hasNumber = /\d/;
  if (hasNumber.test(value)) {
    return 'Name should not contain numbers';
  }

  // Check if the length of the name is not greater than 24 characters
  if (value.length > 24) {
    return 'Name should not be greater than 24 characters';
  }

  return true;
};