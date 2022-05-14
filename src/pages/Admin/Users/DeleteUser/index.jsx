import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import InputButton from "components/common/Forms/FormButton";
import { ButtonsContainer } from "./styles";
import { Box } from "@mui/system";
import { fetchWithToken } from "helpers/fetch";
import { endPoints } from "const/endPoints";
import Toast from "components/common/Popup/Toast";

const DeleteUser = ({ id, flag }) => {
  //*MODAL*
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  //*Borrar usuario */
  const handleSubmit = async () => {
    const resp = await fetchWithToken(
      `${endPoints.delete_any_user}/${id}`,
      {},
      "DELETE"
    );
    const data = await resp.json();
    console.log("data", data);
    if (data === 200) {
      onHide("displayBasic");
      flag(true);
      Toast("success", "eliminado correctamente");
    } else {
      Toast("error", "Error al eliminar usuario");
      onHide("displayBasic");
    }
  };
  return (
    <>
      <button
        onClick={() => onClick("displayBasic")}
        style={{
          margin: "0px",
          padding: "0px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <DeleteForeverIcon color="error" />
      </button>

      <Dialog
        header="Confirma tu contraseña"
        visible={displayBasic}
        style={{ width: "50vw", boxShadow: "none" }}
        onHide={() => onHide("displayBasic")}
        position="center"
        contentStyle={{
          borderRadius: "0 0 15px 15px",
        }}
        draggable={false}
        resizable={false}
      >
        <Box
          sx={{ textAlign: "center", margin: "30px 0px", fontSize: "1.2rem" }}
        >
          <p>¿Estas seguro de eliminar a este usuario?</p>
        </Box>

        <ButtonsContainer>
          <InputButton
            text="Si"
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b63"
            fontSize="1.2rem"
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
            margin="0px 10px"
            onClick={() => handleSubmit()}
          />
          <InputButton
            text="No"
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b63"
            fontSize="1.2rem"
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
            margin="0px 10px"
            onClick={() => onHide("displayBasic")}
          />
        </ButtonsContainer>
      </Dialog>
    </>
  );
};

export default DeleteUser;
