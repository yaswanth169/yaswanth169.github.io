# Yashwanth Devavarapu : academic site

Static site. No build step, no dependencies: plain HTML, one CSS file, one small JS file.

## Pages

| File | Page |
|---|---|
| `index.html` | About / home |
| `research.html` | Research themes and narrative |
| `publications.html` | Full publication list, grouped by status |
| `projects.html` | Engineering projects |
| `cv.html` | Curriculum vitae |

## Assets

- `assets/css/style.css` : all styling, including the light/dark theme tokens
- `assets/js/theme.js` : light/dark toggle (the ☾/☀ button in the nav)
- `assets/img/profile.jpeg` : sidebar photo
- `files/Yashwanth_Devavarapu_CV.pdf` : downloadable CV

## Editing

Each page is self-contained HTML. The header, sidebar and footer are repeated in all five
files, so a change to the sidebar (a new link, a new affiliation) needs the same edit in
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

Anchors are linked from `research.html` and `index.html`, so keep the `id` if you move an
entry.

## Deploying to GitHub Pages

```sh
git init
git add .
git commit -m "Add academic site"
git branch -M main
git remote add origin https://github.com/yaswanth169/yaswanth169.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

The site serves at `https://yaswanth169.github.io/`. `.nojekyll` is present so GitHub
publishes the files as-is instead of running them through Jekyll.

To preview locally: `python3 -m http.server` then open http://localhost:8000.
