import './_group.css';
import './reference-direction.css';

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
  ['01', 'Web tasarımı & geliştirme', 'Markanızı doğru anlatan, hızlı açılan ve her ekranda iyi çalışan web siteleri.'],
  ['02', 'Özel yazılım çözümleri', 'İşinize göre şekillenen web uygulamaları, paneller ve dijital araçlar.'],
  ['03', 'Dijital ürün deneyimi', 'Bir fikri anlaşılır, kullanışlı ve sürdürülebilir bir ürüne dönüştüren UX/UI.'],
  ['04', 'Bakım & geliştirme', 'Yayına çıktıktan sonra da güncel, güvenli ve gelişmeye açık kalan dijital ürünler.'],
] as const;

const steps = [
  ['01', 'Önce dinlerim', 'Hedefinizi, kullanıcılarınızı ve bugün karşılaştığınız zorlukları anlamak için açık bir sohbetle başlarız.'],
  ['02', 'Birlikte netleştiririz', 'Kapsamı, öncelikleri ve başarıya giden yolu şeffafça belirler; belirsizliği işe başlamadan azaltırız.'],
  ['03', 'Üretir, paylaşırım', 'Tasarım ve geliştirme boyunca düzenli olarak ilerlemeyi görür, geri bildiriminizi doğrudan sürece katarsınız.'],
  ['04', 'Yayına alır, yanında kalırım', 'Testleri tamamlar, yayına geçişi planlar ve ihtiyaç duyduğunuzda ürününüzü birlikte geliştirmeye devam ederiz.'],
] as const;

const faqs = [
  ['Hangi ölçekte projelerle çalışıyorsunuz?', 'Yeni bir dijital fikrin ilk sürümünden, mevcut bir web sitesinin yenilenmesine veya iş akışına özel bir yazılıma kadar farklı ölçekte işlere açığım. Kapsamı, ihtiyacınıza ve önceliklerinize göre birlikte belirleriz.'],
  ['Proje süreci nasıl ilerliyor?', 'İlk görüşmede hedefi ve ihtiyaçları konuşuruz. Ardından kapsam ve takvim netleşir; tasarım, geliştirme ve test aşamalarında düzenli iletişimle ilerleriz. Her aşamada neyin neden yapıldığını bilirsiniz.'],
  ['Bir projeye başlamadan önce neye ihtiyacınız var?', 'İlk konuşma için yalnızca fikrinizi ve çözmek istediğiniz ihtiyacı anlatmanız yeterli. Hazır bir brief, içerik veya teknik dokümanınız varsa elbette birlikte değerlendiririz.'],
  ['Proje tamamlandıktan sonra destek veriyor musunuz?', 'Evet. İhtiyaca göre bakım, teknik destek ve yeni özellik geliştirme için devam eden bir çalışma planı oluşturabiliriz. Teslimde de ürününüzü yönetebilmeniz için gerekli bilgileri paylaşırım.'],
  ['Teklif almak için nasıl iletişime geçebilirim?', 'Telefonla, e-postayla veya aşağıdaki proje formunu kullanarak ulaşabilirsiniz. Form gönderildiğinde e-posta uygulamanızda önceden doldurulmuş bir mesaj açılır; size ulaşmadan hiçbir bilgi gönderilmez.'],
] as const;

const projects = [
  { number: '01', name: 'Kıyı — butik konaklama', category: 'Konsept web deneyimi · Turizm', brand: 'KIYI / ORDU', headline: 'Kıyıda, kendinize ait bir yer.', description: 'Karadeniz’de yavaş bir kaçamak için.', style: '' },
  { number: '02', name: 'Yama — yerel üretici pazarı', category: 'Konsept ürün arayüzü · E-ticaret', brand: 'yama', headline: 'İyi şeyler yakından gelir.', description: 'Mahallenden, mevsiminden.', style: 'syx-project-yama' },
  { number: '03', name: 'Rota — kişisel gezi planlayıcı', category: 'Konsept dijital ürün · Seyahat', brand: 'rota.', headline: 'Bir sonraki hikâyene doğru.', description: 'Yolunu kendi ritminde çiz.', style: 'syx-project-rota' },
] as const;

