var questions = [
	{
		header: 'Вопрос 1',
		desc: 'Текст вопроса 1',
		answers: [
			'Ответ 1',
			'Ответ 2',
			'Ответ 3'
		],
		correct: 1
	},
	{
		header: 'Вопрос 2',
		desc: 'Текст вопроса 2',
		answers: [
			'Ответ 1',
			'Ответ 2',
			'Ответ 3',
			'Ответ 4'
		],
		correct: 3
	},
	{
		header: 'Вопрос 3',
		desc: 'Текст вопроса 3',
		answers: [
			'Ответ 1',
			'Ответ 2',
			'Ответ 3',
			'Ответ 4'
		],
		correct: 2
	}	
];

var questionTemplate = '<div><h1>{0}</h1><p>{1}</p><ul>{2}</ul></div>';
var answerTemplate = '<li><button class="btn btn-primary">{0}</button></li>';
var $sectionQuestions = $('#questions');

for(var i = 0; i < questions.length; i++){
	var question = questions[i];

	var answersHTML = '';
	for(var j = 0; j < question.answers.length; j++){
		var answer = question.answers[j];
		answersHTML = answersHTML + answerTemplate.replace('{0}', answer);
	}

	var questionHTML = questionTemplate.replace('{0}', question.header).replace('{1}', question.desc).replace('{2}', answersHTML);
	$sectionQuestions.append(questionHTML);
}

var Q = 0;
var score = 0;

$('#start').click(function(){
	$('#intro').hide();
	$('#questions > div').first().show();
	$('#questions').fadeIn(200);
});

$('#questions').on('click', 'button', function(){
	var $button = $(this);
	var $li = $button.parent();
	var index = $li.index();
	var question = questions[Q];
	if (index === question.correct)
		score++;

	if (Q === questions.length - 1){
		$('#questions').hide();
		$('#results span').html(score);
		$('#results').fadeIn(200);
		return;
	}

	var $div = $li.closest('div');
	$div.hide();
	$div.next().fadeIn(200);
	Q++;
});