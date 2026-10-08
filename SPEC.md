# Specification

## Purpose and audience
Santhia’s Portfolio presents Santhia’s architecture work to architecture firms hiring graduates, potential collaborators, and clients. Its purpose is to make the projects, background, and contact path easy to find.

## Pages and content
- `login.html`: public sign-up and log-in page. Visitors can create an account with email and password or log in. This page is never gated.
- `index.html`: home page. Opens with a visual introduction, then leads into selected projects and the other main sections.
- `projects.html`: image-led overview of projects, with links to individual project pages.
- One `project-<slug>.html` page per featured project. Present the supplied images and drawings with project descriptions when Santhia provides them.
- `about.html`: personal introduction and résumé/CV. Add education, experience, software, and other details only when Santhia supplies them.
- `contact.html`: contact information and a clear way to get in touch. Add contact details only when Santhia supplies them.

At least three gated portfolio pages must be present. Project 01 is The Space Thicket, Project 02 is Jutaku House, and Project 03 is Hialeah Racetrack Masterplan. Use their supplied titles, details, descriptions, and visuals on the home page and their detail pages. Keep placeholders for other projects until their information is supplied.

### Project 01 — The Space Thicket
- Student: Santhia St. Fleur
- University: University of Miami
- Course: Elements of Architecture / ARC102 Spring
- Instructor: Mohammad Shanti
- Description: explores a spatial condition shaped by density, hierarchy, and relationships. Closely spaced vertical elements and repeated walls create layered interior conditions, with narrower passages and more open areas. Wood reinforces the vertical/tree-like quality. Surrounding trees remain dominant, and the architecture responds to the landscape through openings, orientations, and spatial sequences.
- Use the drawings, model photographs, and renderings supplied in images/space-thicket-*, extracted from Santhia’s ARC102 portfolio PDF. Do not invent further project facts.

### Project 02 — Jutaku House
- Category: residential design; a compact home for an artist.
- Student: Santhia St. Fleur
- University: University of Miami School of Architecture
- Course: ARC 101: Design I
- Term: Fall 2025
- Faculty: Andrew Clum
- Supplied project dimensions: 16 ft × 48 ft; 2 ft lateral setback and 2 ft front and back setbacks.
- Description: explores traditional Japanese architectural influence alongside modern elements, using minimalist forms, natural materials, and efficient spatial organization for a functional, expressive artist’s home. The project considers how compact living can still feel open, peaceful, and connected to its surroundings.
- Use all six supplied Jutaku House visual sheets in images/jutaku-*.webp.

### Project 03 — Hialeah Racetrack Masterplan
- Category: master planning and urban design.
- Student: Santhia St. Fleur
- University: University of Miami School of Architecture
- Course: ARC 101: Design I
- Term: Fall 2025
- Faculty: Andrew Clum
- Site: Hialeah, Florida.
- Description: explores how architecture and urban design can shape daily life at a human scale by reimagining the Hialeah Racetrack as a walkable, connected community responsive to its history. The work considers streets, public spaces, housing, and movement together.
- The Centria concept sheet credits Maggie Pan and Santhia St. Fleur.
- Use all eight supplied project visual sheets in images/hialeah-masterplan-*.webp, including its zoning reference page.

## Log-in gate
- Use Supabase authentication for email-and-password sign-up and log-in.
- Load Supabase from its CDN script tag. Do not put a secret key in any file.
- `login.html` is always accessible without an account.
- Every other page checks the visitor’s session and sends signed-out visitors to `login.html`, including when they enter a page address ending in `.html` directly.
- After a successful sign-up or log-in, send the visitor to `index.html`.
- Provide a Log out control on every gated page. Logging out returns the visitor to `login.html`.
- Do not create database tables or store visitor information beyond what Supabase authentication requires.

## Content and images
- Never invent facts, dimensions, dates, or names Santhia has not provided. Ask Santhia when needed.
- Use the supplied images, drawings, models, and descriptions listed for Projects 01–03. Ask Santhia for any missing project information. A résumé and headshot are still in progress.
- Put supplied image files in the `images` folder.
- The homepage hero uses `images/portfolio-hero-collage.webp`, composed only from actual project visuals: a Space Thicket rendering, floor plan, and model photograph; a Jutaku House section; and a Hialeah masterplan diagram. Do not add generated architecture or labels.
- Where a needed image is not available, use a plain grey box labelled `[ADD: image of ...]`. Replace the description in that label with the subject needed; do not use a fabricated image.
- Every image must have meaningful alt text.

## Build and publishing
- Use plain HTML, CSS, and JavaScript files only. No frameworks, npm, or build step.
- Put `index.html` at the top level of the folder.
- Load Supabase using its CDN script tag.
- Use relative links throughout the site.
- The site must work on a phone.
- Publish the site from GitHub to Vercel.

## Out of scope
- Payments.
- Storing visitor information beyond log-in.
- Database tables.

## Done when
- [ ] Works on a phone.
- [ ] The menu reaches every page.
- [ ] Sign-up, log-in, and log-out work.
- [ ] Typing a page address ending in `.html` while signed out sends the visitor to log-in.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
