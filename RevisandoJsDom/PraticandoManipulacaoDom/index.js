function addContact(){

const contactSection = document.getElementById('contacts-list')
const h3 = document.createElement('h3')
h3.innerText = 'Contato'
const ul = document.createElement('ul')
const nameLi = document.createElement('li')
nameLi.innerText = 'Nome:'
const nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.name = 'fullname'
nameLi.appendChild(nameInput)
ul.appendChild(nameLi)
ul.appendChild(document.createElement('br'))

const phoneLi = document.createElement('li')
phoneLi.innerText = 'Telefone:'
const PhoneInput = document.createElement('input')
PhoneInput.type = 'text'
PhoneInput.name = 'fullname'
phoneLi.appendChild(PhoneInput)
ul.appendChild(phoneLi)
ul.appendChild(document.createElement('br'))

const adressLi = document.createElement('li')
adressLi.innerText = 'Telefone:'
const adressInput = document.createElement('input')
adressInput.type = 'text'
adressInput.name = 'address'
adressInput.id = 'adress'
phoneLi.appendChild(adressInput)
ul.appendChild(adressLi)
ul.appendChild(document.createElement('br'))

contactSection.append(h3,ul) // Append adicionar mais de um elemento

}
function removeContact(){
    const contactSection = document.getElementById('contacts-list')
    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')
    contactSection.removeChild(title[title.length - 1]) // Para pegar ultimo elemento
    contactSection.removeChild(contacts[contacts.length - 1]) // Para pegar ultimo elemento

}