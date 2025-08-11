// Catching HTML elemnts
let myForm = document.querySelector(".form");
let myInp = document.querySelector("#inp");
let linkInp = document.querySelector("#link");
let mySub = document.querySelector("#submit");
let tasksCont = document.querySelector(".tasks");
let timeIcon = document.querySelector(".icon");
let daysMenu = document.querySelector(".days");
let deadlineText = document.querySelector(".deadline-text");
let themeModeIcon = document.querySelector(".theme-mode");
// Clicking Event On Time Icon
timeIcon.onclick = function () {
    if (daysMenu.classList.contains("activated")) {
        daysMenu.classList.remove("activated");
    } else {
        daysMenu.classList.add("activated");
    }
}
// Creating array of tasks we add
let arrOfTasks = [];
// Activating getting data from local storage fucntion
gettingDataFromLstorage();
// Check if there are elemtents in the storage or not
if (window.localStorage.getItem("task")) {
    arrOfTasks = JSON.parse(window.localStorage.getItem("task"));
}
let AlldivTask = document.querySelectorAll(".div-task");
// Theme Mode Customisation
themeModeIcon.onclick = function () {
    if (myForm.classList.contains("blacked-form")){
        myForm.classList.remove("blacked-form");
        document.body.style.backgroundColor = "white";
        themeModeIcon.classList.remove("blacked-theme-mode");
        tasksCont.classList.remove("blacked-tasks");
        for (let i = 0; i < AlldivTask.length; i++) {
            AlldivTask[i].classList.remove("blacked-div-task");
        } 
    } else {
        document.body.style.backgroundColor = "black";
        myForm.classList.add("blacked-form");
        themeModeIcon.classList.add("blacked-theme-mode");
        tasksCont.classList.add("blacked-tasks");
        for (let i = 0; i < AlldivTask.length; i++) {
            AlldivTask[i].classList.add("blacked-div-task");
        } 
    }
}
// Activating Deadline Validation function 
deadlinevalidation(arrOfTasks);
// Date customisation
let arrOfStrMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dateNow = new Date();
let thisMonth = dateNow.getMonth();
let today = dateNow.getDate();
dateNow.setDate(31);
let numOfDays = dateNow.getDate();
let indxMonth = dateNow.getMonth();
let ref = new Date();
let arrOfDays = [];
if (indxMonth == ref.getMonth() && numOfDays == 31) {
    for (let i = 1; i <= 31; i++) {
        if (today > i) {
            let deacv = document.createElement("span");
            deacv.className = "deactivated";
            deacv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(deacv);
        } else {
            let acv = document.createElement("span");
            acv.classList.add("activated");
            acv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(acv);
            acv.onclick = function () {
                deadlineText.classList.add("added-deadline");
                deadlineText.innerHTML = "";
                deadlineText.innerHTML = `Your Deadline Is ${i} ${arrOfStrMonths[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
                deadlineText.classList.add("setted-deadline");
            }
        }
    }
} else if (indxMonth == ref.getMonth() && numOfDays == 1){
    dateNow.setDate(30);
    for (let i = 1; i <= 30; i++) {
        if (today > i) {
            let deacv = document.createElement("span");
            deacv.className = "deactivated";
            deacv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(deacv);
        } else {
            let acv = document.createElement("span");
            acv.classList.add("activated");
            acv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(acv);
            acv.onclick = function () {
                deadlineText.classList.add("added-deadline");
                deadlineText.innerHTML = "";
                deadlineText.innerHTML = `Your Deadline Is ${i} ${arrOfStrMonths[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
                deadlineText.classList.add("setted-deadline");
            }
        }
    }
} else if (indxMonth == ref.getMonth() && numOfDays == 2){
    dateNow.setDate(29);
    for (let i = 1; i <= 29; i++) {
        if (today > i) {
            let deacv = document.createElement("span");
            deacv.className = "deactivated";
            deacv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(deacv);
        } else {
            let acv = document.createElement("span");
            acv.classList.add("activated");
            acv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(acv);
            acv.onclick = function () {
                deadlineText.classList.add("added-deadline");
                deadlineText.innerHTML = "";
                deadlineText.innerHTML = `Your Deadline Is ${i} ${arrOfStrMonths[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
                deadlineText.classList.add("setted-deadline");
            }
        }
    }
} else if (indxMonth == ref.getMonth() && numOfDays == 3) {
    dateNow.setDate(28);
    for (let i = 1; i <= 28; i++) {
        if (today > i) {
            let deacv = document.createElement("span");
            deacv.className = "deactivated";
            deacv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(deacv);
        } else {
            let acv = document.createElement("span");
            acv.classList.add("activated");
            acv.appendChild(document.createTextNode(i));
            daysMenu.appendChild(acv);
            acv.onclick = function () {
                deadlineText.classList.add("added-deadline");
                deadlineText.innerHTML = "";
                deadlineText.innerHTML = `Your Deadline Is ${i} ${arrOfStrMonths[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
                deadlineText.classList.add("setted-deadline");
            }
        }
    }
}
// Adding tasks event conditions
mySub.onclick = function () {
    if (myInp.value.trim() !== "" && linkInp.value.trim() !== "" && deadlineText.innerHTML !== "") {
        pushingEleToPage(myInp.value, deadlineText.innerHTML, linkInp.value);
        myInp.value = "";
        linkInp.value = "";
        deadlineText.innerHTML = "";
    } else if (myInp.value.trim() !== "" && linkInp.value.trim() == "" && deadlineText.innerHTML !== "") {
        pushingEleToPage(myInp.value, deadlineText.innerHTML);
        myInp.value = "";
        deadlineText.innerHTML = "";
    }
}
// Deleting tasks event
tasksCont.addEventListener("click", function (e) {
    // Checking if this element is Delete span
    if (e.target.classList.contains("del-task")) {
        e.target.parentElement.remove();
        // Activating removing task from local storage function
        removingTaskFromLstorage(e.target.parentElement.getAttribute("id"));
    }
    // Checking if this element is the task text div
    if (e.target.classList.contains("div-task")) {
        // Activating Toggle on Completed status into the object function
        toggleOnCompletedStatus(e.target.getAttribute("id"));
        // Toggle the element with done class
        e.target.classList.toggle("done");
    }
});
// Pushing elements function
function pushingEleToPage(taskTxt, deadlineText, taskLink) {
    let myObj = {
        title: taskTxt,
        link: taskLink,
        theDate: Date.now(),
        deadline: deadlineText,
        completed: false
    }
    // Pushing the object into my array of tasks
    arrOfTasks.push(myObj);
    // Activating Creating elements function
    creatingElesInPage(arrOfTasks);
    // Activating deadline validation function
    // deadlinevalidation(arrOfTasks);
    // Activating storing data in local storae function
    storingDataInLstorage(arrOfTasks);
}
// Creating elements function
function creatingElesInPage(arrOfTasks) {
    // Empty the tasks container
    tasksCont.innerHTML = "";
    // Looping on the array of tasks
    arrOfTasks.forEach((task) => {
        let myDiv = document.createElement("div");
        myDiv.className = "div-task";
        // Keeping the class we added in the element
        if (task.completed) {
            myDiv.className = "div-task done";
        }
        myDiv.setAttribute("id", task.theDate);
        let taskTxt = document.createElement("p");
        taskTxt.className = "text-task";
        taskTxt.appendChild(document.createTextNode(task.title));
        myDiv.appendChild(taskTxt);
        if (task.link) {
            let myLink = document.createElement("a");
            myLink.className = "link-task";
            myLink.setAttribute("href", task.link);
            myLink.appendChild(document.createTextNode("Link"));
            myDiv.appendChild(myLink);
        } else {
            console.log("Empty Task Link");
        }
        let myDeadline = document.createElement("span");
        myDeadline.className = "deadline-span";
        myDeadline.appendChild(document.createTextNode(task.deadline));
        let myDel = document.createElement("span");
        myDel.classList.add("del-task");
        myDel.appendChild(document.createTextNode("Delete"));
        myDiv.appendChild(myDel)
        myDiv.appendChild(myDeadline);
        tasksCont.appendChild(myDiv);
    });
    storingDataInLstorage(arrOfTasks);
}
// Customising Deadlione Validation 
function deadlinevalidation(arrOfTasks) {
    let thisRef = new Date();
    let thisDay = thisRef.getDate();
    arrOfTasks.forEach((task) => {
        if (thisDay > Number.parseInt(task.deadline.match(/\d+/g))) {
            task.deadline = `The Deadline Has Passed`;
        }
    })
}
// Storing Data function
function storingDataInLstorage(arrOfTasks) {
    window.localStorage.setItem("task", JSON.stringify(arrOfTasks));
}
// Getting data function
function gettingDataFromLstorage() {
    let myData = window.localStorage.getItem("task");
    if (myData) {
        let approving = JSON.parse(myData);
        creatingElesInPage(approving);
    }
}
// Removing task from localtsorage function
function removingTaskFromLstorage(taskId) {
    for (let i = 0; i < arrOfTasks.length; i++) {
        arrOfTasks = arrOfTasks.filter(function (task) {
            return task.theDate != taskId;
        });
        storingDataInLstorage(arrOfTasks);
    }
}
// Toggle on completed status on the object function
function toggleOnCompletedStatus(completedId) {
    // Looping on the elemtns of the array of tasks
    for (let i = 0; i < arrOfTasks.length; i++) {
        // Checking to reach the elemetn we clciked
        if (arrOfTasks[i].theDate == completedId) {
            if (arrOfTasks[i].completed == false) {
                arrOfTasks[i].completed = true;
            } else {
                arrOfTasks[i].completed = false;
            }
        }
    }
    storingDataInLstorage(arrOfTasks);
}
// window.localStorage.clear();
// Footer Cutomisation
let footerText = document.querySelector(".footer-message");
footerText.innerHTML = `Copyright © ${dateNow.getFullYear()} https://github.com/Ahmed-ibrahimm`;