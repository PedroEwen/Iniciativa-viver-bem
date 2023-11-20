  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js"
  import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"

  const input = document.getElementById("cpf")

  input.addEventListener("keypress", () => {
    let inputLength = input.value.length
// 123.456.789-11
    if(inputLength === 3 || inputLength === 7) {
      input.value += "." 
    } else if(inputLength === 11) {
      input.value += "-"
    }
  })
  
  const firebaseConfig = {
    apiKey: "AIzaSyCLR2j6WAalg4BR6HcEJOyPnSLpfB-XRaI",
    authDomain: "form-contact-vb.firebaseapp.com",
    projectId: "form-contact-vb",
    storageBucket: "form-contact-vb.appspot.com",
    messagingSenderId: "241245954612",
    appId: "1:241245954612:web:4f865ccacf83189ce1e061",
    measurementId: "G-J3NS3W69DQ"
  };

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  const db = getFirestore(app)
  const collectionForm = collection(db,'forms')

  const formContact =  document.getElementById("form")
 formContact.addEventListener('submit', e =>{
    addDoc(collectionForm, {
        name: e.target.name.value,
        email: e.target.email.value,
        cpf: e.target.cpf.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
        createdAt: serverTimestamp()
    })
    .then(doc => console.log('Document criado com sucesso - ID:', doc.id))
    .catch(console.log)
 })
 function