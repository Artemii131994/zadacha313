const addPostForm = document.querySelector("#addNewUser")


addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = {
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        age: $("#age").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        roles: [{id: 1, name: "ROLE_ADMIN", users: null, authority: "ROLE_ADMIN"}]
                // [{id: 2, name: "ROLE_USER", users: null, authority: "ROLE_USER"}]
        // firstName: document.getElementById("firstname").value,
        // lastName: document.getElementById("lastname").value,
        // age: document.getElementById("age").value,
        // email: document.getElementById("email").value,
        // password: document.getElementById("password").value,
        // roles:


    }
    console.log(user);
    fetch("/new ", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(() =>{
            addPostForm.innerHTML = "";
            output = "";

            document.getElementById('admin-tab').click();

            fetch("/allUsers")
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    return renderPosts(data)
                })
        })
        // .then(res => res.json())
        // .then(data => {
        //
        //     console.log(data)
        //     return renderPosts(data)
        //     // const dataArr = [];
        //     // dataArr.push(data);
        //     // renderPosts(dataArr);
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

