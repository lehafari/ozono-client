import React from 'react';
import { CourseItem } from '../../../components/layout/CourseItem';
import ProfileMenu from '../../../components/layout/ProfileMenu';
import {
  MenuBar,
  MyCourses,
  ProfileContainer,
  ProfileDashboard,
  ProfileInfo,
  ProfileInfoText,
  SpaceContainer,
} from './styles';
import profileMenu from '../../../assets/images/profile-menu.svg';
import profileImage from '../../../assets/images/profile-image.svg';

export const ProfileSection1 = () => {
  return (
    <>
      <SpaceContainer></SpaceContainer>
      <MenuBar>
        <ProfileMenu />
        <img src={profileMenu} alt="menu icon" />
      </MenuBar>
      <ProfileContainer>
        <ProfileInfo>
          <img src={profileImage} alt="profile image" />
          <ProfileInfoText>
            <h2>Alejandra Rodriguez</h2>
            <p>Profesora en tal cosa</p>
            <p>Se unit en 2022</p>
          </ProfileInfoText>
        </ProfileInfo>
        <ProfileDashboard>
          <MyCourses>{/* <CourseItem /> */}</MyCourses>
        </ProfileDashboard>
      </ProfileContainer>
    </>
  );
};
