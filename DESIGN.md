# Design

## Concept
Santhia’s Portfolio is a welcoming, organized portfolio that helps architecture firms, potential collaborators, and clients understand Santhia’s work and how to get in touch. It pairs a quiet, image-led introduction with a varied sequence of project imagery and clear paths to project details, background, and contact information.

## References
- Nora Yao’s portfolio: borrow the opening sequence of a quiet menu, strong introductory image, and projects that unfold while scrolling.
- Ayden Pettiette’s portfolio: borrow the easy-to-scan organization of personal background, credentials, and contact information.
- Sarah Gorelick’s portfolio: borrow the clear, image-led organization of studio projects and individual project entry points.
- The uploaded palette image: use its three listed colors. Borrow the palette only.

These references inform design systems and information flow. Do not copy names, logos, text, images, or fonts from them.

## Colour palette
- Warm ivory `#F5EEDD`: primary page background and text on the deep blue.
- Soft blue `#84B3CE`: image frames, dividers, and decorative accents.
- Deep blue `#16587B`: primary text on ivory, navigation, buttons, and strong accents.

Keep text and backgrounds high contrast. Use ivory text on deep blue. Do not use soft blue as a text color unless its contrast has been checked.

## Typography
Use free Google Fonts only:
- **Manrope** for headings: 48 px page title, 32 px section heading, 24 px project title.
- **Inter** for body text, navigation, and controls: 16 px body text, 14 px labels and captions.
- Use a responsive scale on small screens. Keep paragraphs readable and avoid long lines.

## Layout, images, and movement
- Use a long, scrollable portfolio with a loose, varied collage of different image sizes.
- Let key project imagery run full-bleed. Mix drawings, model photographs, and renderings when available.
- Keep plenty of space around text while showing several project previews as visitors scroll.
- On narrow screens, stack the collage into a single column and keep navigation and controls easy to tap.
- Use purposeful, expressive image transitions and scroll reveals that respond quickly. Avoid slow animations and respect reduced-motion preferences.

## Log-in page, menu, and buttons
- `login.html` is the front door: a quiet welcome, the same architectural collage used on the home page, and a clear sign-in form with an equally clear way to create an account. Keep the collage uncropped so its drawings and model remain visible.
- Keep the form legible over a calm ivory and blue layout. Do not obscure its controls with imagery or motion.
- Use a simple menu that links to Home, Projects, About / CV, and Contact.
- Style buttons with deep blue and ivory, clear labels, visible focus states, and generous tap areas. Include a Log out control on every gated page.

## Tone of voice
Write in a clear, warm, thoughtful, and professional voice. Keep project and profile copy direct and specific. Use only details Santhia has supplied.

## Five never rules
1. Never invent project facts, dimensions, dates, names, credentials, or contact details.
2. Never copy a reference site's identity, wording, imagery, or fonts.
3. Never use pop-ups, tiny menus, or hard-to-read text.
4. Never use slow or unnecessary animation.
5. Never make it hard to find projects or contact information.

## Home page directions

Build three independent home page studies in `scheme-a`, `scheme-b`, and `scheme-c`. Each uses the same supplied portfolio content and the existing palette, but has its own layout, type treatment, and attitude. Keep the content factual; use the existing `[ADD: ...]` placeholders where project details or images are not supplied. Each folder must open directly at `index.html` and use only relative links and plain HTML, CSS, and JavaScript.

**Selected direction: Scheme C — Playful field notes.** Use Scheme C as the approved visual direction for the portfolio home page. Schemes A and B remain comparison studies; do not use them as the basis for the main home page.

### Scheme A — Quiet editorial
- **Attitude:** composed, spacious, and image-led; an architectural journal.
- **Layout:** narrow top navigation, oversized single-column introduction, one dominant image placeholder, then a vertically paced project sequence with alternating text and image alignment. Close with concise About and Contact links.
- **Type:** Manrope for a large, restrained headline; Inter for navigation, project labels, and body copy. Use generous line spacing and a narrow text measure.
- **Details:** ivory canvas, deep-blue type, soft-blue rules and image frames. Keep decoration minimal and let whitespace set the rhythm.

### Scheme B — Studio index
- **Attitude:** precise, practical, and organized; a working studio's project register.
- **Layout:** compact masthead with section links, a split introduction with short copy beside a project count/availability area only if that information is supplied (otherwise use a neutral label), then a dense, numbered project index with aligned titles, placeholder descriptions, and image panels. Keep About and Contact visible in the page structure.
- **Type:** Inter leads throughout for a functional, crisp voice; use Manrope selectively for the main title and project names. Favor small uppercase labels and strong typographic hierarchy.
- **Details:** deep-blue header/navigation band against ivory content, soft-blue grid lines and index markers. Use a consistent column system instead of collage.

### Scheme C — Playful field notes
- **Attitude:** curious, tactile, and personal while remaining professional; a sketchbook of architecture studies.
- **Layout:** offset two-column introduction with a small note-style copy block and a large collage assembled from Santhia’s supplied drawings, model photographs, and renderings, followed by an irregular but deliberate grid of project cards with varied proportions. Add small section markers and a clear final Contact panel.
- **Type:** Manrope for expressive, oversized headings; Inter for readable body copy and navigation. Allow a few large, cropped typographic labels as layout elements, never as substitutes for content.
- **Details:** ivory base with deep-blue text and soft-blue card surfaces, frames, and numbered markers. Use subtle rotation or hover movement only when reduced-motion settings are respected.

All three studies must retain the same home page content, navigation destinations, image alt text, contrast, and mobile access. The differences are limited to presentation: layout, type hierarchy, and visual attitude. Do not add project facts, counts, availability, or contact details that Santhia has not provided.
