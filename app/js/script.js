var form = document.getElementById("signup-form");
var submitBtn = document.getElementById("submit-btn");
   

const getDatas = () =>{
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    console.log({username, email, password});   
    return {username, email, password};
}
const postData = async() => {  
    const {username, email, password} = getDatas();   
    console.log(username) 
    await axios.post(
            '/auth/signup', 
            {
                username,  
                email, 
                password,
            }
        ).then(response => {
            console.log(response.data.data);
        }).catch(err => console.log(err));
}

function handleSubmit(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
};

function submitForm(event) {
    event.preventDefault();
//   console.log("Form submitted");
    postData();
    getDatas();

}

form.addEventListener('submit', submitForm);
submitBtn.addEventListener('click', submitForm);

      
