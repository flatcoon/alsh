# Директива: PWA «Школьное приложение с AR»

## О проекте
Дипломная работа — Шуткина Алина Алексеевна  
Тема: «Разработка дизайна мобильного приложения для образовательного учреждения с применением технологий дополненной реальности»  
Группа: Дб-4801-03-00 · Руководитель: Николаев Аркадий Львович

---

## Стек технологий
- **HTML5** — семантическая разметка
- **CSS3** — переменные (`--token`), flexbox, grid. Без фреймворков.
- **Vanilla JavaScript ES6+** — без npm, без сборщиков, без фреймворков
- **PWA** — `manifest.json` + Service Worker
- Запуск: открыть `index.html` в браузере. Всё работает локально без сервера.

## Figma-источники
- Файловый ключ: `hmSNzygaPn46D4zEERUtQh`
- Экраны (node): `45:1499`
- Дизайн-система (node): `12:7717`
- При реализации каждого экрана вызывать `get_design_context` по конкретному Figma node ID из таблицы экранов ниже

---

## Структура файлов проекта

```
/
├── index.html                  # SPA shell: подключает все стили, скрипты, рендерит экраны
├── manifest.json               # PWA манифест
├── sw.js                       # Service Worker (кэш + офлайн)
│
├── css/
│   ├── tokens.css              # CSS custom properties: цвета, типографика, отступы, радиусы
│   ├── components.css          # Переиспользуемые компоненты (кнопки, инпуты, карточки…)
│   └── app.css                 # Глобальные стили, анимации переходов между экранами
│
├── js/
│   ├── router.js               # Hash-роутер: разбирает window.location.hash, показывает нужный экран
│   ├── app.js                  # Инициализация PWA, регистрация SW, глобальное состояние
│   └── data.js                 # Моковые данные (JSON-объекты): расписание, оценки, чаты, новости
│
├── screens/                    # HTML-шаблоны экранов (загружаются роутером в #app)
│   ├── preloader.html
│   ├── onboarding.html
│   ├── welcome.html
│   ├── enter-code.html
│   ├── home.html
│   ├── schedule.html
│   ├── grades.html
│   ├── news-list.html
│   ├── news-item.html
│   ├── chats.html
│   ├── chat.html
│   ├── participants.html
│   ├── profile.html
│   ├── profile-edit.html
│   ├── notifications.html
│   └── ar.html
│
├── icons/                      # SVG иконки Vuesax (bulk и outline варианты)
│   ├── home.svg
│   ├── calendar.svg
│   ├── book.svg
│   ├── messages.svg
│   ├── profile.svg
│   ├── arrow-left.svg
│   ├── notification.svg
│   ├── edit.svg
│   └── ...
│
└── images/
    ├── mascot/                 # Изображения маскота-робота (Моти)
    └── news/                   # Заглушки изображений для новостей
```

---

## Дизайн-система: Цветовые токены (реальные значения из Figma)

Все CSS-переменные объявляются в `css/tokens.css` в `:root`.  
Именование совпадает с Figma-токенами (слэши заменены дефисами).

```css
:root {
  /* === ФОНЫ === */
  --bg-primary:            #fcfcfc;   /* background/primary — основной фон экранов */
  --bg-secondary:          #f4f4f5;   /* background/secondary — фон инпутов, прогресс-бара */
  --surface-secondary:     #f4f4f5;   /* surface/secondary — поверхность карточек */

  /* === ТЕКСТ === */
  --text-primary:          #1b1b1b;   /* text/primary — основной текст */
  --text-secondary:        #8a8a8a;   /* text/secondary — второстепенный текст, плейсхолдеры */
  --text-accent:           #4279bb;   /* text/accent — акцентный текст (активная вкладка нав.) */
  --text-inverse:          #ffffff;   /* text/inverse — текст на тёмных поверхностях */
  --text-disabled:         #c9c9c9;   /* text/disabled — неактивные элементы */

  /* === ИКОНКИ === */
  --icon-primary:          #1b1b1b;   /* icon/primary — основной цвет иконок */
  --icon-accent:           #4279bb;   /* icon/accent — акцентные иконки, прогресс-бар */
  --icon-error:            #e93334;   /* icon/error — ошибки, значок уведомления на чате */

  /* === КНОПКИ === */
  --btn-primary-bg:        #4279bb;   /* button/primary/default — фон primary кнопки */
  --btn-primary-disabled:  #f4f4f5;   /* button/primary/disabled — неактивная кнопка */

  /* === ГРАНИЦЫ === */
  --border-secondary:      #e3e3e3;   /* border/secondary — граница инпутов */

  /* === РАДИУСЫ === */
  --radius-s:              12px;      /* radius/s — маленький радиус (кнопки внутри инпута) */
  --radius-m:              16px;      /* radius/m — средний радиус (инпуты, кнопки) */
  --radius-full:           999px;     /* radius/full — полностью круглые элементы */

  /* === ОТСТУПЫ (spacing) === */
  --sp-2:    2px;
  --sp-4:    4px;
  --sp-6:    6px;
  --sp-8:    8px;
  --sp-12:   12px;
  --sp-14:   14px;
  --sp-16:   16px;
  --sp-24:   24px;
  --sp-28:   28px;
  --sp-32:   32px;
}
```

