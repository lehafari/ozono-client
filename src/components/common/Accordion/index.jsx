import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionContent from "./AccordionContent";

export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: " #5279b6",
              fontFamily: "Lato",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            {props.text1}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionContent
            titulo="Clase Numero 1"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse at reprehenderit minima impedit voluptatum quia omnis a voluptates consequuntur? Possimus placeat dignissimos ut, laborum esse quo aperiam vero necessitatibus."
            boton="Entrar a clase"
            backg="#d8d8d8"
          />
          <AccordionContent
            titulo="Quiz 1"
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
            boton="Hacer el Quiz"
          />
          <AccordionContent
            titulo="Clase Numero 2"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse at reprehenderit minima impedit voluptatum quia omnis a voluptates consequuntur? Possimus placeat dignissimos ut, laborum esse quo aperiam vero necessitatibus."
            boton="Entrar a clase"
            backg="#d8d8d8"
          />
          <AccordionContent
            titulo="Quiz 2"
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
            boton="Hacer el Quiz"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              color: " #5279b6",
              fontFamily: "Lato",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            {props.text2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionContent
            titulo="Clase Numero 1"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse at reprehenderit minima impedit voluptatum quia omnis a voluptates consequuntur? Possimus placeat dignissimos ut, laborum esse quo aperiam vero necessitatibus."
            boton="Entrar a clase"
            backg="#d8d8d8"
          />
          <AccordionContent
            titulo="Quiz 1"
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
            boton="Hacer el Quiz"
          />
          <AccordionContent
            titulo="Clase Numero 2"
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse at reprehenderit minima impedit voluptatum quia omnis a voluptates consequuntur? Possimus placeat dignissimos ut, laborum esse quo aperiam vero necessitatibus."
            boton="Entrar a clase"
            backg="#d8d8d8"
          />
          <AccordionContent
            titulo="Quiz 2"
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
            boton="Hacer el Quiz"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            sx={{
              color: " #5279b6",
              fontFamily: "Lato",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            {props.text3}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionContent />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
