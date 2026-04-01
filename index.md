# 🚀 MERN Stack Developer Portfolio

## 🔧 Git Setup (First Time)

### 1. Install Git
- **Windows** → Download from https://git-scm.com/download/win and install
- **Mac** → Run `brew install git` (or it's pre-installed)
- **Linux (Ubuntu/Debian)** → `sudo apt install git`

Verify install:
```bash
git --version
```

### 2. Configure Git (one-time setup)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

### 3. Initialize this project as a Git repo
```bash
cd portfolio
git init
git add .
git commit -m "initial commit: portfolio setup"
```

### 4. Push to GitHub
1. Go to https://github.com/new and create a new repo (e.g. `my-portfolio`)
2. Copy the repo URL, then run:

```bash
git remote add origin https://github.com/yourusername/my-portfolio.git
git branch -M main
git push -u origin main
```

### 5. Future updates workflow
```bash
git add .
git commit -m "add new project: My New App"
git push
```

---


A fast, fully editable React + Vite portfolio. Dark industrial-tech aesthetic.

---

## 📦 Setup

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

---

## ✏️ How to Customize

**All your content lives in one file:**

```
src/data/portfolio.js
```

Open it and edit:

| Section | What to change |
|---|---|
| `profile` | Your name, title, email, links, about text |
| `skills` | Add/remove skills, adjust proficiency levels |
| `projects` | Add new projects by copying an existing block |
| `experience` | Add work history |
| `education` | Update degree/college |
| `certifications` | Add new certs |

### Adding a new project

Copy this block into the `projects` array in `portfolio.js`:

```js
{
  id: 5,                           // increment the id
  title: "My New Project",
  description: "What it does.",
  tech: ["React", "Node.js"],      // tech tags
  github: "https://github.com/...",
  live: "",                        // live URL or leave ""
  featured: true,                  // show on initial load?
  year: 2025,
},
```

### Adding a skill

```js
{ name: "Next.js", level: 75, category: "frontend" },
// categories: "frontend" | "backend" | "database" | "language" | "tools"
```

---

## 📄 Resume

Place your PDF resume at:

```
public/resume.pdf
```

It will be linked from the navbar and hero buttons.

---

## 🚢 Deployment

```bash
npm run build
```

Upload the `/dist` folder to:
- **Vercel** — drag & drop or `vercel deploy`
- **Netlify** — drag & drop the dist folder
- **GitHub Pages** — push dist to gh-pages branch

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← your resume goes here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js    ← ALL your content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
