const addPostForm = document.querySelector("#addNewUser")
const editSubmit = document.querySelector('.editButton')
const allUsers = document.querySelector('.all-users')
const deleteSubmit = document.querySelector('.deleteButton')

                                                    //ADD

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let setRoles =(someRoles) => {
        let roles = [];
        if (someRoles.indexOf("ROLE_ADMIN") >= 0) {
            roles.push({id: 1, name: "ROLE_ADMIN", users: null, authority: "ROLE_ADMIN"});
        }
        if (someRoles.indexOf("ROLE_USER") >= 0) {
            roles.push({id: 2, name: "ROLE_USER", users: null, authority: "ROLE_USER"});
        }
        return roles;
    }
    let user = {
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        age: $("#age").val(),
        email: $("#email").val(),
        password: $("#password").val(),
         roles:  setRoles(Array.from(document.querySelector('#roles').selectedOptions)
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
        .then(() =>{
            postsList.innerHTML = "";
            output = "";

            fetch("/allUsers")
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    return renderPosts(data)
                })
            document.getElementById('admin-tab').click();

        })

        document.getElementById("editName").value = '',
        document.getElementById("editName2").value = '',
        document.getElementById("editAge").value = '',
        document.getElementById("editEmail").value = '',
        document.getElementById("editPassword").value = '',
        document.getElementById("editRoles").value = ''

})
                                                        //LIST

const postsList = document.querySelector("#app");
let output = '';

const renderPosts = (posts) =>{
    posts.forEach(post =>{
        let userRole = "";
        for (let i = 0; i < post.roles.length; i++) {
            userRole += " " + post.roles[i].name;
        }
        output +=`
        <tr data-id="${post.id}" id="row-user-${post.id}">
                            <td class="main-id" id="main-id-${post.id}">${post.id}</td>
                            <td class="main-firstname" id="main-firstname-${post.id}">${post.firstname}</td>
                            <td class="main-lastname" id="main-lastname-${post.id}">${post.lastname}</td>
                            <td class="main-age" id="main-age-${post.id}">${post.age}</td>
                            <td class="main-email" id="main-email-${post.id}">${post.email}</td>
                            <td class="main-userRole" id="main-userRole-${post.id}">${userRole}</td>
                           
                            <td>
                            <button type="button" class="btn btn-info eBtn" 
                            data-toggle="modal" data-target='#editUser' id="edit-post">Edit
                            </button>
                            </td>
                            <td>
                            <button type="button" class="btn btn-danger " 
                            data-toggle="modal" data-target='#delUser' id="delete-post">Delete
                            </button>
                            </td></tr>`
    });
    postsList.innerHTML = output;
}

fetch('/allUsers')
    .then(res => res.json())
    .then(data => renderPosts(data))

                                            //TABLE_USERS - EDIT - DELETE

allUsers.addEventListener('click', (e) => {
         e.preventDefault();

        let delButtonIsPressed = e.target.id == 'delete-post';
        let editButtonIsPressed = e.target.id == 'edit-post';

                                // DELETE

        if (delButtonIsPressed) {

            const parent = e.target.parentElement.parentElement;

            let id = e.target.parentElement.parentElement.dataset.id;
            let firstname = parent.querySelector('.main-firstname').textContent;
            let lastname = parent.querySelector('.main-lastname').textContent;
            let age = parent.querySelector('.main-age').textContent;
            let email = parent.querySelector('.main-email').textContent;
            let role = parent.querySelector('.main-userRole').textContent;

                DELId = e.target.parentElement.parentElement.dataset.id

                document.getElementById("delId").value = DELId
                document.getElementById("delName").value = firstname,
                document.getElementById("delName2").value = lastname,
                document.getElementById("delAge").value = age,
                document.getElementById("delEmail").value = email
                document.getElementById("delRoles").value = role

        }

                                            //EDIT

    if(editButtonIsPressed){

            const parent = e.target.parentElement.parentElement;

        let id = e.target.parentElement.parentElement.dataset.id;
        let firstname = parent.querySelector('.main-firstname').textContent;
        let lastname = parent.querySelector('.main-lastname').textContent;
        let age = parent.querySelector('.main-age').textContent;
        let email = parent.querySelector('.main-email').textContent;
        let role = parent.querySelector('.main-userRole').textContent;

        editId = e.target.parentElement.parentElement.dataset.id

        let fetchID = document.getElementById("id").value

        document.getElementById("id").value = editId,
        document.getElementById("editName").value = firstname,
        document.getElementById("editName2").value = lastname,
        document.getElementById("editAge").value = age,
        document.getElementById("editEmail").value = email
        document.getElementById("editRoles").value = role
        const select = document.getElementById('editRoles').getElementsByTagName('option')

            const arrayOfRoles = role.trim().split(' ');
            for(let i of arrayOfRoles) {
                if (i === 'ROLE_USER') {
                    select[0].selected = true;
                } else if (i === 'ROLE_ADMIN') {
                    select[1].selected = true;
                }
            }
        }
})
                                                        //EDITSUBMIT

editSubmit.addEventListener( 'click', (e) =>{
    modalEdit(e);
})
                                                        //EDIT
function modalEdit(e){
    e.preventDefault();

    let setRoles =(someRoles) => {
        let roles = [];
        if (someRoles.indexOf("ROLE_ADMIN") >= 0) {
            roles.push({id: 1, value: "ROLE_ADMIN", users: null, authority: "ROLE_ADMIN"});
        }
        if (someRoles.indexOf("ROLE_USER") >= 0) {
            roles.push({id: 2, value: "ROLE_USER", users: null, authority: "ROLE_USER"});
        }
        return roles;
    }

    let user = {
        id:$("#id").val(),
        firstname: $("#editName").val(),
        lastname: $("#editName").val(),
        age: $("#editAge").val(),
        email: $("#editEmail").val(),
        password: $("#editPassword").val(),
        roles:  setRoles(Array.from(document.querySelector('#editRoles').selectedOptions)
            .map(option => option.value))

    }

    fetch( '/updateSave/${fetchID}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(res => res.json())
        .then(() => location.reload())
}
                                                            //DELETESUBMIT

deleteSubmit.addEventListener( 'click', (e) =>{
    modaldelete(e);
})
                                                            // DELETE
function modaldelete(e) {
    e.preventDefault();

    let setRoles = (someRoles) => {
        let roles = [];
        if (someRoles.indexOf("ROLE_ADMIN") >= 0) {
            roles.push({id: 1, value: "ROLE_ADMIN", users: null, authority: "ROLE_ADMIN"});
        }
        if (someRoles.indexOf("ROLE_USER") >= 0) {
            roles.push({id: 2, value: "ROLE_USER", users: null, authority: "ROLE_USER"});
        }
        return roles;
    }

    let user = {
        id: $("#delId").val(),
        firstname: $("#delName").val(),
        lastname: $("#delName2").val(),
        age: $("#delAge").val(),
        email: $("#delEmail").val(),
        roles: setRoles(Array.from(document.querySelector('#delRoles').selectedOptions)
            .map(option => option.value))

    }

    fetch('/deleteUser/' + DELId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(() => {
            postsList.innerHTML = "";
            output = "";
            fetch("/allUsers")
                .then(res => res.json())
                .then(() => location.reload())
        })
}
