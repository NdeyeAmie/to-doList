// const input = document.getElementById("taskInput");
// let ajouterButton = document.getElementById("submit");
// let modifierButton = document.getElementById("edit");

// function ajoutTache() {
//   const ul = document.getElementById("tachesList");
//   const tacheText = input.value;
//   if (tacheText === "") {
//     alert("Veuillez ajouter une tâche !");
//     return;
//   }

//   const li = document.createElement("li");
//   li.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");
//   li.textContent = tacheText;
//   ul.appendChild(li);

//    // bouton Supprimer
//    const supprimerButton = document.createElement("button");
//    supprimerButton.textContent = "Supprimer";
//    supprimerButton.classList.add("btn", "btn-danger", "ms-2");
//    supprimerButton.onclick = function () {
//      li.remove();
//    };

// //li.appendChild(ModifierButton);
//   li.appendChild(supprimerButton);
//   input.value = "";
// }

// function saveTasks() {
//     const tasks = [];
//     const taskItems = document.querySelectorAll("li");
//     console.log();
    
    
//     taskItems.forEach(item => {
//       tasks.push(item.firstChild.textContent); // Ajouter le texte de chaque tâche à un tableau
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  addTask()
})

function addTask() {
  const taskText = taskInput.value.trim()
  if (taskText) {
    // enregistrer dans le dom
    addTaskToDOM(taskText)
    // TODO: enregistrer dans le localStorage
    saveTaskToLocalStorage(taskText)
    // reset formulaire
    form.reset()
  } else {
    alert("Please enter the task")
  }
}

function addTaskToDOM(task) {
  // creation de la balise li
  const li = document.createElement("li");
  li.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");
  li.textContent = task
  // creation du bouton
  const button = document.createElement("button")
 button.classList.add("btn", "btn-danger", "ms-2");
  button.textContent = "Supprimer"
  button.onclick = function () {
    // TODO: gerer la logic de la suppression
    li.remove();
  }
  // ajout du buton dans le li
  li.appendChild(button)
  // mettre le li dans la liste ul
  taskList.appendChild(li)
}

function saveTaskToLocalStorage(task) {
/**
1- Ajouter dans le localStorage
  a- Serialiser: JSON.stringify()
2- Recuperer depuis localStorage
  b- Deserialiser: JSON.parse()
 */
  // recuperation des elements depuis localStorage sous forme de string
  const notParsedTasks = localStorage.getItem("tasks") || "[]"
  
  // convertion des taches en string vers le type initial(tableau)
  const tasks = JSON.parse(notParsedTasks);
  // ajouter la nouvelle tache
  tasks.push(task)
  
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTaks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []

  tasks.forEach((element) => addTaskToDOM(element));  
}

loadTaks()