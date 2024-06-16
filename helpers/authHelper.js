import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    // console.log("matching the password");
    // in this we are hashing our password for the website so that nobody cantake control of it...
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
