
export const checkValidation = (email,password,fullName)=>{
    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // true/false value store in email
    const passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/
    .test(password);// true/false value store in password
    const fullNameValid=/^[a-zA-Z]+(?: [a-zA-Z'-]+)*$/.test(fullName);
    
    if(!emailValid) return "Email is not valid";
    if(!passwordValid) return "Password is not valid";
    if(!fullNameValid) return "Enter valid name";
    

    return null;

}