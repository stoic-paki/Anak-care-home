import React from "react";
import "./AboutUs.css";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);


const values = [
  {
    icon: "❤️",
    title: "Compassion First",
    desc: "Every decision we make is rooted in empathy — for our clients, their families, and the caregivers who serve them.",
  },
  {
    icon: "🛡️",
    title: "Trust & Safety",
    desc: "All caregivers are thoroughly vetted, trained, and insured so your loved ones are always in safe hands.",
  },
  {
    icon: "🌱",
    title: "Dignity & Independence",
    desc: "We believe aging at home is a right. We build care plans that preserve autonomy and quality of life.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Director",
    img: "/assets/The founder.jpg",
  },
  {
    name: "James Okafor",
    role: "Care Coordinator",
    img: "/assets/caregiver og.jpg",
  },
  { name: "Priya Nair", role: "Senior Caregiver", img: "/assets/priya.jpg" },
  { name: "Tom Walsh", role: "Client Relations", img: "/assets/tom.jpg" },
];


const stats = [
  { end: 500, suffix: "+", label: "Families Served" },
  { end: 98,  suffix: "%", label: "Client Satisfaction" },
  { end: 12,  suffix: "+", label: "Years Experience" },
  { end: 60,  suffix: "+", label: "Qualified Caregivers" },
];

const AboutUs = () => {
      const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useGSAP(() => {
    gsap.from(".hero-img-1", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-img-1",
        start: "top 80%",
      },
    });
    gsap.from(".hero-img-2", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-img-2",
        start: "top 80%",
      },
    });
    gsap.from(".hero-content__title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-content__title",
        start: "top 80%",
      },
    });
    gsap.from(".about-story__text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-story__text",
        start: "top 80%",
      },
    });
    gsap.from(".about-story__image", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-story__image",
        start: "top 80%",
      },
    });

    gsap.from(".about-values__header", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-values__header",
        start: "top 80%",
      },
    }); 

    gsap.from(".about-values__grid", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-values__grid",
          start: "top 80%",
        },
    })

    gsap.from(".about-team__header",{
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-team__header",
          start: "top 80%",
        },
    })

    gsap.from(".about-team-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-team-card",
          start: "top 80%",
        },
    })

    gsap.from(".about-cta__inner", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-cta__inner",
          start: "top 80%",
        },})
    });


  return (
    <div className="about-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__image-block">
          <div className="about-hero__img-wrap border-2 hero-img-1">
            <img src="/assets/hero-care.jpg" alt="Caregiver with senior" />
            <div className="about-hero__img-badge border-2">
              <span className="about-hero__badge-number">12+</span>
              <span className="about-hero__badge-label">Years of Care</span>
            </div>
          </div>
          <div className="about-hero__img-secondary hero-img-2">
            <img src="/assets/hero-care2.jpg" alt="Happy family" />
          </div>
        </div>

        <div className="about-hero__content">
          <span className="about-eyebrow">Who We Are</span>
          <h1 className="about-hero__title hero-content__title">
            Compassionate Care,
            <br />
            <em>Where Family Comes First</em>
          </h1>
          <p className="about-hero__text">
            We believe every senior deserves to age with dignity, comfort, and
            joy — right in the home they love. Our caregivers don't just assist;
            they become trusted companions.
          </p>
          <div className="about-hero__actions hero-btn">
            <NavLink to="/contact" className="about-btn about-btn--primary">
              Get a Free Consultation
            </NavLink>
            <a href="tel:+1XXXXXXXXXX" className="about-btn about-btn--ghost">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="about-story">
        <div className="about-story__text">
          <span className="about-eyebrow">Our Story</span>
          <h2 className="about-section-title">
            Built from personal experience, driven by purpose
          </h2>
          <p>
            Our founder Sarah started this company after caring for her own
            grandmother and realizing how hard it was to find truly trustworthy,
            warm, professional help. What began as a personal mission became a
            dedicated team of caregivers who treat every client like family.
          </p>
          <p>
            Today we serve hundreds of families across the region, providing
            everything from daily assistance to specialized memory care — always
            with the same heart we started with.
          </p>
        </div>
        <div className="about-story__image">
          <img src="/assets/The founder.jpg" alt="Our founder" />
          <div className="about-story__image-caption">
            "I wanted to create the kind of care I'd want for my own family."
            <strong>— Sarah Mitchell, Founder</strong>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="about-stats" ref={ref}>
        {stats.map((s, i) => (
          <div className="about-stat" key={i}>
            <span className="about-stat__num">
              {inView ? (
                <CountUp
                  end={s.end}
                  suffix={s.suffix}
                  duration={2.5}
                  delay={i * 0.2}
                />
              ) : (
                `0${s.suffix}`
              )}
            </span>
            <span className="about-stat__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="about-values">
        <div className="about-values__header">
          <span className="about-eyebrow">What We Stand For</span>
          <h2 className="about-section-title">Our Core Values</h2>
        </div>
        <div className="about-values__grid">
          {values.map((v, i) => (
            <div className="about-value-card" key={i}>
              <div className="about-value-card__icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="about-team">
        <div className="about-team__header">
          <span className="about-eyebrow">The People Behind the Care</span>
          <h2 className="about-section-title">Meet Our Team</h2>
        </div>
        <div className="about-team__grid">
          {team.map((member, i) => (
            <div className="about-team-card" key={i}>
              <div className="about-team-card__img-wrap">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="about-team-card__info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY STRIP ────────────────────────────────── */}
      {/* <section className="about-gallery">
        {[
          "/assets/about/gallery-1.jpg",
          "/assets/about/gallery-2.jpg",
          "/assets/about/gallery-3.jpg",
          "/assets/about/gallery-4.jpg",
        ].map((src, i) => (
          <div className="about-gallery__item" key={i}>
            <img src={src} alt={`Care moment ${i + 1}`} />
          </div>
        ))}
      </section> */}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <h2>Let's find the right care for your loved one</h2>
          <p>
            No pressure. No commitment. Just a friendly conversation about what
            you need.
          </p>
          <div className="about-cta__actions">
            <NavLink to="/contact" className="about-btn about-btn--white">
              Book a Free Consultation
            </NavLink>
            <a
              href="tel:+1XXXXXXXXXX"
              className="about-btn about-btn--outline-white"
            >
              Call (831) 402-2069
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
