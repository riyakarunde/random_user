const userimg = document.getElementById("user_img");
const username = document.getElementById("user_name");
const useremail = document.getElementById("user_email");
const userlocation = document.getElementById("user_location");
const userbtn = document.getElementById("btn");

async function getUser() {
    userimg.src = "Loading...";
    username.textContent = "";
    useremail.textContent = "";
    userlocation.textContent = "";

    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        userimg.src = user.picture.large;
        username.textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        useremail.textContent = user.email;
        userlocation.textContent = user.location.country;

    } catch(error){
        username.textContent = "Username not available";
        useremail.textContent = "Email not available";
        userlocation.textContent = "Location not available";
    }
}

userbtn.addEventListener("click", getUser);
