import React from "react";

import { ContentContainer } from "components/contentContainer";
import {
  HeaderContainer,
  ApplicantNameContainer,
  TitleContainer,
  Title,
  LogoMarvel,
  SubTitle,
  Line
} from "./header.style";

import logoMarvel from "img/marvel-logo.svg";
import { routes } from "config";

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <TitleContainer to={routes.charList.path}>
          <Title>Busca </Title>
          <LogoMarvel src={logoMarvel} />
          <SubTitle>
            Teste <br /> Front-End
          </SubTitle>
          <Line />
        </TitleContainer>

        <ApplicantNameContainer>
          <SubTitle>Desenvolvidor Por:</SubTitle>
          <Title>Alfredo Peres</Title>
        </ApplicantNameContainer>
      </ContentContainer>
    </HeaderContainer>
  );
}
