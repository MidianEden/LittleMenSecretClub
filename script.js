/* ==== CONFIG ==== */
const SECRET_ACCESS_CODE = 'lmn-code-001';
const OWNER_SECRET_CODE = 'rA1nB0w$OwN3r!X9VzqLpT7wF2KdJmHgYs8';
const bannedWords = ['motherfucker','bitch','pussy','damn','hell','shit','fuck','cunt'];

/* ==== FIREBASE ==== */
const firebaseConfig = {
  apiKey: "AIzaSyCnhg3NUeTPE6A1XbmpzXzcJ7O1whhrgHY",
  authDomain: "littlemen-174cf.firebaseapp.com",
  databaseURL: "https://littlemen-174cf-default-rtdb.firebaseio.com",
  projectId: "littlemen-174cf",
  storageBucket: "littlemen-174cf.firebasestorage.app",
  messagingSenderId: "386734084157",
  appId: "1:386734084157:web:e3d9a69deab7c767641a54",
  measurementId: "G-V7ZNQBEJ2P"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const messagesRef = db.ref('clubhouseChat');
const siteContentRef = db.ref('siteContent');

/* ==== ELEMENTS ==== */
const entryScreen = document.getElementById('entryScreen');
const secretCodeInput = document.getElementById('secretCodeInput');
const secretCodeSubmit = document.getElementById('secretCodeSubmit');
const clubhouse = document.getElementById('clubhouse');
const usernamePrompt = document.getElementById('usernamePrompt');
const usernameInput = document.getElementById('usernameInput');
const usernameSubmit = document.getElementById('usernameSubmit');
const ownerEditor = document.getElementById('ownerEditor');
const changeUsernameBtn = document.getElementById('changeUsernameBtn');

const welcomeTitleInput = document.getElementById('welcomeTitle');
const welcomeTextInput = document.getElementById('welcomeText');
const rulesTextInput = document.getElementById('rulesText');
const announcementsTextInput = document.getElementById('announcementsText');
const eventsTextInput = document.getElementById('eventsText');

let username = localStorage.getItem('lmUsername');
let isOwnerUser = false;

/* ==== HELPERS ==== */
function cleanText(text) {
  let clean = text;
  bannedWords.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    clean = clean.replace(regex, '***');
  });
  return clean;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function formatMultilineText(text) {
  return text.split('\n').filter(Boolean).map(line => `<p>${escapeHTML(line)}</p>`).join('');
}

function showOwnerPanel(show) {
  ownerEditor.style.display = show ? 'block' : 'none';
}

/* ==== ENTRY DOOR ==== */
secretCodeSubmit.onclick = () => {
  if (secretCodeInput.value.trim() === SECRET_ACCESS_CODE) {
    // Hide door
    entryScreen.classList.add('hidden');

    // Decide next step based on stored username
    if (!username) {
      usernamePrompt.classList.remove('hidden'); // show username entry
    } else {
      isOwnerUser = (username === OWNER_SECRET_CODE);
      showOwnerPanel(isOwnerUser);
      loadSiteContent();
      startChat();
    }
  } else {
    alert("Wrong code! Try again.");
  }
};

/* ==== PAGE LOAD ==== */
window.addEventListener('DOMContentLoaded', () => {
  clubhouse.classList.add('hidden'); // hide main clubhouse on start
  usernamePrompt.classList.add('hidden'); // hide username until door is unlocked
});


/* ==== USERNAME LOGIN ==== */
usernameSubmit.onclick = () => {
  const name = usernameInput.value.trim();
  if (!/^[a-zA-Z0-9_-]{3,20}$/.test(name) && name !== OWNER_SECRET_CODE) {
    alert("Invalid username.");
    return;
  }
  username = name;
  localStorage.setItem('lmUsername', username);
  isOwnerUser = (username === OWNER_SECRET_CODE);
  showOwnerPanel(isOwnerUser);
  usernamePrompt.classList.add('hidden');
  loadSiteContent();
  startChat();
};

