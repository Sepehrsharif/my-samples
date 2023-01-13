let form        = document.querySelector('#appointmentForm');
let userName    = document.querySelector('#username');
let userEmail   = document.querySelector('#useremail');
let userPhone   = document.querySelector('#userphone');
const userNamePattern = /^[a-zA-Z]{5,32}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
})

form.contactName.addEventListener('keyup', e =>{
    if (e.target.value) {
        userName.textContent =`Full Name: ${e.target.value}`; 
        if (userNamePattern.test(e.target.value)) {
            console.log(userNamePattern.test(e.target.value));
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
         }
         else{
            console.log("inja");
            e.target.classList.add("is-invalid");
        }    
    }
    else
    userName.innerHTML =`<i class="text-danger">Please enter your name</i>`;
})

form.contactEmail.addEventListener('keyup', e =>{
    if (e.target.value) {
        userEmail.textContent =`Email: ${e.target.value}`;
    }
    else
    userEmail.innerHTML =`<i class="text-danger">Please enter your Email</i>`;
})

form.contactPhone.addEventListener('keyup', e =>{
    if (e.target.value) {
        userPhone.textContent =`Phone: ${e.target.value}`;
    }
    else
    userPhone.innerHTML =`<i class="text-danger">Please enter your phone number</i>`;
})

function submit(e){
console.log(e);
}