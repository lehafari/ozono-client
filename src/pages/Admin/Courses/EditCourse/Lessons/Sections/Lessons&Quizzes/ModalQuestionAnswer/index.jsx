import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Box } from "@mui/material";
import { Dropdown } from "primereact/dropdown";
import MultiSelect from "../FormsQuestions/MultiSelect";

const ModalQuestionAnswer = () => {
  //** Modal **/
  const [display, setDisplay] = useState(false);
  const onClick = () => {
    setDisplay(true);
  };
  const onHide = () => {
    setDisplay(false);
  };
  //** Select data **/
  const [selected, setSelected] = useState(null);

  const onOptionChange = (e) => {
    setSelected(e.value);
  };

  const optionsItems = [
    { label: "Verdadero y Falso", value: 1 },
    { label: "Seleccion Multiple", value: 2 },
    { label: "Completacion", value: 3 },
  ];
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
        <FactCheckIcon color="primary" />
      </button>

      <Dialog
        header="Crear preguntas del Quiz"
        visible={display}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
        draggable={false}
        resizable={false}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "20px", margin: "10px 0px" }}>
            Selecciona el tipo de pregunta que deseas crear:
          </span>

          <Dropdown
            value={selected}
            options={optionsItems}
            onChange={onOptionChange}
            showClear={true}
            placeholder="Elija una opcion"
          />
          <Box
            sx={{
              margin: "5px 0px",
              width: "100%",
              padding: "0px",
            }}
          >
            {selected === 1 && <span>Verdadero y Falso</span>}
            {selected === 2 && (
              <MultiSelect
                data={{
                  question: "marico el que lo lea",
                  options: [
                    { title: "marico1", isCorrect: false },
                    { title: "marico2", isCorrect: false },
                  ],
                }}
              />
            )}
            {selected === 3 && <span>Completacion</span>}
            {!selected && <span>todas las preguntas</span>}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default ModalQuestionAnswer;
