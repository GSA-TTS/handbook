# Copilot Instructions for TTS Handbook

## Project Overview

- This is the TTS Handbook: a living documentation site for TTS mission, values, policies, tools, and guides.
- Built as a static site, content is primarily in markdown under `pages/` and `_data/`.
- Images and assets are in `_img/` and `assets/`.
- The site is containerized (Docker/Podman) and can also be run locally with Node.js.

## Key Workflows

- **Local development:**
  - `npm install` then `npm start` (serves at http://localhost:8080)
  - Or use Docker: `docker compose up` or `npm run docker:start`
- **Build/CI:**
  - GitHub Actions workflow: `.github/workflows/pull-request.yml` (badge in README)
- **Adding content:**
  - New pages: add markdown to `pages/` (e.g., `pages/policies/travel/`)
  - Images: add to `_img/` (e.g., `_img/travel/`)
  - Data/config: `_data/` (YAML, JS)
- **Travel guide images:**
  - Place in `_img/travel/`, reference with `{% image_with_class ... %}`

## Project Conventions

- Use YAML for navigation, site config, and collections in `_data/`.
- Use Liquid/HTML includes from `_includes/` for shared page elements.
- Use markdown for most content; frontmatter is not always required.
- Use `{% image_with_class ... %}` for images that should be collapsible.
- Keep navigation up to date in `_data/navigation.yml` and relevant TOC files.

## Integration Points

- Site is deployed via Federalist (see `federalist.json`).
- Uses Netlify CMS for some content management (see images in `_img/netlifycms-*`).
- Docker/Podman for local and CI builds.

## Notable Files/Directories

- `README.md`: Developer setup, contribution, and workflow details.
- `CONTRIBUTING.md`: Contribution guidelines.
- `_data/`: Site config, navigation, and collections.
- `_includes/`: Shared HTML/Liquid includes.
- `pages/`: Main content (markdown).
- `_img/`: Images and assets.
- `docker-compose.yml`, `Dockerfile`: Container setup.
- `.github/workflows/`: CI/CD workflows.

## Patterns & Tips

- Prefer updating YAML in `_data/` for navigation/collections over hardcoding links.
- Use includes for repeated page elements (headers, nav, banners).
- When adding new guides or sections, update navigation and TOCs.
- For new developer workflows, document in `README.md` or `CONTRIBUTING.md`.

---

For questions, see the `README.md` or ask in #tts-handbook Slack channel.
