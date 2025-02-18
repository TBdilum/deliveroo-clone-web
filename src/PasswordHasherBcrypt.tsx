import bcrypt from "bcryptjs";

function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
export default hashPassword;
