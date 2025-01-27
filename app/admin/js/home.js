
const count = (gp) => {
    let c = 0;  
    for(x in gp){
        c+=1;
    }
    return c;
}


const allStudent = async() => {

    const arr = await fetch('/student/all').then(response => {
          console.log(response);
            return response.json();
        }).catch(err => console.log(err));
}
const allCourse = async() => {
    await fetch('/course/all').then(response => {
    //  console.log(response);
        return  response.json();
 }).catch(err => console.log(err));
//  console.log(await arr);
    updateDom((await count(arr)));
};

const updateDom = (arr) => {
    let adminname = document.querySelector("#admin-name").innerHTML;



    
}
