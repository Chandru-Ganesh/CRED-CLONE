import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './App.css';

import BlurText from './components/animations/BlurText';
import ShinyText from './components/animations/ShinyText';
import ScrollReveal from './components/animations/ScrollReveal';
import ScrambledText from './components/animations/ScrambledText';

import heroVideo from './assets/videos/landing/hero-desktop.mp4';
import heroPoster from './assets/images/landing/desktop/hero-desktop-poster.jpg';
import phoneVideo from './assets/videos/landing/phone-ticker-desktop-final.mp4';
import phonePoster from './assets/images/landing/desktop/phone-ticker-desktop-poster.jpg';
import ccbpVideo from './assets/videos/landing/ccbp-fold-d.mp4';
import ccbpPoster from './assets/images/landing/desktop/ccbp-fold-poster.jpg';
import rewardsVideo from './assets/videos/landing/rewards-desktop-final.mp4';
import rewardsPoster from './assets/images/landing/desktop/rewards-desktop-poster.jpg';
import credLogo from './assets/videos/landing/cred-logo.png';
import scanNPay from './assets/images/landing/desktop/scan-n-pay.png';
import ccOnUpi from './assets/images/landing/desktop/cc-on-upi.png';
import tapNPay from './assets/images/landing/desktop/tap-n-pay.png';
import p2p from './assets/images/landing/desktop/p2p.png';
import garage from './assets/images/landing/desktop/garage.png';

const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >{children}</motion.div>
  );
};

/* ── FIXED QR WIDGET ──────────────────────────────────── */
const QrWidget = () => (
  <div className="qr-widget">
    <img className="qr-widget__img"
      src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/qr-final.png"
      alt="QR" />
    <span className="qr-widget__text">download<br />CRED</span>
  </div>
);

