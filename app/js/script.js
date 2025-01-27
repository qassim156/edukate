var form = document.getElementById("signup-form");
var submitBtn = document.getElementById("submit-btn");

const route = (isAdmin) => {
        if(isAdmin == true){
            window.location.replace("/admin");
        }else{
            window.location.replace("/student");
        }
}

const getDatas = () =>{
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value; 
    // console.log({userid, password});   
    return {userid, password};
}
const postData = async() => {  
    const {userid, password} = getDatas();   
    console.log(userid) 
    await axios.post(
            '/login', 
            {
                userid, 
                password,
            }
        ).then(response => {
            console.log(response);
            route(response.data.isAdmin);
        }).catch(err => console.log(err));

}

function handleSubmit(e){
    e.preventDefault();
    const userid = document.getElementById('userid').value;
};

function submitForm(event) {
    event.preventDefault();
    postData();
    getDatas();

}

form.addEventListener('submit', submitForm);
// submitBtn.addEventListener('click', submitForm);
