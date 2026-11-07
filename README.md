# Brian Sawa — Portfolio


## Structure

```
portfolio/
├── index.html        Page shell + metadata
├── content.js        All editable content (edit this to update the site)
├── app.js            Renders sections from content.js + interactions
├── styles.css        Full design system and responsive layout
├── privacy.html      Privacy notice
└── assets/           Portrait, project images, logos, resume PDF, favicon
```

## Editing content

Almost everything lives in `content.js`. Update the `window.SITE` object:

- `meta` — page title, description, social image
- `nav` — brand, links, CV, LinkedIn
- `hero` — eyebrow, headline, bio, credits, buttons, portrait
- `approach` — the four "How I Work" cards
- `projects` — featured full-bleed projects + "More Work" cards
- `experience` — timeline entries and expandable bullets
- `writing` — article cards
- `contact` — copy, email, form endpoint, social links
- `footer` — links, copyright, disclaimer

Project entries support an optional `video` field. When present, a
"Watch Preview" button opens the URL in a YouTube modal. Supported formats:
`youtu.be/ID`, `youtube.com/watch?v=ID`, `youtube.com/embed/ID`, and
`youtube.com/shorts/ID`.

## Running locally

Open `index.html` directly, or serve the folder:

```bash
cd /home/sawa/portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

The folder is fully static. Upload it to any static host (GitHub Pages,
Netlify, Vercel, Cloudflare Pages, S3, etc.). No configuration is required.

### GitHub Pages

1. Create a repository and push the contents of this folder.
2. In **Settings → Pages**, set the source to the branch and `/root`.
3. Optionally add a `CNAME` file for a custom domain.

## Contact form

To disable the service, set `contact.formAction` to an empty string. The form
will then fall back to opening a pre-filled `mailto:` draft in the visitor's
email client.



A static personal portfolio styled after the editorial layout of
[jacobhull.me](https://www.jacobhull.me/), built with plain HTML, CSS, and
JavaScript. No build step or dependencies.

