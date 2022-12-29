# QB_Form_Validator

This package allows you to validate form data for quickBase in a simple way.

## Installation
To include in your html file, simply include the following line:

    <script src="https://cdn.jsdelivr.net/gh/johnsyncs/QB_Form_Validator@2635b4cb6d0db067fb6e59ea01875bd63a0dcd52/QB_Form_Validator.js"></script>

Alternatively, include the link as a variable in your project settings file and reference it in your template.

## Usage
The function `validateForm` takes in an array of validation objects. The validation object is a dictionary with 5 values: name, value, data_type, required and options. (options is only required for multiple choice inputs)

    validation objects = [
        {
            name: "First Name",
            value: document.getElementById("first_name").value,
            data_type: "text",
            required: true
        },
        {
            name: "Last Name",
            value: document.getElementById("last_name").value,
            data_type: "text",
            required: true
        },
        {
            name: "Email",
            value: document.getElementById("email").value,
            data_type: "email",
            required: true
        },
        {
            name: "Phone",
            value: document.getElementById("phone").value,
            data_type: "phone",
            required: true
        },
        {
            name: "Address",
            value: document.getElementById("address").value,
            data_type: "text",
            required: true
        },
        {
            name: "City",
            value: document.getElementById("city").value,
            data_type: "text",
            required: true
        },
        {
            name: "State",
            value: document.getElementById("state").value,
            data_type: "text",
            required: true
        },
        {
            name: "Zip",
            value: document.getElementById("zip").value,
            data_type: "text",
            required: true
        },
        {
            name: "Country",
            value: document.getElementById("country").value,
            data_type: "text",
            required: true
        },
        {
            name: "How did you hear about us?",
            value: document.getElementById("how_did_you_hear_about_us").value,
            data_type: "multiple_choice",
            required: true,
            options: [
                "Google",
                "Facebook",
                "Instagram",
                "Twitter",
                "LinkedIn",
                "YouTube",
                "Other"
            ]
        },
    ]