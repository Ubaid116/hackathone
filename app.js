"use strict";
var _a;
// Function to handle form input and build resume
function generateResume() {
    const name = document.getElementById('user-input').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    const education = document.getElementById('user-education').value;
    const experience = document.getElementById('user-experience').value;
    const skills = document.getElementById('skillsInput').value.split(',');
    // Store data in sessionStorage for passing between pages
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('education', education);
    sessionStorage.setItem('experience', experience);
    sessionStorage.setItem('skills', JSON.stringify(skills));
    // Redirect to the resume page
    window.location.href = "resume.html";
}
// Function to load stored data into resume.html
function loadResume() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const education = sessionStorage.getItem('education');
    const experience = sessionStorage.getItem('experience');
    const skills = JSON.parse(sessionStorage.getItem('skills') || '[]');
    // Populate resume with stored data
    if (name)
        document.getElementById('name').innerText = name;
    if (email)
        document.getElementById('email').innerText = email;
    if (phone)
        document.getElementById('phone').innerText = phone;
    if (education)
        document.getElementById('education').innerText = education;
    if (experience)
        document.getElementById('experience').innerText = experience;
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = ''; // Clear any existing list items
    skills.forEach((skill) => {
        const li = document.createElement('li');
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });
}
// Ensure loadResume function is executed when the resume.html page loads
if (window.location.pathname.includes('resume.html')) {
    window.onload = loadResume;
}
// Function to generate a shareable link
function generateShareableLink() {
    const link = window.location.href; // Get the current URL
    const shareableLinkDiv = document.getElementById('shareable-link');
    // Set the link text (you can replace 'sami' with actual logic for creating the link)
    shareableLinkDiv.innerText = `Shareable Link: ${link}`;
    shareableLinkDiv.style.display = 'block'; // Show the link div
}
// Execute the function when the share button is clicked
(_a = document.getElementById('generate-link-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateShareableLink);