changeUsernameBtn.onclick = () => {
  usernamePrompt.classList.remove('hidden');
};

/* ==== LOAD SITE CONTENT ==== */
function loadSiteContent() {
  siteContentRef.once('value').then(snapshot => {
    const content = snapshot.val();
    if (!content) return;
    document.querySelector('#welcome h1').textContent = content.welcome.title || 'Welcome to the Clubhouse 🏠';
    document.querySelector('#welcome p').textContent = content.welcome.text || '';
    document.querySelector('#rulesContent').innerHTML = formatMultilineText(content.rules.text || '');
    document.querySelector('#announcementsContent').innerHTML = content.announcements.text || '';
    document.querySelector('#eventsContent').innerHTML = content.events.text || '';

    if (isOwnerUser) {
      welcomeTitleInput.value = content.welcome.title || '';
      welcomeTextInput.value = content.welcome.text || '';
      rulesTextInput.value = content.rules.text || '';
      announcementsTextInput.value = content.announcements.text || '';
      eventsTextInput.value = content.events.text || '';
    }
  });
}

/* ==== OWNER SAVE ==== */
document.getElementById('ownerEditForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!isOwnerUser) return alert("Not authorized!");
  const newContent = {
    welcome: { title: welcomeTitleInput.value.trim(), text: welcomeTextInput.value.trim() },
    rules: { text: rulesTextInput.value.trim() },
    announcements: { text: announcementsTextInput.value.trim() },
    events: { text: eventsTextInput.value.trim() }
  };
  siteContentRef.set(newContent).then(() => {
    alert("Content updated!");
    loadSiteContent();
  });
});

/* ==== CHAT ==== */
function startChat() {
  const messagesList = document.getElementById('messages');
  const msgInput = document.getElementById('msgInput');
  const sendBtn = document.getElementById('sendBtn');

  messagesRef.limitToLast(50).off();
  messagesList.innerHTML = '';

  messagesRef.limitToLast(50).on('child_added', snapshot => {
    const msg = snapshot.val();
    const li = document.createElement('li');

    // Chat commands
    if (msg.text.startsWith('/')) {
      li.innerHTML = `<em>${escapeHTML(handleCommand(msg.text))}</em>`;
    } else if (msg.user === OWNER_SECRET_CODE) {
      li.classList.add('owner-msg');
      li.innerHTML = `<strong>Owner</strong>: ${escapeHTML(msg.text)}`;
    } else {
      li.innerHTML = `<strong>${escapeHTML(msg.user)}</strong>: ${escapeHTML(msg.text)}`;
    }
    messagesList.appendChild(li);
    messagesList.scrollTop = messagesList.scrollHeight;
  });

  sendBtn.onclick = () => {
    let text = msgInput.value.trim();
    if (!text) return;
    text = cleanText(text);
    messagesRef.push({ user: username, text });
    msgInput.value = '';
  };

  msgInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') sendBtn.onclick();
  });
}

/* ==== CHAT COMMANDS ==== */
function handleCommand(cmd) {
  if (cmd === '/roll') {
    return `${username} rolled a ${Math.floor(Math.random() * 6) + 1}! 🎲`;
  }
  if (cmd === '/joke') {
    return "Why don’t ragdolls fight? They don’t have the guts. 🤭";
  }
  if (cmd === '/fact') {
    return "Fun fact: The first ragdolls were handmade over 100 years ago!";
  }
  return "Unknown command.";
}

/* ==== CLUB TRIVIA ==== */
document.getElementById('clubTriviaBtn').onclick = () => {
  const facts = [
    "LittleMen was founded in 2025.",
    "Each ragdoll takes 4 hours to 3D print.",
    "The cabin has 3 hidden Easter eggs.",
    "The owner once 3D printed a life-sized ragdoll!"
  ];
  alert(facts[Math.floor(Math.random() * facts.length)]);
};

/* ==== TABS ==== */
document.querySelectorAll('.sidebar button[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
  });
});
