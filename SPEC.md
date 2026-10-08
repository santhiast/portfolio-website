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

At least three gated portfolio pages must be present. Project titles, descriptions, and other facts are not yet supplied; use clear placeholders until they are.

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
- Santhia has some project images, drawings, and models. Renderings, project descriptions, a résumé, and a headshot are still in progress.
- Put supplied image files in the `images` folder.
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
