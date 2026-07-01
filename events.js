/* =========================================================
   PARA PERA — events.js
   Πώς να προσθέσεις νέο past event:
     1. Φτιάξε φάκελο photos/<slug>/ με φωτό: 01.jpg, 02.jpg...
     2. Πρόσθεσε entry εδώ στο PAST_EVENTS
     3. Ανέβασε στο GitHub — εμφανίζεται αυτόματα
   ========================================================= */

const PAST_EVENTS = [
  {
    folder:     "first-party",
    slug:       "first-party",
    label:      "First Party",
    name:       "PARA PERA — First Party",
    date:       "18 April 2026",
    time:       "22:00",
    lineup:     "Tiz × Spaz",
    guest:      "Frunk",
    sponsor:    "Moloko",
    poster:     "posters/poster-april.jpg",
    photoCount: 6,
    photoExt:   "jpg",
  },
];

const NEXT_EVENT = {
  name:    "PROJECT PARA PERA",
  tagline: "One Last World Cup",
  poster:  "posters/poster-july.jpg",
  date:    "11 July 2026",
  iso:     "2026-07-11T23:00:00+03:00",
  time:    "23:00",
  venue:   "Dunk Bar",
  address: "Πανόρμου & Αλέξη Παύλη 13Β",
  sponsor: "Moloko",
  onDeck:  ["Spaz", "Frunk", "Staz"],
};

function getPhotoUrls(event) {
  const urls = [];
  for (let i = 1; i <= event.photoCount; i++) {
    urls.push(`photos/${event.folder}/${String(i).padStart(2,"0")}.${event.photoExt}`);
  }
  return urls;
}

function getEventBySlug(slug) {
  return PAST_EVENTS.find(e => e.slug === slug);
}
