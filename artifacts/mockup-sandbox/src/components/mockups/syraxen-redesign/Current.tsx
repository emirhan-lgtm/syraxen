import './_group.css';

import { useEffect, useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [
  ['Yaklaşım', '#yaklasim'],
  ['Hizmetler', '#hizmetler'],
  ['Konseptler', '#konseptler'],
  ['Hakkımda', '#hakkimda'],
  ['SSS', '#sss'],
] as const;

const services = [
  {
    number: '01',
    title: 'Web tasarımı & geliştirme',
    description: 'Markanızı doğru anlatan, hızlı açılan ve her ekranda iyi çalışan web siteleri.',
  },
  {
    number: '02',
    title: 'Özel yazılım çözümleri',
    description: 'İşinize göre şekillenen web uygulamaları, paneller ve dijital araçlar.',
  },
  {
    number: '03',
    title: 'Dijital ürün deneyimi',
    description: 'Bir fikri anlaşılır, kullanışlı ve sürdürülebilir bir ürüne dönüştüren UX/UI.',
  },
  {
    number: '04',
    title: 'Bakım & geliştirme',
    description: 'Yayına çıktıktan sonra da güncel, güvenli ve gelişmeye açık kalan dijital ürünler.',
  },
];

const steps = [
  ['01', 'Önce dinlerim', 'Hedefinizi, kullanıcılarınızı ve bugün karşılaştığınız zorlukları anlamak için açık bir sohbetle başlarız.'],
  ['02', 'Birlikte netleştiririz', 'Kapsamı, öncelikleri ve başarıya giden yolu şeffafça belirler; belirsizliği işe başlamadan azaltırız.'],
  ['03', 'Üretir, paylaşırım', 'Tasarım ve geliştirme boyunca düzenli olarak ilerlemeyi görür, geri bildiriminizi doğrudan sürece katarsınız.'],
  ['04', 'Yayına alır, yanında kalırım', 'Testleri tamamlar, yayına geçişi planlar ve ihtiyaç duyduğunuzda ürününüzü birlikte geliştirmeye devam ederiz.'],
];

const faqs = [
  {
    question: 'Hangi ölçekte projelerle çalışıyorsunuz?',
    answer: 'Yeni bir dijital fikrin ilk sürümünden, mevcut bir web sitesinin yenilenmesine veya iş akışına özel bir yazılıma kadar farklı ölçekte işlere açığım. Kapsamı, ihtiyacınıza ve önceliklerinize göre birlikte belirleriz.',
  },
  {
    question: 'Proje süreci nasıl ilerliyor?',
    answer: 'İlk görüşmede hedefi ve ihtiyaçları konuşuruz. Ardından kapsam ve takvim netleşir; tasarım, geliştirme ve test aşamalarında düzenli iletişimle ilerleriz. Her aşamada neyin neden yapıldığını bilirsiniz.',
  },
  {
    question: 'Bir projeye başlamadan önce neye ihtiyacınız var?',
    answer: 'İlk konuşma için yalnızca fikrinizi ve çözmek istediğiniz ihtiyacı anlatmanız yeterli. Hazır bir brief, içerik veya teknik dokümanınız varsa elbette birlikte değerlendiririz.',
  },
  {
    question: 'Proje tamamlandıktan sonra destek veriyor musunuz?',
    answer: 'Evet. İhtiyaca göre bakım, teknik destek ve yeni özellik geliştirme için devam eden bir çalışma planı oluşturabiliriz. Teslimde de ürününüzü yönetebilmeniz için gerekli bilgileri paylaşırım.',
  },
  {
    question: 'Teklif almak için nasıl iletişime geçebilirim?',
    answer: 'Telefonla, e-postayla veya aşağıdaki proje formunu kullanarak ulaşabilirsiniz. Form gönderildiğinde e-posta uygulamanızda önceden doldurulmuş bir mesaj açılır; size ulaşmadan hiçbir bilgi gönderilmez.',
  },
];

const projects = [
  {
    number: '01',
    name: 'Kıyı — butik konaklama',
    category: 'Konsept web deneyimi · Turizm',
    variant: 'visual-one',
    brand: 'KIYI / ORDU',
    headline: 'Kıyıda, kendinize ait bir yer.',
    description: 'Karadeniz’de yavaş bir kaçamak için.',
    label: 'Konsept çalışma',
  },
  {
    number: '02',
    name: 'Yama — yerel üretici pazarı',
    category: 'Konsept ürün arayüzü · E-ticaret',
    variant: 'visual-two',
    brand: 'yama',
    headline: 'İyi şeyler yakından gelir.',
    description: 'Mahallenden, mevsiminden.',
    label: 'Konsept çalışma',
  },
  {
    number: '03',
    name: 'Rota — kişisel gezi planlayıcı',
    category: 'Konsept dijital ürün · Seyahat',
    variant: 'visual-three',
    brand: 'rota.',
    headline: 'Bir sonraki hikâyene doğru.',
    description: 'Yolunu kendi ritminde çiz.',
    label: 'Konsept çalışma',
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M5 7h22L9 25h18" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <path d="M5 7v18" stroke="#ef8969" strokeWidth="3" />
      </svg>
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card reveal" data-testid={`card-concept-${project.number}`}>
      <div className={`project-visual ${project.variant}`}>
        <span className="visual-label">{project.label}</span>
        <span className="project-number">{project.number} / 03</span>
        <div className="mock-window" aria-hidden="true">
          <div className="window-bar"><i /><i /><i /></div>
          <span className="mock-brand">{project.brand}</span>
          <span className="mock-headline">{project.headline}</span>
          <span className="mock-sub">{project.description}</span>
          <span className="mock-cta">Keşfet <ArrowRight size={9} /></span>
          <span className="mock-illustration" />
        </div>
      </div>
      <div className="project-caption">
        <div>
          <h3>{project.name}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBrief, setFormBrief] = useState('');

  useEffect(() => {
    document.documentElement.lang = 'tr';
    document.title = 'Syraxen — Fikrinizi dijitalde ileri taşıyalım';
    const description = 'Syraxen, Emirhan AKÇA tarafından Ordu Altınordu’da yürütülen bağımsız dijital stüdyo. Web siteleri, özel yazılım ve dijital ürün deneyimleri.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Syraxen — Fikrinizi dijitalde ileri taşıyalım');
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!ogDescription.parentNode) document.head.appendChild(ogDescription);
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#f4f1e8');

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Syraxen proje görüşmesi — ${formName || 'Yeni proje'}`);
    const body = encodeURIComponent(
      `Merhaba Emirhan,\n\n${formBrief}\n\nAdım: ${formName}\nE-posta: ${formEmail}\n\nBu mesaj Syraxen web sitesindeki form aracılığıyla hazırlandı.`,
    );
    window.location.href = `mailto:info@syraxen.tr?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#anasayfa" aria-label="Syraxen ana sayfa" data-testid="link-home">
            <BrandMark /> <span>syraxen</span>
          </a>
          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Ana menü">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} data-testid={`link-nav-${href.slice(1)}`}>{label}</a>
            ))}
          </nav>
          <a className="header-cta" href="#iletisim" data-testid="link-header-contact">Bir fikrim var <ArrowUpRight size={14} /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="anasayfa">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-label"><span className="pulse" /> Ordu’dan, dijitalin her yerine</div>
              <h1 className="display">İyi fikirler<br />dijitalde <span className="accent">yerini</span><br />bulur.</h1>
              <p className="hero-description">Fikrinizi, işinizi ileri taşıyan dijital ürünlere dönüştürüyorum. İyi tasarım, sağlam teknoloji ve yakın iş birliğiyle.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#iletisim" data-testid="link-hero-contact">Birlikte başlayalım <ArrowRight /></a>
                <a className="button-outline" href="#konseptler" data-testid="link-hero-work">Konseptleri gör <ArrowDown /></a>
              </div>
              <div className="hero-meta">
                <span>Bağımsız dijital stüdyo</span><span>Altınordu, Ordu</span><span>Yakın iş birliği</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Syraxen dijital stüdyo görsel kimliği">
              <div className="art-frame">
                <div className="art-grid" />
                <div className="orbit" /><div className="orbit orbit-two" />
                <div className="orbit-dot" /><div className="art-core" />
                <span className="art-label top">Fikirden ürüne / 01</span>
                <span className="art-label bottom">Dijitalde iz bırak</span>
              </div>
              <span className="art-index">SYRAXEN STUDIO · ORDU</span>
            </div>
          </div>
          <a className="scroll-cue" href="#yaklasim" aria-label="Aşağı kaydır">Aşağı kaydır</a>
          <span className="hero-side-note">Dijital bir sonraki adımınız</span>
        </section>

        <div className="ticker" aria-label="Syraxen çalışma alanları">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-item" key={copy} aria-hidden={copy === 1}>
                <span>Web deneyimleri</span><b aria-hidden="true">·</b><span>Özel yazılım</span><b aria-hidden="true">·</b><span>Dijital ürünler</span><b aria-hidden="true">·</b><span>Yakın iş birliği</span><b aria-hidden="true">·</b><span>İyi fikirler</span><b aria-hidden="true">·</b>
              </div>
            ))}
          </div>
        </div>

        <section className="section" id="yaklasim">
          <div className="container intro">
            <aside className="intro-aside reveal">
              <span className="eyebrow">01 / Yaklaşım</span>
              <p>Dijital üretim, doğru soruyu sormakla başlar. Cevabını da birlikte buluruz.</p>
            </aside>
            <div className="intro-main reveal delay-1">
              <h2>Fikirlerinizi yalnızca <em>çalışır</em> hâle değil, insanların gerçekten kullanmak isteyeceği hâle getiriyorum.</h2>
              <div className="intro-bottom">
                <p>Syraxen; yakın iletişimi, düşünülmüş tasarımı ve güvenilir yazılımı bir araya getiren bağımsız bir dijital stüdyo.</p>
                <a className="text-link" href="#hizmetler" data-testid="link-approach-services">Neler yapıyorum <ArrowRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section services" id="hizmetler">
          <div className="container">
            <div className="services-top reveal">
              <div><span className="eyebrow">02 / Hizmetler</span><h2 className="section-heading">Dijitalde ihtiyaç<br />duyduğunuz ne varsa.</h2></div>
              <p className="section-intro">Büyük ya da küçük, her işin doğru çözümü kendi bağlamında saklı. İhtiyacınıza göre tasarlar, geliştirir ve birlikte hayata geçiririz.</p>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className={`service-row reveal delay-${index % 3 + 1}`} key={service.number} data-testid={`service-${service.number}`}>
                  <span className="service-num">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a className="service-arrow" href="#iletisim" aria-label={`${service.title} için iletişime geç`}><ArrowUpRight /></a>
                </article>
              ))}
            </div>
            <div className="service-foot"><span>Tek bir uzmanla, doğrudan iletişim</span><span>İhtiyaca göre ölçeklenen iş birliği</span></div>
          </div>
        </section>

        <section className="section work" id="konseptler">
          <div className="container">
            <div className="work-head reveal">
              <div><span className="eyebrow">03 / Fikirden ekrana</span><h2 className="section-heading">Olası dünyalardan<br />küçük kesitler.</h2></div>
              <p className="concept-note">Bunlar yaklaşımımı göstermek için hazırlanmış konsept çalışmalardır. Gerçek müşteri projeleri veya yayındaki ürünler değildir.</p>
            </div>
            <div className="work-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
          </div>
        </section>

        <section className="section" id="surec">
          <div className="container approach">
            <div className="approach-sticky reveal">
              <span className="eyebrow">04 / Birlikte çalışma</span>
              <h2 className="section-heading">İyi iş,<br />iyi iletişimle<br />başlar.</h2>
              <p className="section-intro">Karmaşık süreçler yok. Ne yapacağımızı, neden yapacağımızı ve sırada ne olduğunu her zaman bilirsiniz.</p>
              <a className="button-outline" href="#iletisim" data-testid="link-process-contact">Süreci konuşalım <ArrowRight /></a>
            </div>
            <div className="steps">
              {steps.map(([number, title, description], index) => (
                <article className={`step reveal delay-${index % 3 + 1}`} key={number}>
                  <span className="step-index">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="hakkimda">
          <div className="container about-grid">
            <div className="about-stamp reveal" aria-label="Emirhan AKÇA, Syraxen kurucusu">
              <div className="stamp-core"><span>Fikirleri ürüne</span><strong>SYR<br />AXEN</strong><span>dönüştürür</span></div>
              <span className="stamp-orbit-label">ORDU · 40°59′N 37°53′E</span>
            </div>
            <div className="about-copy reveal delay-1">
              <span className="eyebrow">05 / Ben kimim?</span>
              <h2 className="section-heading">Yakın çalışırım.<br />İşinize gerçekten<br />odaklanırım.</h2>
              <p>Ben Emirhan AKÇA. Syraxen’i, dijital bir projede ihtiyaç duyduğunuz tasarım ve yazılımı aynı masada buluşturmak için kurdum. Altınordu, Ordu’dan; fikirleri netleştiriyor, detaylara özen gösteriyor ve birlikte kullanışlı dijital deneyimler üretiyorum.</p>
              <p>Arada katmanlar yok. Sürecin başından sonuna kadar doğrudan benimle çalışırsınız.</p>
              <div className="about-signature">
                <span className="signature-mark">EA</span>
                <div className="signature-copy"><strong>Emirhan AKÇA</strong><span>Kurucu · Tasarımcı · Geliştirici</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="sss">
          <div className="container faq-grid">
            <div className="reveal">
              <span className="eyebrow">06 / Aklınıza takılanlar</span>
              <h2 className="section-heading">İlk adım<br />hakkında.</h2>
              <p className="section-intro">Aklınızdaki sorunun cevabı burada yoksa, doğrudan konuşabiliriz.</p>
              <a href="mailto:info@syraxen.tr" className="text-link" data-testid="link-faq-email">E-posta gönder <ArrowUpRight size={15} /></a>
            </div>
            <div className="faq-list reveal delay-1">
              {faqs.map((faq, index) => (
                <div className="faq-item" data-open={openFaq === index} key={faq.question}>
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq((current) => current === index ? null : index)}
                    data-testid={`button-faq-${index + 1}`}
                  >
                    <span>{faq.question}</span><span aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer"><div className="faq-answer-inner"><p>{faq.answer}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="iletisim">
          <div className="container">
            <div className="contact-layout">
              <div className="reveal">
                <span className="eyebrow">07 / Sıra sizde</span>
                <h2 className="section-heading">Aklınızda<br />bir şey mi <em>var?</em></h2>
                <p className="contact-copy">Henüz her şeyi çözmüş olmanız gerekmiyor. Fikrinizi anlatın; bir sonraki adımı birlikte netleştirelim.</p>
                <a className="button-primary" href="mailto:info@syraxen.tr?subject=Syraxen%20proje%20g%C3%B6r%C3%BC%C5%9Fmesi" data-testid="link-contact-email">E-posta ile başlayın <ArrowUpRight /></a>
              </div>
              <div className="reveal delay-1">
                <div className="contact-details">
                  <div className="contact-detail"><span>Telefon</span><a href="tel:+905510069220" data-testid="link-phone">+90 5510069220</a></div>
                  <div className="contact-detail"><span>E-posta</span><a href="mailto:info@syraxen.tr" data-testid="link-email">info@syraxen.tr</a></div>
                  <div className="contact-detail"><span>Konum</span><address>Nizamettin Mah, 83 - Ordu/Altınordu</address></div>
                  <div className="contact-detail"><span>Stüdyo</span><span>Syraxen · Emirhan AKÇA</span></div>
                </div>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleContactSubmit}>
              <div className="form-intro"><span className="eyebrow">Projenizi anlatın</span><p>Gönder butonu, e-posta uygulamanızda hazır bir mesaj açar.</p></div>
              <div className="form-fields">
                <label>Adınız<input required value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="Size nasıl hitap edelim?" data-testid="input-contact-name" /></label>
                <label>E-posta adresiniz<input required type="email" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="ornek@eposta.com" data-testid="input-contact-email" /></label>
                <label className="form-message">Kısaca fikriniz<textarea required value={formBrief} onChange={(event) => setFormBrief(event.target.value)} placeholder="Ne yapmak istiyorsunuz?" rows={3} data-testid="input-contact-message" /></label>
                <button className="button-primary" type="submit" data-testid="button-contact-submit">E-posta taslağı oluştur <ArrowUpRight /></button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#anasayfa" data-testid="link-footer-home">syraxen</a>
          <span>© {new Date().getFullYear()} Syraxen · Emirhan AKÇA · Ordu</span>
          <div className="footer-links"><a href="#hizmetler" data-testid="link-footer-services">Hizmetler</a><a href="#iletisim" data-testid="link-footer-contact">İletişim</a><a href="mailto:info@syraxen.tr" data-testid="link-footer-email">E-posta</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
