const draw = (container, html) =>
  container.insertAdjacentHTML("beforeend", html);

const getHTMLFromList = (list, callback) => list.map(callback).join("");

const setDataToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const getUserFromLS = (key) => JSON.parse(localStorage.getItem(key)) || null;

export { draw, getUserFromLS, getHTMLFromList, setDataToLS };
