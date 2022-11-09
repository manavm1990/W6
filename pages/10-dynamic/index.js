import { getUsers } from "./api.service";
import { renderUsers } from "./dom.service";

document.querySelector("button").addEventListener("click", async () => {
  const data = await getUsers();
  renderUsers(data);
});
