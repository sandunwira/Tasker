const { appWindow } = window.__TAURI__.window;

// send a notification when notifyBtn is clicked saying hello world!
const notifyBtn = document.getElementById('notifyBtn');

const notifyTitle = 'Hello world!';
const notifyBody = 'This is a notification saying "Hello world!"';
const notifyIcon = '../src-tauri/icons/icon.png';
const notifyImage = './assets/notiImage.png';


notifyBtn.addEventListener('click', () => {
	new Notification(notifyTitle, {
		body: notifyBody,
		icon: notifyIcon,
		image: notifyImage
	});
});

notification.onclick = (event) => {
	event.preventDefault();
	window.focus();
	notification.close();
};