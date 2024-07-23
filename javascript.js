// let / var 
let fname = document.getElementById('firstname'); // Getting ID
fname.addEventListener('input' , function(event){
   fname.value=fname.value.toUpperCase();
});


let phone = document.getElementById('tholaipesi');
let phoneError = document.getElementById('pherr');

phone.addEventListener('input', function(event){
    phone.value=phone.value.replace(/\D/g,'');
    let crtno = phone.value;
    if(crtno.length>10 || crtno.length<10){
        phoneError.style.color='red';
        phoneError.hidden=false;        
    }
    else{
        phoneError.hidden=true;
    }
});


const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|com|net|org|in|co)$/;


let email = document.getElementById('minanjal'); // Text Email
let emailError = document.getElementById('emailerror'); //Span

email.addEventListener('input', function(event){
    let inputValue = email.value;
    
    if (emailPattern.test(inputValue)) {
        emailError.hidden = true; // Valid email, hide error
    } else {
        emailError.style.color = 'red';
        emailError.hidden = false; // Invalid email, show error
    }
});
