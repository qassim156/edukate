const updateCourseDom = (arr) => {    
    
                for (const k in arr) {
                    
                    let link = "course-01.jpg";
                        console.log(arr[k].courseTitle);
                        let courseBox = document.createElement('div');
                        courseBox.classList.add('courses-box');
    
    
                        let courseImgDiv = document.createElement('div');
                        courseImgDiv.classList.add('card-image');
                        let courseImg1 = document.createElement('img');
                        let courseImg2 = document.createElement('img');
    
    
                        let courseCardBody = document.createElement('div');
                        courseCardBody.classList.add('courses-card-body');
                        let courseTitle = document.createElement('h4');
                        let courseText = document.createElement('p');
                        let courseSpan = document.createElement('span');
    
                        let courseUrl = document.createElement('a');
                        
                        let courseFooter = document.createElement('div');
                        courseFooter.classList.add('courses-card-footer');               
                        let courseSpan1 = document.createElement('span');
                        let courseSpan2 = document.createElement('span');
    
                        let courseIcon1 = document.createElement('i');
                        
                        let courseIcon2 = document.createElement('i');
                        
    
                          
                        console.log(k);
                        console.log(arr[k]);
                        
                        courseUrl.innerHTML = "Course info";
                        courseUrl.setAttribute('href', `/courses/$}`);
    
                        courseSpan1.innerHTML = "123";
                        courseSpan2.innerHTML = "263";
    
                        courseSpan1.appendChild(courseIcon1);
                        courseSpan2.appendChild(courseIcon2);
    
    
                        courseText.innerHTML = `${arr[k].topic}`;
                        
                        if(arr[k].subject == 1){
                            courseTitle.innerHTML = "Physics"         
                        }
                       
                        courseImg1.src = `../images/${link}`;
    
                        courseImg1.style.visibility = "hidden";
                        courseImg2.src = `../images/${link}`;
    


                        courseSpan.appendChild(courseUrl);
    
                        courseFooter.appendChild(courseSpan1);
                        courseFooter.appendChild(courseSpan2);
    
                        courseCardBody.appendChild(courseTitle);
                        courseCardBody.appendChild(courseText);
                        courseCardBody.appendChild(courseSpan);
    
                        courseImgDiv.appendChild(courseImg1);
                        courseImgDiv.appendChild(courseImg2);
    
                        courseBox.appendChild(courseImgDiv);
                        courseBox.appendChild(courseCardBody);
                        courseBox.appendChild(courseFooter);
    
                        // course.appendChild(courseBox);
    
                        document.querySelector('.courses-boxes').appendChild(courseBox);
    
                }
        

};

const allCourse = async() => {
    const  arr = await fetch('/course/all').then(response => {
    //  console.log(response);
        return  response.json();
 }).catch(err => console.log(err));
//  console.log(await arr);
    updateCourseDom(await arr);
};

const oneCourse = async() => {
    const  arr = await fetch(`/course/find/${1}`).then(response => {
     console.log(response);
        return  response.json();
 }).catch(err => console.log(err));
//  console.log(await arr);
};

oneCourse();
window.addEventListener('load' , (e) => {
    allCourse();
});

// allCourse();