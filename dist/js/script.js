/** gère le code au chargement de la vue 'formulaire' */
function loadForm() {
	// références vers les deux zones de base de la page
	let header = document.getElementById('header');
	let main = document.getElementById('main');
	// définition du contenu des deux zones
	let formContent = `<form id="form">
							<label for="login">Login</label>
							<input type="text" name="login" id="login" placeholder="Votre Login" />
							<label for="password">Mot de passe</label>
							<input type="password" name="password" id="password" placeholder="Votre Mot de passe" />
							<input type="submit" id="submit" value="Envoyer" />
						</form>`;
	let headerContent = '<h1>Bienvenue !</h1>';
	// remplissage des deux zones
	header.innerHTML = headerContent;
	main.innerHTML = formContent;
	// ajouter un event listener sur le form
	let form = document.getElementById('form');
	form.addEventListener('submit', traitementForm);
}

/** fonction appelée lors du submit du form */
function traitementForm(event) {
	// empêcher le comportement par défaut
	event.preventDefault();
	// récupérer les valeurs des champs
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;
	// stocker les valeurs dans le local storage
	localStorage.setItem('login', login);
	localStorage.setItem('password', password);
	// modifier le main de la page pour afficher les valeurs
	loadResult();
}

/** gère le code au chargement de la vue 'resultats' */
function loadResult() {
	// références vers les deux zones de base de la page
	let header = document.getElementById('header');
	let main = document.getElementById('main');
	// définition du contenu des deux zones
	let headerContent = '<h1>Résultats</h1>';
	let mainContent = `	<dl>
							<dt>Login</dt>
							<dd id="login"></dd>
							<dt>Password</dt>
							<dd id="password"></dd>
						</dl>`;
	// remplissage des deux zones
	header.innerHTML = headerContent;
	main.innerHTML = mainContent;
	// récupérer les valeurs dans le local storage
	let login = localStorage.getItem('login');
	let password = localStorage.getItem('password');
	// peupler les ids dans la page
	document.getElementById('login').innerHTML = login;
	document.getElementById('password').innerHTML = password;
	// ajouter un bouton pour revenir à la page de form à la fin du main
	let btn = document.createElement('button');
	btn.innerHTML = 'Retour';
	btn.addEventListener('click', loadForm);
	main.appendChild(btn);
};