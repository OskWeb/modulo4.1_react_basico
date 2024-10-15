import React from "react";
import { createRoot } from "react-dom/client";
import { RouterComponent } from "./core/router/router.component";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(

    <RouterComponent />

);