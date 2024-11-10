const input = document.getElementById("taskInput");
let ajouterButton = document.getElementById("submit");
let modifierButton = document.getElementById("edit");

function ajoutTache() {
  const ul = document.getElementById("tachesList");
  const tacheText = input.value;
  if (tacheText === "") {
    alert("Veuillez ajouter une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");
  li.textContent = tacheText;
  ul.appendChild(li);

   // bouton Supprimer
   const supprimerButton = document.createElement("button");
   supprimerButton.textContent = "Supprimer";
   supprimerButton.classList.add("btn", "btn-danger", "ms-2");
   supprimerButton.onclick = function () {
     li.remove();
   };

//li.appendChild(ModifierButton);
  li.appendChild(supprimerButton);
  input.value = "";
}

function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll("li");
    console.log();
    
    
    taskItems.forEach(item => {
      tasks.push(item.firstChild.textContent); // Ajouter le texte de chaque tâche à un tableau
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}