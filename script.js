function game(id) {
	if (id == "hypackel") {
		document.getElementById("game").src = "https://d3rtzzzsiu7gdr.cloudfront.net/games.html";
	}
	else if (id == "plexy") {
		document.getElementById("game").src = "https://www.plexygames.com/";
	}
	else if (id == "code") {
		document.getElementById("game").src = "https://gotoanddie.github.io/c2-sans-fight/";
	}
	else if (id == "fun") {
		document.getElementById("game").src = "https://neal.fun/";
	}
}
function blank() {
	var urlobj = new window.URL(window.location.href);
	var url = "index.html"
	if (url) {
		var win;
		document.getElementById('blank').onclick = function() {
			if (win) {
				win.focus();
			}
			else {
				win = window.open();
				win.document.body.style.margin = '0';
				win.document.body.style.height = '100vh';
				var iframe = win.document.createElement('iframe');
				iframe.style.border = 'none';
				iframe.style.width = '100%';
				iframe.style.height = '100%';
				iframe.style.margin = '0';
				iframe.src = url
				win.document.body.appendChild(iframe);
			}
			document.querySelector('a').style.background = 'black';
			document.querySelector('a').innerHTML = 'index';

		}
	}
}

function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}

	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaulOpen").click()