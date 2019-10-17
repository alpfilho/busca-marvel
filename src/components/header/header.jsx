import React from "react";

import { ContentContainer } from "components/contentContainer";
import {
  HeaderContainer,
  ApplicantNameContainer,
  TitleContainer,
  Title,
  SubTitle,
  Line
} from "./header.style";

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <TitleContainer>
          <Title>BUSCA MARVEL</Title>
          <SubTitle>TESTE FRONT-END</SubTitle>
          <Line />
        </TitleContainer>

        <ApplicantNameContainer>
          <SubTitle>Alfredo Peres</SubTitle>
        </ApplicantNameContainer>
      </ContentContainer>
    </HeaderContainer>
  );
}
