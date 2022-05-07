import { Box } from "@mui/material";
import {
  HeaderTable,
  TableContainer,
  TitleContainer,
  UserTable,
} from "./styles";

const Users = () => {
  //*Obtenemos la lista de usuarios de la base de datos
  // const { users } = useSelector((state) => state.users);
  return (
    <Box sx={{ background: "red" }}>
      <TitleContainer>
        <span>USUARIOS</span>
        <UserTable>
          <HeaderTable>
            <ul>
              <li>Nombre</li>
              <li>Apellido</li>
              <li>Email</li>
              <li>Rol</li>
              <li>Acciones</li>
            </ul>
          </HeaderTable>
          <TableContainer></TableContainer>
        </UserTable>
      </TitleContainer>
    </Box>
  );
};

export default Users;
