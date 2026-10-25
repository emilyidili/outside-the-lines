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
7. In Netlify: Forms, Form notifications, add an email notification for the form named "order" so orders reach Amanda.

## Amanda editing the site
Go to outsidethelines.uk/admin, log in with GitHub, edit "All pages", press Publish. The site updates in about a minute.

## Taking payment (Revolut payment links)
Fastest route: in the editor, open a shape size and paste a Revolut payment link into "Revolut payment link". That size then shows a Buy now button. Use the second link field for clean edges. Leave both empty to use the order form instead. Mark a size "Out of stock" to switch its button to Pre-order request.

Order-form route:
1. Customer picks a piece, size and any options (edge finish, wine type, personalisation) and presses "Order this piece". The order arrives by email via Netlify Forms.
2. Amanda checks the piece is available.
3. Amanda creates a payment link in Revolut Business (needs Revolut Business and a Merchant account) and sends it.
4. Amanda packs and posts after payment.

## Notes
- Pages use hash routing (#/shop), so each page is not separately indexed by search engines. Move to real page URLs later if search ranking matters.
- The request form only works on Netlify, not on a local preview.
- 

## Product groups and options (CMS: Site content, Shop product groups)

- Add a group (for example Clocks) with "Add Shop product group". Give it a Key (short lowercase word), a Name, and at least one shape with sizes and prices. For a group with no drawn picture set the picture style to "none" and add photos to each shape.
- Tick "Hide this group from the website" to remove a group from the menu, shop and home page without deleting it.
- Each group has its own Options list. Each option can be switched on or off with "Switched on". Two kinds:
  - Choice list: the customer picks one (for example Resin edges or Clean all round, Red wine or White wine). Use the key "edge" for resin or clean edges so the picture and the clean-edge payment link follow the choice.
  - Personalisation: the customer picks No personalisation or Personalisation. If Personalisation, a text box appears, capped at the maximum characters you set (default 40). The text is included in the order.
- Photos can be tied to a choice by typing the choice key (for example resin or clean) in "Show this photo when..." Type any to allow all.
- Buy now button rule: a Revolut link is used only when no personalisation is chosen and the group has no choice options other than edge finish. Otherwise the customer uses the order form and you send a payment link.

## Ranges per group and site wording

- Each product group has "Ranges available for this group". Untick a range to turn it off for that group. If only one range is left the picker is hidden. The home page only shows ranges that at least one visible group offers.
- "All other wording" in the CMS holds every button, heading, note and message on the site. Fields left blank fall back to the original wording.
- Options and choices have an optional "Extra price" which is added to the displayed price.
