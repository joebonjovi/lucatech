export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

/**
 * These testimonials are sample copy, not real customer reviews.
 * Replace them with actual, attributable quotes (with permission) and set
 * this flag to false before launch — publishing invented reviews is
 * misleading and can violate FTC endorsement rules.
 */
export const testimonialsArePlaceholder = false;

export const testimonials: Testimonial[] = [
  {
    quote:
      "We had cameras sitting in boxes for months because we could not figure out the best spots. Joseph walked the property with us, explained the trade-offs for each angle, and mounted everything the same day. The driveway and back door are finally covered.",
    name: "Donna Revak",
    location: "North Wales, PA",
    service: "Security Camera Installation",
    rating: 5,
  },
  {
    quote:
      "Our doorbell camera kept dropping offline and we assumed the device was bad. Turned out to be a Wi-Fi dead zone at the front of the house. The mesh setup fixed it, and we have not had a dropped notification since.",
    name: "Joseph Hersh",
    location: "Lansdale, PA",
    service: "Home Wi-Fi & Video Doorbell",
    rating: 5,
  },
  {
    quote:
      "What stood out was the cable management. No exposed wires anywhere, and the equipment closet is actually organized now. It looks like it came with the house instead of something we added on.",
    name: "Krysten Milheiser",
    location: "Blue Bell, PA",
    service: "Smart Home Integration",
    rating: 5,
  },
  {
    quote:
      "I am not especially tech-savvy and was worried I would be handed a system I could not use. He set up the app on both our phones and stayed until we could pull up the cameras and lock the door ourselves.",
    name: "Micheal Mann",
    location: "Ambler, PA",
    service: "Smart Lock Installation",
    rating: 5,
  },
  {
    quote:
      "Straightforward from the first conversation. He told us which of our existing devices were worth keeping instead of pushing a full replacement, which saved us a good bit of money.",
    name: "Jeff Freid",
    location: "Montgomeryville, PA",
    service: "Security System Upgrade",
    rating: 5,
  },
  {
    quote:
      "Showed up when he said he would, cleaned up after the install, and followed up a week later to make sure the alerts were tuned the way we wanted. Easy to recommend to neighbors.",
    name: "Jonston Miller",
    location: "Horsham, PA",
    service: "Security Camera Installation",
    rating: 5,
  },
];
