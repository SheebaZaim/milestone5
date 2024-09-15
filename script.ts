// const Form= document.getElementById('resume-form') as HTMLFormElement;
// const ResumeOutput = document.getElementById('resume-output') as HTMLDivElement;

// const personalOutput = document.getElementById('personal-info-output') as HTMLElement;
// const educationOutputs= document.getElementById('education-output') as HTMLElement;
// const experienceOutputs = document.getElementById('work-experience-output') as HTMLElement;
// const skillsOutputs = document.getElementById('skills-output') as HTMLElement;
// const linkSection = document.getElementById('link-section') as HTMLElement;
// const resumeLinkInput = document.getElementById('resume-link') as HTMLInputElement;

// const userId = 'exampleUserId'; // Replace this with the actual user ID when creating the resume

// Form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = (document.getElementById('name') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const education = (document.getElementById('education') as HTMLInputElement).value;
//   const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
//   const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];
//   Form.classList.remove('hidden');
//   ResumeOutput.classList.add('hidden');
//   if (profilePic) {
//     const reader = new FileReader();
//     reader.onload = function () {
//       const imgElement = document.createElement('img');
//       imgElement.src = reader.result as string;
//       personalOutput.innerHTML = '';
//       personalOutput.appendChild(imgElement);
//     };
//     reader.readAsDataURL(profilePic);
//   }

//   personalOutput.innerHTML += `<h2>Personal Information</h2>
//   <p><strong>Name:</strong> ${name}</p>
//   <p><strong>Email:</strong> ${email}</p>
//   <p><strong>Phone:</strong> ${phone}</p>`;

//   educationOutputs.innerHTML = `<h2>Education</h2>
//   <p>${education}</p>`;

//   experienceOutputs.innerHTML = `<h2>Work Experience</h2>
//    <p>${workExperience}</p>`;

//   skillsOutputs.innerHTML = `<h2>Skills</h2>
//    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`;

//   ResumeOutput.classList.remove('hidden');

// Form.classList.add('hidden');
//  // Fetch and display the resume link
//  fetch(`/generate-link/${userId}`)
//  .then(response => response.json())
//  .then(data => {
//      resumeLinkInput.value = data.link;
//      linkSection.classList.remove('hidden');
//  })
//  .catch(error => {
//      console.error('Error generating link:', error);
//  });

//   // Add edit buttons for each section
//   addEditButtons();


// // Function to add edit buttons and handle editing
// function addEditButtons() {
//   personalOutput.innerHTML += `<button id="edit-personal-info" class="edit-button">Edit Personal Info</button>`;
//   educationOutputs.innerHTML += `<button id="edit-education" class="edit-button">Edit Education</button>`;
//   experienceOutputs.innerHTML += `<button id="edit-experience" class="edit-button">Edit Work Experience</button>`;
//   skillsOutputs.innerHTML += `<button id="edit-skills" class="edit-button">Edit Skills</button>`;}

//   // Event listener for editing personal info
//   document.getElementById('edit-personal-info')?.addEventListener('click', () => {
//     const name = (personalOutput.querySelector('p:nth-of-type(1)')?.textContent || '').replace('Name: ', '');
//     const email = (personalOutput.querySelector('p:nth-of-type(2)')?.textContent || '').replace('Email: ', '');
//     const phone = (personalOutput.querySelector('p:nth-of-type(3)')?.textContent || '').replace('Phone: ', '');

//     (document.getElementById('name') as HTMLInputElement).value = name;
//     (document.getElementById('email') as HTMLInputElement).value = email;
//     (document.getElementById('phone') as HTMLInputElement).value = phone;

//     Form.classList.remove('hidden');
//     ResumeOutput.classList.add('hidden');
//   });

//   // Event listener for editing education
//   document.getElementById('edit-education')?.addEventListener('click', () => {
//     const education = educationOutputs.querySelector('p')?.textContent || '';

//     (document.getElementById('education') as HTMLInputElement).value = education;

//     Form.classList.remove('hidden');
//     ResumeOutput.classList.add('hidden');
//   });