---

## Дизайн-система: Типографика

Шрифт: **Inter** (подключить через Google Fonts или локально).  
Все стили соответствуют компонентам `Font` в Figma (node `75:2623`).

```css
/* В tokens.css */
:root {
  --font-family: 'Inter', sans-serif;

  /* Display/L */
  --font-display-size:   32px;
  --font-display-weight: 600;        /* Semi Bold */
  --font-display-lh:     40px;

  /* H1 */
  --font-h1-size:        28px;
  --font-h1-weight:      600;
  --font-h1-lh:          36px;

  /* H2 */
  --font-h2-size:        24px;
  --font-h2-weight:      600;
  --font-h2-lh:          32px;

  /* H3 / H3Bold */
  --font-h3-size:        20px;
  --font-h3-weight:      400;        /* H3 — Regular */
  --font-h3bold-weight:  600;        /* H3Bold — Semi Bold */
  --font-h3-lh:          28px;

  /* H4 */
  --font-h4-size:        16px;
  --font-h4-weight:      600;
  --font-h4-lh:          24px;

  /* BodyL */
  --font-bodyl-size:     18px;
  --font-bodyl-weight:   400;
  --font-bodyl-lh:       24px;

  /* BodyM (основной текст) */
  --font-bodym-size:     16px;
  --font-bodym-weight:   400;
  --font-bodym-lh:       24px;

  /* Button */
  --font-btn-size:       16px;
  --font-btn-weight:     500;        /* Medium */
  --font-btn-lh:         24px;

  /* BodyS */
  --font-bodys-size:     14px;
  --font-bodys-weight:   400;
  --font-bodys-lh:       20px;

  /* Caption/Regular */
  --font-caption-size:   12px;
  --font-caption-weight: 400;
  --font-caption-lh:     16px;

  /* Caption/Medium */
  --font-caption-m-weight: 500;

  /* Caption/SemiBold */
  --font-caption-sb-weight: 600;

  /* CaptionMini / CaptionMiniR */
  --font-mini-size:      10px;
  --font-mini-lh:        12px;
}
```

---

## Дизайн-система: Компоненты (CSS-классы)

Реализовать в `css/components.css`. Ориентироваться на Figma node ID при разработке каждого.

