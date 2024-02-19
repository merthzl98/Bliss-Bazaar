<div align='center'><img style="width:10%" src='https://github.com/merthzl98/Bliss-Bazaar/blob/main/src/assets/logo/bb-logo.png?raw=true'/><h4>Bliss Bazaar</h4><a href='https://bliss-bazaar.vercel.app'>Live Demo</a></div>

<h2>About the project</h2>
<p>Bliss Bazar is an e-commerce platform where users can browse products across multiple categories and utilize advanced filtering options. With its unique design, the platform is <b>responsive</b> and compatible with all devices. Users can access specific category lists by clicking on category images on the homepage. The application features three different roles: <b>guest, user, and admin</b>.</p>

<h3>Guest Role</h3>
<p>Guest users can browse and filter products on the platform but <b>cannot add items to favorites or purchase products added to the cart without logging in</b>. To log in, users can click on the avatar icon located in the navbar.</p>

<h3>User Role</h3>
<p>In addition to the features available to guest users, regular users <b>can add products to their favorites list</b>. They can access this list through the avatar icon in the navbar and remove items from the list if desired. Users <b>can also purchase products</b> added to the cart.</p>

<h4>User Credentials for Login:</h4>
» Email: <b>user@user.com</b> <br>
» Password: <b>useruser</b>

<h3>Admin Role</h3>
<p>Admin users have all the features available to regular users. Additionally, they <b>can delete listed products</b> and access the list of deleted items through the avatar icon in the navbar. Admins also have the ability to <b>relist deleted products</b> if necessary.</p>

<h4>Admin Credentials for Login:</h4>
» Email: <b>admin@admin.com</b> <br>
» Password: <b>adminadmin</b> 


<h4> <b>Please note that due to the absence of a role-based permission authorization service, client-side handling based on authentication has been simulated according to the user's account.</b></h4>


<h2>Built With</h2>
» TypeScript <br>
» React <br>
» Redux & Redux Toolkit <br>
» React Router v6 <br>
» Material UI <br>
» SCSS <br>
» Axios <br>
» Firebase Authentication API <br>
» Vite <br>
» Vercel 

<h2>Getting Started</h2>
<h3>Prerequisites</h3>
»To use the current version of npm. 

```bash
npm install npm@latest -g
```

<h3>Installation</h3>

1.Clone the repo

```bash
git clone https://github.com/merthzl98/Bliss-Bazaar.git
```

2.Install NPM packages

```bash
npm install
```

3.Run the app

```bash
npm run dev
```

<h3>Local Auth Setup </h3>
<p>Please note that environment variables are not shared publicly. If you wish to utilize admin and user roles locally, you'll need to create a Firebase project.</p>

To set up authentication in this Firebase project, follow these steps to enable login with email and password:

1.<b>Create a Firebase Project:</b> <br>
Click on the following link to create a Firebase project: <a href='https://firebase.google.com/'>Firebase Console</a>

2.<b>Set Up Authentication:</b><br>
In your Firebase project console, navigate to the Authentication section and enable email/password authentication.

3.<b>Define User Roles:</b><br>
»For the user role, successful API results are required.<br>
»For the admin role, the email and password must contain the keyword "admin". 

3.<b>Configure Firebase API Key:</b><br>
In the root of your project, create an <b>.env.development.local</b> file. Inside this file, define your Firebase project key using the <b>VITE_FIREBASE_API_KEY</b> constant. 

<p>By following these steps, you can create a local Firebase project with authentication configured to log in with email and password. This setup allows differentiation between user and admin roles based on the provided credentials, and ensures that your Firebase API key is securely stored in your local environment.</p>


<h2>Screenshots of the Project </h2>
<br>
<h3 align='center'>Home Page </h3>

<div align='center'>
<img src='https://github.com/merthzl98/Bliss-Bazaar/blob/main/src/assets/pages/home-page.png?raw=true'/>
</div>

<br><br>

<h3 align='center'>Products Page</h3>

<div align='center'>
<img src='https://github.com/merthzl98/Bliss-Bazaar/blob/main/src/assets/pages/products-page.png?raw=true'/>
<br><br>

<h3 align='center'>Favs Page</h3>

<div align='center'>
<img src='https://github.com/merthzl98/Bliss-Bazaar/blob/main/src/assets/pages/favs-page.png?raw=true'/>
<br>
<br><br>

<h3 align='center'>Deleted List Page</h3>

<div align='center'>
<img src='https://github.com/merthzl98/Bliss-Bazaar/blob/main/src/assets/pages/deleted-page.png?raw=true'/>
<br>






