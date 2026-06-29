const nameInput = document.getElementById("name");

const mood = document.getElementById("mood");

const note = document.getElementById("note");

const button = document.getElementById("saveBtn");

const result = document.getElementById("result");

button.addEventListener("click", function(){

const name=nameInput.value.trim();

const selectedMood=mood.value;

const message=note.value.trim();

if(name===""||selectedMood===""||message===""){

alert("Please complete all fields.");

return;

}

result.style.display="block";

result.innerHTML=`

<h2>Hello ${name}! 👋</h2>

<p><strong>Mood:</strong> ${selectedMood}</p>

<p><strong>Journal:</strong></p>

<p>${message}</p>

`;

nameInput.value="";

mood.value="";

note.value="";

});