// const addPostForm =document.querySelector('#addNewUser')
// const firstname =document.getElementById('name')
// const lastname =document.getElementById('name2')
// const age =document.getElementById('age')
// const email =document.getElementById('email')
// const password =document.getElementById('password')
// const roles =document.getElementById('roles')
//
// function fetchData() {
//     fetch("/allUsers")
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("ERROR")
//             }
//             return response.json()
//
//         })
//         .then(date => {
//             console.log(date)
//             const html = date
//                 .map(user => {
//                     let userRole = "";
//                     for (let i = 0; i < user.roles.length; i++) {
//                         userRole += " " + user.roles[i].name;
//                     }
//                     return `<tr></tr><td>${user.id}</td>
//                             <td>${user.firstname}</td>
//                             <td>${user.lastname}</td>
//                             <td>${user.email}</td>
//                             <td>${user.age}</td>
//                             <td>${userRole}</td>
//                             <td>
//                             <a  href="/updateSave/${user.id}" class="btn btn-primary eBtn" >Edit</a>
//                                 </td>
//                             <td>
//                             <a  href="/deleteUser/${user.id}" class="btn btn-danger delBtn">Delete</a>
//                             </td></tr>`
//                 })
//                 .join("")
//             console.log(html)
//             document.querySelector("#app").insertAdjacentHTML("afterbegin", html)
//         })
//         .catch(error => {
//             console.log(error);
//         });
//
// }
// fetchData();
// function postData() {
//     addPostForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         fetch("/new", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8'
//             },
//             body: JSON.stringify({
//                 name: firstname.value,
//                 name2: lastname.value,
//                 ageage: age.value,
//                 emailemail: email.value,
//                 passwordpassword: password.value,
//                 rolesroles: roles.value
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 const dataArr = [];
//                 dataArr.push(data);
//                 renderPosts(dataArr);
//             })
//     })
//
// }
// postData();
//
//
