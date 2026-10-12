<a id="readme-top"></a>

<!-- PROJECT LOGO -->

[![READMEENG](https://img.shields.io/badge/readme_en-white?style=for-the-badge&logo=en)](https://github.com/dangor220/habit-tracker/blob/main/README.en.md)
<br />

<div align="center">

  <a href="https://github.com/dangor220/habit-tracker/tree/main/src">
    <img src="assets/readme/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Habit Tracker: трекер привычек для ежедневного контроля и формирования полезных навыков</h3>

  <p align="center">Простое веб-приложение, позволяющее отслеживать выполнение привычек по дням недели, следить за текущей серией выполнений и видеть прогресс за сегодняшний день.
    <br />
    <br />
    <a href="https://github.com/dangor220/habit-tracker/tree/main/src">Посмотреть код</a>
    <br />
    <br />
    <a href="https://dangor220.github.io/habit-tracker/">Открыть демо</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#описание">Описание</a>
      <ul>
        <li><a href="#возможности">Возможности</a></li>
        <li><a href="#технологии">Технологии</a></li>
      </ul>
    </li>
    <li><a href="#установка-и-запуск">Установка и запуск</a></li>
    <li><a href="#материалы">Материалы</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Описание

[![Product Name Screen Shot][product-screenshot]](https://github.com/dangor220/habit-tracker)

Habit Tracker — одностраничное приложение для отслеживания привычек, разработанное на React, TypeScript и Vite. Пользователь добавляет привычки, а затем отмечает дни, в которые они были выполнены. Интерфейс построен вокруг недельного календаря: для каждой привычки отображается ряд из семи дней, а переключение между неделями выполняется кнопками «Prev» и «Next».

В шапке приложения отображается выбранный диапазон дат и счётчик выполненных за сегодня привычек (например, «1 / 2 done today»). Для привычек, выполняемых несколько дней подряд, рядом с названием показывается серия (streak), что помогает не прерывать цепочку и сохранять мотивацию.

[![Product Name Screen Shot 2][product-screenshot-2]](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Возможности

- Добавление новых привычек через поле ввода
- Удаление привычек
- Отметка выполнения привычки по дням недели
- Счётчик выполненных за сегодня привычек
- Отображение текущей серии выполнений (streak)
- Навигация по неделям (предыдущая / следующая)
- Тёмная тема оформления

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Технологии

[![react][react.js]][react-url]
[![typescript][typescript.ts]][typescript-url]
[![vite][vite.js]][vite-url]

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Установка и запуск

1. Клонируйте репозиторий

   ```sh
   git clone https://github.com/dangor220/habit-tracker.git
   ```

2. Перейдите в папку проекта и установите зависимости

   ```sh
   cd habit-tracker
   npm install
   ```

3. Запустите приложение в режиме разработки

   ```sh
   npm run dev
   ```

4. Откройте в браузере адрес [http://localhost:5173](http://localhost:5173)

Для сборки production-версии используйте команду `npm run build`.

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Материалы

- [Код](https://github.com/dangor220/habit-tracker/tree/main/src)
- [Репозиторий проекта](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- CONTACT -->

## Контакты

- Гордеев Данил Александрович - [@dangor220](https://t.me/dangor220)
- Почта - [dan.gor220@yandex.ru](mailto:dan.gor220@yandex.ru)

- Ссылка на проект: [https://github.com/dangor220/habit-tracker](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/readme/product.png
[product-screenshot-2]: assets/readme/product-2.png
[react.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react
[react-url]: https://react.dev/
[typescript.ts]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[vite.js]: https://img.shields.io/badge/vite-20232A?style=for-the-badge&logo=vite
[vite-url]: https://vite.dev/
