$('#tv').YTPlayer({
  videoId: '5oD6ztcWapE',
  mute: true,
  callback: function() {
    console.log("playerFinshed");
  }
});

var questions = [
	{
		header: 'Вопрос №1',
		desc: 'Cколько минут идет футбольный матч?',
		answers: [
			'45 минут',
			'90 минут',
			'80 минут',
			'120 минут'
		],
		correct: 1
	},
	{
		header: 'Вопрос №2',
		desc: 'Какую карточку показывает судья при удалении игрока?',
		answers: [
			'Красную',
			'Синию',
			'Не дает карточку',
			'Желтую'
		],
		correct: 3
	},
	{
		header: 'Вопрос №3',
		desc: 'Сколько игроков находится на поле во время матча?',
		answers: [
			'11',
			'25',
			'22',
			'12'
		],
		correct: 2
	},
	{
		header: 'Вопрос №4',
		desc: 'Если вратарь ударяет мячом о землю,<br> то может ли соперник сыграть мячом в тот момент,<br> когда мяч касается земли, не играя при этом опасно?',
		answers: [
			'Да',
			'Нет'
		],
		correct: 0
	},
	{
		header: 'Вопрос №5',
		desc: 'Как называют игрока,который может брать мяч в руки?',
		answers: [
			'Культливер',
			'Голкипер',
			'Игрок',
			'Нападающий'
		],
		correct: 1
	},
	{
		header: 'Вопрос №6',
		desc: 'Сколько таймов в футболе?',
		answers: [
			'2',
			'4',
			'3',
			'1'
		],
		correct: 0
	},
	{
		header: 'Вопрос №7',
		desc: 'Является ли область между линией ворот и сетками на воротах<br> частью футбольного поля?',
		answers: [
			'Да',
			'Нет'
		],
		correct: 1
	},
	{
		header: 'Вопрос №8',
		desc: 'Сколько длится тайм?',
		answers: [
			'45 минут',
			'90 минут',
			'50 минут',
			'30 минут'
		],
		correct: 0
	},
	{
		header: 'Вопрос №9',
		desc: 'Кто носит повязку на руке?',
		answers: [
			'Тренер',
			'Судья',
			'Вратарь',
			'Капитан'
		],
		correct: 3
	},
	{
		header: 'Вопрос №10',
		desc: 'Можно ли делать разметку поля прерывистыми линиями?',
		answers: [
			'Да',
			'Нет'
		],
		correct: 1
	},	
];

var questionTemplate = '<div><h1>{0}</h1><p>{1}</p><ul>{2}</ul></div>';
var answerTemplate = '<li><button class="btn btn-success">{0}</button></li>';
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

	$button.removeClass('btn-success').addClass('btn-danger');
	window.setTimeout(function(){

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

	}, 1000);
});