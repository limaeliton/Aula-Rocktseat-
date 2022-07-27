const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUsers) {
    axios.post(url ,newUsers) // tem essas duas maneiras de passar o objeto sendo necessário só uma
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser (id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser (id,userUpdate)
 {
    axios.put(`${url}/${id}`, userUpdate)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser (3)

const userUpdate = {
    name: "dell intel",
    avatar:"https://picsum.photos/200/300",
    city:"usa"
}


updateUser (4,userUpdate)

getUsers()
getUser(5)

const newUsers = {
    name: 'Olivia silva',
    avatar: 'https://picsum.photos/200/300',
    city:"recife"
}
//addNewUser(newUsers) 