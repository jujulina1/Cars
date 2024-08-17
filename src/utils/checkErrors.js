export function checkErrors(elementName, elementValue) {

    let regex = '';
    let message = '';
  
    switch (elementName) {
        case 'brand':
            if (elementValue.length === 0) {

                message = 'Field Brand is required'
            }
            break;
        case 'model':
            if (elementValue.length === 0) {
                message = 'Field Model is required'
            }
            break;
        case 'description':
            if (elementValue.length < 12) {
                message = 'Description must be min 12 symbols'
            }
            break;
        case 'year':
            elementValue = Number(elementValue);
            if (elementValue < 1990 || elementValue > 2023) {
                message = 'Year must be between 1990 and 2023'
            }
            break;
        case 'image':
            regex = new RegExp(/^https?/);
            if (!regex.test(elementValue || elementValue.length === 0)) {
                message = 'Image must starts with http or https'

            }
            break;
        case 'price':
            elementValue = Number(elementValue)
            if (elementValue < 1) {
                message = 'Price must be possitive number'
            }
            break;
        case 'username':
            if (elementValue.length < 5) {
                message = 'Username should be at least 5 characters';
            }
            break;
        case 'email':
            regex = new RegExp(/^[A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]{2,3}$/);
            if (!regex.test(elementValue)) {
                message = 'Email is not valid'

            }
            break;
        case 'password':
            if (elementValue.length < 6) {
                message = 'The Password must be at least 6 symbols'

            }
            break;
        default: 
        
        break;

    }

    return message;
}

function checkErrorFields(errors) {

    let errorFileds = Object.values(errors).filter(x => x.length !== 0);
    if (errorFileds.length > 0) {
        return true;
    }
    return false;
}
function checkForEmptyFields(values) {
    return Object.values(values).includes('');
}
export function checkStatusButton(errors, values){
  
    let status = '';
    if (checkErrorFields(errors)) {
        status = true;
        
    }else if(checkForEmptyFields(values)){
        status = true;
       
    }else{
        status = false;
    }
    return status;
}
export function matchPassword(password, rePass) {
    if (password !== rePass) {
        return `The Password doesn't match`
    }
    return '';
}