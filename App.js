//SERVICE WORKER

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw_cached_pages.js")
      .then((reg) => reg)
      .catch((err) => err);
  });
}

// navigator.serviceWorker.getRegistrations().then(function(registrations) { for(let registration of registrations) { registration.unregister() } })

//LANGUAGE

const datareload = document.querySelectorAll("[data-reload]");

const language = {
  eng: {
    header: "Transform your brand",
    about: "about",
    project: "Projects",
    Testimonials: "Testimonials",
    heroText: "We are creatives",
    transform: "Transform your brand",
    transformText:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    transformlink: "learn more",
    standout: "Stand out to the right audience",
    standoutText:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    graphics: "Graphic design",
    graphicsText:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    photography: "photography",
    photographyText:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    client: "Client testimonials",
    emilyText:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    emilyTitle: "Managing Director",
    thomasText:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    thomasTitle: "Chief Operating Officer",
    jennieText:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    jennieTitle: "Business Owner",
  },
  de: {
    header: "Transformieren Sie Ihre Marke",
    about: "Über",
    project: "Projekte",
    Testimonials: "Zeugnisse",
    heroText: "Wir sind Kreative",
    transform: "Transformieren Sie Ihre Marke",
    transformText:
      "Wir sind eine Full-Service-Kreativagentur, die darauf spezialisiert ist, Marken zu schnellem Wachstum zu verhelfen. Binden Sie Ihre Kunden durch überzeugende Visuals, die den Großteil des Marketings für Sie erledigen.",
    transformlink: "mehr erfahren",
    standout: "Dem richtigen Publikum auffallen",
    standoutText:
      "Mit einer kollaborativen Formel von Designern, Forschern, Fotografen, Videographen und Textern bauen wir Ihre Marke auf und erweitern sie an digitalen Orten.",
    graphics: "Grafische Gestaltung",
    graphicsText:
      "Großartiges Design macht Sie einprägsam. Wir liefern Artwork, das Ihre Markenbotschaft unterstreicht und die Aufmerksamkeit potenzieller Kunden fesselt.",
    photography: "Fotografie",
    photographyText:
      "Steigern Sie Ihre Glaubwürdigkeit, indem Sie atemberaubende, qualitativ hochwertige Fotos erhalten, die das Image Ihres Unternehmens verbessern.",
    client: "Kundenreferenzen",
    emilyText:
      "Wir haben unser Vertrauen in Sunnyside gesetzt, und sie haben geliefert und dafür gesorgt, dass unsere Bedürfnisse erfüllt und die Termine immer eingehalten wurden.",
    emilyTitle: "Marketing Direktor",
    thomasText:
      "Der Enthusiasmus von Sunnyside, gepaart mit ihrem großen Interesse am Erfolg unserer Marke, machte es zu einer zufriedenstellenden und angenehmen Erfahrung.",
    thomasTitle: "Geschäftsführer",
    jennieText:
      "Unglaubliches Endergebnis! Unsere Verkäufe stiegen um über 400 %, als wir mit Sunnyside arbeiteten. Sehr zu empfehlen!",
    jennieTitle: "Geschäftsinhaber",
  },
};

if (window.location.hash) {
  if (window.location.hash === "#de") {
    about.textContent = language.de.about;
    project.textContent = language.de.project;
    Testimonialss.textContent = language.de.Testimonials;
    heroText.textContent = language.de.heroText;
    transform.textContent = language.de.transform;
    transformText.textContent = language.de.transformText;
    transformlink.textContent = language.de.transformlink;
    standout.textContent = language.de.standout;
    standoutText.textContent = language.de.standoutText;
    idLink.textContent = language.de.transformlink;
    graphics.textContent = language.de.graphics;
    graphicsText.textContent = language.de.graphicsText;
    photography.textContent = language.de.photography;
    photographyText.textContent = language.de.photographyText;
    client.textContent = language.de.client;
    emilyText.textContent = language.de.emilyText;
    emilyTitle.textContent = language.de.emilyTitle;
    thomasText.textContent = language.de.thomasText;
    thomasTitle.textContent = language.de.thomasTitle;
    jennieText.textContent = language.de.jennieText;
    jennieTitle.textContent = language.de.jennieTitle;
    footerabout.textContent = language.de.about;
    footerprojects.textContent = language.de.project;

    //CHANGE LANG TEXT
    selectedlang.textContent = "Deutsch";

    //flag change
    flagimage.src = "https://www.countryflags.io/de/flat/32.png";
  }
}

datareload.forEach((anchortag) => {
  anchortag.onclick = function () {
    setTimeout(() => {
      location.reload();
    }, 100);
  };
});

gsap.registerPlugin(ScrollTrigger);

//HAMBURGER

const hamburger = document.getElementById("hamIcons");
const backgroundLayer = document.getElementById("background");

const navbar = document.getElementById("nav-lang-container");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("showNav");
  backgroundLayer.classList.toggle("showNav");

  //ANIMATE NAVBAR ON CLICK
  gsap.from(".nav-lang-container", {
    duration: 1,
    x: 300,
  });

  //ANIMATE DARK LAYER ON CLICK

  gsap.from(".background", {
    duration: 1,
    opacity: 0,
  });
});

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("showNav");
    backgroundLayer.classList.remove("showNav");
  });
});

//ANIMATIONS BASED ON window inner width

const windowWidth = window.innerWidth;

windowWidth < 750
  ? gsap.from(".header", {
      x: 100,
      duration: 1,
      ease: "easeInOut",
    })
  : "";

gsap.from(
  ".logo",
  {
    duration: 1.5,
    x: -300,
    ease: "power2",
    // rotation : 360
  },
  windowWidth < 750 ? 1.2 : ""
);

gsap.from(
  ".hamIcons",
  {
    duration: 1.5,
    x: 300,
    ease: "power2",
  },
  windowWidth < 750 ? 1.2 : ""
);

gsap.from(
  ".nav-lang-container",
  {
    duration: 1.5,
    x: 300,
    ease: "power2",
  },
  windowWidth < 750 ? 1.2 : ""
);

gsap
  .timeline()
  .from(
    ".hero-text",
    {
      duration: 3,
      ease: "back",
      scale: 0,
      opacity: 0,
    },
    windowWidth < 750 ? 1.2 : ""
  )

  .from(".hero-icon", {
    duration: 1,
    ease: "bounce",
    scale: 0,
    rotation: 360,
  });

//SECTION ANIMATIONS

const eggDiv = document.getElementById("section-image");

gsap
  .timeline()
  .from(eggDiv, {
    duration: 1.2,
    x: -300,
    ease: "easeOut",
  })
  .from(
    windowWidth < 750
      ? eggDiv.firstElementChild
      : eggDiv.firstElementChild.nextElementSibling,
    {
      scale: 0.9,
      duration: 1.2,
      ease: "easeOut",
    },
    0.2
  );

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section-main-text",
  },
});

tl.to(".first-section-main-text", {
  // scrollTrigger: {
  //     trigger : '.first-section-main-text'
  // },

  x: 0,
  ease: "easeOut",
  opacity: 1,
  duration: 2,
});

//SECOND SECTION

const cup = document.getElementById("cup");

tl.from(cup, {
  duration: 1.3,
  x: -700,
  ease: "easeOut",
})
  .from(
    windowWidth < 750
      ? cup.firstElementChild
      : cup.firstElementChild.nextElementSibling,
    {
      scale: 0.9,
      duration: 1.2,
      ease: "easeOut",
    },
    0.2
  )
  .to(".second-section-main-text", {
    x: 0,
    ease: "easeOut",
    opacity: 1,
    duration: 2,
  });
