import { CreateButton } from "../components/CreateButton.js";

const btnCount = CreateButton();
const btnActived = CreateButton();
const btnClearItems = CreateButton();
const app = document.querySelector('.app');

app.append(btnCount,btnActived,btnClearItems);