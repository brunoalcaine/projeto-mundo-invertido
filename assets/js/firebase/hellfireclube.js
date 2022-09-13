import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHellfireClube(subscription) {
    debugger
    const db =  getFirestore(app)
    const hellfireclubeCollection = collection(db,'hellfireclube')
    const docRef = await addDoc(hellfireclubeCollection, subscription)
    return docRef.id
}

@bruno.alcaine