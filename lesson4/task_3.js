function rightForm() {
    var regExp_name = /^[a-zа-яё]+$/gi,
        regExp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        regExp_phone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/,
        regExp_message = /[a-zа-яё0-9]/;
        
 let name = document.getElementsByName('name')[0].value;
 
   // имя
    if(regExp_name.test(name) === true) {
        document.getElementById('name').className = 'ok';
    } else {
        document.getElementById('name').className = 'error';
    }
 
 document.querySelector('.button').addEventListener("click", rightForm);
