
```markdown
# Web Development Coding Test: Next.js Application with Django API Integration

## Objective

Build a web application using Next.js for the frontend and integrate it with a Django API backend. The application features a dashboard page displaying various charts, with data retrieved from the Django API.


## Table of Contents

* [Setup and Installation](#setup-and-installation)
* [Libraries and Tools](#libraries-and-tools)
* [Approach and Thought Process](#approach-and-thought-process)

## Setup and Installation

### Prerequisites

Before you start, ensure you have the following installed on your machine:

* **Node.js** (>= 14.0.0)
* **Python** (>= 3.8)
* **Docker** (optional, for containerization)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone [https://github.com/yourusername/blockhouse.git](https://github.com/SxxAq/bh-assignment.git)
cd bh-assignment
```

### Setting Up the Frontend

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.

### Setting Up the Backend

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**

   Set up the database with the following command:

   ```bash
   python manage.py migrate
   ```

5. **Run the Django Server**

   Start the Django development server:

   ```bash
   python manage.py runserver
   ```

   The Django API will be accessible at `http://localhost:8000`.

### Running with Docker

To build and run the application using Docker, you can use the provided `docker-compose.yml` file:

1. Build the Docker images:

```bash
docker-compose build
```

2. Start the Docker containers:

```bash
docker-compose up
```

This will start the frontend, backend, and database services. The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.

## Libraries and Tools

### Frontend

* **Next.js**: A React framework for building server-side rendered and static web applications.
* **React**: A JavaScript library for building user interfaces.
* **Tailwind CSS**: A utility-first CSS framework for styling the application.
* **http-proxy-middleware**: Middleware for proxying API requests during development.

### Backend

* **Django**: A high-level Python web framework that simplifies the development of web applications.
* **Django REST Framework**: A toolkit for building Web APIs with Django.

### Development Tools

* **Docker**: Containerization platform for creating, deploying, and running applications in isolated environments.
* **Jest**: JavaScript testing framework used for frontend testing.

## Approach and Thought Process

### Frontend

The frontend is developed using Next.js, which provides server-side rendering and static site generation. The dashboard page includes four types of charts:
- **Candlestick Chart**
- **Line Chart**
- **Bar Chart**
- **Pie Chart**

Data for these charts is fetched from the Django API using `Axios`. We use a charting library Recharts to render the charts dynamically with the fetched data.

### Backend

The Django backend provides a simple API with endpoints for each chart type:
- `/api/candlestick-data/`
- `/api/line-chart-data/`
- `/api/bar-chart-data/`
- `/api/pie-chart-data/`

Each endpoint returns hardcoded JSON data structured according to the requirements of the respective charts.

### Integration

The frontend and backend are integrated so that the frontend fetches data from the Django API and displays it in the charts. Error handling is implemented to manage API request failures gracefully.

---
```
