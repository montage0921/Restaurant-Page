import { addLayout } from "./generalLayout";
import { addHomepage } from "./homepage";
import addMenuPage from "./menu";
import addAboutPage from "./about";

import "./style.css";

const container = document.querySelector(`#content`);

const { homeTab, menuTab, aboutTab } = addLayout(container);

addHomepage();

homeTab.addEventListener(`click`, addHomepage);

menuTab.addEventListener(`click`, addMenuPage);

aboutTab.addEventListener(`click`, addAboutPage);
