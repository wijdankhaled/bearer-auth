# bearer-auth

An Express/Node.js based server using a custom “authentication” module that is designed to handle user registration and sign in using Basic, Bearer, or OAuth along with a custom “authorization” module that will grant/deny users access to the server based on their role or permissions level

**.env**
PORT:3000

 DATABASE_URL:"postgres://postgres:0000@localhost:5433/db_auth"

**uml**

![uml](./bearer.jpg)

