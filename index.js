document.addEventListener('DOMContentLoaded', () => {
    form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
      let val = e.target.berserk.value
      console.log(val)
        handleSubmit(val)
        form.reset()
        factFilter(val)
    })
    window.addEventListener("keydown", checkKeyPress);
    
    document.querySelector('#img1').addEventListener('click', newPic)
})


let bserkDarkMode = false;
const toggleDarkMode = () => {
  let element = document.querySelector('#berserkData');
  element.classList.toggle("dark-mode");
}

const checkKeyPress = (key) => {
    eclipse = document.querySelector('#keyE')
  if (key.keyCode === 69) { 
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
  const newPic = (e) => {
    let change = e.target
    if(change.src ="https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png/revision/latest?cb=20170513170600" ) {
      change.src ="https://i.guim.co.uk/img/media/0564caa6e98239db85eb91f7bbbdc8e5097e809d/1_0_732_439/master/732.jpg?width=1200&quality=85&auto=format&fit=max&s=b1a70c9df7d5a1371c475b3312af98ed"
    }
    }

    berserkFacts = ['Casca\'s english voice actor in the 1997 anime is Carrie Keranen, voice of Lux in Leage of Legends.',
    'Guts almost used a katana as his main weapon before Kantaro Miura settled on his signature Dragon Slayer greatsword', 'Farnese\'s name originates from medieval italy, and belonged to aristocrats and the wealthy alike.',
    "Griffith\'s androgyny seems to be no mere coincidence. Kentaro Miura being well versed in mythology and theology, he likely made Griffith both masculine and feminine, which is a representation of perfection in many religious beliefs and mythologies.",
    "Isidro means 'Gift of Isis', and is a very popular spanish name of egyptian and greek origin."]
    
    const factFilter = (value) => {
      p = document.querySelector('#fact')
      berserkFacts.filter(fact => {
        if(fact.startsWith(value)) {
          p.textContent = `Fact: ${fact}`
        }
      } )
    }