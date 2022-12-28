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
        // check if field is text
        if (fields[i].type === "text"){
            if (!isText(fields[i].value)){
                alert(fields[i].name + " must be text");
                return false;
            }
        }
        // check if field is multiple choice
        if (fields[i].type === "multipleChoice"){
            if (!isMultipleChoice(fields[i].value, fields[i].options)){
                alert(fields[i].name + " must be one of the following option: " + fields[i].options.join(", "));
                return false;
            }
        }
        // check if field is email
        if (fields[i].type === "email"){
            if (!isEmail(fields[i].value)){
                alert(fields[i].name + " must be a valid email");
                return false;
            }
        }
        // check if field is number
        if (fields[i].type === "number"){
            if (!isNumber(fields[i].value)){
                alert(fields[i].name + " must be a number");
                return false;
            }
        }
        // check if field is date
        if (fields[i].type === "date"){
            if (!isDate(fields[i].value)){
                alert(fields[i].name + " must be a date");
                return false;
            }
        }
        // check if field is boolean
        if (fields[i].type === "boolean"){
            if (!isBoolean(fields[i].value)){
                alert(fields[i].name + " must be a boolean");
                return false;
            }
        }
        // check if field is phone
        if (fields[i].type === "phone"){
            if (!isPhone(fields[i].value)){
                alert(fields[i].name + " must be a valid 10 digit phone number");
                return false;
            }
        }
    }
}

// function to check if a value is text
function isText(value){
    return typeof value === "string";
}

// function to check if a value is one of the options
function isMultipleChoice(value, options){
    return options.includes(value);
}

// function to check if a value is an email
function isEmail(value){
    return value.includes("@");
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
    return value.match(/\d/g).length === 10;
}



console.log("Is it a date?", isDate("August 7, 2020"));
console.log("Is it a number?", isNumber("123"));
console.log("Is it a boolean?", isBoolean(true));
console.log("Is it a phone number?", isPhone("540-13-4567"));