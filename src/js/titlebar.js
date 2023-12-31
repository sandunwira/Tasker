function titlebarHTML() {
	var html = '<div data-tauri-drag-region class="titlebar-container">';

	html += '<div class="title">';
	html += '<img src="../assets/images/logos/logo-text.svg">';
	html += '</div>';

	html += '<div class="controls">';

	html += '<div class="icon" id="titlebar-minimize" title="Minimize">';
	html += '<img src="../assets/images/icons/minimize.svg">';
	html += '</div>';

	html += '<div class="icon" id="titlebar-close" title="Close">';
	html += '<img src="../assets/images/icons/close.svg">';
	html += '</div>';

	html += '</div>';

	html += '</div>';
	return html;
}

var container = document.getElementById('titlebar');
container.innerHTML = titlebarHTML();