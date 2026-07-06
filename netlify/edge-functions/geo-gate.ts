import type { Config, Context } from "@netlify/edge-functions";

// West Little Rock Glass serves Arkansas. We only want U.S. visitors.
// This runs at Netlify's edge BEFORE the page loads, so blocked traffic never
// loads the site and never fires the GA4 tag — keeping analytics clean at the
// source. (Same gate that stopped the overseas-datacenter bot wave from
// polluting the ArTrophies analytics after its launch.)

// Countries we serve. Add more codes here if that ever changes.
const ALLOWED_COUNTRIES = new Set(["US"]);

// Always let legitimate search-engine + social crawlers through, regardless of
// where they crawl from, so SEO ranking and link previews are never harmed.
const ALLOWED_BOTS =
  /(googlebot|google-inspectiontool|storebot-google|bingbot|duckduckbot|applebot|slurp|baiduspider|yandex(bot)?|facebookexternalhit|facebot|twitterbot|linkedinbot|pinterest|whatsapp|telegrambot|petalbot|uptimerobot|ahrefsbot)/i;

export default async (request: Request, context: Context) => {
  const ua = request.headers.get("user-agent") ?? "";
  if (ALLOWED_BOTS.test(ua)) return context.next();

  const country = context.geo?.country?.code ?? "";

  // Fail open: if Netlify can't determine the country (rare), let them through
  // rather than risk blocking a real customer behind a privacy network.
  if (country === "" || ALLOWED_COUNTRIES.has(country)) return context.next();

  // Everyone else (e.g. overseas datacenter bot traffic) gets a clean 403.
  return new Response("This site is only available in the United States.", {
    status: 403,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export const config: Config = {
  // Gate only real page requests; skip static assets to minimize edge invocations.
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/fonts/*",
    "/_astro/*",
    "/*.css",
    "/*.js",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.svg",
    "/*.ico",
    "/*.webp",
    "/*.avif",
    "/*.woff",
    "/*.woff2",
    "/*.xml",
    "/*.txt",
  ],
};