### Bottom Navigation (Figma: `18:13290`)
- Ширина: 402px, высота вкладок: 70px
- Фон: `var(--bg-primary)`, тень: `0px -2px 5px rgba(0,0,0,0.05)`
- 5 вкладок: **Главная | Расписание | Оценки | Чаты | Профиль**
- Активная вкладка: цвет `var(--text-accent)` (#4279bb), иконка bulk (залитая)
- Неактивная: `var(--text-secondary)` (#8a8a8a), иконка outline
- Уведомление (badge): фон `var(--icon-error)` (#e93334), текст белый, 20px высота, мин. ширина 20px, border-radius 20px

### Button (Figma: `68:1115`)
- **Primary/Default**: фон `var(--btn-primary-bg)` (#4279bb), текст белый, border-radius 16px, padding 16px 12px, высота 56px
- **Primary/Disabled**: фон `var(--btn-primary-disabled)` (#f4f4f5), текст `var(--text-disabled)` (#c9c9c9)
- **Secondary**: обводка, прозрачный фон
- **Tertiary**: только текст без фона/обводки
- Шрифт кнопки: Inter Medium 16px/24px

### Text Field (Figma: `75:1256`)
- Высота: 56px
- Фон: `var(--surface-secondary)` (#f4f4f5)
- Граница: 1.5px solid `var(--border-secondary)` (#e3e3e3)
- Border-radius: `var(--radius-m)` (16px)
- Состояния: Mask (placeholder) / Hovered / Active / Error / Disabled
- Padding: 4px (внутренний отступ)

### Navigation Header (Figma: `14:7780`)
- Варианты: Title Only / Nav+Action / Back Only / Back+Title-Center / Back+Action и др.
- Высота: 60px или 108px (с подзаголовком)
- Ширина: 396px (с полями 16px по бокам → итого 428px на экране 402px? — уточнить по Figma)

### Avatar (Figma: `127:6597`)
- Размеры: XS (36px), S (44px), M (56px), 3XL (100px)
- Круглые, overflow: hidden

### Score карточки (Figma: `87:29456`)
- Big: 88×70–72px, Mini: 40×40px
- Оценки 2, 3, 4, 5 — разные цвета фона (уточнить при get_design_context)

### Chat Item (Figma: `119:4177`)
- Default: высота 72px, ширина 375px
- Member (участник): высота 56px
- Содержит: аватар, имя, последнее сообщение, время, счётчик

### Message (Figma: `127:6091`)
- Входящее: выравнивание влево, серый фон
- Исходящее: выравнивание вправо, акцентный фон
- Типы: Default (текст), Image, Image+Text, Sticker

### Progress Bar (Figma: `105:3753`)
- Фон трека: `var(--bg-secondary)` (#f4f4f5)
- Заполнение: `var(--icon-accent)` (#4279bb)
- Радиус: `var(--radius-full)` (999px)
- Размеры: Small (h: 4px), Medium (h: 6px), Large (h: 8px) — уточнить

---

## Экраны приложения: 23 экрана + AR

Стандартный размер мобильного экрана: **402×874 px**  
Исключения: Главная (402×1202), Оценки (402×1348) — скроллируемые экраны.

| # | Экран | Figma node ID | Маршрут в роутере |
|---|-------|:---:|---|
| 1 | Прелоадер | `41:8906` | `#/` |
| 2 | Онбординг 1 | `242:4234` | `#/onboarding/1` |
| 3 | Онбординг 2 | `244:4341` | `#/onboarding/2` |
| 4 | Онбординг 3 | `244:4402` | `#/onboarding/3` |
| 5 | Добро пожаловать | `75:2810` | `#/welcome` |
| 6 | Добро пожаловать / Заполнено | `81:3551` | *(состояние экрана 5)* |
| 7 | Введите код | `81:3690` | `#/enter-code` |
| 8 | Введите код / Заполнено | `81:4520` | *(состояние экрана 7)* |
| 9 | Введите код / Ошибка | `81:4681` | *(состояние экрана 7)* |
| 10 | Введите код / Запросить повторно | `81:4754` | *(состояние экрана 7)* |
| 11 | Главная (лента) | `18:12863` | `#/home` |
| 12 | Расписание | `92:3119` | `#/schedule` |
| 13 | Расписание / Уроков нет | `95:11370` | *(состояние экрана 12)* |
| 14 | Все новости | `127:6748` | `#/news` |
| 15 | Оценки | `106:4091` | `#/grades` |
| 16 | Список чатов | `119:4280` | `#/chats` |
| 17 | Чат | `127:4156` | `#/chat/:id` |
| 18 | Чат / Пишет сообщение | `134:12296` | *(состояние экрана 17)* |
| 19 | Список участников | `136:4881` | `#/chat/:id/members` |
| 20 | Профиль | `139:5140` | `#/profile` |
| 21 | Редактирование профиля | `236:11674` | `#/profile/edit` |
| 22 | Новость (детальная) | `138:9261` | `#/news/:id` |
| 23 | Уведомления | `144:14901` | `#/notifications` |
| 24 | AR-экран | — | `#/ar` *(заглушка)* |

---

## Навигационный поток

```
[Прелоадер] — 2 сек, прогресс-бар, маскот (Моти)
     ↓ (автоматически)
[Онбординг 1] → [Онбординг 2] → [Онбординг 3]   (только при первом запуске)
     ↓ (кнопка «Далее» / «Начать»)
[Добро пожаловать] — ввод номера телефона +7
  • поле пустое → кнопка «Получить код» disabled (серая)
  • поле заполнено → кнопка active (синяя)
     ↓ (кнопка «Получить код»)
[Введите код] — OTP 4–6 цифр
  • пусто → ожидание
  • заполнено → «Подтвердить»
  • ошибка → красное состояние + «Запросить код повторно»
  • успех ↓
┌─────────────────────────────────────────────────┐
│              Основное приложение                 │
│         [Bottom Navigation — 5 вкладок]         │
│                                                 │
│  Главная | Расписание | Оценки | Чаты | Профиль │
└─────────────────────────────────────────────────┘

[Главная]
  ├─→ [Все новости] → [Новость]
  ├─→ [Уведомления]
  └─→ [AR-экран] (кнопка маскота/виджета)

[Расписание]
  └─ пустое состояние → [Расписание / Уроков нет]

[Оценки]
  └─ скроллируемый список оценок по предметам

[Чаты]
  ├─→ [Чат] → [Список участников]
  └─ чат пишет сообщение — состояние с клавиатурой

[Профиль]
  └─→ [Редактирование профиля]
```

**Онбординг**: показывается только при первом запуске.  
Проверка: `localStorage.getItem('onboarding_done')`.  
После онбординга/логина → `localStorage.setItem('onboarding_done', '1')`.

---

## PWA: manifest.json

```json
{
  "name": "Помощник",
  "short_name": "Помощник",
  "description": "Мобильное приложение для образовательного учреждения с AR",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#fcfcfc",
  "theme_color": "#4279bb",
  "lang": "ru",
  "icons": [
    { "src": "images/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "images/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

---

## PWA: Service Worker (sw.js)

Стратегия кэширования:
- **Cache First** для статических ресурсов (CSS, JS, иконки, шрифты, изображения, HTML-шаблоны экранов)
- **Network First** для данных (если в будущем появится API)
- **Офлайн fallback**: показывать из кэша если сеть недоступна

```javascript
const CACHE_NAME = 'school-app-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/tokens.css',
  '/css/components.css',
  '/css/app.css',
  '/js/router.js',
  '/js/app.js',
  '/js/data.js',
  '/screens/preloader.html',
  '/screens/onboarding.html',
  // ... все остальные экраны
];
```

---

## SPA Shell: index.html

Структура `index.html`:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="theme-color" content="#4279bb">
  <link rel="manifest" href="/manifest.json">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/app.css">
  <title>Школьное приложение</title>
</head>
<body>
  <div id="app">
    <!-- Роутер вставляет сюда HTML нужного экрана -->
  </div>
  <script src="js/data.js"></script>
  <script src="js/router.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

---

## Роутер: js/router.js

Hash-роутер без зависимостей:
- Слушает `hashchange` и `DOMContentLoaded`
- Парсит `window.location.hash` → определяет нужный экран
- Загружает HTML-шаблон из `screens/*.html` через `fetch()`
- Вставляет в `#app`
- Выполняет инициализацию экрана (данные из `data.js`)

Маршруты:
```javascript
const routes = {
  '':                 'screens/preloader.html',
  '/':                'screens/preloader.html',
  '/onboarding/1':    'screens/onboarding.html',
  '/onboarding/2':    'screens/onboarding.html',
  '/onboarding/3':    'screens/onboarding.html',
  '/welcome':         'screens/welcome.html',
  '/enter-code':      'screens/enter-code.html',
  '/home':            'screens/home.html',
  '/schedule':        'screens/schedule.html',
  '/news':            'screens/news-list.html',
  '/news/:id':        'screens/news-item.html',
  '/grades':          'screens/grades.html',
  '/chats':           'screens/chats.html',
  '/chat/:id':        'screens/chat.html',
  '/chat/:id/members':'screens/participants.html',
  '/profile':         'screens/profile.html',
  '/profile/edit':    'screens/profile-edit.html',
  '/notifications':   'screens/notifications.html',
  '/ar':              'screens/ar.html',
};
```

---

## Моковые данные: js/data.js

```javascript
const APP_DATA = {

  user: {
    id: 1,
    name: 'Иванов Иван',
    grade: '8А',
    school: 'ГБОУ Школа №1',
    avatar: null,
    phone: '+7 (999) 123-45-67'
  },

  schedule: {
    // Неделя 13–19 января 2025 — полные данные для работающего переключателя дней
    '2025-01-13': [
      { num: 1, time: '08:00–08:45', subject: 'Математика',   room: '214', teacher: 'Петрова А.В.' },
      { num: 2, time: '08:55–09:40', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 3, time: '09:50–10:35', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
      { num: 4, time: '10:55–11:40', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
      { num: 5, time: '11:50–12:35', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 6, time: '12:45–13:30', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-14': [
      { num: 1, time: '08:00–08:45', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 2, time: '08:55–09:40', subject: 'Математика',   room: '214', teacher: 'Петрова А.В.' },
      { num: 3, time: '09:50–10:35', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
      { num: 4, time: '10:55–11:40', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
      { num: 5, time: '11:50–12:35', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-15': [
      { num: 1, time: '08:00–08:45', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
      { num: 2, time: '08:55–09:40', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 3, time: '09:50–10:35', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
      { num: 4, time: '10:55–11:40', subject: 'Математика',   room: '214', teacher: 'Петрова А.В.' },
      { num: 5, time: '11:50–12:35', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
      { num: 6, time: '12:45–13:30', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
    ],
    '2025-01-16': [
      { num: 1, time: '08:00–08:45', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
      { num: 2, time: '08:55–09:40', subject: 'Физика',       room: '301', teacher: 'Козлов И.П.' },
      { num: 3, time: '09:50–10:35', subject: 'Математика',   room: '214', teacher: 'Петрова А.В.' },
      { num: 4, time: '10:55–11:40', subject: 'Физкультура',  room: 'Зал', teacher: 'Орлов В.К.' },
    ],
    '2025-01-17': [
      { num: 1, time: '08:00–08:45', subject: 'История',      room: '205', teacher: 'Белова С.В.' },
      { num: 2, time: '08:55–09:40', subject: 'Химия',        room: '207', teacher: 'Громова О.С.' },
      { num: 3, time: '09:50–10:35', subject: 'Биология',     room: '112', teacher: 'Новикова Т.А.' },
      { num: 4, time: '10:55–11:40', subject: 'Русский язык', room: '108', teacher: 'Сидорова Е.Н.' },
      { num: 5, time: '11:50–12:35', subject: 'Информатика',  room: '115', teacher: 'Зайцев М.Р.' },
    ],
    // Выходные — уроков нет
    '2025-01-18': [],
    '2025-01-19': [],
  },

  grades: [
    { subject: 'Математика',    grades: [5, 4, 5, 4, 5], avg: 4.6 },
    { subject: 'Русский язык',  grades: [4, 3, 4, 5, 4], avg: 4.0 },
    { subject: 'Физика',         grades: [5, 5, 4, 5],    avg: 4.8 },
    { subject: 'История',        grades: [4, 4, 3, 4],    avg: 3.75 },
    { subject: 'Биология',       grades: [3, 4, 3],        avg: 3.3 },
    { subject: 'Химия',          grades: [5, 4, 5, 4, 5], avg: 4.6 },
    { subject: 'Информатика',    grades: [5, 5, 5],        avg: 5.0 },
    { subject: 'Физкультура',    grades: [5, 5, 5, 5],    avg: 5.0 },
  ],

  news: [
    {
      id: 1,
      title: 'Школьная олимпиада по математике',
      date: '15 января 2024',
      preview: 'Приглашаем всех учеников принять участие в ежегодной олимпиаде…',
      content: 'Полный текст новости...',
      image: null,
      tag: 'Объявление'
    },
    {
      id: 2,
      title: 'Родительское собрание',
      date: '12 января 2024',
      preview: '18 января состоится общешкольное родительское собрание…',
      content: 'Полный текст новости...',
      image: null,
      tag: 'Событие'
    },
    {
      id: 3,
      title: 'Новогодний концерт',
      date: '10 января 2024',
      preview: 'Фотоотчёт с праздничного концерта школы…',
      content: 'Полный текст новости...',
      image: null,
      tag: 'Фото'
    }
  ],

  chats: [
    {
      id: 1,
      name: '8А Класс',
      lastMessage: 'Не забудьте сдать домашнее задание',
      lastTime: '12:30',
      unread: 3,
      members: 28,
      avatar: null,
      messages: [
        { id: 1, sender: 'Петрова А.В.', text: 'Добрый день! Не забудьте сдать домашнее задание по математике.', time: '12:25', outgoing: false },
        { id: 2, sender: 'me', text: 'Спасибо, помним!', time: '12:30', outgoing: true },
      ]
    },
    {
      id: 2,
      name: 'Родительский чат 8А',
      lastMessage: 'Собрание в пятницу в 18:00',
      lastTime: '11:15',
      unread: 0,
      members: 32,
      avatar: null,
      messages: []
    }
  ],

  notifications: [
    { id: 1, type: 'grade',    text: 'Новая оценка по математике: 5',          time: '10 мин назад', read: false },
    { id: 2, type: 'message',  text: 'Новое сообщение в чате «8А Класс»',       time: '30 мин назад', read: false },
    { id: 3, type: 'schedule', text: 'Расписание на завтра обновлено',           time: '2 часа назад', read: true  },
    { id: 4, type: 'news',     text: 'Новая публикация: Школьная олимпиада',     time: 'Вчера',        read: true  },
  ]

};
```

---

## Анимации переходов между экранами

В `css/app.css`:
- Переход: `transform: translateX` + `opacity`
- Длительность: 250ms, easing: `ease-out`
- Вход экрана: `translateX(100%) → translateX(0)` (для перехода вперёд)
- Выход: `translateX(0) → translateX(-30%)` + `opacity 1 → 0`
- Возврат назад: зеркально

---

## Мобильный viewport

Приложение работает на **реальных телефонах** с разным разрешением (360px, 390px, 402px, 430px и шире):
- `max-width: 402px` — ограничение дизайна, но на экранах уже 402px контент занимает всю ширину
- На десктопе: центрировать с фоном и тенью (имитация телефонной рамки)
- На мобильных: `width: 100%`, высота `100dvh` (dynamic viewport height, учитывает адресную строку)
- `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`
- Шрифты не масштабируются: `-webkit-text-size-adjust: 100%`
- Отключить двойное нажатие для zoom: `touch-action: manipulation`
- Все компоненты строить на flexbox/grid (авто-лайаут → CSS flex), ширины в `%` или `100%`, не в фиксированных px
- Исключение: иконки, аватары, бейджи — фиксированные размеры px
- Safe area insets для iOS: `padding-bottom: env(safe-area-inset-bottom)`

---

## AR-экран (заглушка — реализуется последней)

Файл: `screens/ar.html`  
Текущий статус: заглушка с текстом «AR-режим будет доступен здесь» и иконкой.  
После получения ссылок на WebAR Studio — встроить через `<iframe>` или JS SDK.

---

## Порядок реализации

1. **`css/tokens.css`** — заполнить все CSS-переменные по значениям выше
2. **`css/components.css`** — реализовать компоненты: `.btn`, `.text-field`, `.bottom-nav`, `.nav-header`, `.avatar`, `.badge`
3. **`manifest.json`** + **`sw.js`** — PWA оболочка
4. **`index.html`** + **`js/router.js`** — SPA shell с hash-роутингом
5. **`js/data.js`** — моковые данные по структуре выше
6. **Экраны по порядку** (вызывать `get_design_context` для каждого node ID):
   - Прелоадер (`41:8906`)
   - Онбординг (`242:4234`, `244:4341`, `244:4402`)
   - Авторизация (`75:2810`, `81:3551`, `81:3690`, `81:4520`, `81:4681`, `81:4754`)
   - Главная (`18:12863`)
   - Расписание (`92:3119`, `95:11370`)
   - Оценки (`106:4091`)
   - Новости (`127:6748`, `138:9261`)
   - Чаты (`119:4280`, `127:4156`, `134:12296`, `136:4881`)
   - Профиль (`139:5140`, `236:11674`)
   - Уведомления (`144:14901`)
7. **`screens/ar.html`** — WebAR (последней)

---

## Правила написания кода

- Только классы для стилей, не `id`
- Иконки — inline SVG или `<img src="icons/...svg">`
- Все тексты на русском языке
- Без комментариев в коде (кроме неочевидных мест)
- `get_design_context` вызывать перед реализацией каждого экрана — брать реальные размеры, цвета и структуру из Figma
- CSS-переменные из `tokens.css` использовать везде — не хардкодить цвета
