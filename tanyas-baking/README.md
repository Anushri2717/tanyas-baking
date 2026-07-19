# Tanya's Baking — Full Stack Clone

A React (Vite) + Node/Express recreation of the layout, structure and
functionality of tanyasbaking.com: announcement bar, sticky nav with a
dropdown, hero section, feature cards, cake category pages (Birthday /
Wedding / Theme) pulled from a backend API, and a working contact form
that posts to the backend.

> **Note on images:** The original site's photos belong to the bakery and
> are not reproduced here. This project uses free Unsplash stock photos as
> placeholders — swap the URLs in `backend/data/cakes.js` and the
> `components/pages` files for your own photos whenever you're ready.

## Project structure

```
tanyas-baking/
├── backend/     # Node + Express API (contact form, cakes data)
└── frontend/    # React app (Vite)
```

## Run the backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev        # nodemon, http://localhost:5000
# or: npm start
```

## Run the frontend

```bash
cd frontend
npm install
npm run dev         # http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:5000`
(see `frontend/vite.config.js`), so run both servers at the same time.

## Build for production

```bash
cd frontend
npm run build        # outputs static files to frontend/dist
```

Serve `frontend/dist` with any static host (or add `express.static` in
`backend/server.js` to serve it directly from the Node server).

## API endpoints

| Method | Route                  | Description                       |
|--------|-------------------------|-----------------------------------|
| GET    | `/api/cakes`            | All cake categories                |
| GET    | `/api/cakes/:category`  | `birthday` \| `wedding` \| `theme` |
| POST   | `/api/contact`          | Submit a contact/order enquiry     |
| GET    | `/api/contact`          | (admin) view submitted enquiries   |

## Design tokens used

- **Colors:** cream `#fff8f0`, blush `#f6dce4`, rose `#c97b84`, mocha `#5b3a29`, gold `#d8a657`
- **Fonts:** Playfair Display (headings), Poppins (body) — loaded via Google Fonts in `frontend/index.html`
