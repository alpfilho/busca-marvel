import React from "react";

import { routes } from "config";
import { ContentContainer } from "components/contentContainer";
import { CharacterRow, CharInfo, Thumbnail } from "./charRow.style";

export const CharRow = ({ id, name, description, thumbnail }) => {
  const makeThumbUrl = ({ path, extension }) => {
    return `${path}/portrait_fantastic.${extension}`;
  };

  return (
    /* O container também é o Link */
    <CharacterRow to={`${routes.char.path}/${id}`}>
      <ContentContainer>
        <CharInfo>
          <Thumbnail backgroundImage={makeThumbUrl(thumbnail)} />
          <span>{name}</span>
        </CharInfo>

        <CharInfo>
          <p>{description}</p>
        </CharInfo>
      </ContentContainer>
    </CharacterRow>
  );
};
