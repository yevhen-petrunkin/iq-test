import men from '../../images/men.jpeg'
import men2 from '../../images/men@2x.jpeg'
import men3 from '../../images/men@3x.jpeg'
import pyramid from '../../images/men.jpeg'
import pyramid2 from '../../images/pyramid@2x.jpeg'
import pyramid3 from '../../images/pyramid@3x.jpeg'
import star from '../../images/star.jpeg'
import star2 from '../../images/star@2x.jpeg'
import star3 from '../../images/star@3x.jpeg'

export const testContent = {
  questionOne: {
    title: 'Ваш пол:',
    options: ['мужчина', 'женщина'],
  },
  questionTwo: {
    title: 'Укажите ваш возраст:',
    options: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36'],
  },
  questionThree: {
    title: 'Выберите лишнее:',
    options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
  },
  questionFour: {
    title: 'Продолжите числовой ряд:  18  20  24  32',
    options: ['62', '48', '74', '57', '60', '77'],
  },
  questionFive: {
    title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B3AC',
    ],
  },
  questionSix: {
    title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#46B2AC',
      '#A95403',
      '#00A701',
      '#000000',
      '#F60100',
      '#850068',
      '#FDFF19',
      '#0000A9',
    ],
  },
  questionSeven: {
    title: 'Какой из городов лишний?',
    options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
  },
  questionEight: {
    title: 'Выберите правильную фигуру из четырёх пронумерованных.',
    imageUrl: [men, men2, men3],
    options: ['1', '2', '3', '4'],
  },
  questionNine: {
    title: 'Вам привычнее и важнее:',
    options: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт',
    ],
  },
  questionTen: {
    title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    imageUrl: [pyramid, pyramid2, pyramid3],
    options: ['Оно остроконечное', 'Оно устойчиво', 'Оно-находится в состоянии равновесия'],
  },
  questionEleven: {
    title: 'Вставьте подходящее число',
    imageUrl: [star, star2, star3],
    options: ['34', '36', '53', '44', '66', '42'],
  },
}
