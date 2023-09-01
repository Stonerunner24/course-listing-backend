# Courses Backend with Node

This application allows users to create and maintain a list of courses that can be assigned to different departments, and given a
specific number of hours.

## Project Setup
1. Clone the project into your **XAMPP/xamppfiles/htdocs** directory.
```
git clone https://github.com/Stonerunner24/course-listing-backend.git
```

2. Install the project.
```
npm install
```

3. Configure **Apache** to point to **Node** for API requests.
    - We recommend using XAMPP to serve this project.
    - In XAMPP, find the **Edit/Configure** button for **Apache**.
    - Edit the **conf** file, labeled **httpd.conf**. 
    - It may warn you when opening it but open it anyway.
    - Add the following line as the **last line**:
    
    ```
    ProxyPass /tutorial http://localhost:3100/tutorial 
    ```

    - Find the following line and remove the **#** at the front of the line.
    
    ```
    LoadModule proxy_http_module modules/mod_proxy_http.so
    LoadModule proxy_http2_module modules/mod_proxy_http2.so
    ```
    
    - Save the file.
    - **Restart Apache** and exit XAMPP.

4. Make a local **tutorial** database.
    - Create a schema/database.
    - The sequelize in this project will make all the tables for you.

5. Make sure you have a project registered with the **Google Developer console**.
    - https://console.developers.google.com/
    - Enable **Google+ API** and **Google Analytics API**.
    - Enable an **OAuth consent screen**.
    - Create an **OAuth client ID**.
    - Save your **Client ID** and **Client Secret** in a safe place.

6. Add a local **.env** file and make sure the **client ID** and **client secret** are the values you got from Google. Also make sure that the **database** variables are correct.
    - CLIENT_ID = '**your-google-client-id**'
    - CLIENT_SECRET = '**your-google-client-secret**'
    - DB_HOST = 'localhost'
    - DB_PW = '**your-local-database-password**'
    - DB_USER = '**your-local-database-username**' (usually "root")
    - DB_NAME = '**your-local-database-name**'

7. Compile and run the project locally.
```
npm run start
```

8. Test your project.
    - Note that to test your backend, you don't need anything to be running.
```
npm run test
```
