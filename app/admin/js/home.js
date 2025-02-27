const url = '/student/all';

const jsonData = JSON.stringify({ 
    title: 'Buy groceries',
    completed: false
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
  return response.json();

}).then(responseData => {

  console.log('Todo created successfully:', responseData);  

}).catch(error => {

  console.error('Error:', error);
  
});