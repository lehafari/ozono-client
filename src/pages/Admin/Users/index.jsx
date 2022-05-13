import { Box, Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { fetchWithToken } from "helpers/fetch";
import { endPoints } from "const/endPoints";
import {
  HeaderTable,
  TableContainer,
  TitleContainer,
  UserTable,
} from "./styles";
import Spinner from "components/common/Spinner";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const Users = () => {
  //*Guardamos la lista de usuarios de la base de datos
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);

  //*fetch para obtener usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetchWithToken(endPoints.get_all_users);
      const data = await resp.json();
      setUsers(data);
    };
    fetchUsers();
    //para que se repita cada vez que borre un usuario
    setFlag(false);
  }, [flag]);

  //*Paginacion
  const [page, setPage] = useState(1); //pagina actual
  const totalPages = Math.ceil(users.length / 10) + 1; //total de paginas

  const handleChange = (event, value) => {
    setPage(value);
  };
  //*Funcion para listar los usuarios por pagina
  const setUsersInPage = () => {
    let pagination = {};
    let j = 0;
    for (let i = 1; i <= totalPages; i++) {
      pagination[i] = users.slice(j * 10, j * 10 + 10);
      j++;
    }

    return pagination;
  };
  const userList = setUsersInPage();

  if (users.length === 0) {
    return <Spinner />;
  }
  return (
    <Box sx={{}}>
      <TitleContainer>
        <span>USUARIOS</span>
      </TitleContainer>
      <UserTable>
        <HeaderTable>
          <Grid container columnSpacing={1}>
            <Grid item xs={1}>
              <span>ID</span>
            </Grid>
            <Grid item xs={2}>
              <span>NOMBRE</span>
            </Grid>
            <Grid item xs={2}>
              <span>Usuario</span>
            </Grid>
            <Grid item xs={4} columnSpacing={10}>
              <span>EMAIL</span>
            </Grid>
            <Grid item xs={1}>
              <span>ROL</span>
            </Grid>
          </Grid>
        </HeaderTable>
        <TableContainer>
          {userList[page].map((user, i) => {
            return (
              <Grid container rowSpacing={1} columnSpacing={1} key={user.id}>
                <Grid item xs={1}>
                  <span>{i + 1}</span>
                </Grid>
                <Grid item xs={2}>
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                </Grid>
                <Grid item xs={2}>
                  <span>{user.username}</span>
                </Grid>
                <Grid item xs={4}>
                  <span>{user.email}</span>
                </Grid>
                <Grid item xs={1}>
                  <span>{user.role}</span>
                </Grid>
                <Grid item xs={1} sx={{ display: "flex" }}>
                  <EditUser user={user} />
                  <DeleteUser id={user.id} flag={setFlag} />
                </Grid>
              </Grid>
            );
          })}
        </TableContainer>
        <Pagination
          count={totalPages - 1}
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </UserTable>
    </Box>
  );
};

export default Users;
