# John B. Harrison — personal site

Static personal homepage served by GitHub Pages. No build step: edit the HTML, commit, and the site updates.

The design follows the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme as customised on
[maitreyapatel.com](https://maitreyapatel.com/) (Roboto, 800px column, blue accent, light/dark toggle),
re-implemented as plain HTML/CSS so nothing has to be built.

## Layout

```
index.html            the whole page: bio, social links, affiliations, news, experience, education, skills
assets/css/main.css   all styling (theme colours are CSS variables at the top of the file)
assets/js/theme.js    light/dark toggle + mobile menu
assets/img/prof_pic.jpg   profile photo (swap in any square image)
```

## Common edits

- **Bio / headline** — the `<header class="post-header">` and the three `<p>` blocks under `<div class="clearfix">` in `index.html`.
- **Social icons** — the `<div class="contact-icons">` block. Add an email link with
  `<a href="mailto:you@example.com" title="email"><i class="fas fa-envelope"></i></a>`, a Google Scholar link with
  `<i class="ai ai-google-scholar"></i>` (add the [Academicons](https://jpswalsh.github.io/academicons/) stylesheet in `<head>`), or a CV PDF with `<i class="fas fa-file-pdf"></i>`.
- **News** — add a `<tr>` to the table in `<section id="news">`; newest first.
- **Affiliation logos** — put image files in `assets/img/logos/` and replace a `<span class="wordmark">…</span>`
  with `<img src="assets/img/logos/asu.png" alt="Arizona State University">` (they render greyscale automatically).
- **Experience / Education** — copy one `<div class="entry">…</div><hr>` block.
- **Publications** — add a `<section class="section entries" id="publications">` using the same `entry` markup:
  put a thumbnail or year in the left column (`when`) and title / authors / venue + `btn` links (PDF, Code, Bib) on the right.
- **Accent colour** — `--global-theme-color` in `assets/css/main.css` (light and dark blocks).
- **Footer date** — bottom of `index.html`.

## Custom domain

Add a `CNAME` file containing the domain and point the domain's DNS at GitHub Pages
(see [GitHub's docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
