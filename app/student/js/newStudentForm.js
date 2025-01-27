let addStudentButton = document.querySelector(".add-student-btn");

let dd = new Date().getFullYear();


//add students events
var registerBtn = document.getElementById("register-btn");
var cancelBtn = document.getElementById("cancel-btn");
const newStudentForm = document.getElementById('container');

const allStudents = async() => {
    await axios.get('/student/all').then(response => {
     return  responxe.data;
 }).catch(err => console.log(err));
};

const generateId = (total) => {
    if(total < 10){
        return "ED"+ dd + `000${total}`;
    }else if(total > 9 && total < 100){
        return "ED"+ dd + `00${total}`;
    }else if(total > 99 && total < 1000){
        return "ED"+ dd + `0${total}`;
    }
}

const setNewStudent = async(e) =>{
    // e.preventDefault();
    
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

        await axios.post(
            '/student/register',
            {
              userid , password, firstname , lastname, age, dob, email, 
              gender, phone , address
            }
        ).then(response => {
            console.log(response);
            return {response, message: "Student successfully created"};
        }).catch(err => console.log(err));

        closeNewStudentForm();
    
}

const openNewStudentForm = (e) =>{
    window.location.replace('/admin/addstudent.html');
    // e.preventDefault();
    // console.log("clicked");
    // newStudentForm.style.display = "flex";
}
const closeNewStudentForm = (e) =>{
    // e.preventDefault();
    setTimeout(() =>{
        window.location.replace('/admin/students.html');
        newStudentForm.style.display = "none";
    }, 1000)

    // newStudentForm.style.display = "none";    
}


addStudentButton.addEventListener('click', openNewStudentForm);
registerBtn.addEventListener('click', setNewStudent);
cancelBtn.addEventListener('click', closeNewStudentForm);


// let a = [10, 20, 30, 40, 50];
// for (let item of a) {
//     console.log(item);
// }
student = allStudents();
//  ** Function that displays the movies to the DOM **
showStudentTables = (students) => {
  
    // Create a variable that grabs id or class
    var tableEl = document.querySelector(".tr");
  
    // Loop through object
    for (var student of students) {
  
      // Within loop create an img element
      var td = document.createElement('td')
  
      // Set attribute
      td.setAttribute('data-id', userid)
  
      // Set source
      td .innerHTML = `${student}}`
  
      // Add event listener to handleMovieSelection() onClick
      imageElement.addEventListener('click', e => {
        handleMovieSelection(e)
      })
      // Append the imageElement to the dom_element selected
      tr.appendChild(td);
    }
  }