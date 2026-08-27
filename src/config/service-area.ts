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

/** Home-base city and ZIPs used for local SEO across the site. */
export const primaryCity = {
  name: "Doylestown",
  state: "PA",
  label: "Doylestown, PA",
  zips: ["18901", "18902"],
} as const;

/**
 * Short human-readable list of nearby communities, used in page copy to
 * note that we serve more than just Doylestown.
 */
export const nearbyCommunitiesLabel =
  "Chalfont, New Britain, Warrington, Buckingham, Jamison, Furlong, Warwick, Lansdale, North Wales, Montgomeryville, Horsham, Ambler, Blue Bell, and nearby Bucks and Montgomery County communities";

export const serviceAreaIntro =
  "Luca Technologies serves homeowners in Doylestown, PA (ZIP 18901) and surrounding communities across Bucks County and nearby Montgomery County. If your town or ZIP is not listed, reach out — we may still be able to help.";
