import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"));

// Registramos o servicerWorker para funcionar o PWA
serviceWorker.register();
