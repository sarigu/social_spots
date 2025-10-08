# Social Spots 🌍

A small web application to help people discover social, community-driven spots in the city.  
Users can explore spots like community gardens, running clubs, culture houses, community dinners, and more — all curated in a map and list.

The project uses:  
- **Backend:** [Statamic CMS](https://statamic.com/)  
- **Frontend:** [Next.js](https://nextjs.org/) + TypeScript + Tailwind CSS  
- **Mapping:** [Leaflet](https://leafletjs.com/)  
- **Development environment:** Docker (Laravel Sail runtime)  

---

## Run the backend

1. **Start Docker**

* Run `docker compose up -d`. This will start the backend container running Statamic.

2. **Create Admin User (if you haven't yet)**

* Run `docker compose exec backend php please make:user` to create an admin user

3. **Your Control Panel will be accessible at: http://localhost/cp**

---

## Run the frontend

1. **Install dependencies (if you haven't yet)**

* `cd frontend`
* Run `npm install`

2. **Run development server**

* `cd frontend`
* Run `npm run dev`

3. **Open http://localhost:3000 to view the frontend**
