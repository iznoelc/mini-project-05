# Mini Project 05
Izzy Carlson, Landon Chapin, Esperanza Paulino

## LIVE LINK: https://gleebusmovies.netlify.app/

## UML
See the uml [here](). Shows the overall structure and relationship between components, excluding outside packages like react-toastify or react-icons. Does not specify which components use useContext, useEffect, etc. Strictly drawn to show structure.

## FEATURES OF THIS PROJECT
The same features as [mini-project-04](https://github.com/iznoelc/mini-project-04) and:
- An updated navbar from mini-project-4, now responsive to the user's logged in status
    - If the user *is not* logged in, it will show the logo, a home page button, and a button to login or sign up
    - If the user *is* logged in, it shows a home, dashboard, and favorite movie buttons in the middle of the navbar. To the right of the navbar, it shows *Welcome, display name!* and a button to download the favorites list or to sign out.
- Updated like buttons, which now stay green if the user likes a movie. Removed the dislike button and instead clicking the like button again now removes it from likes, as we felt this was more intuitive for the user.
- A home page which
    - Has a short introduction of the website
    - Displays 3 sample movies
    - A button to see more movies which
        - Takes the user to the login page if they are not logged in
        - Takes user to the dashboard if they are already logged in
- The dashboard, which is the same as mini-project-
    - This uses a private route, so the user can only view it if they are logged in
- The sign up page
    - Provides text fields for username, email, and password
    - Provides the option to sign up with Google
    - Has a way to navigate to the login page in case the user already has an account
- The login page
    - Provides fields for a user name and password
    - Provides a way for the user to sign in with Google
    - Has a way to navigate to the sign up page in case the user does not yet have an account
- The sign up and login text fields use daisyUI elements to handle validation. It will not let the user submit the field if their usename, email, or password does not meet the requirements.
- Handles authentication using Firebase
- Uses react-toastify to put an error notification on the screen if the user's login/signup authentication failed for whatever reason
- A dynamic error page that updates the displayed error based on whatever error is received
- A fallback element (loader) that is displayed whenever data is being processed, authentication is loading, etc.
