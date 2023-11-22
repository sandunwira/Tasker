// Initialized the Notification Button
const notifyBtn = document.getElementById('notifyBtn');

// Notification Options
const notiTitle = 'Hello world!';
const notiOptions = {
	body: 'This is a notification saying "Hello world!"',
	icon: null,
	sound: 'Default'
};

// Notification
notifyBtn.addEventListener('click', () => {
	new Notification(notiTitle, notiOptions);
});