alert("HMSA");

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var username = "JohnDoe"; // Replace this with the actual username

// Create a dummy element to hold the text
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = username;
dummy.select();

// Copy the text to the clipboard
document.execCommand("copy");

// Remove the dummy element
document.body.removeChild(dummy);

// Alert to confirm that the username has been copied
alert("Username copied to clipboard: " + username);

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });

    // Convert form data to string
    const dataString = JSON.stringify(formDataObject);

    // Create a blob with the data
    const file = new Blob([dataString], {type: 'text/plain'});

    // Create a link element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'appointment.txt'; // File name
    a.click();
});
