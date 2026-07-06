const GRADES_8_CLASS = [
  { subject: 'Алгебра',      grades: [5, 4, 5, 3, 5], avg: 4.4 },
  { subject: 'Геометрия',    grades: [4, 5, 4, 5],    avg: 4.5 },
  { subject: 'Русский язык', grades: [4, 3, 4, 5, 4, 4], avg: 4.0 },
  { subject: 'Физика',       grades: [5, 5, 4, 5, 4], avg: 4.6 },
  { subject: 'История',      grades: [4, 4, 3, 4, 3], avg: 3.6 },
  { subject: 'Биология',     grades: [3, 4, 3, 4],    avg: 3.5 },
  { subject: 'Химия',        grades: [5, 4, 5, 4, 5], avg: 4.6 },
  { subject: 'Информатика',  grades: [5, 5, 5, 5],    avg: 5.0 },
  { subject: 'Физкультура',  grades: [5, 5, 5, 5, 5], avg: 5.0 },
];

const APP_DATA = {

  user: {
    id: 1,
    name: 'Иванова Алина',
    grade: '8А',
    school: 'ГБОУ Школа №1',
    avatar: null,
    phone: '+7 (999) 123-45-67',
    email: 'alina@school.ru',
    attended: 23
  },

  schedule: {
    '2025-01-13': [
      { num: 1, time: '08:00–08:45', subject: 'Алгебра',      room: '214', teacher: 'Петрова А.В.',   homework: 'Стр. 145, задачи 3–7' },
      { num: 2, time: '08:55–09:40', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.', homework: 'Упр. 84, 85 — списать, вставить пропущенные буквы', tag: { text: 'Диктант', type: 'warning' } },
      { num: 3, time: '09:50–10:35', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.',   homework: 'Параграф 12, задачи 1–3 (стр. 76)' },
      { num: 4, time: '10:55–11:40', subject: 'История',      room: '205', teacher: 'Белова С.В.',   homework: 'Параграф 18, ответить на вопросы 1–5' },
      { num: 5, time: '11:50–12:35', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 6, time: '12:45–13:30', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-14': [
      { num: 1, time: '08:00–08:45', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.', homework: 'Упр. 91 — написать сочинение-миниатюру (5–7 предл.)' },
      { num: 2, time: '08:55–09:40', subject: 'Алгебра',      room: '214', teacher: 'Петрова А.В.',   homework: '§12, задачи 4–9 (стр. 76)' },
      { num: 3, time: '09:50–10:35', subject: 'Химия',        room: '207', teacher: 'Громова О.С.',   homework: 'Параграф 14, задания 1–4', tag: { text: 'Контрольная работа', type: 'error' } },
      { num: 4, time: '10:55–11:40', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.',   homework: 'Составить блок-схему алгоритма сортировки' },
      { num: 5, time: '11:50–12:35', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-15': [
      { num: 1, time: '08:00–08:45', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.',   homework: 'Параграф 13, задачи 5–8' },
      { num: 2, time: '08:55–09:40', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.', homework: 'Параграф 21, конспект' },
      { num: 3, time: '09:50–10:35', subject: 'История',      room: '205', teacher: 'Белова С.В.',   homework: 'Параграф 19, вопросы 3–6' },
      { num: 4, time: '10:55–11:40', subject: 'Геометрия',    room: '214', teacher: 'Петрова А.В.',   homework: 'Стр. 56, задачи 1–4' },
      { num: 5, time: '11:50–12:35', subject: 'Химия',        room: '207', teacher: 'Громова О.С.',   homework: 'Параграф 15, вопросы и задания' },
      { num: 6, time: '12:45–13:30', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.', homework: 'Упр. 96, подготовиться к изложению' },
    ],
    '2025-01-16': [
      { num: 1, time: '08:00–08:45', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.',   homework: 'Задание на сайте: тема «Алгоритмы»' },
      { num: 2, time: '08:55–09:40', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.',   homework: 'Параграф 14, задачи 1–3', tag: { text: 'Проверочная', type: 'warning' } },
      { num: 3, time: '09:50–10:35', subject: 'Алгебра',      room: '214', teacher: 'Петрова А.В.',   homework: 'Стр. 152, задачи 10–14' },
      { num: 4, time: '10:55–11:40', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-17': [
      { num: 1, time: '08:00–08:45', subject: 'История',      room: '205', teacher: 'Белова С.В.',   homework: 'Параграф 20, записать даты и события' },
      { num: 2, time: '08:55–09:40', subject: 'Химия',        room: '207', teacher: 'Громова О.С.',   homework: 'Параграф 16, опыты 1–2 (описание)' },
      { num: 3, time: '09:50–10:35', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.', homework: 'Параграф 22, вопросы после параграфа' },
      { num: 4, time: '10:55–11:40', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.', homework: 'Упр. 102 — изложение' },
      { num: 5, time: '11:50–12:35', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.',   homework: 'Доделать программу из класса' },
    ],
    '2025-01-18': [],
    '2025-01-19': [],
    '2025-01-20': [
      { num: 1, time: '08:00–08:45', subject: 'Геометрия',    room: '214', teacher: 'Петрова А.В.' },
      { num: 2, time: '08:55–09:40', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
      { num: 3, time: '09:50–10:35', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 4, time: '10:55–11:40', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
      { num: 5, time: '11:50–12:35', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
      { num: 6, time: '12:45–13:30', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
    ],
    '2025-01-21': [
      { num: 1, time: '08:00–08:45', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
      { num: 2, time: '08:55–09:40', subject: 'Алгебра',      room: '214', teacher: 'Петрова А.В.' },
      { num: 3, time: '09:50–10:35', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
      { num: 4, time: '10:55–11:40', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
    ],
    '2025-01-22': [
      { num: 1, time: '08:00–08:45', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 2, time: '08:55–09:40', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
      { num: 3, time: '09:50–10:35', subject: 'Алгебра',      room: '214', teacher: 'Петрова А.В.' },
      { num: 4, time: '10:55–11:40', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 5, time: '11:50–12:35', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
    ],
    '2025-01-23': [
      { num: 1, time: '08:00–08:45', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
      { num: 2, time: '08:55–09:40', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
      { num: 3, time: '09:50–10:35', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 4, time: '10:55–11:40', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
    ],
    '2025-01-24': [
      { num: 1, time: '08:00–08:45', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
      { num: 2, time: '08:55–09:40', subject: 'Геометрия',    room: '214', teacher: 'Петрова А.В.' },
      { num: 3, time: '09:50–10:35', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
      { num: 4, time: '10:55–11:40', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
      { num: 5, time: '11:50–12:35', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 6, time: '12:45–13:30', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-25': [],
    '2025-01-26': [],
  },

  grades: GRADES_8_CLASS,

  gradesByClass: {
    '5 класс': [
      { subject: 'Математика',            grades: [5, 4, 5, 5, 4], avg: 4.6 },
      { subject: 'Русский язык',          grades: [4, 5, 4, 4],    avg: 4.25 },
      { subject: 'Литературное чтение',   grades: [5, 5, 4],       avg: 4.67 },
      { subject: 'История',               grades: [4, 4, 5],       avg: 4.33 },
      { subject: 'Природоведение',        grades: [4, 3, 4],       avg: 3.67 },
      { subject: 'Английский язык',       grades: [5, 4, 5, 5],    avg: 4.75 },
      { subject: 'Физкультура',           grades: [5, 5, 5],       avg: 5.0 },
    ],
    '6 класс': [
      { subject: 'Математика',      grades: [4, 4, 5, 3], avg: 4.0 },
      { subject: 'Русский язык',    grades: [4, 3, 4, 4], avg: 3.75 },
      { subject: 'Литература',      grades: [5, 4, 5],    avg: 4.67 },
      { subject: 'История',         grades: [3, 4, 4],    avg: 3.67 },
      { subject: 'Биология',        grades: [4, 4, 3],    avg: 3.67 },
      { subject: 'География',       grades: [4, 5, 4],    avg: 4.33 },
      { subject: 'Английский язык', grades: [4, 4, 5, 4], avg: 4.25 },
      { subject: 'Обществознание',  grades: [5, 4],       avg: 4.5 },
      { subject: 'Физкультура',     grades: [5, 5, 4],    avg: 4.67 },
    ],
    '7 класс': [
      { subject: 'Алгебра',         grades: [4, 3, 4, 4], avg: 3.75 },
      { subject: 'Геометрия',       grades: [4, 4, 5],    avg: 4.33 },
      { subject: 'Русский язык',    grades: [3, 4, 3, 4], avg: 3.5 },
      { subject: 'Физика',          grades: [4, 5, 4],    avg: 4.33 },
      { subject: 'История',         grades: [3, 3, 4],    avg: 3.33 },
      { subject: 'Биология',        grades: [4, 4, 3],    avg: 3.67 },
      { subject: 'Обществознание',  grades: [4, 5],       avg: 4.5 },
      { subject: 'Английский язык', grades: [4, 4, 5, 5], avg: 4.5 },
      { subject: 'Физкультура',     grades: [5, 5, 5],    avg: 5.0 },
    ],
    '8 класс': GRADES_8_CLASS,
  },

  moti: {
    level: 4,
    xp: 320,
    xpMax: 500,
    linkUrl: '#', // TODO: заменить на ссылку, когда она будет предоставлена
  },

  motiMessages: [
    { title: 'Отличная успеваемость!', subtitle: 'Продолжай в том же духе' },
    { title: 'Ты справишься!',         subtitle: 'Учись понемногу каждый день' },
    { title: 'Не бойся ошибок',        subtitle: 'Именно из них рождаются успехи' },
  ],

  news: [
    {
      id: 1,
      title: 'Школьная олимпиада по математике',
      date: '15 января 2025',
      dateShort: '15 янв',
      preview: 'Приглашаем всех учеников 7–10 классов принять участие в ежегодной школьной олимпиаде по математике. Победители пройдут в городской этап.',
      content: 'Уважаемые ученики!\n\nПриглашаем всех учеников 7–10 классов принять участие в ежегодной школьной олимпиаде по математике.\n\nОлимпиада состоится 25 января 2025 года в кабинете 214 (начало в 14:00).\n\nПобедители школьного этапа получат право участвовать в городской олимпиаде. Для участия необходимо записаться у учителя математики Петровой А.В. до 20 января.\n\nЖелаем всем удачи!',
      image: null,
      tag: 'Объявление'
    },
    {
      id: 2,
      title: 'Родительское собрание',
      date: '12 января 2025',
      dateShort: '12 янв',
      preview: '18 января в 18:00 состоится общешкольное родительское собрание в актовом зале. Просим всех родителей принять участие.',
      content: 'Уважаемые родители!\n\n18 января 2025 года в 18:00 состоится общешкольное родительское собрание.\n\nМесто проведения: актовый зал, 1 этаж.\n\nПовестка дня:\n• Итоги первого полугодия\n• Организация зимних каникул\n• Планы на второе полугодие\n• Разное\n\nПросим всех родителей принять участие.',
      image: null,
      tag: 'Событие'
    },
    {
      id: 3,
      title: 'Новогодний концерт — фотоотчёт',
      date: '10 января 2025',
      dateShort: '10 янв',
      preview: 'Публикуем фотоотчёт с праздничного новогоднего концерта школы. Спасибо всем участникам!',
      content: 'Дорогие друзья!\n\nМы рады поделиться фотоотчётом с нашего новогоднего школьного концерта, который прошёл 27 декабря.\n\nВ этом году в концерте приняли участие более 150 учеников. Были представлены номера: танцы, вокал, театральные постановки и многое другое.\n\nОтдельная благодарность классным руководителям и родителям за помощь в подготовке.\n\nС Новым годом!',
      image: null,
      tag: 'Фото'
    },
    {
      id: 4,
      title: 'Расписание каникул',
      date: '9 января 2025',
      dateShort: '9 янв',
      preview: 'Зимние каникулы проходят с 30 декабря по 8 января. Занятия возобновляются 9 января 2025 года.',
      content: 'Уважаемые ученики и родители!\n\nНапоминаем: зимние каникулы в этом учебном году проходили с 30 декабря 2024 по 8 января 2025 включительно.\n\nЗанятия возобновились 9 января 2025 года по обычному расписанию.\n\nЖелаем всем продуктивного второго полугодия!',
      image: null,
      tag: 'Объявление'
    },
    {
      id: 5,
      title: 'Запись в секции и кружки',
      date: '5 января 2025',
      dateShort: '5 янв',
      preview: 'Открыта запись в школьные кружки и спортивные секции на второе полугодие. Спешите занять места!',
      content: 'Уважаемые ученики!\n\nОткрыта запись в школьные кружки и секции на второе полугодие 2024–2025 учебного года.\n\nДоступные направления:\n• Шахматный клуб (каб. 203, пн/ср 15:00)\n• Театральная студия (актовый зал, вт/пт 15:30)\n• Волейбол (спортзал, пн/ср/пт 16:00)\n• Программирование (каб. 115, вт/чт 15:00)\n• Рисование (каб. 118, ср/пт 15:30)\n\nДля записи обратитесь к классному руководителю.',
      image: null,
      tag: 'Объявление'
    },
  ],

  chats: [
    {
      id: 1,
      name: '8А Класс',
      type: 'group',
      avatar: 'images/chats/avatar-class.svg',
      lastMessage: 'Поняла, спасибо!',
      lastSender: 'me',
      status: 'read',
      dateLabel: '12:30',
      unread: 0,
      muted: false,
      members: [
        { id: 1, name: 'Петрова А.В.',    role: 'Классный руководитель', avatar: null, presence: 'в сети' },
        { id: 2, name: 'Иванова Алина',   role: 'Ученик', avatar: null, presence: 'это вы' },
        { id: 3, name: 'Смирнов Дима',    role: 'Ученик', avatar: 'images/chats/avatar-boy1.svg', presence: 'в сети' },
        { id: 4, name: 'Козлова Маша',    role: 'Ученик', avatar: 'images/chats/avatar-girl1.svg', presence: 'был(а) недавно' },
        { id: 5, name: 'Новиков Артём',   role: 'Ученик', avatar: null, presence: 'был(а) недавно' },
        { id: 6, name: 'Белова Катя',     role: 'Ученик', avatar: null, presence: 'был(а) вчера' },
      ],
      messages: [
        { id: 1, sender: 'Петрова А.В.',  senderId: 1, text: 'Добрый день! Напоминаю: завтра контрольная работа по алгебре, тема — квадратные уравнения.', time: '11:00', outgoing: false, status: 'read' },
        { id: 2, sender: 'Смирнов Дима',  senderId: 3, text: 'Спасибо за напоминание!', time: '11:05', outgoing: false },
        { id: 3, sender: 'me',            senderId: 2, text: 'Поняла, готовлюсь 👍', time: '11:10', outgoing: true, status: 'read' },
        { id: 4, sender: 'Петрова А.В.',  senderId: 1, text: 'Не забудьте сдать домашнее задание по математике — задачи 5.12–5.18.', time: '12:15', outgoing: false, attachments: [{ type: 'image', url: 'images/chats/photo-demo1.svg', name: 'Задание.jpg' }] },
        { id: 5, sender: 'me',            senderId: 2, text: 'Поняла, спасибо!', time: '12:30', outgoing: true, status: 'read' },
      ]
    },
    {
      id: 2,
      name: 'Математика 8А',
      type: 'group',
      avatar: 'images/chats/avatar-subject.svg',
      lastMessage: 'Задание на завтра: §12, задачи 1–5',
      lastSender: 'Петрова А.В.',
      dateLabel: '11:15',
      unread: 1,
      muted: false,
      members: [
        { id: 1, name: 'Петрова А.В.', role: 'Учитель', avatar: null, presence: 'в сети' },
        { id: 2, name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
        { id: 3, name: 'Смирнов Дима',  role: 'Ученик', avatar: 'images/chats/avatar-boy1.svg', presence: 'в сети' },
      ],
      messages: [
        { id: 1, sender: 'Петрова А.В.', senderId: 1, text: 'Добрый день! Сегодня разбираем тему «Квадратные уравнения».', time: '08:00', outgoing: false },
        { id: 2, sender: 'me', senderId: 2, text: 'Можете скинуть ссылку на задачник?', time: '08:05', outgoing: true },
        { id: 3, sender: 'Петрова А.В.', senderId: 1, text: 'Задание на завтра: §12, задачи 1–5', time: '11:15', outgoing: false },
      ]
    },
    {
      id: 3,
      name: 'Петрова А.В.',
      type: 'direct',
      avatar: 'images/chats/avatar-teacher1.svg',
      lastMessage: 'Отправила фото домашнего задания',
      lastSender: 'me',
      status: 'sent',
      dateLabel: '09:40',
      unread: 0,
      muted: false,
      members: [
        { id: 1, name: 'Петрова А.В.', role: 'Учитель математики', avatar: 'images/chats/avatar-teacher1.svg', presence: 'в сети' },
        { id: 2, name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
      ],
      messages: [
        { id: 1, sender: 'Петрова А.В.', senderId: 1, text: 'Алина, добрый день! Пришлите, пожалуйста, фото решённого домашнего задания.', time: '09:20', outgoing: false },
        { id: 2, sender: 'me', senderId: 2, text: 'Отправила фото домашнего задания', time: '09:40', outgoing: true, status: 'sent', attachments: [{ type: 'image', url: 'images/chats/photo-demo2.svg', name: 'Домашка.jpg' }] },
      ]
    },
    {
      id: 4,
      name: 'Смирнов Дима',
      type: 'direct',
      avatar: 'images/chats/avatar-boy1.svg',
      lastMessage: 'Скинь фото домашки, плиз',
      lastSender: null,
      dateLabel: '08:55',
      unread: 2,
      muted: false,
      members: [
        { id: 3, name: 'Смирнов Дима', role: 'Одноклассник', avatar: 'images/chats/avatar-boy1.svg', presence: 'в сети' },
        { id: 2, name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
      ],
      messages: [
        { id: 1, sender: 'Смирнов Дима', senderId: 3, text: 'Привет! Ты сделала домашку по алгебре?', time: '08:50', outgoing: false },
        { id: 2, sender: 'Смирнов Дима', senderId: 3, text: 'Скинь фото домашки, плиз', time: '08:55', outgoing: false },
      ]
    },
    {
      id: 5,
      name: 'Родительский чат 8А',
      type: 'group',
      avatar: 'images/chats/avatar-parents.svg',
      lastMessage: 'Собрание переносится на понедельник',
      lastSender: 'Смирнов П.В. (папа)',
      dateLabel: '10:00',
      unread: 1,
      muted: false,
      members: [
        { id: 10, name: 'Иванова О.П. (мама)', role: 'Родитель', avatar: null, presence: 'был(а) недавно' },
        { id: 11, name: 'Смирнов П.В. (папа)', role: 'Родитель', avatar: null, presence: 'в сети' },
        { id: 1,  name: 'Петрова А.В.',         role: 'Классный руководитель', avatar: null, presence: 'в сети' },
      ],
      messages: [
        { id: 1, sender: 'Петрова А.В.', senderId: 1, text: 'Уважаемые родители, напоминаю о родительском собрании 18 января в 18:00.', time: '09:00', outgoing: false },
        { id: 2, sender: 'Смирнов П.В. (папа)', senderId: 11, text: 'Собрание переносится на понедельник', time: '10:00', outgoing: false },
      ]
    },
    {
      id: 6,
      name: 'Физкультура 8А',
      type: 'group',
      avatar: 'images/chats/avatar-sport.svg',
      lastMessage: 'Хорошо, принесу справку в четверг',
      lastSender: 'me',
      status: 'sent',
      dateLabel: 'чт',
      unread: 0,
      muted: true,
      members: [
        { id: 20, name: 'Орлов В.К.', role: 'Учитель физкультуры', avatar: null, presence: 'был(а) недавно' },
        { id: 2,  name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
      ],
      messages: [
        { id: 1, sender: 'Орлов В.К.', senderId: 20, text: 'Не забудьте справки от врача, у кого освобождение.', time: 'Чт, 09:00', outgoing: false },
        { id: 2, sender: 'me', senderId: 2, text: 'Хорошо, принесу справку в четверг', time: 'Чт, 09:05', outgoing: true },
      ]
    },
    {
      id: 7,
      name: 'Козлова Маша',
      type: 'direct',
      avatar: 'images/chats/avatar-girl1.svg',
      lastMessage: 'Увидимся завтра в школе!',
      lastSender: null,
      dateLabel: 'ср',
      unread: 0,
      muted: false,
      members: [
        { id: 4, name: 'Козлова Маша', role: 'Одноклассница', avatar: 'images/chats/avatar-girl1.svg', presence: 'был(а) недавно' },
        { id: 2, name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
      ],
      messages: [
        { id: 1, sender: 'me', senderId: 2, text: 'Не забудь взять учебник по географии', time: 'Ср, 18:00', outgoing: true },
        { id: 2, sender: 'Козлова Маша', senderId: 4, text: 'Увидимся завтра в школе!', time: 'Ср, 18:05', outgoing: false },
      ]
    },
    {
      id: 8,
      name: 'Новикова Т.А.',
      type: 'direct',
      avatar: 'images/chats/avatar-teacher2.svg',
      lastMessage: 'Хорошо, жду вас после уроков',
      lastSender: null,
      dateLabel: 'вт',
      unread: 0,
      muted: false,
      members: [
        { id: 21, name: 'Новикова Т.А.', role: 'Учитель биологии', avatar: 'images/chats/avatar-teacher2.svg', presence: 'был(а) недавно' },
        { id: 2,  name: 'Иванова Алина', role: 'Ученик', avatar: null, presence: 'это вы' },
      ],
      messages: [
        { id: 1, sender: 'me', senderId: 2, text: 'Татьяна Андреевна, можно подойти пересдать тест?', time: 'Вт, 13:00', outgoing: true },
        { id: 2, sender: 'Новикова Т.А.', senderId: 21, text: 'Хорошо, жду вас после уроков', time: 'Вт, 13:10', outgoing: false },
      ]
    },
  ],

  homework: [
    { subject: 'Алгебра',      task: 'Стр. 145, задачи 3–7',                                       date: '2025-01-14' },
    { subject: 'История',       task: 'Параграф 18, вопросы 1–5',                                  date: '2025-01-14' },
    { subject: 'Русский язык',  task: 'Упр. 84, 85 — списать, вставить пропущенные буквы',         date: '2025-01-14' },
  ],

  notifications: [
    { id: 1, type: 'grade',    title: 'Новая оценка',         text: 'Новая оценка по математике: 5',            time: '10 мин назад', read: false },
    { id: 2, type: 'message',  title: 'Новое сообщение',      text: 'Петрова А.В. написала в чате «8А Класс»',  time: '30 мин назад', read: false },
    { id: 3, type: 'schedule', title: 'Расписание обновлено', text: 'Расписание на завтра изменено',             time: '2 часа назад', read: true  },
    { id: 4, type: 'news',     title: 'Новая публикация',     text: 'Школьная олимпиада по математике',          time: 'Вчера, 15:00', read: true  },
    { id: 5, type: 'grade',    title: 'Новая оценка',         text: 'Новая оценка по физике: 4',                time: 'Вчера, 12:30', read: true  },
  ],

};
