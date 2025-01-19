var form = document.getElementById("signup-form");
var submitBtn = document.getElementById("submit-btn");
   

const getDatas = () =>{
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value; 
    console.log({userid, password});   
    return {userid, password};
}
const postData = async() => {  
    document.getElementById('userid').value = '';
    document.getElementById('password').value = '';
    const {userid, password} = getDatas();   
    console.log(userid) 
    await axios.post(
            '/auth/signup', 
            {
                userid, 
                password,
            }
        ).then(response => {
            console.log(response.data.data);
        }).catch(err => console.log(err));
}

function handleSubmit(e){
    e.preventDefault();
    const username = document.getElementById('userid').value;
};

function submitForm(event) {
    event.preventDefault();
    postData();
    getDatas();

}

form.addEventListener('submit', submitForm);
submitBtn.addEventListener('click', submitForm);

      
