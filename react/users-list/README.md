# Users list

## Instructions

- Build an application that draws the list of users from this endpoint: ([https://jsonplaceholder.typicode.com/users])
- The application should display these views:
    - users/ - It should display the list of users from api endpoint. Each item on the list should display user's information and it will be able to edit and delete its information that will be refreshed by redux implementation 
    - users/create - It should display a form that creates a new user. When the creation it is completed, it should redirect you to the initial form.
    - users/:id/edit - It should display a form that updates the information of the selected user. The form should be populated with previous user's information
    - users/:id/delete - It should display the information from a particular user and give the option of delete the user or return to /users/ route. it should be asked to the user if they want to proceed with deletion.

Notes
- The application will populate the store with information pulled from ([https://jsonplaceholder.typicode.com/users])
- It will exists these actions:
    - LOAD_USERS
    - UPDATE_USER
    - DELETE_USER
    - CREATE_USER
