const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then( response => response.json()) 
    .then(data => renderApiResult.textContent = JSON.stringify(data)) 
    .catch(error => console.log(error))

}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then( response => response.json())
    .then (data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.scr = data.avatar
      
    })
    .catch(error => console.log(error))
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body:JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
.then(response => response.json())
.then(data => alertApi.textContent = data)
.catch(error => console.log(error));
}

function updateUser(updatedUser, id) { 
    fetch(`${url}/ ${id}`, {
        method: "PUT",
        body:JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));

}

function deleteUser (id) {
    fetch(`${url}/ ${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = (data))
    .catch(error => console.error(error))

}

const newUser = {
    name: "elitonlima",
    avatar: "https://picsum.photos/200/300",
    city: "recife",
}
//addUser(newUser)

const updatedUser =  {
name:"rogerio prata",
avatar:"https://picsum.photos/200/300",
city:"camaragibe"
}
//updateUser(updatedUser, 9)

deleteUser(13)
getUsers()
getUser(9)