
const countW = (gp) => {
    let c = 0;  
    for(x in gp){
        c+=1;
    }
    return c;
}


const allStudent = async() => {

    const arr = await fetch('/courses/all').then(response => {
          console.log(response);
              
            return response.json();
        }).catch(err => console.log(err));
        totalStudentNm = document.querySelector("#total-students").innerHTML = `${countW(arr)}`;

}

allStudent();