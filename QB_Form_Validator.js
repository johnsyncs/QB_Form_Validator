// Synctivate Inc.
// Fredericksburg, VA

fields = [
    {
        name: "name",
        value: "John",
        data_type: "text",
        required: true,
    },
    {
        name: "email",
        value: "johnh@synctivate.com",
        data_type: "email",
        required: true,
    },
    {
        name: "role",
        value: "admin",
        data_type: "multipleChoice",
        required: true,
        options: ["admin", "user", "guest"]
    },
    {
        name: "age",
        value: "30",
        data_type: "number",
        required: true,
    },
    {
        name: "birthday",
        value: "1990-01-01",
        data_type: "date",
        required: true,
    },
    {
        name: "is_admin",
        value: true,
        data_type: "checkbox",
        required: true,
    },

]

//testing

async function getValidationObjects() {
    // array to hold all validation objects
    let validationObjects = []
    // get all fields on the form
    let inputs = document.getElementsByTagName('input')
    Array.from(inputs).forEach(function(input) {
        // if data-validate equals True or true, add to validationObjects array
        if (input.hasAttribute('data-validate') && (input.getAttribute('data-validate')==='true' || input.getAttribute('data-validate')==='True')){
                let fieldObj = {
                    name: input.id,
                    value: input.value,
                    required: input.required,
                    data_type: input.getAttribute('data-type'),
                }
                validationObjects.push(fieldObj);
        }
    })
    let select = document.getElementsByTagName('select')
    // get all select fields on the form
    Array.from(select).forEach(function(input) {
        if (input.hasAttribute('data-validate') && (input.getAttribute('data-validate')==='true' || input.getAttribute('data-validate')==='True')){
        //if input is multiple choice, get the options and put them in an array
            let options = []
            for (let i = 0; i < input.options.length; i++) {
                options.push(input.options[i].value);
            }
            let fieldObj = {
                name: input.id,
                value: input.value,
                required: input.required,
                data_type: input.getAttribute('data-type'),
                options: options
            }
            validationObjects.push(fieldObj);
        }
    })
    return validationObjects;
}

async function validate(fields){
    // loop through each field
    for (let i = 0; i < fields.length; i++){

        let type = fields[i].data_type;

        // check if field is required
        if (fields[i].required){
            // check if field is empty
            if (fields[i].value === ""){
                alert(fields[i].name + " is required");
                return false;
            }
        }
        //if field is not required and is empty, skip validation
        if (fields[i].value === "" && !fields[i].required){
            console.log("skipping validation for " + fields[i].name);
            continue;
        }

        // check if field is text
        if (type === "text"){
            if (!isText(fields[i].value)){
                alert(fields[i].name + " must be text");
                return false;
            }
        }
        // check if field is multiple choice or blank
        if (fields[i].options){
            console.log("validating multiple choice...");
            if (!isMultipleChoice(fields[i].value, fields[i].options)){
                alert(fields[i].name + " must be one of the following option: " + fields[i].options.join(", "));
                return false;
            }
        }
        // check if field is email or blank
        if (type === "email"){
            if (!isEmail(fields[i].value)){
                alert(fields[i].name + " must be a valid email");
                return false;
            }
        }
        // check if field is number or blank
        if (type === "number"){
            if (!isNumber(fields[i].value)){
                alert(fields[i].name + " must be a number");
                return false;
            }
        }
        // check if field is date or blank
        if (type === "date"){
            if (!isDate(fields[i].value)){
                alert(fields[i].name + " must be a date");
                return false;
            }
        }
        // check if field is boolean or blank
        if (type === "checkbox"){
            if (!isBoolean(fields[i].value)){
                alert(fields[i].name + " must be a boolean");
                return false;
            }
        }
        // check if field is phone or blank
        if (type === "tel"){
            if (!isPhone(fields[i].value)){
                alert(fields[i].name + " must be a valid 10 digit phone number");
                return false;
            }
        }
    }
    return true;
}

// function to check if a value is text
function isText(value){
    return typeof value === "string";
}

// function to check if a value is one of the options
function isMultipleChoice(value, options){
    return options.includes(value);
}

// function to verify valid email address
function isEmail(value){
    return value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
}

// function to check if a value is a number
function isNumber(value){
    return !isNaN(value);
}

// function to check if a value is a date
function isDate(value){
    return !isNaN(Date.parse(value));
}

// function to check if a value is a boolean
function isBoolean(value){
    return typeof value === "boolean";
}

// function to check if a value is a valid phone number
function isPhone(value){
    console.log("validating phone number");
    // use regex to validate that value is a phone number with optional extension
    return value.match(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/);

}

// function to check if a value is a file
function isFile(value){
    return value instanceof File;
}
