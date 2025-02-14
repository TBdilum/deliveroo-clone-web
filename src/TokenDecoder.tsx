import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  name: string;
}

const TokenDecoder = () => {
  const token = localStorage.getItem("token");

  let UserName = "";

  try {
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      UserName = decodedToken.name;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("token");
  }
  return UserName;
};

export default TokenDecoder;
