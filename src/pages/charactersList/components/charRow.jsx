import React from "react";

import { CharacterRow, CharInfo, Thumbnail } from "./charRow.style";

export const CharRow = () => {
  return (
    <CharacterRow>
      <CharInfo>
        <Thumbnail />
      </CharInfo>

      <CharInfo></CharInfo>
    </CharacterRow>
  );
};
