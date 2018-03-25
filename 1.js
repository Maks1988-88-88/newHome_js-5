let en_Alphabet = "qwertyuiop[]asdfghjkl;'\zxcvbnm,./";
let ru_Alphabet = "йцукенгшщзхъфывапролджэячсмитьбю.";
let ua_Alphabet = "йцукенгшщзхїфівапролджєячсмитьбю.";


const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};


function addKeyboardEn() {
  en_Alphabet = en_Alphabet.split("");
  // console.log(en_Alphabet);
  en_1 = en_Alphabet.slice(0,12);
  // console.log(en_1);

  keyboard.layouts.en['topRow'] = en_1;
  en_2 = en_Alphabet.slice(12,23);
  // console.log(en_2);

  keyboard.layouts.en['middleRow'] = en_2;
  en_3 = en_Alphabet.slice(23,33);
  // console.log(en_3);
  keyboard.layouts.en['bottomRow'] = en_3;

}
addKeyboardEn();

console.log(keyboard.layouts.en);


function addKeyboardRu() {
  ru_Alphabet = ru_Alphabet.split("");
  // console.log(ru_Alphabet);
  ru_1 = ru_Alphabet.slice(0,12);
  // console.log(ru_1);

  keyboard.layouts.ru['topRow'] = ru_1;
  ru_2 = ru_Alphabet.slice(12,23);
  // console.log(ru_2);

  keyboard.layouts.ru['middleRow'] = ru_2;
  ru_3 = ru_Alphabet.slice(23,33);
  // console.log(ru_3);
  keyboard.layouts.ru['bottomRow'] = ru_3;

}
addKeyboardRu();

console.log(keyboard.layouts.ru);



function addKeyboardUa() {
  ua_Alphabet = ua_Alphabet.split("");
  // console.log(ua_Alphabet);
  ua_1 = ua_Alphabet.slice(0,12);
  // console.log(ua_1);

  keyboard.layouts.ua['topRow'] = ua_1;
  ua_2 = ua_Alphabet.slice(12,23);
  // console.log(ua_2);

  keyboard.layouts.ua['middleRow'] = ua_2;
  ua_3 = ua_Alphabet.slice(23,33);
  // console.log(ua_3);
  keyboard.layouts.ua['bottomRow'] = ua_3;

}
addKeyboardUa();

console.log(keyboard.layouts.ua);

function choiceLang(){
    let choice = +prompt('Choose keyboard en-0, ru-1, ua-2');
    if (choice == '0'){
        let en_choice = keyboard.langs[0];
        console.log(en_choice);
        keyboard.currentLang = en_choice;
        alert('Вы выбрали Английский');
    }
        else if (choice == 1){
            let ru_choice = keyboard.langs[1];
            console.log(ru_choice);
            keyboard.currentLang = ru_choice;
            alert('Вы выбрали Русский');
    }
        else if (choice == 2){
            let ua_choice = keyboard.langs[2];
            console.log(ua_choice);
            keyboard.currentLang = ua_choice;
            alert('Вы выбрали Украинский');
    }

    else {
        alert('Вы нечего не выбрали');
        choiceLang();
    }
}

choiceLang();

// console.log(keyboard);
// console.log(keyboard.currentLang);

function getRandCharInAlph() {

    if (keyboard.currentLang == 'en') {
        console.log(en_Alphabet);
        let rand_en = en_Alphabet[Math.floor(Math.random()*en_Alphabet.length)];
        alert('Случайна клавиша английскай ' + rand_en );
    }
           else if (keyboard.currentLang == 'ru') {
            let rand_ru = ru_Alphabet[Math.floor(Math.random()*ru_Alphabet.length)];
            alert('Случайна клавиша русская ' + rand_ru );
           }

           else if (keyboard.currentLang == 'ua') {
            let rand_ua = ua_Alphabet[Math.floor(Math.random()*ua_Alphabet.length)];
            alert('Случайна клавиша украинская ' + rand_ua);
            }


}

getRandCharInAlph();

console.log(en_Alphabet.length);