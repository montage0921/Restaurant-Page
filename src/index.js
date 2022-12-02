import { addLayout } from "./generalLayout";
import { addHomepage } from "./homepage";
import addMenuPage from "./menu";

import "./style.css";

const container = document.querySelector(`#content`);

const { homeTab, menuTab, aboutTab } = addLayout(container);

homeTab.addEventListener(`click`, addHomepage);

menuTab.addEventListener(`click`, addMenuPage);