//   // Event listener for editing work experience
//   document.getElementById('edit-experience')?.addEventListener('click', () => {
//     const workExperience = experienceOutputs.querySelector('p')?.textContent || '';

//     (document.getElementById('work-experience') as HTMLTextAreaElement).value = workExperience;

//     Form.classList.remove('hidden');
//     ResumeOutput.classList.add('hidden');
//   });

//   // Event listener for editing skills
//   document.getElementById('edit-skills')?.addEventListener('click', () => {
//     const skills = Array.from(skillsOutputs.querySelectorAll('li')).map(li => li.textContent).join(',');

//     (document.getElementById('skills') as HTMLInputElement).value = skills;
// Form.classList.remove('hidden');
//     ResumeOutput.classList.add('hidden');
//   }
//   )}
// )
// // Copy Link Functionality
// document.getElementById('copy-link')?.addEventListener('click', () => {
//     resumeLinkInput.select();
//     document.execCommand('copy');
//     alert('Link copied to clipboard!');
// });

// / Get references to the form and display area
const Form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
// const shareable_link = document.getElementById('shareable_link') as HTMLDivElement;
const sharableLinkElement = document.getElementById('sharable-link') as HTMLAnchorElement;
const downloadPdf = document.getElementById('download-pdf') as HTMLButtonElement;
const linkSection = document.getElementById('link-section') as HTMLDivElement;
linkSection.style.display = 'block';


// Handle form submission
Form.addEventListener('submit', (event: Event) => {
 event.preventDefault(); // prevent page reload
 // Collect input values
 const username = (document.getElementById('username') as
HTMLInputElement).value;
 const name = (document.getElementById('name') as HTMLInputElement).value;
 const email = (document.getElementById('email') as HTMLInputElement).value;
 const phone = (document.getElementById('phone') as HTMLInputElement).value;
 const education = (document.getElementById('education') as
HTMLTextAreaElement).value;
 const experience = (document.getElementById('experience') as
HTMLTextAreaElement).value;
 const skills = (document.getElementById('skills') as
HTMLTextAreaElement).value;
 // Save form data in localStorage with the username as the key
 const resumeData = {
 name,
 email,
 phone,
 education,
 experience,
 skills
 };
 
 localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
const resumeHTML = `

 <h2>Editable Resume</h2>
 <h3>Personal Information</h3>
 <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
 <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
 <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
 <h3>Education</h3>
 <p contenteditable="true">${education}</p>
 <h3>Experience</h3>
 
 <p contenteditable="true">${experience}</p>
 <h3>Skills</h3>
 <p contenteditable="true">${skills}</p>
 `;
 // Display the generated resume
 resumeDisplay.innerHTML = resumeHTML;
 // Generate a shareable URL with the username only
 const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareablelink
sharableLinkElement.style.display = 'block';
 sharableLinkElement.href = shareableURL;
 sharableLinkElement.textContent = shareableURL;
});
 
// Handle PDF download
downloadPdf.addEventListener('click', () => {
 window.print(); // This will open the print dialog and allow the user to save
// as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');
 if (username) {// Autofill form if data is found in localStorage
  const savedResumeData = localStorage.getItem(username);
  if (savedResumeData) {
  const resumeData = JSON.parse(savedResumeData);
  (document.getElementById('username') as HTMLInputElement).value =
 username;
  (document.getElementById('name') as HTMLInputElement).value =
 resumeData.name;
  (document.getElementById('email') as HTMLInputElement).value =
 resumeData.email;
  (document.getElementById('phone') as HTMLInputElement).value =
 resumeData.phone;
  (document.getElementById('education') as HTMLTextAreaElement).value =
 resumeData.education;
  (document.getElementById('experience') as HTMLTextAreaElement).value
 = resumeData.experience;
  (document.getElementById('skills') as HTMLInputElement).value =
  resumeData.skills;
 
}
 
}
})
console.log(`${window.location.origin}?username=${encodeURIComponent("username")}`);

