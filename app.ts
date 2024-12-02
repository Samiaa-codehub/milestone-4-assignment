// Get form elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const userNameInput = document.getElementById('userName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const religionInput = document.getElementById('religion') as HTMLInputElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const referenceInput = document.getElementById('reference') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const resumeOutput = document.getElementById('resume') as HTMLDivElement;
const profileImage = document.getElementById('profileImage') as HTMLImageElement;


const generateResume = (event: Event): void => {
    event.preventDefault();

    const userName: string = userNameInput.value;
    const email: string = emailInput.value;
    const religion: string = religionInput.value;
    const dateOfBirth: string = dateInput.value;
    const address: string = addressInput.value;
    const education: string = educationInput.value;
    const skills: string = skillsInput.value;
    const reference: string = referenceInput.value;
    const contact: string = contactInput.value;
    const profilePicture: File | null = profilePictureInput.files ? profilePictureInput.files[0] : null;

    
    const resumeContent: string = `
        <h3>Name: ${userName}</h3>
        <p>Email: ${email}</p>
        <p>Religion: ${religion}</p>
        <p>Date of Birth: ${dateOfBirth}</p>
        <p>Address: ${address}</p>
        <p>Education: ${education}</p>
        <p>Skills: ${skills}</p>
        <p>Reference: ${reference}</p>
        <p>Contact: ${contact}</p>
    `;

    resumeOutput.innerHTML = resumeContent;

    
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target && e.target.result) {
                profileImage.src = e.target.result as string;
                profileImage.style.display = 'block';
            }
        };
        reader.readAsDataURL(profilePicture);
    } else {
        profileImage.style.display = 'none';
    }
};


resumeForm.addEventListener('submit', generateResume);
