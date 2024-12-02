// Get form elements
var resumeForm = document.getElementById('resume-form');
var userNameInput = document.getElementById('userName');
var emailInput = document.getElementById('email');
var religionInput = document.getElementById('religion');
var dateInput = document.getElementById('date');
var addressInput = document.getElementById('address');
var profilePictureInput = document.getElementById('profilePicture');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var referenceInput = document.getElementById('reference');
var contactInput = document.getElementById('contact');
var resumeOutput = document.getElementById('resume');
var profileImage = document.getElementById('profileImage');
var generateResume = function (event) {
    event.preventDefault();
    var userName = userNameInput.value;
    var email = emailInput.value;
    var religion = religionInput.value;
    var dateOfBirth = dateInput.value;
    var address = addressInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value;
    var reference = referenceInput.value;
    var contact = contactInput.value;
    var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
    var resumeContent = "\n        <h3>Name: ".concat(userName, "</h3>\n        <p>Email: ").concat(email, "</p>\n        <p>Religion: ").concat(religion, "</p>\n        <p>Date of Birth: ").concat(dateOfBirth, "</p>\n        <p>Address: ").concat(address, "</p>\n        <p>Education: ").concat(education, "</p>\n        <p>Skills: ").concat(skills, "</p>\n        <p>Reference: ").concat(reference, "</p>\n        <p>Contact: ").concat(contact, "</p>\n    ");
    resumeOutput.innerHTML = resumeContent;
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                profileImage.src = e.target.result;
                profileImage.style.display = 'block';
            }
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        profileImage.style.display = 'none';
    }
};
resumeForm.addEventListener('submit', generateResume);
