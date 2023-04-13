/* 
-----------------------------------------------
                Initial Installation
-----------------------------------------------
1. visit: console.firebase.google.com
2.create a project(skip google analytics)
3.Register app(create config)
4.install firebase(npm install firebase)
5. add config file to your project
6. Danger: Do not publish or make firebase config to public by pushing those to github
-----------------------------------------------
                Integration
-----------------------------------------------
7.visit: go to docs > build> authentication > web > get started
8. export app from the firebase.config.js file: export default app
9. Login.jsx : import getAuth from firebase/auth 
10. create const auth =getAuth(app)
------------------------------------------------
               Provider setup
------------------------------------------------
11. import googleAuthProvider and create a new provider
12. use singInWithPopUp and pass auth and provider
13. activate sign-in method(google,facebook,github etc)
14. if [vite] has domain number 127.0.0.1 then changed it by local host (: ar ager toko change krte hbe sudhu)
---------------------------------------------------
             More Auth Provider
---------------------------------------------------
1. activate the auth provider(create app, provide redirect url, client id, client secret)
*/