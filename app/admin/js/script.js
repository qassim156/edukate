let totalStudents = document.getElementById("total-students");
let totalClass = document.getElementById("total-class");
let userRole = document.querySelectorAll("#user-role");
let adminname =  document.getElementById("admin-name");


totalStudents.innerHTML = "120";
// student - class
// teacher - class
// courses - class
// 

//** VARIABLES */
 

//*  ALL FUNCTION  *******************//

// getStudent - get a particular students
// getStudents  - get all student
// setStudent - create new student
// countData

// getNew
// getNewTeacher
// getNewStudent
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
const getTotalStudent = (totalStudent) => {
    const jj = 0;
    for (const obj in totalStudent) {
        j+=1;  
    }  
    return
};
const getStudents = async() => {

      await axios.get('/student/all').then(response => {
        console.log(response);
    }).catch(err => console.log(err));
};
getStudents();


const setStudent = async() => {
  const currentTimestamp = new Date();
  const firstName = 'Qassim';
  const lastName = 'Qassim';
  const email = 'Qassim';
  const password = "" + lastName + "pass";
    
  await axios.post(
    '/student/register',
    {
      userid : "ED2025001", password : generatePassword(lastName), firstName : firstName , lastName : lastName, address : "19 oyesile street", 
      phoneNumer : Number("09022795917"), email : "adakoqassim@gmail.com", age : 98, 
      regDate: currentTimestamp,
    }
).then(response => {
    console.log(response);
}).catch(err => console.log(err));
};
setStudent();
// Teachers

const getTeacher = () => {

};
const getTeachers = () => {

};
const setTeacher = () => {

};

//Courses

const getCourse = () => {

};
const getCourses = () => {

};
const setCourse = () => {

};
// Message
const getMessage = () => {

};
const getMessages = () => {

};
const setMessage = () => {

};

const getClass = () => {

};
const getClasses = () => {

};
const setClass = () => {

};

const setNewTeacherList = () => {

}
const setNewStudentList = () => {
  
}
const chartDataUpdate = () => {

}

class Teacher {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
class Student {
  constructor(fullname, email, phone, address, 
    department, level, regDate,  age, userId,  totalCourses,
    coursesTaken, coursesPassed, coursesFailed, coursesRegistered,
    role, password, messsages
    

  ) {
    this.fullname = fullname;
    this.year = year;
  }
  getStudentName() {
    return this.fullname;
  }

}