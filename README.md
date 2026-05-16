# Clément Soloum TETELI – Academic Portfolio Website

A modern, fully bilingual (English / French) static academic portfolio for Clément Soloum TETELI, PhD student in Biology at Ghent University & University of Parakou.

---

## 🌐 Live Bilingual System

- **Default language**: English (EN)
- **Toggle button**: Auto-injected into every page nav by `lang.js` — shows 🇫🇷 FR when in EN mode
- **Persistence**: Language preference saved in `localStorage` across page navigation
- **Pattern**: All translatable elements use `data-en="..."` and `data-fr="..."` HTML attributes
- **Implementation**: `lang.js` detects HTML tags in translations and uses `innerHTML`; plain text uses `textContent`

---

## ✅ Completed Features

### Bilingual Translation (EN default / FR toggle)
- All 38 HTML pages fully translated to English as default
- Language toggle button on every page (injected by `lang.js`)
- Persistent language preference across pages

### Rich Color System (style.css)
- Extended CSS custom properties: amber, purple, teal, coral + pale variants
- Gradient backgrounds: profile section, bio section, footer, hero banner
- nth-child color variants for stat cards, exp-cards, meta pills
- Gradient text for profile h2 heading
- `.lang-btn` styling with hover effects

### Pages (7 main + 30 detail pages)
| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero slider, profile, stats, bio, featured sections |
| `formation.html` | Education & Degrees timeline (4 degrees + 8 additional trainings) |
| `experience.html` | Professional Experience (7 experiences) |
| `publications.html` | Scientific Publications (4 publications) |
| `recherche.html` | Research Activities (4 research items) |
| `excursions.html` | Field Trips (3 excursions) |
| `projects.html` | Projects portfolio with filter (4 projects, ongoing/completed) |

### Detail Pages
**Experience (7 pages):**
- `exp-mycorhization.html` — Mycorrhization Characterization Assistance
- `exp-areb-ong.html` — NGO AREB-BENIN Municipal Coordinator
- `exp-pre-remise.html` — PRE REMISE-Benin Monitoring & Evaluation
- `exp-facilitateur-rdc.html` — EU/Tshumba-kituti Facilitator
- `exp-club-auf.html` — AUF Club VP, Kinshasa
- `exp-mytips-terrain.html` — MyTIPS Field Agent
- `exp-stage-mytips.html` — MyTIPS Professional Internship

**Education (12 pages):**
- `form-phd.html` — PhD in Biology (UGent & UP)
- `form-master-agift.html` — Master AGIFT (ERAIFT-UNESCO)
- `form-licence.html` — Bachelor Agronomic Sciences (UNA)
- `form-cycle-general.html` — General Agronomy Cycle (UNA)
- `form-mycoblitz.html` — Mycoblitz Summer Field Course
- `form-genetique.html` — Genetics & Bioinformatics
- `form-permaculture.html` — Intensive Permaculture Training
- `form-spibes.html` — SPIBES Biodiversity Course
- `form-songhai.html` — Songhaï Ecological Agriculture
- `form-papaco.html` — MOOC PAPACO Protected Areas
- `form-droit-env.html` — Environmental Law Training
- `form-economie-env.html` — Environmental Economics Training

**Research (4 pages):**
- `research-mycorrhiza-agro.html` — PhD thesis: Mycorrhization in tropical agroecosystems
- `research-fungi-conservation.html` — Conservation of forest fungi in Africa
- `research-edna-phylo.html` — eDNA & phylogenetics for fungal biodiversity
- `research-land-management.html` — Integrated management of tropical lands

**Field Trips (3 pages):**
- `excursion-foret-lama.html` — Lama Forest, Benin
- `excursion-kinshasa-rdc.html` — Kinshasa & Tshumba-kituti, DRC
- `excursion-belgique.html` — Temperate Forests, Belgium

**Publications (4 pages):**
- `pub-soil-conservation.html` — Soil conservation practices, Benin (2022)
- `pub-ntfps-rdc.html` — NTFPs in eastern DRC (2022)
- `pub-agroforestry.html` — Priority agroforestry practices, Benin (2023)
- `pub-adansonia.html` — Adansonia digitata distribution, Malawi (2024)

**Projects (4 pages):**
- `project-mycorrhiza.html` — Mycorrhizal Diversity & Function in Tropical Agroecosystems
- `project-senegal.html` — Mycorrhiza Culture & Inoculum Production, Senegal
- `project-rdc.html` — Ecosystem Services & Waste Management, DR Congo
- `project-mytips.html` — MyTIPS – Mycorrhizal Tropical Inoculum Production System

---

## 🗂 File Structure

```
index.html                  Main portfolio page
formation.html              Education & Degrees
experience.html             Professional Experience
publications.html           Scientific Publications
recherche.html              Research Activities
excursions.html             Field Trips
projects.html               Projects (with filter)
style.css                   Main stylesheet (rich color system)
script.js                   Client-side JS (animations, nav, slider)
lang.js                     Bilingual EN/FR switcher (auto-injected button)
exp-*.html                  Experience detail pages (7)
form-*.html                 Education detail pages (12)
research-*.html             Research detail pages (4)
excursion-*.html            Field trip detail pages (3)
pub-*.html                  Publication detail pages (4)
project-*.html              Project detail pages (4)
*.png / *.jpg               Institution logos and images
```

---

## 🔗 Navigation URIs

| Path | Page |
|------|------|
| `/` or `/index.html` | Homepage |
| `/formation.html` | Education & Degrees |
| `/experience.html` | Professional Experience |
| `/publications.html` | Scientific Publications |
| `/recherche.html` | Research Activities |
| `/excursions.html` | Field Trips |
| `/projects.html` | Projects |
| `/projects.html?filter=ongoing` | Ongoing projects (client-side filter) |

---

## 🔧 Technologies

- **HTML5** (semantic markup, `lang` attribute, `data-en`/`data-fr` attributes)
- **CSS3** (custom properties, gradients, nth-child selectors, flex/grid)
- **JavaScript ES6** (IntersectionObserver, CSS transitions, localStorage)
- **Font Awesome 6.5** (CDN icons)
- **Google Fonts** (Inter + Playfair Display)
- **No framework, no backend, no build step**

---

## 🚀 Deployment

To deploy, use the **Publish tab** in the Genspark interface. All changes are automatically committed and pushed to the git repository.

---

## 📋 Recommended Next Steps

1. **Add real photos**: Replace placeholder image files with actual field photos and institution logos
2. **CV download**: Add a downloadable PDF CV button on the homepage
3. **Contact form**: Consider adding a mailto-based contact section
4. **Google Analytics**: Add tracking to monitor visitor language preferences
5. **Meta SEO**: Add Open Graph and Twitter Card meta tags for social sharing
6. **Favicon**: Add a custom favicon.ico
