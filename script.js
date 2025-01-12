window.onload = function() {
   setTimeout(function() {
       document.getElementById("preloader").style.display = "none";
       document.getElementById("content").style.display = "block";
   }, 1000); 
};


let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const toggler = document.querySelector(".chatbot-toggler");

// Add event listener to show welcome message when chat opens
window.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();
});

function displayWelcomeMessage() {
    // Welcome message
    const welcomeText = "Welcome! How can I assist you today?";
    const welcomeMessage = createMessage(welcomeText, 'output-message');
    chatMessages.appendChild(welcomeMessage);

    // Show some default options/questions for the user to choose from
    showSuggestedQuestions();
}

// Function to handle the user's message input
sendButton.addEventListener('click', () => {
    handleUserMessage(messageInput.value.trim());
});

function handleUserMessage(messageText) {
    if (messageText !== '') {
        const inputMessage = createMessage(messageText, 'input-message');
        chatMessages.appendChild(inputMessage);
        
        // Simulate bot response after a short delay
        setTimeout(() => {
            handleBotResponse(messageText.toLowerCase());
        }, 500);

        messageInput.value = '';  // Clear the input field
    }
}

function handleBotResponse(messageText) {
    let responseText = '';
    let responseImage = '';

    switch (messageText) {
        case 'hi':
        case 'hello':
            responseText = 'Hello there!';
            responseImage = 'images/hello.png';  // Example image for hello
            break;
        case 'how are you':
            responseText = 'I am just a bot, but I am doing fine!';
            responseImage = 'images/fine.png';  // Example image for fine
            break;
        case 'what is your name':
            responseText = "I'm just a chatbot, so I don't have a name.";
            responseImage = 'images/bot.png';  // Example image for bot
            break;
        case 'who are you':
            responseText = "I'm a simple chatbot designed to assist you.";
            responseImage = 'images/assistant.png';  // Example image for chatbot identity
            break;
        default:
            responseText = "I'm sorry, I don't understand. Here are some options you can try:";
            showSuggestedQuestions();
            break;
    }

    if (responseText !== '') {
        const outputMessage = createMessage(responseText, 'output-message', responseImage);
        chatMessages.appendChild(outputMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Function to create a message div
function createMessage(text, className, imageUrl = '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);

    const messageText = document.createElement('span');
    messageText.textContent = text;
    messageDiv.appendChild(messageText);

    // If an image URL is provided, add an image to the message
    if (imageUrl) {
        const messageImage = document.createElement('img');
        messageImage.src = imageUrl;
        messageImage.alt = 'response image';
        messageDiv.appendChild(messageImage);
    }

    return messageDiv;
}

// Function to show suggested questions to the user
function showSuggestedQuestions() {
    const questions = [
        { label: 'Hi', response: 'Hello there!' },
        { label: 'How are you?', response: 'I am just a bot, but I am doing fine!' },
        { label: 'What is your name?', response: "I'm just a chatbot, so I don't have a name." },
        { label: 'Who are you?', response: "I'm a simple chatbot designed to assist you." }
    ];

    const questionsDiv = document.getElementById('chat-options');
    questionsDiv.innerHTML = '';  // Clear previous options

    questions.forEach(question => {
        const button = document.createElement('button');
        button.textContent = question.label;
        button.classList.add('option-button');
        button.addEventListener('click', () => handleOptionSelection(question.response));
        questionsDiv.appendChild(button);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle when a user selects a suggested question
function handleOptionSelection(response) {
    const selectedMessage = createMessage(response, 'input-message');
    chatMessages.appendChild(selectedMessage);

    // Simulate bot response to selected option
    setTimeout(() => {
        const botResponse = createMessage(response, 'output-message');
        chatMessages.appendChild(botResponse);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

toggler.addEventListener("click", () => document.body.classList.toggle("show-chatcontainer"));
