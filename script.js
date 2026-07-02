function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let list = document.getElementById("taskList");

    let newTask = document.createElement("li");

    newTask.textContent = task;
    //Make the task clickable to mark it as completed
newTask.onclick = function () {

    if (newTask.style.textDecoration === "line-through") {
        newTask.style.textDecoration = "none";
        newTask.style.color = "black";
    } else {
        newTask.style.textDecoration = "line-through";
        newTask.style.color = "green";
    }
};
//Create a delete button for each task
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.onclick = function (event) {

    event.stopPropagation();

    newTask.remove();

};

    newTask.appendChild(deleteButton);

    list.appendChild(newTask);

    document.getElementById("taskInput").value = "";

}
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {

        alert("Please fill in all fields.");

        return false;

    }

    alert("Message sent successfully!");

    return true;

}