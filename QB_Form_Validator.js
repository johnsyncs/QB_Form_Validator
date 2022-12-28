// Synctivate Inc.
// Fredericksburg, VA

fields = [
    {
        name: "name",
        value: "John",
        type: "text",
        required: true,
    },
    {
        name: "email",
        value: "johnh@synctivate.com",
        type: "email",
        required: true,
    },
    {
        name: "role",
        value: "admin",
        type: "multipleChoice",
        required: true,
        options: ["admin", "user", "guest"]
    }
]

async function getValidationObjects() {
    let inputs = document.getElementsByTagName('input')
    let select = document.getElementsByTagName('select')
    console.log("inputs: " + inputs);
    let fieldArray = []
    Array.from(inputs).forEach(function(input) {
        console.log("input: " + input);
        if (input.hasAttribute('data-validate') && (input.getAttribute('data-validate')==='true' || input.getAttribute('data-validate')==='True')){
                console.log("has attribute");


                let fieldObj = {
                    name: input.id,
                    value: input.value,
                    required: input.required,
                    type: input.type,
                }
                fieldArray.push(fieldObj);
        }
    })

    Array.from(select).forEach(function(input) {
        console.log("input.data-validate: " + input.getAttribute('data-validate'));
        if (input.hasAttribute('data-validate') && (input.getAttribute('data-validate')==='true' || input.getAttribute('data-validate')==='True')){
        //if input is multiple choice, get the options and put them in an array
            options = []
            for (let i = 0; i < input.options.length; i++) {
                options.push(input.options[i].value);
            }
            let fieldObj = {
                name: input.id,
                value: input.value,
                required: input.required,
                type: input.type,
                options: options
            }
            fieldArray.push(fieldObj);

    }
    })
    return fieldArray;
}

async function validate(fields){
    // loop through each field
    for (let i = 0; i < fields.length; i++){

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
        if (fields[i].type === "text"){
            if (!isText(fields[i].value)){
                alert(fields[i].name + " must be text");
                return false;
            }
        }
        // check if field is multiple choice or blank
        if (fields[i].type === "multipleChoice"){
            if (!isMultipleChoice(fields[i].value, fields[i].options)){
                alert(fields[i].name + " must be one of the following option: " + fields[i].options.join(", "));
                return false;
            }
        }
        // check if field is email or blank
        if (fields[i].type === "email"){
            if (!isEmail(fields[i].value)){
                alert(fields[i].name + " must be a valid email");
                return false;
            }
        }
        // check if field is number or blank
        if (fields[i].type === "number"){
            if (!isNumber(fields[i].value)){
                alert(fields[i].name + " must be a number");
                return false;
            }
        }
        // check if field is date or blank
        if (fields[i].type === "date"){
            if (!isDate(fields[i].value)){
                alert(fields[i].name + " must be a date");
                return false;
            }
        }
        // check if field is boolean or blank
        if (fields[i].type === "boolean"){
            if (!isBoolean(fields[i].value)){
                alert(fields[i].name + " must be a boolean");
                return false;
            }
        }
        // check if field is phone or blank
        if (fields[i].type === "phone"){
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
    // use regex to validate that value is a 10 digit phone number with or without an extension

    return value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}(\s?[xX]\s?[0-9]{1,5})?$/);
}

// function to check if a value is a file
function isFile(value){
    return value instanceof File;
}
