import React from "react";
import ReactDOM from "react-dom";

import AppSearch from "./AppSearch";
import AppResult from "./AppResult";

const rootElement = document.getElementById("appsearch");
ReactDOM.render(<AppSearch />, rootElement);

const rootElementRes = document.getElementById("appresult");
ReactDOM.render(<AppResult />, rootElementRes);
