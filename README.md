# Task-Manager

This Task Manager application is designed to help users efficiently organize, track, and manage their tasks. This app allows users to create, update, and delete tasks while providing useful features such as categorization, prioritization, and deadlines.

The application allows:
- Register as a user
- Log in as a user
- Logout as a user
- Add tasks
- Add categories
- Delete tasks
- Delete categories

## Built with 🛠️

* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - Frontend Framework 
* [Bootstrap](https://getbootstrap.com/) - CSS Framework
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [Firebase](https://rometools.github.io/rome/) - A comprehensive app
development platform by Google

### Firebase products used

* [Authentication](https://firebase.google.com/docs/auth) - Authentic and manage users
* [Cloud Firestore](https://firebase.google.com/docs/firestore) - Non SQL database. Real-time updates, powerful queries, and automatic scaling.
* [Cloud Storage](https://firebase.google.com/docs/storage) - Store and view user-generated content

## Screenshots📌

### Login Page

On this page the user can log in using their email and their password.

![LoginScreen](https://github.com/user-attachments/assets/d9f75829-eb2e-49cc-81ec-b8f3acc19457)



### Register Page

On this page the user can register by entering a name, their email and their password.

![RegisterPage](https://github.com/user-attachments/assets/5b1003bb-c7e7-48e9-85a3-befe2ce59022)


### App Page

Once the user has logged in, he can access the main page of the application. In it you can see the tasks that have been added and different tabs that sort them by categories.

#### Main image:

![MainPage](https://github.com/user-attachments/assets/c6bc9d80-d531-4e85-b8e4-6bba147123f7)


#### Adding a new category:

![Category](https://github.com/user-attachments/assets/ace8bcfd-3c9a-48d9-a994-0feedea19ae2)


#### Adding a new task:

![Task](https://github.com/user-attachments/assets/06bb25b4-355c-4e3e-af37-cd3b2e220c04)


#### New example category:

![TaskCat_Example](https://github.com/user-attachments/assets/22b51564-5250-4053-a6b6-d21332a65242)


#### Deleting a category:

![DeleteCat](https://github.com/user-attachments/assets/9b549cd6-0a56-4243-b688-7814e2b3c175)

## Technologies Used  🛠️
- Frontend: React Redux
- Backend & Database authentication : Firestore and Firebase

## How to use this code ⚙️

1. You [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository 
2. Install all the dependences with `npm install`
3. Create your own project in [Firebase](https://firebase.google.com/docs/web/setup)
4. Install and initialize [firebase tools](https://firebase.google.com/docs/cli)
5. In the services folder, edit the firebase.js file with your settings.

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}
```
6. Once connected to firebase, deploy all the configured rules
7. Finally you can run the react application with the command `npm start`. [More Info](https://facebook.github.io/create-react-app/docs/getting-started)


