# Steps to run the project in a Cloud9 environment

NOTE: Originally, the server side application code has been written in the root directory and the client side application has developed within the client folder. These two projects run on two separate ports: 8080 and 3000 respectively in the DEV environment. In the production environment, the client side folder is bundled into a HTML+CSS+JS application and served within a static folder. Running the projects on two different ports on Cloud9 wasn’t a success; hence the following instructions serve the client-side application within a static folder, much like what happens in the production environment.

1. Upload **knack.zip** a new Cloud9 environment.
2. Open a new terminal.
3. Extract the contents of the knack.zip file, using the command: **unzip knack.zip**
4. Delete the uploaded knack.zip file.
5. Open the terminal and execute **npm install** in the project root directory.
6. Navigate to the client folder by executing **cd client** and then install the packages by executing **npm install**.
7. In case there are any vulnerabilities, fix them by executing **npm audit fix**.
8. Execute npm run build to build the client side application into a static HTML+CSS+JS web app.
9. Create an **.env** file in the project root folder, with values provided in D2L, those values  point to Plesk MySQL Database environment. 
10. To point to a new DB created in cloud9 environment, replace **DB_HOST, DB_USER, DB_PORT, DB_PASS, DB_NAME** with the appropriate values for the new environment.
11. Make sure variable **NODE_ENV="Cloud9"** in .env file to make sure static contents created in step 8 are being served.
12. In the project root folder execute **npm run server** and preview the running application. **DO NOT USE npm run dev**, otherwise the project will start the client app in port 3000 and will lead to error. 



# Steps to create a new database in a Cloud9 environment

1. Open a new terminal and start mysql service using: **sudo service mysqld start**
2. Open mysql client: **sudo mysql -u root**
3. Inside the mysql client create a new database: **CREATE DATABASE knack**
4. Exit mysql client.
5. Upload the file **owl_knack_dump.sql** to the project root folder in Cloud9 environment.
6. Run the command **mysql -u root -p knack < owl_knack_dump.sql**
7. To point the application to this new database, change the variables in .env file to the following:
**DB_HOST=localhost**
**DB_USER=root**
**DB_PASS=**
**DB_NAME=knack**


# GitHub repo
https://github.com/carolinasmbastos/knack


# API Documentation
The code is documented with API endpoint purposes and inputs. Please refer to routes inside: <project_root>/routes


# Citations
1. Carousel image #1
https://unsplash.com/photos/1rBg5YSi00c (@adrigeo_)

2. Carousel image #2
https://unsplash.com/photos/tnv84LOjes4 (@sawyerbengtson)

3. Carousel image #3
https://unsplash.com/photos/acowe0pCVBg (@andrewtneel)

4. Carousel image #4
https://unsplash.com/photos/oLhTLD-RBsc (@igormiske)

5. Monthly Art banner
https://unsplash.com/photos/-GUyf8ZCTHM (@jruscello)

6. View in Space background image
https://www.freepik.com/free-photo/pink-chair-white-room_4100643.htm 

7. City of Vancouver logo
https://vancouver.ca/images/cov/feature/covlogo-share.png 

8. Artworks
https://unsplash.com/photos/n-vnWQmmVoY (@itstamaramenzi)
Default image -  https://unsplash.com/photos/xubOAAKUwXc (@pawel_czerwinski)
MET Museum Open Access Artworks - https://www.metmuseum.org/art/collection/search#!?searchField=All&showOnly=openAccess&sortBy=relevance&offset=0&pageSize=0 













