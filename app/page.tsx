const experienceCards = [
  {
    title: "Gentle Flow",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=760&q=85",
  },
  {
    title: "Restorative Yoga",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=760&q=85",
  },
  {
    title: "Power Vinyasa",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=760&q=85",
  },
  {
    title: "Prenatal Yoga",
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=760&q=85",
  },
  {
    title: "Yin & Stretch",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=760&q=85",
  },
  {
    title: "Morning Meditation",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=760&q=85",
  },
];

const teachers = [
  {
    name: "Aralynn Nguyen",
    specialty: "Foundations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Amara Johnson",
    specialty: "Restorative",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Lucas Meyer",
    specialty: "Mobility",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ananya Rao",
    specialty: "Vinyasa",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Rafael Costa",
    specialty: "Prenatal",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Sofia Petrov",
    specialty: "Meditation",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=85",
  },
];

const testimonials = [
  {
    name: "Aarush Nayak",
    text: "The spirit of my yoga experience is beautiful way captured. The mindful environment encouraged me to slow down and reflect deeply.",
  },
  {
    name: "Elena Tran",
    text: "My journey with yoga in the serene landscape of Switzerland was nothing short of life changing. Every session felt personal and grounding.",
  },
  {
    name: "Sophie Tan",
    text: "My time practicing yoga in Salzburg was incredible. The peaceful surroundings transformed each class into a restorative ritual.",
  },
  {
    name: "Julian Mendez",
    text: "Each class opened my eyes to the transformative power of yoga. I left feeling stronger, calmer, and more connected.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Yovra Home">
          <img className="brand-logo" src="/yovra-logo.png" alt="Yovra Logo" />
          Yovra
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#training">Training</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="pill cta" href="#classes">Try for free</a>
      </nav>

      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://assets.mixkit.co/videos/1096/1096-thumb-720-0.jpg"
        >
          <source src="https://assets.mixkit.co/videos/1096/1096-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content shell">
          <h1>Reconnect through mindful movement</h1>
          <p>Amid life's noise, find your quiet again. Reconnect with your rhythm and peace within.</p>
          <div className="hero-actions">
            <a
              className="hero-whatsapp"
              href="https://wa.me/919213462165?text=Hi%20Yovra%2C%20I%20want%20to%20know%20more%20about%20yoga%20classes."
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href="https://wa.me/919213462165?text=Hi%20Yovra%2C%20I%20want%20to%20know%20more%20about%20yoga%20classes."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.02 4.08c-6.56 0-11.9 5.28-11.9 11.78 0 2.08.55 4.11 1.59 5.9L4 28l6.42-1.66a12.02 12.02 0 0 0 5.6 1.39c6.56 0 11.9-5.28 11.9-11.78S22.58 4.08 16.02 4.08Zm0 21.64c-1.79 0-3.54-.48-5.07-1.38l-.36-.21-3.8.98 1.02-3.64-.24-.38a9.7 9.7 0 0 1-1.48-5.13c0-5.39 4.45-9.78 9.93-9.78s9.93 4.39 9.93 9.78-4.45 9.76-9.93 9.76Zm5.44-7.31c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.45-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.44s1.06 2.84 1.21 3.03c.15.2 2.08 3.15 5.04 4.42.7.3 1.25.48 1.68.61.71.22 1.35.19 1.86.12.57-.08 1.76-.71 2.01-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>

      <section id="about" className="intro section">
        <div className="watermark" />
        <div className="shell two-col">
          <h2>Welcome to Yovra, the fun place where mindfulness dances with movement!</h2>
          <div className="copy-stack">
            <p>
              We believe that true well-being begins with awareness. Yovra blends yoga, breathwork, and flow to help you reconnect with the present.
            </p>
            <p>
              Our philosophy is simple: every practice is an invitation to pause, to feel, and to be present. We make ancient wisdom approachable through joyful modern movement.
            </p>
            <a className="outline-btn" href="#classes">Learn more</a>
          </div>
        </div>
      </section>

      <section className="why section">
        <div className="shell centered">
          <h2>Why Choose Yovra</h2>
          <p>Because your practice deserves more than just classes. It deserves a space that supports, inspires, and grows with you.</p>
          <div className="feature-grid">
            <article>
              <span>01</span>
              <h3>Trustworthy Teachers</h3>
              <p>Learn from certified instructors and seasoned practitioners who guide with authenticity and care.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Anytime, Anywhere</h3>
              <p>Practice from your mat, your balcony, or any little calm corner your day gives you.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Stay Inspired</h3>
              <p>Connect with a global yoga community that celebrates growth, peace, and daily progress.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="classes" className="experience section">
        <div className="watermark right" />
        <div className="shell centered">
          <h2>Explore the Yovra Experience</h2>
          <p>Yovra classes bring balance, body, and mind, using breath and softness.</p>
          <div className="class-grid">
            {experienceCards.map((card) => (
              <article className="class-card" key={card.title}>
                <img src={card.image} alt="" />
                <h3>{card.title}</h3>
              </article>
            ))}
          </div>
          <a className="outline-btn" href="#classes">See our brochure</a>
        </div>
      </section>

      <section className="split-showcase section mist">
        <div className="shell showcase-grid">
          <video
            className="showcase-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://assets.mixkit.co/videos/1091/1091-thumb-720-0.jpg"
          >
            <source src="https://assets.mixkit.co/videos/1091/1091-720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h2>Explore 300+ Courses to Deepen Your Practice</h2>
            <p>For yoga teachers and dedicated practitioners, explore a growing library of professional courses designed to expand your knowledge and refine your practice.</p>
            <a className="outline-btn" href="#classes">Learn more</a>
          </div>
          <div>
            <h2>Celebrate Your Growth</h2>
            <p>Each step of your journey is a milestone worth celebrating. Earn beautiful digital certificates, save memorable progress, and continue to grow.</p>
            <a className="outline-btn" href="#classes">Learn more</a>
          </div>
          <video
            className="showcase-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://assets.mixkit.co/videos/1098/1098-thumb-720-0.jpg"
          >
            <source src="https://assets.mixkit.co/videos/1098/1098-720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section id="teachers" className="teachers section">
        <div className="shell teachers-shell centered">
          <span className="section-kicker">Teachers</span>
          <h2>Meet the people<br />holding the room.</h2>
          <p>Experienced guides with distinct styles and one shared commitment to steady, attentive teaching.</p>
          <div className="teacher-grid">
            {teachers.map((teacher) => (
              <article className="teacher-card" key={teacher.name}>
                <img src={teacher.image} alt={teacher.name} />
                <span>{teacher.specialty}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="training">
        <div className="training-card">
          <h2>Yoga Teacher Trainings That Transform Passion into Purpose</h2>
          <p>Step into your next chapter with our immersive yoga teacher trainings in Switzerland.</p>
          <h3>Our Programs</h3>
          <ul>
            <li>200h Foundational Training built for strong basics</li>
            <li>300h Advanced Training for deeper teaching mastery</li>
            <li>50h Special Retreats with expert guest facilitators</li>
          </ul>
          <a className="solid-btn" href="#contact">Join the Training</a>
        </div>
      </section>

      <section className="reviews section">
        <div className="watermark" />
        <div className="shell centered">
          <h2>Real Voices from Our Community</h2>
          <p>Every journey with Yovra is personal. Filled with growth, mindfulness, and moments of transformation.</p>
          <div className="review-layout">
            <div className="review-column">
              {testimonials.slice(0, 2).map((item) => <ReviewCard key={item.name} {...item} />)}
            </div>
            <img className="review-photo" src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=700&q=85" alt="" />
            <div className="review-column">
              {testimonials.slice(2).map((item) => <ReviewCard key={item.name} {...item} />)}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-symbol">Y</div>
        <div className="shell footer-cta">
          <div>
            <span>Begin gently</span>
            <h2>Ready to find your daily calm?</h2>
          </div>
          <a className="footer-action" href="#classes">Explore Classes</a>
        </div>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#">
              <span className="brand-mark">Y</span>
              Yovra
            </a>
            <p>Mindful yoga, breathwork, and movement practices for calmer everyday living.</p>
            <div className="socials">
              <a href="#">ig</a>
              <a href="#">fb</a>
              <a href="#">x</a>
              <a href="#">yt</a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#classes">Classes</a>
            <a href="#training">Programs</a>
            <a href="#teachers">Teachers</a>
            <a href="#shop">Online Shop</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#contact">Blog</a>
            <a href="#contact">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:hello@yovra.com">hello@yovra.com</a>
            <a href="tel:+919213462165">+91 92134 62165</a>
            <span>Open daily 7am - 8pm</span>
          </div>
        </div>
        <div className="shell legal">
          <span>©2026 Yovra. All rights reserved.</span>
          <span>Developed by Nexa Web Solution</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </footer>
    </main>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="review-card">
      <div className="review-head">
        <span className="avatar">{name.slice(0, 1)}</span>
        <strong>{name}</strong>
        <span className="stars">★★★★★</span>
      </div>
      <p>{text}</p>
    </article>
  );
}
