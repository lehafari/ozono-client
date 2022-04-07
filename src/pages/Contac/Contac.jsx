import { Switch } from '@mui/material';
import React from 'react';
import { BackgroundNavbar } from '../../components/common/BackgroundNavbar';
import { MenuBar } from '../../components/common/MenuBar';
import { BasicSwitch } from '../../components/common/SwitchButton';
import { ContactForm } from '../../components/layout/ContactForm';
import {
  ContactContainer,
  ContactSwitch,
  ContactSwitchTextLeft,
  ContactSwitchTextRight,
} from './styles';

const Contac = () => {
  const [switchStatus, setSwitchStatus] = React.useState(false);

  const handleSwitch = (e) => {
    setSwitchStatus(e.target.checked);
  };
  return (
    <>
      <BackgroundNavbar />
      <MenuBar />
      <ContactContainer>
        <ContactSwitch>
          <ContactSwitchTextLeft status={switchStatus}>
            Soporte Técnico
          </ContactSwitchTextLeft>
          <BasicSwitch onChange={handleSwitch} checked={switchStatus} />
          <ContactSwitchTextRight status={switchStatus}>
            Soporte Educacional
          </ContactSwitchTextRight>
        </ContactSwitch>
        <ContactForm />
      </ContactContainer>
    </>
  );
};

export default Contac;
