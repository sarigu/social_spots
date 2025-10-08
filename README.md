# Social Spots 🌍

A small web application to help people discover social, community-driven spots in Copenhagen.  
Users can explore spots like community gardens, running clubs, culture houses, board game nights, and more — all curated in one map and list.

The project uses:  
- **Backend:** [Statamic CMS](https://statamic.com/) (flat-file Laravel-based CMS)  
- **Frontend:** [Next.js](https://nextjs.org/) + TypeScript + Tailwind CSS  
- **Mapping:** [Leaflet](https://leafletjs.com/)  
- **Development environment:** Docker (Laravel Sail runtime)  

---

## Run the backend

1. **Start Docker**

* Run `docker compose up -d`. This will start the backend container running Statamic.

2. **Create Admin User**

* Run `docker compose exec backend php please make:user` to create an admin user

---

## Run the frontend

1. Install dependencies

* `cd frontend`
* Run `npm install`

2. Run development server

* Run `npm run dev`
* Open http://localhost:3000 to view the frontend.
