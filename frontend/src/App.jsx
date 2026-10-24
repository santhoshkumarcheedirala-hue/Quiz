
import { useState } from "react";
import {
  Brain,
  ShieldCheck,
  Users,
  Clock3,
  Trophy,
  ArrowRight,
  Sparkles,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function openPage(nextPage) {
    setPage(nextPage);
    setMenuOpen(false);
  }

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleDemoSubmit(event) {
    event.preventDefault();
    alert(
      "The interface is ready! Secure account registration and login will be connected in the backend step."
    );
  }

  return (
    <div className="quiz-app">
      <header className="navbar">
        <button className="brand" onClick={() => openPage("home")}>
          <span className="brand-icon"><Brain size={25} /></span>
          <span>Quiz<span className="brand-dot">.</span></span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <button onClick={() => openPage("home")}>Home</button>
          <button onClick={() => openPage("explore")}>Explore</button>
          <button onClick={() => openPage("admin")}>Admin Portal</button>
          <button className="nav-signin" onClick={() => openPage("signin")}>
            Sign in
          </button>
          <button className="button button-small" onClick={() => openPage("signup")}>
            Get started <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-content">
              <div className="eyebrow">
                <Sparkles size={15} /> LEARN. CHALLENGE. ACHIEVE.
              </div>
              <h1>
                Knowledge is power.
                <br />
                <span>Prove what you know.</span>
              </h1>
              <p className="hero-description">
                Take exciting quizzes, challenge yourself, and track your
                progress. Your next learning adventure starts here.
              </p>
              <div className="hero-actions">
                <button className="button" onClick={() => openPage("signup")}>
                  Start a quiz <ArrowRight size={18} />
                </button>
                <button className="button button-outline" onClick={() => openPage("explore")}>
                  Explore quizzes
                </button>
              </div>
              <div className="hero-proof">
                <span className="proof-icon"><Users size={17} /></span>
                <span>One platform. Endless opportunities to learn.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glow glow-one" />
              <div className="glow glow-two" />
              <div className="quiz-preview">
                <div className="preview-top">
                  <div>
                    <span className="preview-label">SAMPLE QUIZ</span>
                    <h3>Test your knowledge</h3>
                  </div>
                  <span className="preview-icon"><Brain size={25} /></span>
                </div>
                <div className="preview-progress">
                  <span />
                </div>
                <div className="preview-question">
                  <span className="question-number">QUESTION 01 / 05</span>
                  <h4>Which technology makes websites interactive?</h4>
                </div>
                <div className="preview-option selected">
                  <span className="option-letter">A</span>
                  JavaScript
                  <span className="option-check">✓</span>
                </div>
                <div className="preview-option">
                  <span className="option-letter">B</span>
                  HTML only
                </div>
                <div className="preview-option">
                  <span className="option-letter">C</span>
                  A text editor
                </div>
                <div className="preview-footer">
                  <span><Clock3 size={15} /> Sample preview</span>
                  <span className="preview-next">Ready to begin <ArrowRight size={15} /></span>
                </div>
              </div>
              <div className="floating-card floating-score">
                <span className="floating-icon"><Trophy size={20} /></span>
                <span><strong>Track progress</strong><small>Celebrate every win</small></span>
              </div>
              <div className="floating-card floating-time">
                <Clock3 size={19} />
                <span><strong>Your pace</strong><small>Timed or untimed</small></span>
              </div>
            </div>
          </section>

          <section className="features-section">
            <div className="section-heading">
              <span className="section-tag">BUILT FOR EVERY LEARNER</span>
              <h2>Everything you need to <span>quiz smarter.</span></h2>
              <p>Simple tools for creating quizzes, taking exams, and seeing results.</p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <span className="feature-icon purple"><BookOpen /></span>
                <h3>Interactive quizzes</h3>
                <p>Answer questions and explore quizzes created for learning and practice.</p>
              </article>
              <article className="feature-card">
                <span className="feature-icon blue"><Clock3 /></span>
                <h3>Flexible timers</h3>
                <p>Choose a countdown for exams or leave the timer off for relaxed practice.</p>
              </article>
              <article className="feature-card">
                <span className="feature-icon violet"><Trophy /></span>
                <h3>Results that matter</h3>
                <p>Review your score and keep track of your quiz attempts.</p>
              </article>
              <article className="feature-card">
                <span className="feature-icon indigo"><ShieldCheck /></span>
                <h3>Admin control</h3>
                <p>Authorized administrators will manage questions, quizzes, and reports.</p>
              </article>
            </div>
          </section>

          <section className="cta-section">
            <div>
              <span className="section-tag">YOUR NEXT CHALLENGE AWAITS</span>
              <h2>Ready to put your knowledge to the test?</h2>
              <p>Create your account and get ready to explore quizzes.</p>
            </div>
            <button className="button" onClick={() => openPage("signup")}>
              Create an account <ArrowRight size={17} />
            </button>
          </section>
        </main>
      )}

      {page === "explore" && (
        <main className="simple-page">
          <span className="section-tag">QUIZ LIBRARY</span>
          <h1>Explore <span>quizzes.</span></h1>
          <p className="simple-description">
            Your quiz library will appear here after we connect the database.
          </p>
          <div className="empty-state">
            <BookOpen size={35} />
            <h3>Quizzes are coming soon</h3>
            <p>Sign up to get ready. Admin-created quizzes will appear here.</p>
            <button className="button" onClick={() => openPage("signup")}>
              Sign up <ArrowRight size={17} />
            </button>
          </div>
        </main>
      )}

      {(page === "signin" || page === "signup" || page === "admin") && (
        <main className="auth-layout">
          <section className="auth-aside">
            <span className="brand-icon"><Brain size={28} /></span>
            <span className="section-tag">WELCOME TO QUIZ</span>
            <h1>
              Your next
              <br />
              <span>big achievement</span>
              <br />
              starts here.
            </h1>
            <p>A focused space to practise, learn, and challenge yourself.</p>
            <div className="auth-benefit"><ShieldCheck size={19} /> Secure account access</div>
            <div className="auth-benefit"><Trophy size={19} /> Results and progress</div>
          </section>

          <section className="auth-card">
            {page === "admin" ? (
              <>
                <span className="auth-icon"><ShieldCheck size={24} /></span>
                <span className="section-tag">RESTRICTED AREA</span>
                <h2>Admin portal</h2>
                <p className="auth-description">
                  Administrator access will be limited to email addresses you authorize.
                </p>
                <div className="notice">
                  <ShieldCheck size={19} />
                  <span>Secure admin sign-in will be activated when we connect the backend.</span>
                </div>
                <button className="button button-full" onClick={() => openPage("signin")}>
                  Continue to sign in <ArrowRight size={17} />
                </button>
              </>
            ) : (
              <>
                <span className="section-tag">{page === "signup" ? "JOIN THE COMMUNITY" : "WELCOME BACK"}</span>
                <h2>{page === "signup" ? "Create your account" : "Sign in to Quiz"}</h2>
                <p className="auth-description">
                  {page === "signup"
                    ? "Get ready to discover and take quizzes."
                    : "Enter your details to continue learning."}
                </p>
                <form onSubmit={handleDemoSubmit}>
                  {page === "signup" && (
                    <label>
                      Full name
                      <input
                        name="name"
                        value={form.name}
                        onChange={updateForm}
                        placeholder="Enter your name"
                        required
                      />
                    </label>
                  )}
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateForm}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    Password
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={updateForm}
                      placeholder="Enter your password"
                      minLength={6}
                      required
                    />
                  </label>
                  <button className="button button-full" type="submit">
                    {page === "signup" ? "Create account" : "Sign in"} <ArrowRight size={17} />
                  </button>
                </form>
                <p className="auth-switch">
                  {page === "signup" ? "Already have an account?" : "New to Quiz?"}{" "}
                  <button onClick={() => openPage(page === "signup" ? "signin" : "signup")}>
                    {page === "signup" ? "Sign in" : "Create an account"}
                  </button>
                </p>
              </>
            )}
          </section>
        </main>
      )}

      <footer className="footer">
        <button className="brand footer-brand" onClick={() => openPage("home")}>
          <span className="brand-icon"><Brain size={20} /></span>
          <span>Quiz<span className="brand-dot">.</span></span>
        </button>
        <p>Learn something new. One question at a time.</p>
        <span>© {new Date().getFullYear()} Quiz</span>
      </footer>
    </div>
  );
}
