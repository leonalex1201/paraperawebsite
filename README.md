# PARA PERA — Static version (HTML/CSS/JS, χωρίς build step)

Ίδιο design και λειτουργίες με το Lovable/React project (countdown, posters, past events ανά φάκελο, mobile menu, lightbox), αλλά:

- Κανένα Node.js, κανένα `npm install`, κανένα build step
- Ανοίγεις τα αρχεία απευθείας, ή τα ανεβάζεις σε static host (Netlify/Vercel/GitHub Pages)
- Όλη η λογική σε plain JavaScript, όλο το styling σε plain CSS

## Δομή

```
parapera-static/
├── index.html        ← αρχική σελίδα (hero, next event, past events grid)
├── past.html          ← γενική σελίδα event, διαβάζει ?event=slug από το URL
├── events.js          ← ΕΔΩ προσθέτεις events — μοναδικό σημείο δεδομένων
├── styles.css         ← όλο το design (ίδια χρώματα/glass-card με το Lovable version)
├── logo.png
├── hero-bg.jpg
├── posters/
│   ├── poster-july.png    ← poster επόμενου event
│   └── poster-april.png   ← (δεν χρησιμοποιείται προς το παρόν, κράτησέ το ή σβήσε)
└── photos/
    ├── summer-party-2026/   01.jpg, 02.jpg, 03.jpg
    ├── winter-party-2026/   01.jpg, 02.jpg
    ├── halloween-2026/      01.jpg, 02.jpg
    └── beach-party-2026/    01.jpg, 02.jpg
```

## Πώς προσθέτεις νέο past event

1. Φτιάξε φάκελο `photos/<slug>/`, π.χ. `photos/christmas-2026/`.
2. Βάλε μέσα τις φωτό **ονομασμένες `01.jpg`, `02.jpg`, `03.jpg`...** (σειριακά, με leading zero).
3. Άνοιξε `events.js`, πρόσθεσε ένα entry στο `PAST_EVENTS`:

```javascript
{
  folder: "christmas-2026",
  slug: "christmas-2026",
  label: "Christmas Party",
  name: "PARA PERA — Christmas Party",
  date: "December 2026",
  photoCount: 4,        // πόσες φωτό έβαλες
  photoExt: "jpg",       // ή "png" / "jpeg" / "webp"
},
```

4. Αποθήκευση. Εμφανίζεται αυτόματα στο μενού "Past" και στη λίστα past events — **δεν χρειάζεται να αγγίξεις HTML.**

> Σημαντικό: επειδή δεν υπάρχει build step που να "σκανάρει" αυτόματα τον φάκελο, το `photoCount` πρέπει να ταιριάζει με το πόσες φωτό όντως έβαλες. Αν βάλεις 5 φωτό αλλά γράψεις `photoCount: 3`, θα φαίνονται μόνο οι 3 πρώτες.

## Πώς αλλάζεις το επόμενο event

Στο `events.js`, άλλαξε το `NEXT_EVENT` object: όνομα, ημερομηνία/ώρα (`iso`), poster, sponsor, lineup.

Για το poster, βάλε το αρχείο μέσα στο `posters/` και άλλαξε:
```javascript
poster: "posters/your-new-poster.png",
```

## Social links

Στο `index.html`, footer section, βρες τα δύο `<a href="...">` με τα Instagram/TikTok icons και άλλαξε τα URLs.

## Τοπική δοκιμή

Επειδή χρησιμοποιούμε `fetch`-like συμπεριφορά (query params στο `past.html`), άνοιξέ το μέσα από έναν τοπικό server, όχι διπλό κλικ:

```bash
cd parapera-static
python3 -m http.server 8000
```
Μετά άνοιξε `http://localhost:8000` στον browser. (Αν απλά κάνεις διπλό κλικ στο `index.html`, η αρχική σελίδα δουλεύει κανονικά, αλλά καλό είναι ούτως ή άλλως να τεστάρεις με server πριν το ανεβάσεις, ώστε να βλέπεις ό,τι θα δει κι ο κόσμος.)

## Ανέβασμα online (δωρεάν)

**Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop) → σύρε ολόκληρο τον φάκελο `parapera-static/` → έτοιμο link.

Καμία ρύθμιση, καμία βάση δεδομένων, καμία διαδικασία build.
