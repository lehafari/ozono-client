import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import ModalForm from "../LessonsQuizes/ModalForm";

const Sections = ({ i, text, id }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  return (
    <div>
      <Box>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Seccion {i}
        </Typography>
        <Button sx={{ width: "33%" }}>Editar</Button>
        <Button sx={{ width: "33%" }} color="error">
          Borrar
        </Button>
      </Box>
      <Accordion expanded={expanded} onChange={handleChange()} square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: "text.secondary" }}>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "red",
            }}
          >
            <span>Presione el boton para agregar una clase o Quiz</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalForm />
          </Box>
          {/* AQUI VAMOS A IMPRIMIR TODAS LAS CLASES  */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Sections;
