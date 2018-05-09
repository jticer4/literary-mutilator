function typo() {
	let firstParagraph = document.getElementById('allText');
	firstParagraph.style.color = 'darkgoldenrod';

}

function bigLeague() {
	let biglyFirst = document.getElementById('first');
	biglyFirst.style.fontSize = '150px';

	let biglySecond = document.getElementById('second');
	biglySecond.style.fontSize = '150px';

	let biglyThird = document.getElementById('third');
	biglyThird.style.fontSize = '150px';
}


function wat()
{
	let ohWow = document.getElementById('first');
	ohWow.innerHTML = ohWow.innerHTML.replace("It’s about making placeholder text great again", 'Alternative Facts');
}