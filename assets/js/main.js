import app from './firebase/app.js'
import { subscribeToHellfireClube } from './firebase/hellfireclube.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // salvar no banco de dados!
    const subscriptionId = subscribeToHellfireClube(subscription)
    console.log('Inscrito com sucesso: $(subscription}')
})

@bruno.alcaine