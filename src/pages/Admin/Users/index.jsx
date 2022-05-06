import { Box } from "@mui/material";
import { TitleContainer, UserTable } from "./styles";

const Users = () => {
  return (
    <Box sx={{ background: "red" }}>
      <TitleContainer>
        <span>USUARIOS</span>
        <UserTable></UserTable>
      </TitleContainer>
    </Box>
  );
};

export default Users;
