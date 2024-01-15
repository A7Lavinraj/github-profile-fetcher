const form = document.querySelector(".submit__form");
const avatar = document.querySelector(".avatar__url");
const username = document.querySelector(".name");
const profileCard = document.querySelector(".profile__card");

const updateDOM = (src, name) => {
  avatar.src = src;
  username.innerText = name;

  if (profileCard.classList.contains("hidden"))
    profileCard.classList.remove("hidden");
};

const submitHandler = async (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const username = data.get("username");
  const response = await fetch(`https://api.github.com/users/${username}`);
  const jsonData = await response.json();

  console.log(jsonData);
  updateDOM(jsonData.avatar_url, jsonData.name);
};

form.addEventListener("submit", submitHandler);
