# EV Fleet Manager App: Project Concept with User Stories
This EV Fleet Manager app is a comprehensive solution designed to address common challenges faced by electric vehicle fleet operators, particularly within small to medium-sized fleets. It aims to optimize vehicle utilization, manage battery health, and streamline maintenance, ultimately improving operational efficiency and extending fleet longevity via a central platform.

## Core Functionalities & User Stories
The app delivers a robust fleet management experience through key modules, each detailed with specific user stories from various perspectives:

### Vehicle Inventory & Management
This module manages the complete lifecycle of each fleet vehicle.

As an **Admin**, I want to add a new electric vehicle to the fleet, to track details and assign it to operations.

**Acceptance Criteria**: System captures model, year, VIN, license plate, initial mileage, and purchase date.

As an **Admin**, I want to update a vehicle's status (e.g., 'in service', 'charging', 'maintenance'), to accurately reflect its current availability.

**Acceptance Criteria**: System allows selection from predefined status options.

As a **Mechanic**, I want to view a specific vehicle's details, to quickly access its history and specifications before service.

**Acceptance Criteria**: System displays all stored vehicle information, including make, model, and current status.

### Real-time Telemetry Data Tracking
This feature focuses on simulating and storing real-time EV performance data.

As an **Admin**, I want to see real-time battery levels and locations of all vehicles on a dashboard, to monitor readiness and dispatch efficiently.

**Acceptance Criteria**: Dashboard shows interactive map with vehicle icons and battery charge indicators.

As an **Admin**, I want to view historical telemetry data (e.g., speed, battery drain) for a vehicle, to analyze performance and identify issues.

**Acceptance Criteria**: System provides graphs and data logs for chosen time periods.

As a **Driver**, I want the app to simulate my vehicle's current battery level and estimated range, to plan routes effectively and avoid range anxiety.

**Acceptance Criteria**: In-app display updates battery and range dynamically.

### Service History & Maintenance Scheduling
This module provides tools for tracking maintenance to ensure vehicle reliability.

As a **Mechanic**, I want to log a completed service (e.g., tire rotation, diagnostic check), for accurate maintenance history.

**Acceptance Criteria**: System allows input of service type, date, mileage, parts used, and notes.

As an **Admin**, I want to view upcoming maintenance schedules for the fleet, to plan downtime and allocate resources.

**Acceptance Criteria**: System displays a calendar or list of scheduled services with due dates.

As an **Admin**, I want to set recurring service reminders based on mileage or time, ensuring critical maintenance is not missed.

**Acceptance Criteria**: System automatically generates new maintenance tasks when conditions are met.

### User Management & Access Control
This module provides basic authentication and role-based access.

As an **Admin**, I want to create new user accounts for drivers and mechanics with specific roles, for appropriate system access.

**Acceptance Criteria**: System allows assigning 'Driver', 'Mechanic', or 'Admin' roles with distinct permissions.

As a **User**, I want to securely log in to the app using my credentials, to access authorized functionalities.

**Acceptance Criteria**: Login requires username/email and password.

As an **Admin**, I want to modify user roles or deactivate accounts, to manage access as personnel changes occur.

**Acceptance Criteria**: System reflects changes in permissions immediately.

### Scheduling & Assignment
This module facilitates vehicle and task assignment for efficient operations.

As an **Admin**, I want to assign a specific vehicle to a driver and a route for a given day, to organize daily operations.

**Acceptance Criteria**: System allows selection of available vehicles and drivers, and associates them with a route.

As a **Driver**, I want to view my assigned vehicle and route for the day, to understand responsibilities and start my shift.

**Acceptance Criteria**: Dashboard displays current assignments clearly.

As an **Admin**, I want to schedule a vehicle for future maintenance with a specific mechanic, to organize appointments and avoid conflicts.

**Acceptance Criteria**: System shows mechanic availability and prevents double-booking.


## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
