# Verweij IT Creations website

Static Dutch and English company site for `www.itcreations.nl`, published with GitHub Pages from `main`.

## Edit and build

Edit the text in `build.mjs`, then run `node build.mjs` from the repository root. The generated HTML is committed so Pages can publish it directly. Styles live in `assets/site.css`; the three project avatars come from the Puck, Theseus, and Feste repositories in the same workspace.

## Pages and DNS

Select **Deploy from a branch**, `main`, `/ (root)` in GitHub **Settings → Pages**. Set the custom domain to `www.itcreations.nl` before changing DNS. In TransIP, replace the `www` CNAME target `@` with `dominique-onthechain.github.io` (no protocol or repository path). After `www` works, set the apex `itcreations.nl` A records to GitHub Pages' documented addresses so GitHub redirects it to `www`. Preserve the existing MX, SPF, DKIM, and other email records.

The privacy text is a draft based on the Feste repository as of September 2026. Confirm its business and data-handling claims before publishing or submitting the URL to LinkedIn.
