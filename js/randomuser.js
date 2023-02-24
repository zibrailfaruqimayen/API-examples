const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};
const displayUser = (user) => {
  console.log(user);
  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.results[0].gender;

  const name =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;
  document.getElementById("name").innerHTML = name;
  const userImg = document.getElementById("img");
  userImg.innerHTML = `
  <img src="${user.results[0].picture.large}"/>
  `;
  console.log(user);
};
loadUser();
