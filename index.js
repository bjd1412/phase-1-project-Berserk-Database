document.addEventListener('DOMContentLoaded', () => {
    form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
      let val = e.target.berserk.value
      console.log(val)
        handleSubmit(val)
        form.reset()
    })
    window.addEventListener("keydown", checkKeyPress);
})

let bserkDarkMode = false;
const toggleDarkMode = () => {
  let element = document.querySelector('#berserkData');
  element.classList.toggle("dark-mode");
}

const checkKeyPress = (key) => {
  if (key.keyCode === 70) { //"F" has been pressed
    bserkDarkMode = !bserkDarkMode;
    console.log("Berserk Dark mode: " + bserkDarkMode);
    toggleDarkMode();
  }
};

const handleSubmit = (value) => {

    let title = document.querySelector("#berserkData h1")
    let summary = document.querySelector('#summary')
    let summary1 = document.querySelector('#summary1')
    let img = document.querySelector('#img1')
    let details = document.querySelector('#details')
    let details1 = document.querySelector('#details1')
  
    fetch(`http://localhost:3000/Database/${value}`)
    .then(res => res.json())
    .then(val => {
        title.innerText = val.title
        summary.innerText = val.summary
        summary1.innerText = val.summary1
        img.src = val.imgURL
        details.innerText = val.details
        details1.innerText = val.details1
    })
  }
  