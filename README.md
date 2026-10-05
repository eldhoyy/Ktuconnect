# KTU Connect

A responsive, multi-page static website for KTU students.

## Included

- Home page
- Notes
- Previous Year Questions
- Syllabus
- Exam & academic updates
- S1–S8 semester hub
- Resource hub
- Material request form (frontend demo)
- About page
- Responsive mobile navigation
- Search UI
- Google Drive resource link
- Clean GitHub/Vercel-ready folder structure

## Project structure

```text
KTU_Connect/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── pages/
│   ├── about.html
│   ├── notes.html
│   ├── pyq.html
│   ├── request.html
│   ├── resources.html
│   ├── semester.html
│   ├── syllabus.html
│   └── updates.html
└── assets/
    └── icons/
        └── favicon.svg
```

## Run locally

No build tool is required.

Open `index.html` in a browser, or use a local static server.

## Deploy with GitHub + Vercel

1. Create a GitHub repository, for example `ktu-connect`.
2. Upload the **contents** of this folder to the repository.
3. In Vercel, import the GitHub repository.
4. Framework preset: **Other** (or leave it as detected).
5. Build command: leave empty.
6. Output directory: leave empty / root.
7. Deploy.

Because this is a static site, Vercel can serve it directly.

## Customize

- Replace the starter resource cards with your real Google Drive/PDF links.
- Add official syllabus links.
- Add your WhatsApp/community link in `pages/resources.html`.
- For real request submissions, connect `pages/request.html` to Formspree, Google Forms, or your own backend.
- Add your own logo/images under `assets/` if needed.

## Important

The included Google Drive link is the resource folder supplied for the KTU Connect setup. Verify that its sharing permissions are correct before publishing.
