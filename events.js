/* =========================================================
   PARA PERA — events.js
   ΕΝΑ μέρος για να προσθέτεις past events. Δεν χρειάζεται να
   αγγίξεις HTML για να προσθέσεις event — μόνο αυτό το αρχείο
   + έναν φάκελο φωτογραφιών.

   Για να προσθέσεις ΝΕΟ past event:
     1. Φτιάξε φάκελο photos/<slug>/ με τις φωτογραφίες μέσα
        (ονόματα αρχείων: 01.jpg, 02.jpg, ...).
     2. Πρόσθεσε ένα entry εδώ στο PAST_EVENTS, με folder: "<slug>"
        και photoCount: <πόσες φωτό έβαλες>.
     3. Αποθήκευση — εμφανίζεται αυτόματα στο μενού "Past", στη
        λίστα προηγούμενων events, και στη δική του σελίδα.

   Σημείωση: επειδή δεν υπάρχει build step, δεν μπορούμε να
   "ανακαλύψουμε" αυτόματα πόσες φωτό υπάρχουν σε έναν φάκελο —
   γι' αυτό υπάρχει το photoCount. Αν προσθέσεις 5 φωτό αλλά
   γράψεις photoCount: 3, θα φαίνονται μόνο οι 3 πρώτες.
   ========================================================= */

const PAST_EVENTS = [
  {
    folder: "first-party",
    slug: "first-party",
    label: "First Party",
    name: "PARA PERA — First Party",
    date: "18 April 2026",
    time: "22:00",
    lineup: "Tiz × Spaz",
    guest: "Frunk",
    sponsor: "Moloko",
    poster: "posters/poster-april.jpg",
    photoCount: 0,
    photoExt: "jpg",
  },
];

// Επόμενο event — ένα μόνο, εμφανίζεται στην αρχική σελίδα
const NEXT_EVENT = {
  name: "PROJECT PARA PERA",
  tagline: "One Last World Cup",
  poster: "posters/poster-july.jpg",
  date: "11 July 2026",
  iso: "2026-07-11T23:00:00+03:00",
  time: "23:00",
  venue: "Dunk Bar",
  address: "Πανόρμου & Αλέξη Παύλη 13Β",
  sponsor: "Moloko",
  onDeck: ["Spaz", "Frunk", "Staz"],
};

/* ---------- helpers, χρησιμοποιούνται από index.html / past.html ---------- */

function getPhotoUrls(event) {
  const urls = [];
  for (let i = 1; i <= event.photoCount; i++) {
    const num = String(i).padStart(2, "0");
    urls.push(`photos/${event.folder}/${num}.${event.photoExt}`);
  }
  return urls;
}

function getEventBySlug(slug) {
  return PAST_EVENTS.find((e) => e.slug === slug);
}
