const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (input: string): boolean => {
  if (!input || input.length == 0) {
    return false;
  }

  const rgx = new RegExp(emailRegex);
  return rgx.test(input);
};

export { validateEmail };
