---
name: project-tkonsulting
description: "Site vitrine Astro 5 pour TKonsulting (cabinet de conseil) — stack, palette, déploiement IONOS"
metadata: 
  node_type: memory
  type: project
  originSessionId: 2bdb9f51-c786-45b5-8522-e2d2d6a222dd
---

Site vitrine professionnel pour TKonsulting (cabinet conseil/pilotage/branding).

**Why:** Remplacement de tkonsulting.fr (Wordpress trop texte-dense, ne reflète pas l'identité premium logo noir+or).

**Stack:** Astro 5 + Tailwind CSS (même stack que Talesens), output static.

**Répertoire local:** `c:\Users\Utilisateur\OneDrive\Dev Tkonsulting\`

**Palette:**
- Fond : `#0A0A0A`
- Or : `#C9A84C` → `#E2C97A`
- Texte : `#E8E8E8`
- Cards : `#161616` border `rgba(201,168,76,0.12)`

**Pages:** `/` (landing), `/contact`, `/mentions-legales`, `/politique-confidentialite`

**Sections landing:** Hero → Services (3 piliers) → Process (4 étapes) → Pourquoi TK → CTA → Footer

**Logos attendus dans `public/`:**
- `logo-tk.png` — portrait fond noir complet
- `logo-tk-horizontal.png` — logo horizontal (nav + footer)
- `logo-tk-sm.png` — favicon

**Déploiement:**
- VPS IONOS `[IP-VPS]` (même VM que ConfIA)
- `rsync dist/ → /var/www/tkonsulting/`
- Config Nginx : `nginx-tkonsulting.conf` dans le projet
- Script : `./deploy.sh`
- Domaine cible : `tkonsulting.fr`

**Contact:** mailto:[e-mail] (pas de backend, formulaire contact.astro pré-remplit l'email)

**How to apply:** Garder le thème noir/or, pas de couleurs parasites. Tout nouveau contenu doit s'intégrer dans les composants Astro existants.
