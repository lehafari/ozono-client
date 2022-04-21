import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Button } from "../../../components/common/Buttons/MainButton";
import {
  ButtonContainer,
  ButtonsContainer,
  CardContainer,
  Container,
} from "./style";

const Courses = () => {
  return (
    <Container>
      <Outlet />
      <ButtonsContainer>
        <ButtonContainer>
          <Button path="/admin/create-course" text="Crear Curso" />
        </ButtonContainer>
      </ButtonsContainer>

      <CardContainer>
        <Box
          sx={{
            width: "400px",
            height: "200px",
            background: "green",
            margin: "10px 0px",
          }}
        />
      </CardContainer>
    </Container>
  );
};

export default Courses;
