import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <h1>Contact Page</h1>

      <form onSubmit={submit}>
        <input placeholder="Message" />
        <button>Send Message</button>
      </form>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>{" "}
      <Link to="settings">Settings</Link>

      <Outlet />
    </>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;