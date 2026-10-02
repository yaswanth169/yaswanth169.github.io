# Yashwanth Devavarapu: academic site

Static site. No build step and no dependencies: plain HTML, one stylesheet, one small
script. Everything that gets published lives in `src/`.

```
.
├─ src/                     everything served to the web
│  ├─ index.html            about / home
│  ├─ research.html         research themes
│  ├─ publications.html     full publication list, grouped by status
│  ├─ projects.html         engineering projects
│  ├─ cv.html               curriculum vitae
│  ├─ assets/
│  │  ├─ css/style.css      all styling, including the light/dark tokens
│  │  ├─ js/theme.js        light/dark toggle
│  │  └─ img/profile.jpeg   sidebar photo
│  ├─ files/                downloadable CV
│  └─ .nojekyll             publish files as-is, no Jekyll pass
├─ .github/workflows/deploy.yml
└─ README.md
```

## Deploying

`.github/workflows/deploy.yml` publishes `src/` to GitHub Pages on every push to `main`.
Nothing is built; the directory is uploaded as-is.

This requires **Settings → Pages → Source: "GitHub Actions"**. With the older "Deploy from
a branch" setting the site will 404, because the HTML no longer sits at the repository
root.

## Working on it

Changes go through a branch and a pull request, never straight to `main`:

```sh
git checkout -b feat/whatever
# edit, then:
python3 -m http.server -d src     # preview at http://localhost:8000
git commit -am "Describe the change"
git push -u origin feat/whatever
```

Open the pull request, check it, merge. Merging to `main` deploys.

## Editing

Each page is self-contained HTML. The header, sidebar and footer are repeated across all
five files, so a sidebar change (a new link, a new affiliation) needs the same edit in
each. Everything else is page-local.

Publication entries follow one shape:

```html
<div class="pub" id="short-anchor">
  <h3 class="pub__title">Title <span class="tag">Under review</span></h3>
  <p class="pub__authors">Authors, with <span class="me">Yashwanth Devavarapu</span> bolded</p>
  <p class="pub__venue">Venue · Year</p>
  <p class="pub__links"><a href="...">arXiv</a></p>
  <details class="abstract"><summary>Abstract</summary><p>…</p></details>
</div>
```

`research.html` and `index.html` link to these anchors, so keep the `id` if an entry moves.

## Design

Typefaces are Source Serif 4 for headings and Inter for body text, both from Google Fonts.
Colours are CSS custom properties on `:root`, redefined under `:root[data-theme="dark"]`.
Light is the default; dark is opt-in via the toggle and remembered per visitor. The
masthead is sticky with a frosted backdrop blur, applied only where the browser supports
`backdrop-filter` so the nav is never unreadable.
