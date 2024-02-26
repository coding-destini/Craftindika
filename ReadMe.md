# MERN Stack Assignment: Micro-Service for Summary Statistics

## Introduction
This repository contains a micro-service designed to provide simplified summary statistics (mean, min, max) on a dataset. The assignment focuses on backend services primarily, but it also includes a simple frontend interface to demonstrate the implemented APIs.

## Installation and Setup
### Clone the Repository
To clone this repository, use the following command:
```bash
git clone <https://github.com/coding-destini/Craftindika.git>
```

### Setup Frontend and Backend
1. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and configure necessary environment variables.
   - Run the backend:
     ```bash
     npm start
     ```

2. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     npm start
     ```

## Backend Routes
The backend routes for the micro-service are as follows:

- **GET `/record/getall`**: Get all records.
- **POST `/record/add`**: Add a new record.
- **DELETE `/record/:id`**: Delete a record by ID.
- **GET `/record/salary-summary`**: Get summary statistics for salaries across the entire dataset.
- **GET `/record/contract-summary`**: Get summary statistics for salaries of records marked with "on_contract": "true".
- **GET `/record/department-summary`**: Get summary statistics for salaries within each department.
- **GET `/record/detailed-department-summary`**: Get detailed summary statistics for salaries within each department and sub-department combination.


## Thank you
Feel free to contribute