var dog_image = document.getElementById('dog');

dog_image.addEventListener("click",woof);

var feed_dog = document.getElementById('feed_dog');

feed_dog.addEventListener("click",fatten_dog);

var exercise_dog = document.getElementById('exercise_dog');

exercise_dog.addEventListener("click",slim_dog);


function woof() {
	alert("woof");
};

function fatten_dog() {
	dog_image.style.width = (dog_image.offsetWidth + 30.0) + 'px';	
};

function slim_dog() {
	dog_image.style.width = (dog_image.offsetWidth - 30.0) + 'px';	
};
