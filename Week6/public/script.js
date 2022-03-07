
let titansData = document.querySelector(".titans");


// fecthing the titans names and images
fetch("/titans")
  .then((response) => response.json())
  .then((titans) => {
    for (titan in titans) {
      // creating divs for teh 9 titans
      let titanDiv = document.createElement("div");
      titanDiv.classList.add("titans__titan");
      titanDiv.id = titan;
      titanDiv.innerHTML = `${titans[titan].name} <br>`;
      let titanImgDiv = document.createElement("div");
      titanImgDiv.classList.add("titans__titan-img")
      let titanImgText = document.createElement("p");
      titanImgText.id = titan + "Titan"
      
      let titanImg = document.createElement("img");
      titanImgDiv.appendChild(titanImgText);
      titanImg.src = `/images/${titan}.png`;
      titanImg.id = titan + "Image";
      titanImgDiv.appendChild(titanImg);
      titanDiv.appendChild(titanImgDiv)
      titansData.appendChild(titanDiv);
    }
    
  })
  .catch((err) => {console.log(err)});


  // saving teh last changed image to change it later
let last;
let lastImg;
document.addEventListener("click", (e) => {
  fetch("/titans/" + e.target.id)
  .then((response) => response.json())
  .then((titan => {
    // adding the animation to the div so the image moves from right to left and from left to right
    if (last) {
      last.style.display = "none";
      lastImg.animate([
        // keyframes
        { transform: 'translateX(-200px)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 300,
      });
      lastImg.style.transform = "translateX(0px)"
    }
    document.getElementById(`${e.target.id}Titan`).innerHTML = `<p>${titan.description}</p> <p>Height: ${titan.height} <br>Current User: ${titan.currentUser}</p> `;
    document.getElementById(`${e.target.id}Titan`).style.display = "flex";
    document.getElementById(`${e.target.id}Image`).animate([
      // keyframes
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-200px)' }
    ], {
      // timing options
      duration: 300,
    });
    document.getElementById(`${e.target.id}Image`).style.transform = "translateX(-200px)"
    last = document.getElementById(`${e.target.id}Titan`);
    lastImg = document.getElementById(`${e.target.id}Image`);
  }))
  .catch((err) => {console.log(err)});
})

