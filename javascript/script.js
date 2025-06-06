'use strict';
const form = document.getElementById("formcontact");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  
  console.log(name);
  console.log(email);
  console.log(message);

  const result = `Hi ${name}! We received your message "${message}". We'll send you an email to ${email}. We usually reply within 24h. Monday–Friday, 9AM–6PM (US time)!`; 
  alert(result);
  form.reset();
});