function BrandMark() {
  return <span className="syx-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 7h22L9 25h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" /><path d="M5 7v18" stroke="#b18aff" strokeWidth="2.5" /></svg></span>;
}

function LightTrails() {
  return (
    <svg className="syx-light-svg" viewBox="0 0 640 500" role="img" aria-label="Syraxen merkezinden yayılan cyan, teal ve violet ışık izleri">
      <defs>
        <linearGradient id="syx-cyan-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#63e8df" stopOpacity="0" /><stop offset=".5" stopColor="#63e8df" /><stop offset="1" stopColor="#63e8df" stopOpacity="0" /></linearGradient>
        <linearGradient id="syx-violet-line" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#a77cff" stopOpacity="0" /><stop offset=".5" stopColor="#a77cff" /><stop offset="1" stopColor="#a77cff" stopOpacity="0" /></linearGradient>
        <filter id="syx-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" /></filter>
      </defs>
      <path className="syx-glow" d="M310 250C220 170 149 95 26 32M310 250C216 305 115 394 25 470M310 250C400 155 505 79 625 40M310 250C404 321 514 411 625 468" stroke="url(#syx-cyan-line)" strokeWidth="9" />
      <path className="syx-trail" d="M310 250C220 170 149 95 26 32M310 250C216 305 115 394 25 470M310 250C400 155 505 79 625 40M310 250C404 321 514 411 625 468" stroke="url(#syx-cyan-line)" strokeWidth="1.5" />
      <path className="syx-glow" d="M310 250C240 207 195 166 70 123M310 250C236 272 153 334 63 407M310 250C380 215 454 161 574 112M310 250C382 281 471 348 579 411" stroke="url(#syx-violet-line)" strokeWidth="8" />
      <path className="syx-trail syx-trail-reverse" d="M310 250C240 207 195 166 70 123M310 250C236 272 153 334 63 407M310 250C380 215 454 161 574 112M310 250C382 281 471 348 579 411" stroke="url(#syx-violet-line)" strokeWidth="1.2" />
      <path d="M0 168C178 198 227 226 310 250C409 282 487 299 640 305M0 352C165 315 236 278 310 250C405 213 487 191 640 179" stroke="rgba(204,232,245,.2)" strokeWidth="1" />
      <circle cx="310" cy="250" r="4" fill="#e3ffff" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className={`syx-project syx-reveal syx-delay-${index % 3 + 1} ${project.style}`}>
      <div className="syx-project-visual">
        <span className="syx-project-label">Konsept çalışma</span><span className="syx-project-count">{project.number} / 03</span>
        <div className="syx-project-window" aria-hidden="true">
          <div className="syx-project-windowbar"><i /><i /><i /></div>
          <span className="syx-project-brand">{project.brand}</span><span className="syx-project-head">{project.headline}</span>
          <span className="syx-project-sub">{project.description}</span><span className="syx-project-cta">Keşfet <ArrowRight size={9} /></span><span className="syx-project-shape" />
        </div>
      </div>
      <div className="syx-project-caption"><div><h3>{project.name}</h3><p>{project.category}</p></div><ArrowUpRight aria-hidden="true" /></div>
    </article>
  );
}

