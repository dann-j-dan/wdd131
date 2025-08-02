// This file contains code that dynamically outputs the current year and the last modified date of the document in the footer.

const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

document.getElementById('current-year').textContent = currentYear;
document.getElementById('last-modified').textContent = lastModifiedDate;