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


    const addPostForm = document.querySelector("#addNewUser")
addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // $('.AddBtn').on('click', function () {
    let user = {
        firstName: "Inan",
        lastName: "Ivan",
        age: $("#age").val(),
        email: $("#email").val(),
        password: "$10$p46/1ZlZahix5HAi04GJaeWAn6Ijq9e5MAZtlybVcOTTeJ5ui.88y",
        roles: ["ROLE_USER"]

    }
    console.log(user);
    fetch("/new ", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        // .then(res => res.json())
        // .then(data => {
        //     const dataArr = [];
        //     dataArr.push(data);
        //     renderPosts(dataArr);
        // })
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




//------------------------------------------------------------------------------------
// document.querySelector("#addNewUser").addEventListener("submit", addNewUser);
//
// function addNewUser(e){
//     e.preventDefault();
//
//     let firstName = document.getElementById("name").value;
//     let lastName = document.getElementById("name2").value;
//     let age = document.getElementById("age").value;
//     let mail = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let roles = setRoles(Array.from(document.getElementById("roles").selectedOptions)
//         .map(option => option.value));
//
//     fetch("/new", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             firstName: firstName,
//             lastName: lastName,
//             age: age,
//             email: mail,
//             password: password,
//             // roles: roles
//         })
//     })
//         .finally(() => {
//             document.getElementById("admin").click();
//              getUsers();
//             document.getElementById("addNewUser").click();
//         })
// }
//
// function setRoles(someRoles) {
//     let roles = [];
//     if (someRoles.indexOf("USER") >= 0) {
//         roles.push({"id": 1, "role": "USER"});
//     }
//     if (someRoles.indexOf("ADMIN") >= 0) {
//         roles.push({"id": 2, "role": "ADMIN"});
//     }
//     return roles;
// }
//---------------------------------------------------------------------
// const url = "/getUser"

// function getUser() {
//
//     fetch("http://localhost:8088/getUser").then((res) => res.json())
//         .then((user) => {
//             let userRoles = "";
//             for (let i = 0; i < user.roles.length; i++) {
//                 userRoles += " " + user.roles[i].role
//             }
//
//             let output = "<tr>";
//             output += `
//                 <td>${user.id}</td>
//                 <td>${user.firstName}</td>
//                 <td>${user.lastName}</td>
//                 <td>${user.age}</td>
//                 <td>${user.email}</td>
//                 <td>${userRoles}</td>
//             `;
//             output += "<tr>";
//
//             document.getElementById("gUser").innerHTML = output;
//         })
//
// }
// function getHeader() {
//     fetch("http://localhost:8088/getUser").then((res) => res.json())
//         .then((user) => {
//             let userRoles = "";
//             for (let i = 0; i < user.roles.length; i++) {
//                 userRoles += " " + user.roles[i].role
//             }
//             let output = "";
//             output += `${user.email} with roles: ${userRoles}`;
//             document.getElementById("gHed").innerHTML = output;
//         })
//
// }
// getHeader()
// getUser()

//----------------------------------------------------------------------
// $(document).ready(function () {
//     restartAllUser();
//     $('.button').on('click', function () {
//         let user = {
//             firsname: $("#firsname").val(),
//             lastname: $("#lastname").val(),
//             age: $("#age").val(),
//             email: $("#email").val(),
//             password: $("#password").val(),
//             // roles: $("#roles").val()
//
//         }
//         console.log(user);
//         fetch("/new", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json;charset=utf-8"
//             },
//             body: JSON.stringify(user)
//         }).then(() => openTabById('admin'))
//             .then(() => restartAllUser());
//         $('input').val('');
//     });
// });