export default function ReferenceDirection() {
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
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let theme = document.querySelector('meta[name="theme-color"]');
    if (!theme) { theme = document.createElement('meta'); theme.setAttribute('name', 'theme-color'); document.head.appendChild(theme); }
    theme.setAttribute('content', '#07090d');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('syx-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.syx-reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Syraxen proje görüşmesi — ${formName || 'Yeni proje'}`);
    const body = encodeURIComponent(`Merhaba Emirhan,\n\n${formBrief}\n\nAdım: ${formName}\nE-posta: ${formEmail}\n\nBu mesaj Syraxen web sitesindeki form aracılığıyla hazırlandı.`);
    window.location.href = `mailto:info@syraxen.tr?subject=${subject}&body=${body}`;
  };

  return (
    <div className="syx-page">
      <header className="syx-header">
        <div className="syx-wrap syx-header-inner">
          <a className="syx-brand" href="#anasayfa" aria-label="Syraxen ana sayfa"><BrandMark /><span>syraxen</span></a>
          <nav id="syx-main-nav" className={`syx-nav ${menuOpen ? 'syx-open' : ''}`} aria-label="Ana menü">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
          <a className="syx-nav-cta" href="#iletisim">Bir fikrim var <ArrowUpRight size={13} /></a>
          <button className="syx-menu-toggle" type="button" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen} aria-controls="syx-main-nav" onClick={() => setMenuOpen((open) => !open)}><span className="syx-sr-only">{menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}</span>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="syx-hero" id="anasayfa">
          <div className="syx-wrap syx-hero-inner">
            <div className="syx-hero-art" aria-label="Syraxen dijital stüdyo görsel kimliği">
              <span className="syx-art-kicker">Fikirden ürüne / 01</span><LightTrails />
              <div className="syx-core-halo" aria-hidden="true" />
              <div className="syx-core" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 7h22L9 25h18" stroke="#f3f6f8" strokeWidth="2.1" strokeLinecap="square" /><path d="M5 7v18" stroke="#75e7e1" strokeWidth="2.1" /></svg></div>
              <span className="syx-art-coordinate">Syraxen studio · Ordu</span>
            </div>
            <div className="syx-hero-copy">
              <span className="syx-eyebrow">Ordu’dan, dijitalin her yerine</span>
              <h1>İyi fikirler<br /><em>dijitalde</em> yerini bulur.</h1>
              <p>Fikrinizi, işinizi ileri taşıyan dijital ürünlere dönüştürüyorum. İyi tasarım, sağlam teknoloji ve yakın iş birliğiyle.</p>
              <div className="syx-hero-actions"><a className="syx-pill" href="#iletisim">Birlikte başlayalım <ArrowRight size={14} /></a><a className="syx-text-cta" href="#konseptler">Konseptleri gör <ArrowDown size={14} /></a></div>
              <div className="syx-hero-meta"><span>Bağımsız dijital stüdyo</span><span>Altınordu, Ordu</span><span>Yakın iş birliği</span></div>
            </div>
          </div>
          <a className="syx-scroll-cue" href="#yaklasim" aria-label="Yaklaşım bölümüne kaydır">Aşağı kaydır</a>
        </section>

        <section className="syx-section syx-intro" id="yaklasim">
          <div className="syx-wrap syx-intro-grid">
            <aside className="syx-intro-aside syx-reveal"><span className="syx-eyebrow">01 / Yaklaşım</span><p>Dijital üretim, doğru soruyu sormakla başlar. Cevabını da birlikte buluruz.</p></aside>
            <div className="syx-intro-main syx-reveal syx-delay-1"><h2>Fikirlerinizi yalnızca <em>çalışır</em> hâle değil, insanların gerçekten kullanmak isteyeceği hâle getiriyorum.</h2><div className="syx-intro-bottom"><p>Syraxen; yakın iletişimi, düşünülmüş tasarımı ve güvenilir yazılımı bir araya getiren bağımsız bir dijital stüdyo.</p><a className="syx-link" href="#hizmetler">Neler yapıyorum <ArrowRight size={14} /></a></div></div>
          </div>
        </section>

        <section className="syx-section syx-services" id="hizmetler">
          <div className="syx-wrap">
            <div className="syx-section-top syx-reveal"><div><span className="syx-eyebrow">02 / Hizmetler</span><h2 className="syx-heading">Dijitalde ihtiyaç<br />duyduğunuz ne varsa.</h2></div><p className="syx-section-lead">Büyük ya da küçük, her işin doğru çözümü kendi bağlamında saklı. İhtiyacınıza göre tasarlar, geliştirir ve birlikte hayata geçiririz.</p></div>
            <div className="syx-service-list">{services.map(([number, title, description], index) => <article className={`syx-service-row syx-reveal syx-delay-${index % 3 + 1}`} key={number}><span className="syx-service-num">{number}</span><h3>{title}</h3><p>{description}</p><a className="syx-service-arrow" href="#iletisim" aria-label={`${title} için iletişime geç`}><ArrowUpRight /></a></article>)}</div>
            <div className="syx-service-foot"><span>Tek bir uzmanla, doğrudan iletişim</span><span>İhtiyaca göre ölçeklenen iş birliği</span></div>
          </div>
        </section>

        <section className="syx-section syx-work" id="konseptler">
          <div className="syx-wrap">
            <div className="syx-section-top syx-reveal"><div><span className="syx-eyebrow">03 / Fikirden ekrana</span><h2 className="syx-heading">Olası dünyalardan<br />küçük kesitler.</h2></div><p className="syx-concept-note">Bunlar yaklaşımımı göstermek için hazırlanmış konsept çalışmalardır. Gerçek müşteri projeleri veya yayındaki ürünler değildir.</p></div>
            <div className="syx-project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.number} />)}</div>
          </div>
        </section>

        <section className="syx-section syx-process" id="surec">
          <div className="syx-wrap syx-process-grid">
            <div className="syx-process-aside syx-reveal"><span className="syx-eyebrow">04 / Birlikte çalışma</span><h2 className="syx-heading">İyi iş,<br />iyi iletişimle<br />başlar.</h2><p className="syx-section-lead">Karmaşık süreçler yok. Ne yapacağımızı, neden yapacağımızı ve sırada ne olduğunu her zaman bilirsiniz.</p><a className="syx-pill" href="#iletisim">Süreci konuşalım <ArrowRight size={14} /></a></div>
            <div className="syx-steps">{steps.map(([number, title, description], index) => <article className={`syx-step syx-reveal syx-delay-${index % 3 + 1}`} key={number}><span className="syx-step-index">{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="syx-section syx-about" id="hakkimda">
          <div className="syx-wrap syx-about-grid">
            <div className="syx-about-art syx-reveal" aria-label="Emirhan AKÇA, Syraxen kurucusu"><div className="syx-about-monogram"><span>Fikirleri ürüne</span><strong>SYR<br />AXEN</strong><span>dönüştürür</span></div><span className="syx-about-pin">ORDU · 40°59′N 37°53′E</span></div>
            <div className="syx-about-copy syx-reveal syx-delay-1"><span className="syx-eyebrow">05 / Ben kimim?</span><h2 className="syx-heading">Yakın çalışırım.<br />İşinize gerçekten<br />odaklanırım.</h2><p>Ben Emirhan AKÇA. Syraxen’i, dijital bir projede ihtiyaç duyduğunuz tasarım ve yazılımı aynı masada buluşturmak için kurdum. Altınordu, Ordu’dan; fikirleri netleştiriyor, detaylara özen gösteriyor ve birlikte kullanışlı dijital deneyimler üretiyorum.</p><p>Arada katmanlar yok. Sürecin başından sonuna kadar doğrudan benimle çalışırsınız.</p><div className="syx-signature"><span className="syx-signature-mark">EA</span><div><strong>Emirhan AKÇA</strong><span>Kurucu · Tasarımcı · Geliştirici</span></div></div></div>
          </div>
        </section>

        <section className="syx-section syx-faq" id="sss">
          <div className="syx-wrap syx-faq-grid">
            <div className="syx-reveal"><span className="syx-eyebrow">06 / Aklınıza takılanlar</span><h2 className="syx-heading">İlk adım<br />hakkında.</h2><p className="syx-section-lead">Aklınızdaki sorunun cevabı burada yoksa, doğrudan konuşabiliriz.</p><a className="syx-link" href="mailto:info@syraxen.tr">E-posta gönder <ArrowUpRight size={14} /></a></div>
            <div className="syx-faq-list syx-reveal syx-delay-1">{faqs.map(([question, answer], index) => <div className="syx-faq-item" data-open={openFaq === index} key={question}><h3><button className="syx-faq-trigger" id={`syx-faq-trigger-${index}`} type="button" aria-expanded={openFaq === index} aria-controls={`syx-faq-answer-${index}`} onClick={() => setOpenFaq((current) => current === index ? null : index)}><span>{question}</span><span className="syx-faq-plus" aria-hidden="true">+</span></button></h3><div className="syx-faq-answer" id={`syx-faq-answer-${index}`} role="region" aria-labelledby={`syx-faq-trigger-${index}`}><div className="syx-faq-answer-inner"><p>{answer}</p></div></div></div>)}</div>
          </div>
        </section>

        <section className="syx-section syx-contact" id="iletisim">
          <div className="syx-wrap">
            <div className="syx-contact-layout">
              <div className="syx-reveal"><span className="syx-eyebrow">07 / Sıra sizde</span><h2 className="syx-heading">Aklınızda<br />bir şey mi <em>var?</em></h2><p className="syx-contact-copy">Henüz her şeyi çözmüş olmanız gerekmiyor. Fikrinizi anlatın; bir sonraki adımı birlikte netleştirelim.</p><a className="syx-pill" href="mailto:info@syraxen.tr?subject=Syraxen%20proje%20g%C3%B6r%C3%BC%C5%9Fmesi">E-posta ile başlayın <ArrowUpRight size={14} /></a></div>
              <div className="syx-contact-details syx-reveal syx-delay-1"><div className="syx-contact-detail"><span>Telefon</span><a href="tel:+905510069220">+90 5510069220</a></div><div className="syx-contact-detail"><span>E-posta</span><a href="mailto:info@syraxen.tr">info@syraxen.tr</a></div><div className="syx-contact-detail"><span>Konum</span><address>Nizamettin Mah, 83 - Ordu/Altınordu</address></div><div className="syx-contact-detail"><span>Stüdyo</span><span>Syraxen · Emirhan AKÇA</span></div></div>
            </div>
            <form className="syx-form syx-reveal" onSubmit={handleContactSubmit}>
              <div className="syx-form-note"><span className="syx-eyebrow">Projenizi anlatın</span><p>Gönder butonu, e-posta uygulamanızda hazır bir mesaj açar. Bilgileriniz bu sayfadan gönderilmez.</p></div>
              <div className="syx-fields">
                <label>Adınız<input required value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="Size nasıl hitap edelim?" autoComplete="name" /></label>
                <label>E-posta adresiniz<input required type="email" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="ornek@eposta.com" autoComplete="email" /></label>
                <label className="syx-message">Kısaca fikriniz<textarea required value={formBrief} onChange={(event) => setFormBrief(event.target.value)} placeholder="Ne yapmak istiyorsunuz?" rows={3} /></label>
                <button className="syx-pill" type="submit">E-posta taslağı oluştur <ArrowUpRight size={14} /></button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="syx-footer"><div className="syx-wrap syx-footer-inner"><a className="syx-footer-brand" href="#anasayfa">syraxen</a><span>© {new Date().getFullYear()} Syraxen · Emirhan AKÇA · Ordu</span><div className="syx-footer-links"><a href="#hizmetler">Hizmetler</a><a href="#iletisim">İletişim</a><a href="mailto:info@syraxen.tr">E-posta</a></div></div></footer>
    </div>
  );
}
