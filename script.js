/* Top One Interior & Curtain Design - Core JavaScript Logic */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load data from data.js
  if (typeof SITE_DATA === "undefined") {
    console.error("SITE_DATA is not defined. Make sure data.js is loaded before script.js.");
    return;
  }
  
  initializeWebsite(SITE_DATA);
});

function initializeWebsite(data) {
  // Setup General Details
  document.title = `${data.companyName} | Premium Curtains & Interior Design Malaysia`;
  
  // Header details
  const logoTextEl = document.getElementById("header-logo-text");
  const logoSubEl = document.getElementById("header-logo-sub");
  if (logoTextEl && logoSubEl) {
    const nameParts = data.companyName.split(" ");
    if (nameParts.length >= 2) {
      logoTextEl.textContent = nameParts.slice(0, nameParts.length - 1).join(" ");
      logoSubEl.textContent = nameParts[nameParts.length - 1] + " " + (data.companySubName || "");
    } else {
      logoTextEl.textContent = data.companyName;
      logoSubEl.textContent = data.companySubName || "Curtains & Interior";
    }
  }
  
  const headerPhoneText = document.getElementById("header-phone-text");
  const headerPhoneCta = document.getElementById("header-phone-cta");
  if (headerPhoneText && headerPhoneCta) {
    headerPhoneText.textContent = data.phone;
    headerPhoneCta.href = `tel:${data.phone.replace(/[^0-9+]/g, "")}`;
  }

  // Hero Section
  const heroBadge = document.getElementById("hero-badge-text");
  const heroTitle = document.getElementById("hero-title-text");
  const heroDesc = document.getElementById("hero-desc-text");
  const heroImg = document.getElementById("hero-background-image");
  const heroWhatsapp = document.getElementById("hero-whatsapp-cta");
  
  if (heroBadge) heroBadge.textContent = data.hero.badge;
  if (heroTitle) heroTitle.textContent = data.hero.title;
  if (heroDesc) heroDesc.textContent = data.hero.description;
  if (heroImg && data.hero.heroImage) heroImg.src = data.hero.heroImage;
  if (heroWhatsapp) {
    heroWhatsapp.querySelector("span").textContent = data.hero.ctaPrimary;
    heroWhatsapp.href = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;
    heroWhatsapp.target = "_blank";
    heroWhatsapp.rel = "noopener noreferrer";
  }

  // Floating WhatsApp Link
  const floatingWhatsapp = document.getElementById("floating-whatsapp-link");
  if (floatingWhatsapp) {
    floatingWhatsapp.href = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;
  }

  // About Section
  const aboutBadge = document.getElementById("about-badge-text");
  const aboutTitle = document.getElementById("about-title-text");
  const aboutSubtitle = document.getElementById("about-subtitle-text");
  const aboutDesc1 = document.getElementById("about-desc1-text");
  const aboutDesc2 = document.getElementById("about-desc2-text");
  const aboutImg1 = document.getElementById("about-img-primary");
  const aboutImg2 = document.getElementById("about-img-secondary");
  const aboutExpYears = document.getElementById("about-experience-years");

  if (aboutBadge) aboutBadge.textContent = data.about.badge;
  if (aboutTitle) aboutTitle.textContent = data.about.title;
  if (aboutSubtitle) aboutSubtitle.textContent = data.about.subtitle;
  if (aboutDesc1) aboutDesc1.textContent = data.about.description1;
  if (aboutDesc2) aboutDesc2.textContent = data.about.description2;
  
  // Set images if they exist in about data, otherwise use defaults mapped in portfolio
  if (aboutImg1 && data.portfolioItems[1]) aboutImg1.src = data.portfolioItems[1].image;
  if (aboutImg2 && data.portfolioItems[0]) aboutImg2.src = data.portfolioItems[0].image;
  
  // Parse years from stats
  const experienceStat = data.about.stats.find(s => s.label.toLowerCase().includes("experience"));
  if (aboutExpYears && experienceStat) {
    aboutExpYears.textContent = experienceStat.number;
  }

  // Render About Stats
  const statsContainer = document.getElementById("about-stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = "";
    data.about.stats.forEach(stat => {
      const statEl = document.createElement("div");
      statEl.className = "stat-item";
      statEl.innerHTML = `
        <span class="stat-number">${stat.number}</span>
        <span class="stat-label">${stat.label}</span>
      `;
      statsContainer.appendChild(statEl);
    });
  }

  // Services Section Header
  const servicesBadge = document.getElementById("services-badge-text");
  const servicesTitle = document.getElementById("services-title-text");
  if (servicesBadge) servicesBadge.textContent = data.servicesSection.badge;
  if (servicesTitle) servicesTitle.textContent = data.servicesSection.title;

  // Render Services Cards
  const servicesCardsGrid = document.getElementById("services-cards-grid");
  if (servicesCardsGrid) {
    servicesCardsGrid.innerHTML = "";
    data.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";
      
      const svgIcon = getServiceIconSvg(service.icon);
      const featuresHTML = service.features.map(feat => `
        <li>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          <span>${feat}</span>
        </li>
      `).join("");

      card.innerHTML = `
        <div class="service-icon-wrapper">
          ${svgIcon}
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <ul class="service-features-list">
          ${featuresHTML}
        </ul>
      `;
      servicesCardsGrid.appendChild(card);
    });
  }

  // Portfolio Section Header
  const portfolioBadge = document.getElementById("portfolio-badge-text");
  const portfolioTitle = document.getElementById("portfolio-title-text");
  const portfolioDesc = document.getElementById("portfolio-desc-text");
  if (portfolioBadge) portfolioBadge.textContent = data.portfolioSection.badge;
  if (portfolioTitle) portfolioTitle.textContent = data.portfolioSection.title;
  if (portfolioDesc) portfolioDesc.textContent = data.portfolioSection.description;

  // Render Portfolio Filters & Setup filtering
  const filterContainer = document.getElementById("portfolio-filter-buttons");
  if (filterContainer) {
    filterContainer.innerHTML = "";
    data.portfolioCategories.forEach((cat, idx) => {
      const button = document.createElement("button");
      button.className = `filter-btn ${idx === 0 ? 'active' : ''}`;
      button.textContent = cat.label;
      button.setAttribute("data-filter", cat.id);
      filterContainer.appendChild(button);
    });
  }

  // Render Portfolio Items
  const portfolioGrid = document.getElementById("portfolio-items-grid");
  if (portfolioGrid) {
    renderPortfolioItems(data.portfolioItems, "all", data.whatsappNumber);
  }

  // Set up filter buttons event listeners
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const category = e.target.getAttribute("data-filter");
      renderPortfolioItems(data.portfolioItems, category, data.whatsappNumber);
    });
  });

  // Testimonials Section Header
  const testimonialsBadge = document.getElementById("testimonials-badge-text");
  const testimonialsTitle = document.getElementById("testimonials-title-text");
  if (testimonialsBadge) testimonialsBadge.textContent = data.testimonialsSection.badge;
  if (testimonialsTitle) testimonialsTitle.textContent = data.testimonialsSection.title;

  // Render Testimonials
  const testimonialTrack = document.getElementById("testimonial-track-container");
  const dotsContainer = document.getElementById("testimonial-dots-container");
  if (testimonialTrack && dotsContainer) {
    testimonialTrack.innerHTML = "";
    dotsContainer.innerHTML = "";
    
    data.testimonials.forEach((test, idx) => {
      // Testimonial card
      const card = document.createElement("div");
      card.className = "testimonial-card";
      
      const starsHTML = Array(test.rating).fill(`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      `).join("");

      card.innerHTML = `
        <span class="testimonial-quote-icon">“</span>
        <div class="testimonial-stars">
          ${starsHTML}
        </div>
        <p class="testimonial-text">"${test.text}"</p>
        <div class="testimonial-author">
          <span class="testimonial-author-name">${test.name}</span>
          <span class="testimonial-author-location">${test.location}</span>
        </div>
      `;
      testimonialTrack.appendChild(card);

      // Dot
      const dot = document.createElement("span");
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute("data-slide", idx);
      dotsContainer.appendChild(dot);
    });
    
    setupTestimonialSlider();
  }

  // Contact Panel Details
  const contactAddress = document.getElementById("contact-address-text");
  const contactPhone = document.getElementById("contact-phone-text");
  const contactHours = document.getElementById("contact-hours-text");
  if (contactAddress) contactAddress.textContent = data.address;
  if (contactPhone) {
    contactPhone.textContent = data.phone;
    // Bind click to dial
  }
  if (contactHours) contactHours.textContent = data.businessHours;

  // Footer Details
  const footerAddress = document.getElementById("footer-address-text");
  const footerPhone = document.getElementById("footer-phone-text");
  const footerEmail = document.getElementById("footer-email-text");
  const footerDesc = document.getElementById("footer-desc-text");
  const copyrightYear = document.getElementById("copyright-year");
  const copyrightName = document.getElementById("footer-copyright-name");

  if (footerAddress) footerAddress.textContent = data.address;
  if (footerPhone) footerPhone.textContent = data.phone;
  if (footerEmail) footerEmail.textContent = data.email;
  if (footerDesc) footerDesc.textContent = data.about.description1;
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
  if (copyrightName) copyrightName.textContent = data.companyName;

  // 2. Setup Sticky Header on Scroll
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Mobile Navigation Menu Toggle
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navbar = document.getElementById("navbar");
  if (menuToggleBtn && navbar) {
    menuToggleBtn.addEventListener("click", () => {
      menuToggleBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    });
    
    // Close mobile menu when nav link is clicked
    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggleBtn.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }

  // 4. Set up Portfolio Lightbox
  setupLightbox();

  // 5. Contact Form Submission WhatsApp Redirect
  const contactForm = document.getElementById("quote-request-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value.trim();
      const phone = document.getElementById("form-phone").value.trim();
      const service = document.getElementById("form-service").value;
      const message = document.getElementById("form-message").value.trim();
      
      // Construct a professional WhatsApp message template
      let text = `*New Quote Request - ${data.companyName}*\n\n`;
      text += `👤 *Name:* ${name}\n`;
      text += `📞 *Phone:* ${phone}\n`;
      text += `🛠️ *Service Needed:* ${service}\n`;
      if (message) {
        text += `📝 *Project Details:* ${message}\n`;
      }
      
      const url = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
  }
}

