console.log('%c HI', 'color: firebrick')

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=>res.json())
    .then(dogs => dogimg(dogs.message))
    .catch(error => console.error(error))

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=>res.json())
    .then(name => breeds(name.message))
    .catch(error => console.error(error))
   

function dogimg(allpics){
    const main = document.querySelector('#dog-image-container')
    allpics.forEach(allpicURL => {
      const newpic = document.createElement('img')
      newpic.src = allpicURL
      main.appendChild(newpic)
    })
}
function breeds(allnames){
    const main = document.querySelector('#dog-breeds')
    for (breedname in allnames){
        const li = document.createElement('li')
        li.textContent= breedname
        main.appendChild(li)
        colorchanger(li)
    }
}
// function dropdown(fullLists){

// }
function colorchanger(colors){
    colors.addEventListener('click', ()=>{
        colors.style.color ='blue';
        colors.style.fontSize='20px';
    })
}
