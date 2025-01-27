//add students events
var registerBtn = document.getElementById("register-btn");
var cancelBtn = document.getElementById("cancel-btn");


const setNewStudent = async(e) =>{
        e.preventDefault();
    
    //input values
        var firstname = document.getElementById("firstname").value;
        var  lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var dob = document.getElementById("dateofbirth").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var password = "" + lastname + "pass"
        var userid = document.getElementById("userid").value;
        var isDone = false;
         await axios.post(
            '/student/register',
            {
              userid , password, firstname , lastname, age, dob, email, 
              gender, phone , address
            }
        ).then(response => {
            console.log(response);
            isDone = true;
        }).catch(err => console.log(err));
            
        // closeNewStudentForm(e, isDone);
    
}

const openNewStudentForm = (e) =>{
    // window.location.replace('/addstudent.html');
    // e.preventDefault();
    // console.log("clicked");
    // newStudentForm.style.display = "flex";
}
const closeNewStudentForm = (e, isDone) =>{
    e.preventDefault();
    setTimeout(() =>{
        if(isDone){
            window.location.replace('/admin/students.html');
        }else{

        }
    }, 1000)

    // newStudentForm.style.display = "none";    
}



registerBtn.addEventListener('click', (e) => {
    setNewStudent(e)
});
cancelBtn.addEventListener('click', closeNewStudentForm);

