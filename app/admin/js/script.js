let totalStudents = document.getElementById("total-students");
let totalClass = document.getElementById("total-class");
let userRole = document.querySelectorAll("#user-role");
let adminname =  document.getElementById("admin-name");
let totalTeacher =  document.querySelector(".total-teacher");



const count = (gp) => {
      let c = 0;  
      for(x in gp){
          c+=1;
      }
      return c;
}



// student - class
// teacher - class
// courses - class
// 

//** VARIABLES */
 

//*  ALL FUNCTION  *******************//

/*
function to generate userid for new teacher
*/

// getTeacher - get a teacher
// setTeacher - create new Teacher

// getClasses - get all classes
// setClasses - add new class

// newMessage
// deleteMessage
// generateMeassageId

// getCourses get all courses
// setCourses create new courses

// newStudentList

const generateUserId = (userRole) => {
      if(userRole == 0){
          return;
      }else if(userRole == 1){

        fetch('/allStudentsId').then(response => {
          console.log(response);
          for (var id of response) {
            
          }
          response = "" + response 
          return response;
      }).catch(err => console.log(err));
      
      }else if(userRole == 2){

        fetch('/allTeacherId').then(response => {
          console.log(response);
          return response;
      }).catch(err => console.log(err));

      }else{

      }

        
      
      return "" + lastName + "pass";
};
const generatePassword = (lastName) => {
      return "" + lastName + "pass";
};



//  Students function  

const getStudent = () => {

};
const updateStudent = () => {

};

const getStudents = async() => {
       await axios.get('/student/all').then(response => {
        data = count(response.data);
        totalStudentDom(data);
    }).catch(err => console.log(err));
};
// getStudents();


const totalStudentDom = (text) => {
  let totalStudents = document.getElementById("total-students");
let totalClass = document.getElementById("total-class");
let userRole = document.querySelectorAll("#user-role");
let adminname =  document.getElementById("admin-name");
let totalTeacher =  document.querySelector(".total-teacher");

      totalStudents.innerHTML = text;
}





// totalStudents.innerHTML = updateDom();