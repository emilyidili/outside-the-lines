# Outside The Lines Studio website

Static site for outsidethelines.uk. Hosted on Netlify, content edited through Decap CMS at /admin.

## Files
- index.html: the whole site (reads content/site.json)
- content/site.json: all text, prices, FAQs and photo paths
- admin/: the editing screen (Decap CMS)
- img/: photos (new uploads go to img/uploads)
- netlify.toml: Netlify settings

## Setup (one time)
1. Create a private or public GitHub repo (for example outside-the-lines) and push this folder to the main branch.
2. In Netlify: Add new site, Import from Git, choose the repo. No build command. Publish directory is the repo root (.).
3. In admin/config.yml replace OWNER with the GitHub account that holds the repo, then commit.
4. In Netlify: Site configuration, Access & security, OAuth, Install provider, GitHub. Add a GitHub OAuth app client ID and secret.
5. Give Amanda's GitHub account write access to the repo (Settings, Collaborators).
6. In Netlify: Domain management, add outsidethelines.uk, then at the registrar point DNS to Netlify as instructed.
7. In Netlify: Forms, Form notifications, add an email notification for the form named "request" so photo requests reach Amanda.

## Amanda editing the site
Go to outsidethelines.uk/admin, log in with GitHub, edit "All pages", press Publish. The site updates in about a minute.

## Taking payment (Revolut payment links)
1. Customer submits "Request photos" (arrives by email via Netlify Forms).
2. Amanda replies with photos of what is in stock.
3. Customer picks a piece. Amanda creates a payment link in Revolut Business (needs Revolut Business and a Merchant account) and sends it.
4. Amanda packs and posts after payment.

## Notes
- Pages use hash routing (#/shop), so each page is not separately indexed by search engines. Move to real page URLs later if search ranking matters.
- The request form only works on Netlify, not on a local preview.
