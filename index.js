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
  },
  theme: {
    dark: 'Change for light theme.',
    light: 'Change for dark theme'
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
    'fa-id-card': 'Meu currículo.',
    'icon-theme': 'Mudar'
  },
  theme: {
    dark: 'Mudar para tema claro.',
    light: 'Mudar para tema escuro.'
  }
};

var typed;

function setCopyright() {
  var now = new Date();
  var year = now.getFullYear();
  document.getElementById('copyright').innerHTML = `&copy; 2019-${year} Marcelo Magalhães`;
}

function calcAge() {
  var birthdate = { year: 1993, month: 12, day: 8 };
  var now = new Date();
  var nowDateObject = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };

  var age =
    birthdate.month < nowDateObject.month ||
    (birthdate.month === nowDateObject.month && nowDateObject.day >= birthdate.day)
      ? nowDateObject.year - birthdate.year
      : nowDateObject.year - birthdate.year - 1;

  return age;
}

function languageSelector() {
  var selectLanguage = document.getElementById('slider').checked ? brTexts : enTexts;
  var themeIconTitle = document.getElementById('theme').checked
    ? selectLanguage.theme.light
    : selectLanguage.theme.dark;

  var options = {
    strings: selectLanguage.typedStrings,
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
    backDelay: 1000
  };

  if (typed !== undefined) typed.destroy();
  typed = new Typed('.typer', options);

  for (var key in selectLanguage) {
    if (document.getElementById(key)) document.getElementById(key).innerHTML = selectLanguage[key];
  }
  for (var key in selectLanguage.icons) {
    if (document.getElementById(key)) document.getElementById(key).setAttribute('title', selectLanguage.icons[key]);
  }
  document.getElementById('icon-theme').setAttribute('title', themeIconTitle);
}

function themeSelector() {
  if (!document.getElementById('theme').checked) {
    var title = document.getElementById('slider').checked ? 'Mudar para tema claro.' : 'Change for light theme';
    document.getElementById('app').style.backgroundColor = 'rgb(21, 32, 43)';
    document.getElementById('app-header').style.color = 'white';
    document.getElementById('app-body').style.color = 'white';
    document.getElementById('icon-theme').className = 'fas fa-sun';
    document.getElementById('icon-theme').setAttribute('title', title);
  } else {
    var title = document.getElementById('slider').checked ? 'Mudar para tema escuro.' : 'Change for dark theme';
    document.getElementById('app').style.backgroundColor = 'white';
    document.getElementById('app-header').style.color = 'black';
    document.getElementById('app-body').style.color = 'black';
    document.getElementById('icon-theme').className = 'far fa-moon';
    document.getElementById('icon-theme').setAttribute('title', title);
  }
}

setCopyright();
languageSelector();
themeSelector();
