// 1. Create the button
const button = document.createElement("button");
button.innerHTML = "What's up with all this Pharaoh shit going on over here?";
button.className = "center-block"

// 2. Append somewhere
const body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("As of 21/03/2018, this button is still not working. Isis & Osiris Inc. is looking for talented front-end web developers to help fix this problem. Please send your resume to Pharaoh_1821BC@Godmail.com");
});