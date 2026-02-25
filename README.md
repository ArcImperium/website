# OG

This is my personal website! There's not much (it was very code intensive), but it gets the job done. 
There is a home page, an about page, a blog page, and a scret admin page.
It is connected to a backend at https://elipetersblog.onrender.com/posts and all posts are displayed on the /blog page.
On the admin page, you must enter the password, then you can choose to either add a post or edit posts (only for deleting them right now).

# Update

All new code will be written in Tailwind CSS.
There is now a 404 page that you will get redirected to if you input an incorrect url.
There is a popup that will show up every time that you enter the website.
On the home page, there are now revolving showcases for languages, projects, and stats.
I also added an FAQ.
Any link on the website will open up a new window when clicked on.
On the admin side of things, I added a dowload and upload feature for the blog. This is only for instances that the posts are deleted, which is a real problem.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
