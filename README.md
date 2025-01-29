# CMS Monorepo for One Trade Live Website

## BACKEND

### Strapi

- folder : `strapi`
- env :
  - `PORT`
  - `DATABASE_CLIENT`
  - `DATABASE_HOST`
  - `DATABASE_PORT`
  - `DATABASE_NAME`
  - `DATABASE_USERNAME`
  - `DATABASE_PASSWORD`
- commands :
  - first time : `npm install && npm run build && npm run seed && npm start` (seed script populates data)
  - every other time : `npm install && npm run build && npm start` or `npm run build && npm start`

## FRONTEND

### Next.js

- folder : `frontend`
- env :
  - NEXT_PUBLIC_API_URL (`<backend url>`/api)
  - STRAPI_TOKEN (token after creating user in strapi backend)
  - IMAGE_HOSTNAME (only the domain of backend e.g.cmsonetrade.thespartanpoker.in ) with no protocol
  - SITE_URL
  - NEXT_PUBLIC_STRAPI_IMAGE_API_URL (domain of backend with protocol)
- commands :
  - `npm run build -- --no-lint --experimental-build-mode compile && npm start`
