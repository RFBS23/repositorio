const btnDarkmode = document.querySelector('#darkmode');
btnDarkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDarkmode.classList.toggle('active');

    if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnDarkmode.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnDarkmode.classList.remove('active');
}