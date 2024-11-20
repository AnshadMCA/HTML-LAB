function validateForm() {
    // Retrieve form values
    var fname = document.forms["myForm"]["fname"].value.trim();
    var lname = document.forms["myForm"]["lname"].value.trim();
    var dob = document.forms["myForm"]["dob"].value.trim();
    var mobile = document.forms["myForm"]["ph"].value.trim();
    var course = document.querySelector('input[name="course"]:checked');

    // Retrieve warning elements
    var fnameWarning = document.getElementById("fnameWarning");
    var lnameWarning = document.getElementById("lnameWarning");
    var dobWarning = document.getElementById("dobWarning");
    var mobileWarning = document.getElementById("mobileWarning");
    var courseWarning = document.getElementById("courseWarning");

    // Clear previous warnings and reset styles
    fnameWarning.innerHTML = "";
    lnameWarning.innerHTML = "";
    dobWarning.innerHTML = "";
    mobileWarning.innerHTML = "";
    courseWarning.innerHTML = "";

    // Add red color to warning messages
    var warningStyle = "color: red;";

    // Validate first name
    if (fname === "") {
        fnameWarning.innerHTML = "First Name is required";
        fnameWarning.style = warningStyle;
        return false;
    }

    // Validate last name
    if (lname === "") {
        lnameWarning.innerHTML = "Last Name is required";
        lnameWarning.style = warningStyle;
        return false;
    }

    // Validate date of birth
    if (dob === "") {
        dobWarning.innerHTML = "Date of Birth is required";
        dobWarning.style = warningStyle;
        return false;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        mobileWarning.innerHTML = "Mobile number must be 10 digits";
        mobileWarning.style = warningStyle;
        return false;
    }

    // Validate course selection
    if (!course) {
        courseWarning.innerHTML = "Please select a course";
        courseWarning.style = warningStyle;
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}

