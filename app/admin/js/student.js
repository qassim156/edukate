
const allStudent = async() => {

      const arr = await fetch('/student/all').then(response => {
            console.log(response);
              return response.json();
          }).catch(err => console.log(err));

      updateTableDom(arr);
}

  
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
  }


const updateTableDom = (arr) => {
   
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute('href', `/courses/$}`);


    var r = 0;
    for (const key of arr) {
    
        if(r < arr.length ){

        var table = document.getElementById("student-table");
        var row = table.insertRow(r+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
    
        cell1.innerHTML = `${key.firstname} ${key.lastname}`;
        cell2.innerHTML = `${key.userid}`;
        cell3.innerHTML = `${key.firstname} ${key.lastname}`;
        cell4.innerHTML = `${key.gender}`;
        cell5.innerHTML = `${key.address}`;
        cell6.appendChild(deleteBtn);
        
        r++;

        }
        

    }

}

allStudent();