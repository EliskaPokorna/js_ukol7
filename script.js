const formular = document.querySelector("form")

const odebirat = (event) => {
    event.preventDefault()
    const email = document.querySelector("#email")
    const value = email.value
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${value}.`
}

formular.addEventListener("submit", odebirat)

/* DRUHÁ ČÁST */

const input = document.querySelector("#email")

input.addEventListener("input", () => {
    const index = input.value.indexOf("@")

    if(input.value === "" || index === -1) {
        input.classList.add("email-border")
    } else {
        input.classList.remove("email-border")
    }
})