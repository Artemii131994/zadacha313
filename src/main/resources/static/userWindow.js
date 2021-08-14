// const postsList = document.querySelector("#allUsers");
// let output = '';
//
// const renderPosts = (posts) =>{
//     posts.forEach(post =>{
//         let userRole = "";
//         for (let i = 0; i < post.roles.length; i++) {
//             userRole += " " + post.roles[i].name;
//         }
//         output +=`
//         <tr data-id="${post.id}" id="row-user-${post.id}">
//                             <td class="main-id" id="main-id-${post.id}">${post.id}</td>
//                             <td class="main-firstname" id="main-firstname-${post.id}">${post.firstname}</td>
//                             <td class="main-lastname" id="main-lastname-${post.id}">${post.lastname}</td>
//                             <td class="main-age" id="main-age-${post.id}">${post.age}</td>
//                             <td class="main-email" id="main-email-${post.id}">${post.email}</td>
//                             <td class="main-userRole" id="main-userRole-${post.id}">${userRole}</td>
//                             </tr>`
//     });
//     postsList.innerHTML = output;
// }
//
// const urlList = '/allUsers';
//
// //Method GET
//
// fetch(urlList)
//     .then(res => res.json())
//     .then(data => renderPosts(data))