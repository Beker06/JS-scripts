const user = {
    id: 1,
    name: "BekerDev",
    token: "kajsdncjkisadisdv",
}

localStorage.setItem(
    "user",
    JSON.stringify(user)
);

localStorage.getItem("user");

JSON.parse(localStorage.getItem("user"));