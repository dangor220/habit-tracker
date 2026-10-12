<a id="readme-top"></a>

<!-- PROJECT LOGO -->

[![READMERU](https://img.shields.io/badge/readme_ru-white?style=for-the-badge&logo=ru)](https://github.com/dangor220/habit-tracker/blob/main/README.md)
<br />

<div align="center">

  <a href="https://github.com/dangor220/habit-tracker/tree/main/src">
    <img src="assets/readme/logo.svg" alt="Logo" width="140" height="140">
  </a>

  <h3 align="center">Habit Tracker: a habit tracker for daily control and building useful routines</h3>

  <p align="center">A simple web application that lets you track habits by day of the week, follow your current streak and see your progress for today.
    <br />
    <br />
    <a href="https://github.com/dangor220/habit-tracker/tree/main/src">View code</a>
    <br />
    <br />
    <a href="https://dangor220.github.io/habit-tracker/">Open demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li><a href="#installation-and-launch">Installation and launch</a></li>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

[![Product Name Screen Shot][product-screenshot]](https://github.com/dangor220/habit-tracker)

Habit Tracker is a single-page habit tracking application built with React, TypeScript and Vite. The user adds habits and then marks the days on which they were completed. The interface is built around a weekly calendar: each habit displays a row of seven days, and you can switch between weeks with the "Prev" and "Next" buttons.

The header shows the selected date range and a counter of habits completed today (for example, "1 / 2 done today"). For habits completed on consecutive days, a streak is shown next to the name, which helps you keep the chain going and stay motivated.

[![Product Name Screen Shot 2][product-screenshot-2]](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Features

- Add new habits using the input field
- Delete habits
- Mark a habit as completed for any day of the week
- Counter of habits completed today
- Current streak display
- Week navigation (previous / next)
- Dark theme

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Built with

[![react][react.js]][react-url]
[![typescript][typescript.ts]][typescript-url]
[![vite][vite.js]][vite-url]

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Installation and launch

1. Clone the repository

   ```sh
   git clone https://github.com/dangor220/habit-tracker.git
   ```

2. Go to the project folder and install dependencies

   ```sh
   cd habit-tracker
   npm install
   ```

3. Start the app in development mode

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

To build the production version, use `npm run build`.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Resources

- [Code](https://github.com/dangor220/habit-tracker/tree/main/src)
- [Project repository](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Danil A. Gordeev - [@dangor220](https://t.me/dangor220)
- Email - [dan.gor220@yandex.ru](mailto:dan.gor220@yandex.ru)

- Project link: [https://github.com/dangor220/habit-tracker](https://github.com/dangor220/habit-tracker)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

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