/* ── NAVBAR ───────────────────────────────────────────── */
const navLinks = [
  ['rewards', 'https://cred.club/rewards'],
  ['payments', 'https://cred.club/cred-pay'],
  ['money', 'https://cred.club/money'],
  ['garage', 'https://cred.club/garage'],
  ['about', 'https://cred.club/about'],
  ['careers', 'https://careers.cred.club/openings'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">
          <img src={credLogo} alt="CRED" className="navbar__logo" />
          <span className="navbar__wordmark">CRED</span>
        </div>
        <div className="navbar__right">
          <div className="navbar__banner">
            <p className="navbar__banner-text">CRED INDUSIND BANK<br />RUPAY CREDIT CARD</p>
          </div>
          <button className="navbar__hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
            <span style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none', transition: 'transform 0.3s' }} />
            <span style={{ opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none', transition: 'transform 0.3s' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="nav-overlay"
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }} transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
          >
            <button className="nav-overlay__close" onClick={() => setOpen(false)}>✕</button>
            <ul className="nav-overlay__links">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="https://app.cred.club/k63y/ciofyb98" target="_blank" rel="noreferrer"
              className="nav-overlay__cta" onClick={() => setOpen(false)}>
              download CRED
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── HERO ─────────────────────────────────────────────── */
const HeroSection = () => (
  <section className="hero">
    <video className="hero__video" src={heroVideo} poster={heroPoster}
      autoPlay muted loop playsInline />
    <div className="hero__overlay" />
    <div className="hero__content">
      <h1 className="hero__title">
        <BlurText
          text="crafted for the creditworthy"
          delay={120}
          animateBy="words"
          direction="top"
        />
      </h1>
      <motion.p className="hero__subtitle"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        CRED is a members-only club that enables the<br />
        trustworthy to make financial progress
      </motion.p>
    </div>
  </section>
);

/* ── SCROLL REVIVAL ───────────────────────────────────── */
const RevivalSection = () => (
  <section className="revival">
    <div className="revival__inner">
      <FadeUp>
        <p className="revival__eyebrow">NOT EVERYONE MAKES IT IN.</p>
      </FadeUp>
      <div className="revival__text">
        <ScrollReveal baseOpacity={0.15} enableBlur blurStrength={5}>
          the story of CRED begins with trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself.
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ── PHONE VIDEO ──────────────────────────────────────── */
const PhoneSection = () => (
  <div className="video-full">
    <video src={phoneVideo} poster={phonePoster} autoPlay muted loop playsInline />
    <div className="video-full__grad" />
    <div className="video-full__caption video-full__caption--split">
      <FadeUp>
        <h2 className="video-full__title video-full__title--lg">all that you<br />deserve.<br />and some more.</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="video-full__body video-full__body--right">
          if you're a CRED member, you're already a step ahead. every
          experience you unlock takes you higher up the pedestal.
        </p>
      </FadeUp>
    </div>
  </div>
);

/* ── CCBP SPLIT ───────────────────────────────────────── */
const CcbpSection = () => (
  <div className="ccbp-section">
    <video src={ccbpVideo} poster={ccbpPoster} autoPlay muted loop playsInline />
    <div className="ccbp-section__grad" />
    <div className="ccbp-section__content">
      <FadeUp>
        <h2 className="ccbp-section__title">do more with<br />your credit cards</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="ccbp-section__body">
          manage your credit cards better and improve your credit score:
          receive payment reminders, uncover hidden fees, get spending
          insights, and discover ways to maximize card benefits.
        </p>
      </FadeUp>
    </div>
  </div>
);

/* ── FEATURE TILES ────────────────────────────────────── */
const tiles = [
  { icon: '⊡', label: 'SCAN & PAY',     title: 'scan & pay\nany UPI QR',        img: scanNPay,  href: 'https://cred.club/cred-pay' },
  { icon: '▭', label: 'UPI ON CREDIT',  title: 'UPI payments.\non credit.',      img: ccOnUpi,   href: 'https://cred.club/upi-on-credit' },
  { icon: '◉', label: 'TAP TO PAY',     title: 'tap your phone.\npay on credit.',img: tapNPay,   href: 'https://cred.club/tap' },
  { icon: '⇅', label: 'PAY ANYONE',     title: 'send money to\nany UPI app',     img: p2p,       href: 'https://cred.club/pay-via-upi' },
  { icon: '◻', label: 'GARAGE',         title: 'manage your\ncars\' vitals',     img: garage,    href: 'https://cred.club/garage' },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="features" ref={ref}>
      <div className="features__header">
        <FadeUp>
          <h2 className="features__heading">upgrade your life.<br />bit by bit.</h2>
        </FadeUp>
      </div>
      <div className="features__track">
        {tiles.map((tile, i) => (
          <motion.a key={tile.label} href={tile.href} target="_blank" rel="noreferrer"
            className="feature-card"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="feature-card__top">
              <div className="feature-card__label">
                <span className="feature-card__label-icon">{tile.icon}</span>
                {tile.label}
              </div>
              <h3 className="feature-card__title">{tile.title.split('\n').map((l,j) => <span key={j}>{l}<br/></span>)}</h3>
              <div className="feature-card__btn">KNOW MORE →</div>
            </div>
            <img src={tile.img} alt={tile.label} className="feature-card__img" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

/* ── REWARDS VIDEO ────────────────────────────────────── */
const RewardsSection = () => (
  <div className="video-full">
    <video src={rewardsVideo} poster={rewardsPoster} autoPlay muted loop playsInline />
    <div className="video-full__grad video-full__grad--center" />
    <div className="video-full__caption video-full__caption--center">
      <FadeUp>
        <h2 className="video-full__title video-full__title--center">feel the odds fall<br />in your favor</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="video-full__body video-full__body--center">
          unlock cashback, exclusive rewards from select brands, and special
          access to curated products and experiences.
        </p>
      </FadeUp>
    </div>
  </div>
);

/* ── SECURITY (8th section - ScrambledText on hover) ─── */
const ShieldIcon = () => (
  <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L4 9v14c0 12.4 7.7 24 18 27 10.3-3 18-14.6 18-27V9L22 2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="16" y="22" width="12" height="10" rx="1" stroke="white" strokeWidth="1.8"/>
    <path d="M19 22v-3a3 3 0 016 0v3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const SecuritySection = () => (
  <section className="security">
    <div className="security__inner">
      <FadeUp>
        <div className="security__icon"><ShieldIcon /></div>
        <p className="security__eyebrow">YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.</p>
      </FadeUp>
      <div className="security__text">
        <ScrambledText
          scrambleChars="CRED"
          duration={1.2}
          speed={0.5}
          triggerOnHover={true}
          className="security__scramble"
        >
          all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.
        </ScrambledText>
      </div>
    </div>
  </section>
);

/* ── TRUST ────────────────────────────────────────────── */
const TrustSection = () => (
  <section className="trust">
    <div className="trust__left">
      <FadeUp>
        <p className="trust__eyebrow">TRUSTED BY 15M MEMBERS</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="trust__heading">the proof<br />writes itself</h2>
      </FadeUp>
    </div>
    <FadeUp delay={0.2}>
      <div className="trust__right">
        {['APP STORE', 'PLAY STORE'].map(store => (
          <div key={store} className="trust__rating">
            <div className="trust__stars">
              {[1,2,3,4].map(s => <span key={s} className="trust__star">★</span>)}
              <span className="trust__star half">★</span>
            </div>
            <div className="trust__score">4.8<sup>/5</sup></div>
            <div className="trust__store">{store}</div>
          </div>
        ))}
      </div>
    </FadeUp>
  </section>
);

/* ── FINAL CTA ────────────────────────────────────────── */
const FinalCtaSection = () => (
  <section className="final-cta">
    <div className="final-cta__bg">
      <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/tablet/cta-fold-final.png" alt="" />
      <div className="final-cta__bg-grad" />
    </div>
    <div className="final-cta__content">
      <FadeUp>
        <div className="final-cta__qr-row">
          <div className="final-cta__qr">
            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/qr-final.png" alt="QR" />
          </div>
          <span className="final-cta__qr-label">download<br />CRED</span>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="final-cta__heading">not everyone<br />gets it</h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="final-cta__body">
          like all good things in life, earning a CRED membership is not easy;
          but the possibility of unlocking a greater future makes the effort worthwhile.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <a href="https://app.cred.club/k63y/ciofyb98" target="_blank" rel="noreferrer" className="final-cta__btn">
          DOWNLOAD CRED
        </a>
      </FadeUp>
    </div>
  </section>
);

/* ── FAQ ──────────────────────────────────────────────── */
const faqs = [
  { q: 'about CRED', a: 'CRED is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. members are rewarded with exclusive perks and privileges for making sound financial decisions. trusted by over 25 million creditworthy members, CRED transforms each payment into a rewarding experience.' },
  { q: 'getting a membership', a: "to become a CRED member, you need a credit score of 750 or above. you can apply for membership by signing up on CRED with your name and a valid mobile number (issued within India). if your credit score makes the cut, we'll see you there." },
  { q: 'the CRED member experience', a: "CRED's suite of products is designed to help the creditworthy fast-track their financial & lifestyle progress. we partner with premier brands to offer unparalleled experiences and rewards to our members." },
  { q: 'checking your credit score', a: 'members can check and refresh their credit score on the CRED app. CRED acquires the updated credit score through a CIBIL score soft inquiry. you can access your credit score data anytime without any extra charges.' },
  { q: 'banks supported on CRED', a: 'CRED supports credit card bill payments for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.' },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq__item">
      <button className="faq__trigger" onClick={() => setOpen(!open)}>
        {q}<span className={`faq__icon${open ? ' open' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="faq__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >{a}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className="faq">
      <h2 className="faq__heading" onClick={() => setOpen(!open)}>
        FAQs <span className={`faq__arrow${open ? ' open' : ''}`}>▾</span>
      </h2>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="faq__list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ── FOOTER ───────────────────────────────────────────── */
const footerCols = [
  { heading: 'UPGRADES', links: [['CRED money','https://cred.club/money'],['CRED mint','https://cred.club/mint'],['CRED garage','https://cred.club/garage'],['CRED cash+','https://cred.club/cash-plus']] },
  { heading: 'COMPANY', links: [['about CRED','https://cred.club/about'],['careers','https://careers.cred.club/openings'],['tech blog','https://engineering.cred.club']] },
  { heading: 'RESOURCES', links: [['partner with us','https://cred.club/cred-pay/onboarding'],['calculators','https://cred.club/calculators'],['articles','https://cred.club/articles'],['customer care','https://cred.club/customer-care']] },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__brand">
        <img src={credLogo} alt="CRED" className="footer__logo" />
        <span className="footer__wordmark">CRED</span>
      </div>
      <div className="footer__cols">
        {footerCols.map(col => (
          <div key={col.heading}>
            <p className="footer__col-heading">{col.heading}</p>
            <ul className="footer__col-links">
              {col.links.map(([label, href]) => (
                <li key={label}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__banner">
        <p className="footer__banner-label">NEW LAUNCH</p>
        <img className="footer__banner-img"
          src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cred-card/now-live-wide.png"
          alt="CRED IndusInd RuPay Credit Card"
          onError={e => { e.target.style.display='none'; }}
        />
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__security">🔒 complete security. no asterisks.</div>
      <p className="footer__copy">© 2026</p>
    </div>
  </footer>
);

/* ── APP ──────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <QrWidget />
      <main>
        <HeroSection />
        <RevivalSection />
        <PhoneSection />
        <CcbpSection />
        <FeaturesSection />
        <RewardsSection />
        <SecuritySection />
        <TrustSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
