import React, { useState } from 'react';

const skills = [
  { name: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'C', 'C#', 'PHP'] },
  { name: 'Frontend', items: ['React.js', 'Next.js', 'AngularJS', 'HTML5', 'CSS3', 'Jest', 'Cypress'] },
  { name: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Spring Framework', 'GraphQL', 'Quarkus', 'REST APIs'] },
  { name: 'Data & messaging', items: ['Google Spanner', 'BigQuery', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ'] },
  { name: 'Cloud & delivery', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Helm', 'GitLab', 'GitHub Actions', 'Jenkins', 'Harness', 'CircleCI'] },
  { name: 'Integration & observability', items: ['Dell Boomi', 'SSIS', 'Salesforce', 'Datadog', 'Grafana', 'Loki', 'Prometheus', 'OpenTelemetry', 'Kibana', 'Elasticsearch'] },
];

const experience = [
  {
    company: 'Lockheed Martin',
    role: 'Software Engineer',
    dates: 'June 2026 — Present',
    marker: '01',
    summary: 'Building secure, high-performance software for space systems.',
    points: [
      'Develop and maintain mission-critical backend services with Java, JavaScript, Quarkus, and PostgreSQL.',
      'Design REST APIs, database schemas, and Liquibase migrations for reliable application delivery.',
      'Build and manage containerized services on Kubernetes with Helm, contributing to deployment automation and scalability.',
      'Contribute across the software lifecycle, from frontend implementation and testing to code review and CI/CD in Gitlab, AWS.',
    ],
    tags: ['Java', 'Kafka', 'JMS', 'Quarkus', 'JavaScript', 'PostgreSQL', 'Kubernetes', 'Helm', 'AWS'],
  },
  {
    company: 'PayPal',
    role: 'Software Engineer',
    dates: 'October 2021 — May 2026',
    marker: '02',
    summary: 'Contributed to customer incentives and rewards platforms for large-scale merchant engagement.',
    points: [
      'Helped architect and scale the Honey Rewards Campaign Management Platform across React, Next.js, Node.js, JavaScript, TypeScript, GraphQL, and Google Spanner.',
      'Built backend microservices and event-driven features with Java, Spring, Kafka, and RabbitMQ.',
      'Designed REST and GraphQL APIs for reward tracking and cashback calculations.',
      'Reduced reward budget engine latency by 40% during peak seasonal traffic.',
      'Built enterprise ETL integrations and campaign dashboards; added automated testing with Jest and Cypress, reaching 85%+ code coverage.',
      'Designed CI/CD pipelines with GitHub Actions, Jenkins, Harness, CircleCI, and Docker across AWS and Google Cloud.',
    ],
    tags: ['TypeScript', 'JavaScript', 'SQL', 'GraphQL', 'Google Spanner', 'Kafka', 'AWS', 'GCP'],
  },
  {
    company: 'Central Michigan University',
    role: 'Database Developer',
    dates: 'March 2020 — October 2021',
    marker: '03',
    summary: 'Developed data integrations and reporting for university operations.',
    points: [
      'Built ETL pipelines with Dell Boomi, SQL Server Integration Services, Slate, and SAP BI.',
      'Optimized SQL Server operations, stored procedures, and data integration processes.',
      'Developed scripts using Groovy, JavaScript, and Python libraries including NumPy and Pandas.',
      'Created Power BI and SAP BI dashboards for admissions, enrollment, budgets, and other reporting needs.',
    ],
    tags: ['SQL Server', 'Dell Boomi', 'Python', 'Power BI'],
  },
];

const education = [
  { degree: 'Master of Science, Information Systems', school: 'Central Michigan University', year: '2020', gpa: '3.86' },
  { degree: 'Master of Arts, Economics', school: 'Central Michigan University', year: '2018', gpa: '3.86' },
  { degree: 'Master of Social Science, Economics', school: 'Shahjalal University of Science and Technology', year: '2016', gpa: '3.51' },
  { degree: 'Bachelor of Social Science, Economics', school: 'Shahjalal University of Science and Technology', year: '2013', gpa: '3.39' },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className={diagonal ? 'arrow arrow-diagonal' : 'arrow'}>↗</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Education', '#education']];
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Rukon Khan, home"><span className="wordmark-mark">RK</span><span>Rukon Khan</span></a>
      <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:rukon-it@live.com">Get in touch <Arrow /></a>
      </nav>
    </header>
  );
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" /><span>{children}</span></div>;
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> SOFTWARE ENGINEER <span className="availability-divider">/</span> PHILADELPHIA, PA</div>
        <h1>Building software<br />that <em>works at scale.</em></h1>
        <p className="hero-intro">I’m Rukon, a software engineer focused on backend services, full-stack platforms, and dependable data integrations.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:rukon-it@live.com">Let’s talk <Arrow /></a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Resume PDF <Arrow /></a>
        </div>
        <div className="hero-meta"><span>JAVA · TYPESCRIPT · JAVASCRIPT · SPRING FRAMEWORKS · QUARKUS · GCP · AWS</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
      </div>
      <div className="hero-visual" aria-label="Decorative illustration">
        <div className="visual-grid" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="visual-core"><img className="profile-photo" src={`${import.meta.env.BASE_URL}profile-rukon.jpeg`} alt="Portrait of Rukon Khan" /></div>
        <span className="visual-index">PHL / 40.01° N</span>
        <span className="visual-note">DESIGNING FOR<br />RELIABILITY</span>
        <span className="visual-cross cross-one">+</span><span className="visual-cross cross-two">+</span>
      </div>
    </section>
  );
}

function HighlightStrip() {
  return (
    <div className="highlight-strip">
      <div><span className="highlight-number">40<span>%</span></span><span className="highlight-caption">lower reward engine<br />latency at peak</span></div>
      <div><span className="highlight-number">85<span>%+</span></span><span className="highlight-caption">automated test<br />code coverage</span></div>
      <div className="strip-note"><span className="strip-star">✳</span><span>Engineering across<br />platforms, data &amp; cloud</span></div>
    </div>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <SectionLabel number="01">THE JOURNEY</SectionLabel>
        <div className="section-title-row"><h2>Experience</h2><p>Systems built for real users,<br />real workloads, and what comes next.</p></div>
      </div>
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-item" key={job.company}>
            <div className="experience-rail"><span>{job.marker}</span><i /></div>
            <div className="experience-content">
              <div className="job-topline"><div><h3>{job.company}</h3><p className="job-title">{job.role}</p></div><span className="job-dates">{job.dates}</span></div>
              <p className="job-summary">{job.summary}</p>
              <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="tag-row">{job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <SectionLabel number="02">TOOLKIT</SectionLabel>
        <div className="section-title-row"><h2>Skills &amp; tools</h2><p>A practical toolkit for taking<br />ideas from API to production.</p></div>
      </div>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <article className="skill-card" key={group.name}>
            <span className="skill-index">0{i + 1}</span>
            <h3>{group.name}</h3>
            <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-heading">
        <SectionLabel number="03">FOUNDATIONS</SectionLabel>
        <div className="section-title-row"><h2>Education</h2><p>Grounded in systems thinking<br />and the study of economics.</p></div>
      </div>
      <div className="education-layout">
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <div><h3>{item.degree}</h3><p>{item.school}</p></div><div className="education-meta"><span>{item.year}</span><span>GPA {item.gpa}</span></div>
            </article>
          ))}
        </div>
        <aside className="cert-card">
          <span className="cert-icon">✳</span><span className="eyebrow">CERTIFICATION</span>
          <h3>Salesforce Certified<br />Platform Developer I</h3>
          <div className="cert-divider" />
          <p>Lean Six Sigma<br /><strong>Green Belt · 2019</strong></p>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb" />
      <SectionLabel number="04">NEXT UP</SectionLabel>
      <div className="contact-layout">
        <h2>Have a good<br />problem to <em>solve?</em></h2>
        <div className="contact-copy"><p>I’m always interested in thoughtful engineering challenges and conversations about building better software.</p><a className="contact-email" href="mailto:rukon-it@live.com">rukon-it@live.com <Arrow /></a><a className="contact-phone" href="tel:+19898549754">+1 (989) 854-9754</a></div>
      </div>
      <div className="contact-footer"><span>PHILADELPHIA, PENNSYLVANIA</span><a href="https://github.com/rukonit" target="_blank" rel="noreferrer">GITHUB <Arrow /></a><span>© {new Date().getFullYear()} RUKON KHAN</span></div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <div className="site-shell" id="top">
        <Header />
        <main>
          <Hero />
          <HighlightStrip />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
