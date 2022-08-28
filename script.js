// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    addDoc,
    doc, 
    updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwrZHYhJPYSf6tcBiYW6APW4KImo7DowE",
    authDomain: "to-do-live-6dd61.firebaseapp.com",
    projectId: "to-do-live-6dd61",
    storageBucket: "to-do-live-6dd61.appspot.com",
    messagingSenderId: "1062570535637",
    appId: "1:1062570535637:web:3246e6596dd105bb63505c",
    measurementId: "G-HE547XVVYM"
  };

   let EltodoInput = document.getElementById('todo-input');
   let Elmitsub = document.getElementById('mitsub');

   Elmitsub.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        status: 'active',
        text: EltodoInput.value
    })

    EltodoInput.value = "";


/*     .then(() =>{
        Elmitsub.reset();
    }) */
   })

   

   

    //event.preventDefault();
 


  //init firebase app
  initializeApp(firebaseConfig);

  //init services
  const db =  getFirestore();

  //collection ref
  const colRef = collection(db, 'todo-items');


 

  function getItems(){
    getDocs(colRef)
    .then((snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        items.push({
            Id: doc.id,
            ...doc.data()
        });
      })
      generateItem(items);
    }) 
  }

  function generateItem(items){

    let itemsHTML = "";
    items.forEach((item) => {
        console.log(item);
        itemsHTML += `
            <div class="todo-item">
                <div class="check">
                    <div data-id="${item.Id}" class="check-mark ${item.status == 'completed' ? 'checked' : ''}">
                    <img src="../images/icon-check.svg" alt="check icon" srcset="">
                    </div>
                </div>
                <div class="todo-text">
                    ${item.text}
                </div>
            </div>
        `
    })

    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();
  }


  function createEventListeners(){
adad
        let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark")
        todoCheckMarks.forEach((checkMark) => {
            checkMark.addEventListener("click", function(){
                markCompleted(checkMark.dataset.id);

            })
        })
  }

  function  markCompleted(id){
    console.log(id);
    const docRef = doc(db, "todo-items", id);
    console.log(docRef);
        // if(final ==  'status')
        // {
        //     updateDoc(docRef, {
        //         status: 'completed'
        //     })
        // }
    }



  getItems();