import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const NewSignUpPage = () => {
  return (
    <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <form>
        <label>
          <Typography>Username</Typography>
          <input type="text" />
        </label>
        <label>
          <Typography>password</Typography>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </Box>
  );
};

export default NewSignUpPage;
