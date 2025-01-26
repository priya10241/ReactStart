# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>ALL ABOUT PROJECT</h1>

Installation : 
npm install @reduxjs/toolkit react-redux react-router-dom appwrite html-react-parser @tinymce/tinymce-react react-hook-form

<h3>.env : </h3> file used to store all environment variables like project id , collection id and make .gitignore this file as it must not be accessed by browser .
 Than make a ".env.sample" and name all envirnment variables there but make their value empty.

 
If application is created using create react app then, it is compulsory to start variable name with (REACT_APP_) and this variable is accessed with (process.env.REACT_APP_NAMEOFVARIABLE)
If application is created using vite react app then, it is compulsory to start variable name with (VITE_) and this variable is accessed with (import.meta.env.VITE_NAMEOFVARIABLE )

<h2>APPWRITE</h2>
one blog database is created and then article collection is created inside it.
While making backend using appwrite, set (database->collections->settings-> change the permissions), also set in (storage->buckets->settings->change permissions)


Create Attributes : 
1) Tittle : String with max 255 chars allowed (Required)
2) Content : String with max 255 chars allowed (Required)
3) Featured Image : String(as storing id of image as string) (Required)
4) Status : String with 255 chars allowed
5) UserId : String (Required)

Create Index : 
1) Status

Create Bucket inside Storage
1) Image
(Also update Permissions in setting of bucket)

conf->conf.js

create an object and name all environment variables and then export that object


<h2> AUTHENTICATION </h2>

A class AuthService is created in which all methods(createAccount, login, getCurrentUser and logout) are defined and variables(client,account) are created and then objectof this class is exported.
1) While creating account, pass first argument as id, then email, password and name.

<h2>DATABASE SERVICE</h2>
A class Service is created in which variables(client,databse,bucket ) are created and then object of this class is exported.

For database varaable, methods are createPost,updatePost,deletePost, getPost and getPosts.
For bucket variable, methods are uploadFile, deleteFile and getFilePreview.


<h2>REACT REDUX</h2>

create AuthSlice and define two reducers(login and logout) and then create a store and set these reducers. Also set provider in main.jsx