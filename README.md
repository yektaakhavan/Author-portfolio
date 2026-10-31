
# 📚 Author Portfolio

A responsive portfolio website built for an author to showcase their biography, published articles, and books. The application provides an organized content experience with dedicated pages, dynamic navigation, and interactive client-side features.

## Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-2-7952B3?logo=reactbootstrap&logoColor=white)

![Author Portfolio screenshot](./src/assets/picture/preview/Author-portfolio.png)

## Features

- **Author Profile:** Dedicated sections for introducing the author and presenting their biography.
- **Articles:** Organized article listing with individual article pages.
- **Dynamic Routing:** Navigation between pages and dynamic article routes using React Router.
- **Books Catalog:** Displays published books with cover images, descriptions, and pricing.
- **Shopping Cart:** Add and remove books with shared client-side state.
- **User Registration:** Client-side sign-up form interface.
- **Contact Page:** Dedicated page for author contact information.
- **Responsive Layout:** Adapts to different screen sizes using Bootstrap's grid system.
- **Page Metadata:** Manages document titles and metadata with React Helmet Async.
- **Scroll Animations:** Adds visual transitions using AOS.

## Architecture Notes

- **Component-based structure:** The interface is divided into reusable React components to keep presentation organized and maintainable.
- **Client-side routing:** React Router handles navigation between the home, about, articles, books, and contact pages. Dynamic article routes use the article ID to identify individual content.
- **Shared cart state:** React Context API provides a shared state for shopping cart interactions, allowing components to access and update cart data without prop drilling.
- **Responsive UI:** React Bootstrap components and the Bootstrap grid system provide a consistent layout across desktop, tablet, and mobile devices.
- **Document metadata:** React Helmet Async manages page-level metadata, helping keep document information organized across routes.
- **Date handling:** Moment Jalaali supports Jalali date formatting where required.
- **Build tooling:** Vite provides the local development server and optimized production build.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/yektaakhavan/Author-portfolio.git
cd Author-portfolio
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## Live Demo

[Visit the live website](https://www.akhavan-safaei.ir/)

## Roadmap

- [ ] Add automated tests for core features
- [ ] Improve accessibility across interactive components
- [ ] Enhance loading and error states
- [ ] Optimize image loading and frontend performance
- [ ] Extend shopping cart functionality with a complete checkout flow

## Author

**Yekta Akhavan**

[![Gmail](https://img.shields.io/badge/Gmail-yekta.akhavan.dev@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:yekta.akhavan.dev@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yekta_Akhavan-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yekta-akhavan/)
[![Portfolio](https://img.shields.io/badge/Portfolio-yekta--akhavan.vercel.app-991397?style=flat-square&logo=vercel&logoColor=white)](https://yekta-akhavan.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-yektaakhavan-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/yektaakhavan)
