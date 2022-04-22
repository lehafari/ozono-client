import React from "react";
import { Formik, Form } from "formik";
import { Editor } from "primereact/editor";
import { Container, Formulario, LeftSide, RightSide } from "./styled";
import Input from "../../../../components/common/Forms/Inputs";
import Textarea from "../../../../components/common/Forms/TextArea";
import Textarea2 from "../../../../components/common/Forms/TextArea2";

const CreateCourse = () => {
  const INITIAL_VALUES = {
    title: "",
    description: "",
    price: 0, //tipo number
    duration: 0, //tipo number
    category: "", //select
    level: "", //select - PRINCIPIANTE/INTERMEDIO/AVANZADO
    status: "", //select - ACTIVO/INACTIVO/BORRADOR
    premium: "", //select- yes/no - hace referencia de un booleano
    premiumPrice: 0, //tipo number
    own: "", //select -true/false
  };

  return (
    <Container>
      <h1>CREAR CURSO</h1>
      <Formik initialValues={INITIAL_VALUES}>
        <Form>
          <Formulario>
            <LeftSide>
              <h1>izquierda</h1>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
              />
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
              />
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
              />
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
              />
            </LeftSide>
            <RightSide>
              <h1>derecha</h1>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
              />
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
              />
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
              />
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
              />
            </RightSide>
          </Formulario>
          <Textarea2
            id="description"
            name="description"
            placeholder="Descripcion del curso "
          />
        </Form>
      </Formik>
    </Container>
  );
};

export default CreateCourse;
