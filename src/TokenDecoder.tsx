import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  firstName: string;
}

const TokenDecoder = () => {
  const token = localStorage.getItem("token");

  let firstName = "";

  try {
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      firstName = decodedToken.firstName;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("token");
  }
  return firstName;
};

export default TokenDecoder;
