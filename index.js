document.addEventListener('DOMContentLoaded', () => {
    form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
      let val = e.target.berserk.value
      console.log(val)
        handleSubmit(val)
        form.reset()
    })
})