var zodiacSign = 'Sagittarius';
var birthMonth = 'December';
var birthday = 3;
var luckyNumber = 15;
var horoscopeDesc = 'Sagittarius is a Fire sign ruled by Jupiter, known for its adventurous spirit and philosophical nature. Individuals born under this sign are often seen as the travelers of the zodiac, driven by a quest for knowledge and experiences. They possess a strong moral compass and a generous heart, often seeking to help others.';
var belief = false;

var signElement = document.getElementById('sign');
signElement.textContent = zodiacSign;

var birthdayElement = document.getElementsByClassName('birthday');
birthdayElement[0].textContent += birthMonth + ' ' + birthday;

var luckyNumberElement = document.getElementsByClassName('luckyNum');
luckyNumberElement[0].textContent += luckyNumber;

var paragraphElement = document.getElementsByTagName('p');
paragraphElement[0].textContent = horoscopeDesc;
paragraphElement[1].innerHTML += '<strong>' + belief + '</strong>';

var moodRating = 7;
var moodRatingP1 = 9;
var moodRatingP2 = 8;

var moodAvg = (moodRating + moodRatingP1 + moodRatingP2) / 3;

var newParagraph = document.getElementById('mood');
newParagraph.textContent = 'Today\'s mood rating for Sagittarius: ' + moodRating + ' out of 10. The average mood rating of Sagittarius, Libra, Asparagus is: ' + moodAvg;

var zodiacSigns = ['Sagittarius', 'Libra', 'Asparagus'];
var myZodiacSign = zodiacSigns[0];
var zodiacSignP1 = zodiacSigns[1];
var zodiacSignP2 = zodiacSigns[2];

var myZodiacSignElement = document.getElementById('myZodiacSign');
var zodiacSignP1Element = document.getElementById('zodiacSignP1');
var zodiacSignP2Element = document.getElementById('zodiacSignP2');

myZodiacSignElement.textContent += myZodiacSign;
zodiacSignP1Element.textContent += zodiacSignP1;
zodiacSignP2Element.textContent += zodiacSignP2;

var horoscopes = ['Today is a day for new beginnings.',
    'Embrace change and seize opportunities.',
    'Your determination will lead to success today.',
    'Stay focused on your goals.',
    'Communication is key today.',
    'Express yourself clearly and listen to others.',
    'Trust your intuition.',
    'It will guide you in making the right decisions.',
    'Your creativity shines today.',
    'Use it to inspire and lead others.',
    'Pay attention to the details.',
    'Your meticulous work will pay off.',
    'Balance is essential.',
    'Find harmony in all aspects of your life.',
    'Embrace transformation.',
    'Let go of what no longer serves you.',
    'Adventure awaits.',
    'Explore new horizons and expand your horizons.',
    'Hard work leads to success.',
    'Keep pushing toward your goals.',
    'Your unique perspective is an asset.',
    'Share your ideas with others.',
    'Trust your emotions.',
    'They will guide you in making the right choices.'
]

var horoscopeChoice = horoscopes[5];
var horoscopesChoiceP1 = horoscopes[4];
var horoscopesChoiceP2 = horoscopes[6];
horoscopes[2] = 'Something random here';

var element = document.getElementById('horoscope');
element.textContent = horoscopeChoice + ' ' + horoscopesChoiceP1 + ' ' + horoscopesChoiceP2;