/* ==== CONFIG ==== */
const SECRET_ACCESS_CODE = 'lmn-code-001';
const OWNER_SECRET_CODE = 'rA1nB0w$OwN3r!X9VzqLpT7wF2KdJmHgYs8a';
const bannedWords = ['motherfucker','bitch','pussy','damn','hell','shit','fuck','cunt'];

/* ==== FIREBASE ==== */
const firebaseConfig = {
  apiKey: "AIzaSyCnhg3NUeTPE6A1XbmpzXzcJ7O1whhrgHY",
  authDomain: "littlemen-174cf.firebaseapp.com",
  databaseURL: "https://littlemen-174cf-default-rtdb.firebaseio.com",
  projectId: "littlemen-174cf",
  storageBucket: "littlemen-174cf.firebasestorage.app",
  messagingSenderId: "386734084157",
  appId: "1:386734084157:web:e3d9a69deab7c767641a54"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const messagesRef = db.ref('clubhouseChat');
const siteContentRef = db.ref('siteContent');

/* ==== ELEMENTS ==== */
const entryScreen = document.getElementById('entryScreen');
const door = document.querySelector('.door');
const secretCodeInput = document.getElementById('secretCodeInput');
const secretCodeSubmit = document.getElementById('secretCodeSubmit');
const clubhouse = document.getElementById('clubhouse');
const usernamePrompt = document.getElementById('usernamePrompt');
const usernameInput = document.getElementById('usernameInput');
const usernameSubmit = document.getElementById('usernameSubmit');
const ownerEditor = document.getElementById('ownerEditor');
const changeUsernameBtn = document.getElementById('changeUsernameBtn');
const triviaBtn = document.getElementById('clubTriviaBtn');
const logoutBtn = document.querySelector('.logout');

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

/* ==== SITE CONTENT ==== */
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
      document.getElementById('welcomeTitle').value = content.welcome.title || '';
      document.getElementById('welcomeText').value = content.welcome.text || '';
      document.getElementById('rulesText').value = content.rules.text || '';
      document.getElementById('announcementsText').value = content.announcements.text || '';
      document.getElementById('eventsText').value = content.events.text || '';
    }
  });
}

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
  if (cmd === '/roll') return `${username} rolled a ${Math.floor(Math.random() * 6) + 1}! 🎲`;
  if (cmd === '/joke') return "Why don’t ragdolls fight? They don’t have the guts. 🤭";
  if (cmd === '/fact') return "Fun fact: The first ragdolls were handmade over 100 years ago!";
  return "Unknown command.";
}

/* ==== EVENTS ==== */
// Door entry
secretCodeSubmit.onclick = () => {
  if (secretCodeInput.value.trim() === SECRET_ACCESS_CODE) {
    door.classList.add('open');
    setTimeout(() => {
      entryScreen.classList.add('hidden');
      if (!username) {
        usernamePrompt.classList.remove('hidden');
      } else {
        isOwnerUser = (username === OWNER_SECRET_CODE);
        showOwnerPanel(isOwnerUser);
        clubhouse.classList.remove('hidden');
        setDefaultTab();
        loadSiteContent();
        startChat();
      }
    }, 1000);
  } else {
    alert("Wrong code! Try again.");
  }
};

// Username submit
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
  clubhouse.classList.remove('hidden');
  setDefaultTab();
  loadSiteContent();
  startChat();
};

// Change username
changeUsernameBtn.onclick = () => {
  usernamePrompt.classList.remove('hidden');
};

// Logout button
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('lmUsername');
  clubhouse.classList.add('hidden');
  usernamePrompt.classList.add('hidden');
  entryScreen.classList.remove('hidden');
});

// Trivia button
triviaBtn.onclick = () => {
  const facts = [
    "LittleMen was founded in 2025.",
    "Each ragdoll takes 4-8 hours to 3D print.",
    "We have 800 followers on TikTok!",
    "We have made 100 sales!"
  ];
  alert(facts[Math.floor(Math.random() * facts.length)]);
};

// Owner save
document.getElementById('ownerEditForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!isOwnerUser) return alert("Not authorized!");
  const newContent = {
    welcome: { title: document.getElementById('welcomeTitle').value.trim(), text: document.getElementById('welcomeText').value.trim() },
    rules: { text: document.getElementById('rulesText').value.trim() },
    announcements: { text: document.getElementById('announcementsText').value.trim() },
    events: { text: document.getElementById('eventsText').value.trim() }
  };
  siteContentRef.set(newContent).then(() => {
    alert("Content updated!");
    loadSiteContent();
  });
});

// Tab navigation
document.querySelectorAll('.sidebar button[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
  });
});

/* ==== DEFAULT TAB ==== */
function setDefaultTab() {
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.content section').forEach(s => s.classList.remove('active'));
  document.querySelector('[data-tab="welcome"]').classList.add('active');
  document.getElementById('welcome').classList.add('active');
}

/* ==== INITIAL LOAD ==== */
window.addEventListener('DOMContentLoaded', () => {
  clubhouse.classList.add('hidden');
  usernamePrompt.classList.add('hidden');
  entryScreen.classList.remove('hidden');
});
