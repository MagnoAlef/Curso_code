function show(){
    //Obter elemento pelo id
    const contactList = document.getElementById('contact-list')
    console.log(contactList) // Ira pega a ul do html
    
    const listElements = document.getElementsByTagName('li')
    console.log(listElements) // Ira pegar todas li

    const constactInput= document.getElementsByClassName('contact-input')
    console.log(constactInput) // Ira pegar a classe do input

    const contacts = document.querySelectorAll('#contact-list > li > label') //Pega o id depois a li depois a label
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}