import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../../chunks/astro/server_BzzarInc.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_CvvbPL1K.mjs';
import 'clsx';
import { p as pharmacyData } from '../../chunks/pharmacyData_lhpiWGKX.mjs';
/* empty css                                         */
import { v as validLanguages, d as defaultLanguage } from '../../chunks/languages_Bn8xGCxr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PharmacyList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PharmacyList;
  const { lang } = Astro2.props;
  const pharmacies = pharmacyData.pharmacies || [];
  function createSlug(text, lang2) {
    if (lang2 === "ar") {
      const englishName = pharmacies.find((p) => p.city.ar === text)?.city.en || text;
      return englishName.toLowerCase().trim().replace(/\s+/g, "-");
    }
    return text.toLowerCase().trim().replace(/\s+/g, "-");
  }
  const cities = [...new Set(pharmacies.map((p) => ({
    name: p.city[lang],
    slug: createSlug(p.city[lang], lang),
    originalName: p.city[lang]
  })))].sort((a, b) => a.name.localeCompare(b.name, lang));
  const translations = {
    en: {
      allLocations: "All Locations",
      limitedHours: "Limited Hours",
      viewMap: "View Map",
      noPharmacies: "No pharmacies found for this location"
    },
    fr: {
      allLocations: "Tous les emplacements",
      limitedHours: "Heures limit\xE9es",
      viewMap: "Voir la carte",
      noPharmacies: "Aucune pharmacie trouv\xE9e pour cette ville"
    },
    ar: {
      allLocations: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0648\u0627\u0642\u0639",
      limitedHours: "\u0633\u0627\u0639\u0627\u062A \u0645\u062D\u062F\u0648\u062F\u0629",
      viewMap: "\u0639\u0631\u0636 \u0627\u0644\u062E\u0631\u064A\u0637\u0629",
      noPharmacies: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639"
    }
  };
  const t = translations[lang];
  console.log("Pharmacies count:", pharmacies.length);
  console.log("Cities:", cities);
  return renderTemplate`${maybeRenderHead()}<div class="pharmacy-list" data-astro-cid-dcfvcckg> <div class="filters" data-astro-cid-dcfvcckg> <select id="city-select" data-astro-cid-dcfvcckg> <option value="" data-astro-cid-dcfvcckg>${t.allLocations}</option> ${cities.map(({ name, slug }) => renderTemplate`<option${addAttribute(slug, "value")}${addAttribute(name, "data-original")} data-astro-cid-dcfvcckg>${name}</option>`)} </select> <div class="hours-filter" data-astro-cid-dcfvcckg> <button class="filter-btn active" data-hours="all" data-astro-cid-dcfvcckg>All</button> <button class="filter-btn" data-hours="limited" data-astro-cid-dcfvcckg>${t.limitedHours}</button> <button class="filter-btn" data-hours="24h" data-astro-cid-dcfvcckg>24/7</button> </div> </div> <div class="pharmacies-grid" data-astro-cid-dcfvcckg> ${pharmacies.length > 0 ? pharmacies.map((pharmacy) => renderTemplate`<div class="pharmacy-card"${addAttribute(pharmacy.location[lang], "data-location")}${addAttribute(pharmacy.hours === "24h/24h" ? "24h" : "limited", "data-hours")} data-astro-cid-dcfvcckg> <h3 data-astro-cid-dcfvcckg>${pharmacy.name[lang]}</h3> <p data-astro-cid-dcfvcckg>${pharmacy.location[lang]}</p> <p data-astro-cid-dcfvcckg>${pharmacy.phone}</p> <p data-astro-cid-dcfvcckg>${pharmacy.hours}</p> <a${addAttribute(pharmacy.maps.links.google_maps, "href")} target="_blank" rel="noopener noreferrer" class="map-link" data-astro-cid-dcfvcckg> ${t.viewMap} </a> </div>`) : renderTemplate`<div class="no-pharmacies" data-astro-cid-dcfvcckg> <p data-astro-cid-dcfvcckg>${t.noPharmacies}</p> </div>`} </div> </div>  `;
}, "C:/Users/Rachi/Desktop/pharmasos/src/components/PharmacyList.astro", undefined);

const $$Astro = createAstro();
const prerender = true;
function getStaticPaths() {
  return validLanguages.map((lang) => ({
    params: { lang }
  }));
}
const $$Pharmacies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pharmacies;
  const { lang } = Astro2.params;
  const currentLang = validLanguages.includes(lang) ? lang : defaultLanguage;
  const translations = {
    title: {
      fr: "Pharmacies de Garde",
      en: "On-Duty Pharmacies",
      ar: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0633\u0629"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": translations.title[currentLang] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PharmacyList", $$PharmacyList, { "lang": currentLang })} ` })}`;
}, "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies.astro", undefined);

const $$file = "C:/Users/Rachi/Desktop/pharmasos/src/pages/[lang]/pharmacies.astro";
const $$url = "/[lang]/pharmacies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pharmacies,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
