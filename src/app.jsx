import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "normalize.css";
import "./app.style.css";

import { Header } from "./components/header";
import { Footer } from "components/footer";
import { Search } from "components/search";

import { Character } from "pages/character";
import { CharactersList } from "pages/charactersList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />

      <Switch>
        {/* Página de personagem */}
        <Route path="/personagem/:slug">
          <Character />
        </Route>

        {/* Roteamento e Exibição de Personagens */}
        <Route path={["/:page", "/"]}>
          <CharactersList />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
