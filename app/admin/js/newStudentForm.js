
var registerBtn = document.getElementById("register-btn");
var cancelBtn = document.getElementById("cancel-btn");
const newStudentForm = document.getElementById('container');


const openNewStudentForm = () =>{
    e.preventDefault();
    newStudentForm.style.dsplay = "flex"; 
}
const closeNewStudentForm = (e) =>{
    e.preventDefault();
    newStudentForm.style.display = "none";    
}


registerBtn.addEventListener('click', closeNewStudentForm);
cancelBtn.addEventListener('click', closeNewStudentForm);
