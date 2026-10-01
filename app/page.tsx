import ContactForm from "@/app/components/ContactForm";

const services = [
  {
    icon: "✦",
    title: "Branding Estratégico",
    description:
      "Posicionamento, identidade visual e comunicação que fortalecem a presença da sua marca no mercado.",
  },
  {
    icon: "◎",
    title: "Design Digital",
    description:
      "Sites, landing pages e experiências digitais bonitas, funcionais e orientadas à conversão.",
  },
  {
    icon: "▣",
    title: "Produção Visual",
    description:
      "Fotografia, vídeos institucionais e motion design para contar a história da sua marca com impacto.",
  },
];

const portfolio = [
  {
    category: "Brand Identity",
    name: "Nova Era Labs",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Campaign",
    name: "North Summit",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Digital Experience",
    name: "Astera Studio",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos o mercado, a proposta de valor e o público-alvo da sua marca.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos a direção da marca, posicionamento e elementos fundamentais da comunicação.",
  },
  {
    number: "03",
    title: "Criação",
    description: "Desenvolvemos identidade visual, interfaces e materiais com alta qualidade estética.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Aplicamos tudo nas plataformas certas para gerar visibilidade e resultados estratégicos.",
  },
];

const testimonials = [
  {
    quote:
      "A The Vision Studio transformou nossa presença no mercado. O resultado visual foi muito além do esperado.",
    author: "Alana Lima",
    role: "Fundadora, Nova Era Labs",
  },
  {
    quote:
      "Eles entenderam nossa marca e entregaram uma identidade que fala diretamente com o público certo.",
    author: "Rafael Martins",
    role: "CEO, North Summit",
  },
  {
    quote:
      "Excelente parceria entre estratégia, design e execução. O projeto elevou nossa percepção de marca.",
    author: "Carla Souza",
    role: "Diretora, Astera Studio",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="The Vision Studio">
            <span className="brand-mark">V</span>
            <span>The Vision Studio</span>
          </a>

          <nav className="nav-links" aria-label="Menu principal">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Projetos</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="nav-cta">
            <a href="tel:+244975912613" className="nav-phone">
              +244 975 912 613
            </a>
            <a href="#contato" className="btn btn-primary">
              Solicitar proposta
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Creative Studio</span>
            <h1>
              Transformamos ideias em
              <span className="highlight"> visões memoráveis</span>
            </h1>
            <p>
              Somos uma agência especializada em branding, design e produção visual,
              criando marcas com presença, clareza e impacto para competir com
              autoridade no mercado.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="btn btn-primary">
                Fale com a gente
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                Ver nossos projetos
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>8+</strong>
                <span>Anos de experiência</span>
              </div>
              <div className="stat-card">
                <strong>120+</strong>
                <span>Projetos entregues</span>
              </div>
              <div className="stat-card">
                <strong>96%</strong>
                <span>Clientes recorrentes</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-frame">
                <div className="mini-pill">Brand strategy • Design • Motion</div>
                <div className="floating-result">
                  <span className="tiny-label">Resultados</span>
                  <strong>+280%</strong>
                  <em>em engajamento</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Sobre nós</span>
              <h2>Design estratégico para marcas que querem ser vistas.</h2>
            </div>
            <p>
              A The Vision Studio combina criatividade, estratégia e execução para
              criar experiências visuais que elevam a percepção da sua marca e
              geram conexão com o público certo.
            </p>
          </div>

          <div className="services-grid" id="servicos">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section muted-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2>Projetos que conectam marca, estratégia e emoção.</h2>
            </div>
            <p>
              Trabalhamos com marcas que desejam transmitir confiança, inovação e
              presença visual de alto impacto em qualquer canal.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article
                key={item.name}
                className="portfolio-item"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(6,8,13,0.08), rgba(6,8,13,0.75)), url(${item.image})` }}
              >
                <div className="portfolio-copy">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="section">
        <div className="container">
          <div className="section-head center-head">
            <div>
              <span className="eyebrow">Processo</span>
              <h2>Como transformamos ideias em resultados.</h2>
            </div>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article key={step.number} className="process-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Depoimentos</span>
              <h2>Marcas que cresceram com a nossa visão.</h2>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.author} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>“{item.quote}”</p>

                <div className="person-row">
                  <div className="avatar">{item.author.charAt(0)}</div>
                  <div>
                    <strong>{item.author}</strong>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section contact-wrap">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">Vamos criar algo incrível?</span>
            <h2>Seu próximo capítulo começa aqui.</h2>
            <p>
              Estamos prontos para desenvolver uma identidade visual e uma presença
              digital que façam a sua marca se destacar com clareza e valor.
            </p>

            <div className="contact-list">
              <a href="tel:+244975912613">📞 +244 975 912 613</a>
              <a href="https://wa.me/244975912613" target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>
              <a href="https://instagram.com/thevisionstudio" target="_blank" rel="noreferrer">
                📷 @thevisionstudio
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="brand footer-brand">
            <span className="brand-mark">V</span>
            <span>The Vision Studio</span>
          </div>

          <div className="footer-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Projetos</a>
            <a href="#contato">Contato</a>
          </div>

          <div>© {new Date().getFullYear()} The Vision Studio</div>
        </div>
      </footer>
    </main>
  );
}
