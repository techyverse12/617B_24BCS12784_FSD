# SkillNest

A small React app for an online learning platform: a course catalog where a student can enroll in courses, with an enrollment counter in the navbar and a student profile panel.

I built it as a Full Stack Development lab to practise how state and data move through a React component tree.

## What it covers

- **Lifting state up.** The enrollment count lives in `App` and is updated from `CourseList` through a setter passed down the tree, so the `Navbar` stays in sync.
- **Prop drilling vs Context API.** `StudentProfile` renders the same user twice: once from props passed through `Dashboard → CourseCatalog → CourseList`, and once from `UserContext`, so the two approaches can be compared side by side.
- **Custom hook.** `useUser()` wraps `useContext(UserContext)`.
- **Side effects.** A `useEffect` in `App` reacts to every change in the enrollment count.
- **Routing (EXP-4).** The `EXP-4` folder has a separate React Router exercise with nested routes, `Link`, `Outlet` and programmatic navigation with `useNavigate`.

## Project structure

```
src/
├── App.jsx                 # holds user + enrollment state, provides UserContext
├── main.jsx
├── context/UserContext.jsx
├── hooks/useUser.js        # custom hook over the context
└── components/
    ├── Navbar.jsx          # welcome message and enrolled count
    ├── Dashboard.jsx
    ├── CourseCatalog.jsx   # course data
    ├── CourseList.jsx      # enroll buttons, per-course enrolled state
    └── StudentProfile.jsx  # prop-drilling vs context comparison
EXP-4/                      # React Router exercise
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Tech

React 18 · Vite 5 · JavaScript
