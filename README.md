# QB_Form_Validator

This package allows you to validate form data for quickBase in a simple way.

## Installation
To include in your html file, simply include the following line:

    <script src="https://cdn.jsdelivr.net/gh/johnsyncs/QB_Form_Validator@2635b4cb6d0db067fb6e59ea01875bd63a0dcd52/QB_Form_Validator.js"></script>

Alternatively, include the link as a variable in your project settings file and reference it in your template.

## Usage
The function `validate` takes in an array of validation objects. The validation object is a dictionary with 5 values: name, value, data_type, required and options. (options is only required for multiple choice inputs)

    // HTML element attributes:
    // data-validate - Required attribute which determines if an element should be validated
    // data-type     - Required attribute which determines how an element should be validated
    // required      - Not a required attribute. If included, the element must have a value to pass validation.
    
    // data-type(s):
    // text
    // number
    // email
    // phone
    // date
    
    // Example elements which will be validated (contains the data-validate=true | data-validate=True attribute) if `getValidationObjects()` is called:
    
    // Not required, and validated using the phone number regex
    <input data-validate=True data-type=tel type='tel' id='phone-number-input' placeholder='Phone Number Field'/>
    
    // Is required, and validated using text validation
    <input required data-validate=true data-type=text type='text' id='text-input' placeholder='Text Field'/>
    
    // Is required, and validated using multi-choice-text validation
    <select required data-validate=True data-type="multiple-choice" id="multiple-choice-text-input" name="multiple-choice-text-input">
        ... (options)
    </select>
    
    
    // Example output of `getValidationObjects()`
    validation objects = [
        {
            name: "phone-number-input",
            value: document.getElementById("phone-number-input").value,
            data_type: "tel",
            required: false
        },
        {
            name: "text-input",
            value: document.getElementById("text-input").value,
            data_type: "text",
            required: true
        },
        {
            name: "multiple-choice-text-input",
            value: document.getElementById("multiple-choice-text-input").value,
            data_type: "multiple-choice",
            required: true,
            options: [
                "Default selected, disabled, and no value option",
                "Your option 1",
                ...
            ]
        },
    ]
    
    // Example button which calls the validation functions
    <div class="submit-button">
        <button type="submit" onclick="submit()">Submit</button>
    </div>

    // Submission example
    async function submit() {
    
        // Retrieves all HTML elements containing the attribute:
        // data-validate=true | data-validate=True
        let validationObjects = await getValidationObjects()
        
        // Validates all returned elements that contained the data-validate attribute
        let validated = await validate(validationObjects)
        
        if (validated) {
            // On success: DoSomething()
        } else {
            // On failure: DoSomethingElse()
        }
    }
