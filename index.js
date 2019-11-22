var typedStrings = [
  'Software Engineering student',
  'lifelong learner',
  'interested in internet privacy and security',
  'problem solver',
  'basketball fan'
];

var options = {
  strings: typedStrings,
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
  backDelay: 1000
};

new Typed('.typer', options);

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

document.getElementById('age').innerHTML = calcAge() + ' yo';
