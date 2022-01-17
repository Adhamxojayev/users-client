

( async () =>{

    let response = await fetch('http://localhost:4500/api/data')
    let users = await response.json()
    for(let user of users){
        let li = document.createElement('li')
        li.textContent = user.username
        list.append(li)
    }

})()




