📊 North Dashboard
========================

A modern and elegant data visualization dashboard built with **React**, **Vite**, and **TypeScript**, styled using **Tailwind CSS**. This application fetches AWS data from an API and presents it through interactive **Line**, **Bar**, and **Pie** charts using **Recharts**.

**Requirements**
   
*   **Node.js**

*   **vite**
  

**Versions**
    
*   **React**: 19.0.0 _(Replace with your actual version)_
    
*   **Tailwind CSS**: 3.4.17 _(Replace with your actual version)_

🚀 Features
-----------

*   **Fast & Lightweight**: Built with Vite for optimized performance and development speed.
    
*   **Typed Safety**: Developed using TypeScript for better code reliability and maintainability.
    
*   **Beautiful UI**: Styled with Tailwind CSS for a sleek and responsive design.
    
*   **Data Visualization**: Interactive and customizable charts powered by Recharts.
    
*   **API Integration**: Fetches real-time data and dynamically updates charts.   

🛠️ Tech Stack
--------------

*   **React** (Frontend Framework)
    
*   **Vite** (Fast build tool)
    
*   **TypeScript** (Static typing)
    
*   **Tailwind CSS** (Utility-first styling)
    
*   **Recharts** (Data visualization)
    
*   **Axios** (API Integration)
    

📦 Installation & Setup
-----------------------

Follow these steps to get the project running on your local machine:

    
###  1️⃣ Clone the repository
    
`   git clone https://github.com/emmadevmorgan/north-frontend.git cd north-frontend `

### 2️⃣ Install dependencies

`   npm install   `

### 3️⃣ Start the development server

`   npm run dev   `


📜 Usage
--------

1.  Start the app and visit http://localhost:5173.
    
2.  The dashboard will fetch data from the API and visualize it.
    
3.  Explore different chart types and hover over data points for insights.
    

🏗️ Future Enhancements
-----------------------

*   Scale the application to handle increased **product data** if production expands to 10+ products.
    
*   Improve **mobile responsiveness** to ensure a seamless user experience across all devices.
    
*   Implement **unit and integration tests** for better reliability and maintainability.
    
*   **Dockerize** the application for easier deployment and scalability.
    
*   Introduce **Redux for state management** to handle complex state updates efficiently when scaling.

*   Enforce ESLint for consistent code quality and best practices.

*   Toastr for displaying successful operations and error handlings.


Implementation Assumptions
-----------------------
    
*   The current solution has been developed with the assumption that the API provides data for **four products**. If the number of products increases significantly, further optimizations may be required.
