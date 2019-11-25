var enTexts = {
  'site-text-0': "What's up!",
  'site-text-1': 'My name is',
  'site-text-2': "and I'm a",
  age: calcAge() + ' yo',
  'site-text-3': 'from',
  'site-text-4': 'Brasília, Brazil.',
  typedStrings: [
    'Software Engineering student',
    'interested in internet privacy and security',
    'software developer',
    'problem solver',
    'basketball fan'
  ],
  icons: {
    'fa-envelope': 'Mail me!',
    'fa-github': 'My personal software projects.',
    'fa-linkedin': 'My Linkedin.',
    'fa-twitter': 'My tweets.',
    'fa-telegram-plane': 'Talk with me.',
    'fa-id-card': 'My resume.'
  }
};

var brTexts = {
  'site-text-0': 'Olá!',
  'site-text-1': 'Meu nome é',
  'site-text-2': '',
  age: 'e sou',
  'site-text-3': 'de',
  'site-text-4': 'Brasília, Brasil.',
  typedStrings: [
    'Estudante de Engenharia de Software',
    'desenvolvedor de software',
    'interessado em privacidade e segurança na internet',
    'fã de basquete'
  ],
  icons: {
    'fa-envelope': 'Meu e-mail.',
    'fa-github': 'Meus projetos.',
    'fa-linkedin': 'Meu Linkedin.',
    'fa-twitter': 'Meus tweets.',
    'fa-telegram-plane': 'Converse comigo.',
    'fa-id-card': 'Meu currículo.'
  }
};

function calcAge() {
  var birthdate = { year: 1993, month: 12, day: 8 };
  var now = new Date();
  var nowDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };

  var age =
    birthdate.month < nowDate.month || (birthdate.month === nowDate.month && nowDate.day >= birthdate.day)
      ? nowDate.year - birthdate.year
      : nowDate.year - birthdate.year - 1;

  return age;
}

function languageSelector() {
  var selectLanguage = document.getElementById('slider').checked ? brTexts : enTexts;

  var options = {
    strings: selectLanguage.typedStrings,
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    backDelay: 1000
  };

  if (typed !== undefined) typed.destroy();
  typed = new Typed('.typer', options);

  for (const key in selectLanguage) {
    if (document.getElementById(key)) document.getElementById(key).innerHTML = selectLanguage[key];
  }
  for (const key in selectLanguage.icons) {
    if (document.getElementById(key)) document.getElementById(key).setAttribute('title', selectLanguage.icons[key]);
  }
}

var typed;

languageSelector();
