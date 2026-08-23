# University Website Navigation (React + React Router)

A simple React.js menu navigation system for a university website with
dropdown menus, built for a Web Technologies course.

## Features
- Reusable `DropdownMenu` component (used 4 times with different props)
- `Navbar` component composed of `Link`s and `DropdownMenu`s
- `React Router` for client-side navigation between pages (no page reloads)
- Event handling: `onClick`, `onMouseEnter`, `onMouseLeave`, `onChange`, `onSubmit`
- A simple controlled form on the Contact page

## Project structure
```
src/
  components/
    Navbar.jsx        # top nav bar, assembles menu items
    DropdownMenu.jsx   # reusable dropdown, takes title + items as props
    Page.jsx            # shared page layout
  pages/
    Home.jsx, About.jsx, Placements.jsx, Contact.jsx
    SectionPage.jsx      # reusable page for dropdown sub-items
  App.jsx                # defines all routes
  main.jsx                # wraps App in BrowserRouter
```

## Run it locally
```bash
npm install
npm run dev
```
Then open the URL it prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Upload to GitHub
1. Create a new empty repository on GitHub (no README/license, so it's empty).
2. In this project folder, run:
```bash
git init
git add .
git commit -m "Initial commit: university nav system"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
3. Refresh your GitHub repo page — the code should now be there.

(Optional) To deploy it live for free, push to GitHub then connect the repo
to Vercel or Netlify — both auto-detect Vite projects and deploy on push.

