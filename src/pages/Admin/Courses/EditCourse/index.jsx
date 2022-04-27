import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import {
  Container,
  ImgContainer,
  MenuContainer,
  NavbarContainer,
  ShadowContainer,
  TileContainer,
} from "./style";
import img from "../../../../assets/images/course-image.png";
import General from "./General";

const EditCourse = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <h1>Edicion del curso:"nombre del curso"</h1>
      <ShadowContainer>
        <ImgContainer>
          <img src={img} alt="imagen del curso" />
          <TileContainer>
            <h1>
              Curso <br /> Ozonoterapeuta Clinico
            </h1>
          </TileContainer>
        </ImgContainer>
        <NavbarContainer>
          <MenuContainer>
            <TabView
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel header="General" headerStyle={{}}>
                <General />
              </TabPanel>
              <TabPanel header="profesores">
                Content II Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="Clases">
                Content III Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="FAQS">
                Content IV Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="Configuration">
                Content V Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
            </TabView>
          </MenuContainer>
        </NavbarContainer>
      </ShadowContainer>
    </Container>
  );
};

export default EditCourse;
