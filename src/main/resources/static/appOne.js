const addPostForm = document.querySelector("#addNewUser")
// const firstname = document.getElementById("name")
// const lastname = document.getElementById("name2")
// const age = document.getElementById("age")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const roles = setRoles(Array.from(document.getElementById("roles").selectedOptions)
//     .map(option => option.value));

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // $('.AddBtn').on('click', function () {
    let user = {
        firstName: $("#firstname").val(),
        lastName: $("#lastName").val(),
        age: $("#age").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        roles: setRoles(Array.from(document.getElementById("roles").selectedOptions)
                .map(option => option.value))

    }
    console.log(user);
    fetch("/new ", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr);
        })
    // })
})

function setRoles(someRoles) {
    let roles = [];
    if (someRoles.indexOf("USER") >= 0) {
        roles.push({"id": 1, "role": "USER"});
    }
    if (someRoles.indexOf("ADMIN") >= 0) {
        roles.push({"id": 2, "role": "ADMIN"});
    }
    return roles;
}

const postsList = document.querySelector("#app");
let output = '';

const renderPosts = (posts) =>{
    posts.forEach(post =>{
        let userRole = "";
        for (let i = 0; i < post.roles.length; i++) {
            userRole += " " + post.roles[i].name;
        }
        output +=`
        <tr><td>${post.id}</td>
                            <td>${post.firstname}</td>
                            <td>${post.lastname}</td>
                            <td>${post.email}</td>
                            <td>${post.age}</td>
                            <td>${userRole}</td>
                            <td>
                            <a  href="/updateSave/${post.id}" class="btn btn-primary eBtn" >Edit</a>
                                </td>
                            <td>
                            <a  href="/deleteUser/${post.id}" class="btn btn-danger delBtn">Delete</a>
                            </td></tr>`
    });
    postsList.innerHTML = output;
}

const urlList = '/allUsers';

//Method GET

fetch(urlList)
    .then(res => res.json())
    .then(data => renderPosts(data))
