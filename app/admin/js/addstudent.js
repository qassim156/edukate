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


        try{
            const url = '/student/register';

            const jsonData = JSON.stringify({
                userid , password, firstname , lastname, age, dob, email, 
                gender, phone , address
              }
            ); 
            
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            
            fetch(url, {
            
              method: 'POST', 
              headers: headers,
              body: jsonData
            
            }).then(response => {
            
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              console.log(response);
                        isDone = true;
                        closeNewStudentForm(e, isDone);
              return response.json();
            
            }).then(responseData => {
            
              console.log('Todo created successfully:', responseData);  
            
            }).catch(error => {
            
              console.error('Error:', error);
              
            });

        }catch{

        }

        
    
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

