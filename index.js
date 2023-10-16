// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });


function submitData(name, email){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
        // Create a new paragraph element
        const paragraph = document.createElement('p');
        // Set the text content of the paragraph to the response data
        paragraph.textContent = JSON.stringify(data);
  
        // Append the paragraph to an existing element on the page
        document.body.appendChild(paragraph);
      })
      .catch(function (error) {
        // Append the error message to the DOM
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
    })
  }

const configurationObject = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
}

