function theQuiz() {
	var result =0;
	var questions = [
		['What is the official name for the virus?', 'COVID-19'],
		['Can this virus kill people?', 'yes'],
		['What are the symptoms of this deadly virus?', 'fever, cough, breath shortness'],
		['What are the recommendations to prevent it?', 'wash hands, no hand contact to eyes, mouth, and nose']
	];

	function theQuiz(question) {
		var answer = prompt(question[0],'');
		if (answer == question[1]) {
			alert('Correct!');
			result++;
		}
		else {
			alert('Sorry. The correct answer is ' + question[1]);
		}
	}

	for(var i =0; i < questions.length; i++) {
	
		theQuiz(questions[i]);
	}
	
	var message = 'You got ' + score;
	message += ' out of ' + questions.length;
	message += ' questions correct.';
	document.write('<p>' + message + '</p>');
}

	
	

