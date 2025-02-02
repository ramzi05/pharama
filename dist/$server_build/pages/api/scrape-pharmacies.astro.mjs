import axios from 'axios';
import * as cheerio from 'cheerio';
export { renderers } from '../../renderers.mjs';

const PHARMACY_URLS = {
  casablanca: "https://annuaire-gratuit.ma/pharmacie-garde-casablanca.html",
  rabat: "https://annuaire-gratuit.ma/pharmacie-garde-rabat.html",
  sale: "https://annuaire-gratuit.ma/pharmacie-garde-sale.html"
  // Add other cities...
};
async function scrapePharmacyData(url, cityName) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const pharmacies = [];
    $(".pharmacy-listing").each((_, element) => {
      const name = $(element).find(".pharmacy-name").text().trim();
      const phone = $(element).find(".pharmacy-phone").text().trim();
      const location = $(element).find(".pharmacy-location").text().trim();
      const hours = $(element).find(".pharmacy-hours").text().trim();
      if (name) {
        pharmacies.push({
          name: createMultilingualText(name),
          phone,
          location: createMultilingualText(location),
          hours,
          city: createMultilingualText(cityName),
          address: createMultilingualText(""),
          maps: {
            message: {
              fr: "Voir sur la carte",
              en: "View on map",
              ar: "عرض على الخريطة"
            },
            links: {
              google_maps: "",
              waze: "",
              apple_maps: ""
            },
            googleMaps: "",
            coordinates: {
              lat: 0,
              lng: 0
            }
          }
        });
      }
    });
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      pharmacies,
      total_pharmacies: pharmacies.length
    };
  } catch (error) {
    console.error(`Error scraping data for ${cityName}:`, error);
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      pharmacies: [],
      total_pharmacies: 0
    };
  }
}
function createMultilingualText(text) {
  return {
    fr: text,
    en: text,
    ar: text
  };
}
async function scrapeAllPharmacies() {
  try {
    const results = await Promise.all(
      Object.entries(PHARMACY_URLS).map(
        ([city, url]) => scrapePharmacyData(url, city)
      )
    );
    return results;
  } catch (error) {
    console.error("Error scraping pharmacy data:", error);
    throw error;
  }
}

const get = async () => {
  try {
    const pharmacyData = await scrapeAllPharmacies();
    return new Response(JSON.stringify(pharmacyData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const post = async () => {
  try {
    const pharmacyData = await scrapeAllPharmacies();
    return new Response(JSON.stringify(pharmacyData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
