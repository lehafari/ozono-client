import React from "react";
import { Formik, Form } from "formik";
import { Container, Formulario, LeftSide, RightSide } from "./styled";
import Input from "../../../../components/common/Forms/Inputs";
import Textarea2 from "../../../../components/common/Forms/TextArea2";
import Select from "../../../../components/common/Forms/Selects";
import { BoxButton } from "../../../Access/Login/style";
import InputButton from "../../../../components/common/Forms/FormButton";
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
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm();
  };

  return (
    <Container>
      <h1>CREAR CURSO</h1>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <Formulario>
            <LeftSide>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
                alignItems="flex-end"
              />
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="Duracion del curso"
                margin="5px 0"
                alignItems="flex-end"
              />

              <Select
                name="level"
                text="Nivel"
                options={["PRINCIPIANTE", "INTERMEDIO", "AVANZADO"]}
                alignItems="flex-end"
                margin="5px 0"
              />
              <Select
                name="premium"
                text="Premium"
                options={["Si", "No"]}
                alignItems="flex-end"
                margin="5px 0"
              />
            </LeftSide>
            <RightSide>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
                alignItems="flex-start"
              />
              <Select
                name="category"
                text="Categoria"
                options={["TECNOLOGIA", "SALUD", "AMBIENTE"]}
                alignItems="flex-start"
                margin="5px 0"
              />
              <Select
                name="status"
                text="Estado del curso"
                options={["ACTIVO", "INACTIVO", "BORRADOR"]}
                alignItems="flex-start"
                margin="5px 0"
              />
              <Input
                id="premiumPrice"
                name="premiumPrice"
                type="number"
                placeholder="Precio Premium"
                margin="5px 0"
                alignItems="flex-start"
              />
            </RightSide>
          </Formulario>
          <Select
            name="own"
            text="¿Es propio?"
            options={["yes", "no"]}
            alignItems="center"
            margin="5px 0"
          />
          <Textarea2
            id="description"
            name="description"
            placeholder="Descripcion del curso "
          />
          <BoxButton>
            <InputButton text="Crear Curso" width="50%" />
          </BoxButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default CreateCourse;