// Render portfolio items based on active category
function renderPortfolioItems(items, category, whatsappNumber) {
  const grid = document.getElementById("portfolio-items-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  const filtered = category === "all" ? items : items.filter(item => item.category === category);
  
  filtered.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "portfolio-item";
    
    const waInquiryMsg = `Hi Top One Interior, I would like to inquire about this design project: "${item.title}" in ${item.location}. Can you provide a quotation?`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waInquiryMsg)}`;

    itemEl.innerHTML = `
      <div class="portfolio-img-box" data-image="${item.image}" data-title="${item.title}" data-desc="${item.description}">
        <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
        <div class="portfolio-overlay-info">
          <div class="zoom-icon-wrapper">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="portfolio-content-box">
        <div class="portfolio-meta">
          <span>${item.category.toUpperCase()}</span>
          <span>${item.location}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="portfolio-inquire-btn">
          <span>Inquire Spec Details</span>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </a>
      </div>
    `;
    grid.appendChild(itemEl);
  });
  
  // Re-attach lightbox listeners since elements are created dynamically
  attachLightboxListeners();
}

// Icon mapper for SVG codes
function getServiceIconSvg(name) {
  switch (name) {
    case "window-curtain":
      return `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16h-2c0-1.38-1.12-2.5-2.5-2.5S10 17.62 10 19H8v-6h9v6zm0-8H7V5h10v6z"/>
      </svg>`;
    case "blinds":
      return `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
      </svg>`;
    case "home-design":
      return `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 3.25l6 5.4V18h-2v-6H8v6H6v-6.35l6-5.4zM9 10h6v2H9v-2z"/>
      </svg>`;
    case "wall":
      return `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 14H5v-4h6v4zm0-6H5V8h6v4zm8 6h-6v-4h6v4zm0-6h-6V8h6v4z"/>
      </svg>`;
    default:
      return `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>`;
  }
}

// Lightbox controller
function setupLightbox() {
  const lightbox = document.getElementById("portfolio-lightbox");
  const lightboxClose = document.getElementById("lightbox-close-btn");
  
  if (!lightbox || !lightboxClose) return;

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}

function attachLightboxListeners() {
  const lightbox = document.getElementById("portfolio-lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-description");
  const imageBoxes = document.querySelectorAll(".portfolio-img-box");

  if (!lightbox || !lightboxImg) return;

  imageBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const src = box.getAttribute("data-image");
      const title = box.getAttribute("data-title");
      const desc = box.getAttribute("data-desc");

      lightboxImg.src = src;
      lightboxImg.alt = title;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = desc;
      
      lightbox.classList.add("active");
    });
  });
}

// Testimonial slider functionality
function setupTestimonialSlider() {
  const track = document.getElementById("testimonial-track-container");
  const dots = document.querySelectorAll(".dot");
  if (!track || dots.length === 0) return;

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.target.getAttribute("data-slide"));
      
      // Update active dot
      dots.forEach(d => d.classList.remove("active"));
      e.target.classList.add("active");
      
      // Slide calculation (responsive)
      const width = document.querySelector(".testimonial-card").offsetWidth;
      const gap = 32; // 2rem gap in px
      
      track.style.transform = `translateX(-${slideIndex * (width + gap)}px)`;
    });
  });

  // Handle slide recalculation on screen resize
  window.addEventListener("resize", () => {
    const activeDot = document.querySelector(".dot.active");
    if (activeDot) {
      activeDot.click();
    }
  });
}
