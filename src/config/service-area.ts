/**
 * Easy configuration for service cities and ZIP codes.
 * Centered on Doylestown, PA / ZIP 18901 and surrounding communities.
 * Add or remove entries here — the Service Area page renders from this file.
 */
export const serviceCities = [
  { name: "Doylestown", slug: "doylestown" },
  { name: "New Britain", slug: "new-britain" },
  { name: "Chalfont", slug: "chalfont" },
  { name: "Warrington", slug: "warrington" },
  { name: "Buckingham", slug: "buckingham" },
  { name: "Dublin", slug: "dublin" },
  { name: "Plumsteadville", slug: "plumsteadville" },
  { name: "Jamison", slug: "jamison" },
  { name: "Furlong", slug: "furlong" },
  { name: "Lahaska", slug: "lahaska" },
  { name: "Warwick", slug: "warwick" },
  { name: "Ivyland", slug: "ivyland" },
  { name: "Hatfield", slug: "hatfield" },
  { name: "Lansdale", slug: "lansdale" },
  { name: "North Wales", slug: "north-wales" },
  { name: "Montgomeryville", slug: "montgomeryville" },
  { name: "Colmar", slug: "colmar" },
  { name: "Horsham", slug: "horsham" },
  { name: "Ambler", slug: "ambler" },
  { name: "Blue Bell", slug: "blue-bell" },
] as const;

export const serviceZips = [
  "18901",
  "18902",
  "18914",
  "18976",
  "18912",
  "18917",
  "18949",
  "18929",
  "18925",
  "18938",
  "18974",
  "18915",
  "19440",
  "19446",
  "19454",
  "18936",
  "19044",
  "19002",
  "19422",
] as const;

export type SeoTown = {
  name: string;
  slug: string;
  county: "Bucks County" | "Montgomery County";
  zips: string[];
  /** One-line local detail used to differentiate town page copy. */
  blurb: string;
};

/**
 * Towns that get a dedicated SEO landing page for every service
 * (e.g. /security-camera-installation/lansdale). These pages are
 * intentionally excluded from site navigation but included in the sitemap.
 */
export const seoTowns: SeoTown[] = [
  {
    name: "Montgomeryville",
    slug: "montgomeryville",
    county: "Montgomery County",
    zips: ["18936"],
    blurb:
      "a busy Montgomery County community along Route 309 with a mix of newer developments and established neighborhoods",
  },
  {
    name: "North Wales",
    slug: "north-wales",
    county: "Montgomery County",
    zips: ["19454"],
    blurb:
      "a walkable borough with classic older homes where clean, careful installation work really matters",
  },
  {
    name: "Lansdale",
    slug: "lansdale",
    county: "Montgomery County",
    zips: ["19446"],
    blurb:
      "one of Montgomery County's most active boroughs, with everything from twins and rowhomes to newer single-family neighborhoods",
  },
  {
    name: "Doylestown",
    slug: "doylestown",
    county: "Bucks County",
    zips: ["18901", "18902"],
    blurb:
      "our home base — the Bucks County seat, with historic borough homes and growing township neighborhoods",
  },
  {
    name: "Blue Bell",
    slug: "blue-bell",
    county: "Montgomery County",
    zips: ["19422"],
    blurb:
      "an established Montgomery County community with larger properties that often need extended Wi-Fi and camera coverage",
  },
  {
    name: "Ambler",
    slug: "ambler",
    county: "Montgomery County",
    zips: ["19002"],
    blurb:
      "a lively borough with a popular downtown, surrounded by neighborhoods of both historic and newly built homes",
  },
  {
    name: "Chalfont",
    slug: "chalfont",
    county: "Bucks County",
    zips: ["18914"],
    blurb:
      "a central Bucks borough just minutes from Doylestown, with quiet residential streets and commuter-friendly neighborhoods",
  },
  {
    name: "Warrington",
    slug: "warrington",
    county: "Bucks County",
    zips: ["18976"],
    blurb:
      "a growing Bucks County township along the Easton Road corridor with many newer developments",
  },
  {
    name: "Horsham",
    slug: "horsham",
    county: "Montgomery County",
    zips: ["19044"],
    blurb:
      "a large Montgomery County township with a wide range of housing, from townhomes to spacious single-family properties",
  },
];

export function getSeoTownBySlug(slug: string) {
  return seoTowns.find((t) => t.slug === slug);
}

export const serviceAreaIntro =
  "Luca Technologies serves homeowners in Doylestown, PA (ZIP 18901) and surrounding communities across Bucks County and nearby Montgomery County. If your town or ZIP is not listed, reach out — we may still be able to help.";
