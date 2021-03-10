# Requirements

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

### Deployment
Be deployed online, where the rest of the world can access it.
1.  [x]  Host on your public Github page, not Github Enterprise.
1.  [x]  Deploy client application on GH pages.
1.  [x]  Deploy server application on Heroku.

### Version Control
Demonstrate using version control by:
1.  [x]  Sharing your work through a git repository hosted on Github.
1.  [x]  Making frequent, cohesive commits dating back to the **first day**
    of the project week.
1.  [x]  1 commit on the first day of project week on both repos.
1.  [x]  At least 1 commit every day during project week (not necessarily on both repos).

### Documentation
Produce documentation in the form of a **README**, which must:
1.  [x] Create 2 Github repos (one for your front-end and one for your back-end)
1.  [x] Pin both repositories on GitHub as a Popular Repository
1.  [ ] Each repo will need a README.md file with a link to the other repo and an explanation of the what the app does and how it works.
1.  [ ] Each repo must contain the link to both deployed sites
1.  [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
    ![github image](https://git.generalassemb.ly/storage/user/3667/files/beae41ae-aaaa-11e7-8867-63958d376a0b)
1.  [ ] List technologies used
1.  [ ] List unsolved problems which would be fixed in future iterations.
1.  [ ] Document your planning and tell a story about your development process and problem-solving strategy.

Your front-end repo's README should also have
1.  [ ] Link to wireframes and user stories.

Your back-end repo's README should also have
1.  [ ] Link to Entity Relationship Diagram (ERD).

### Auth Specifications
1.  [x] Signup with email, password, and password confirmation.
1.  [x] Login with email and password.
1.  [x] Logout when logged in.
1.  [x] Change password with current and new password.
1.  [x] Signup and Signin must only be available to not signed in users.
1.  [x] Logout and Change password must only be available to signed in users.
1.  [x] Give feedback to the user after each action's success or failure.
1.  [x] All forms must clear after submit success and user sign-out
    - [x] (Optional) Reset form to initial state on failure

### Client Specifications
1.  [x] Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.
1.  [x] Use jQuery for DOM manipulation and event handling.
1.  [x] Have semantically clean HTML and CSS
1.  [x] User must be able to create a new resource
1.  [x] User must be able to update a resource
1.  [x] User must be able to delete a resource
1.  [x] User must be able to view a single or multiple resource(s)
1.  [x] All resource actions that change data must only be available to a signed in user.
1.  [x] Give feedback to the user after each action's success or failure.
1.  [x] All forms must clear after submit success and user sign-out
    - [x] (Optional) Reset form to initial state on failure


### API Specifications
1.  [x] Build an API using Express and Mongodb.
1.  [x] Create at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests.
1.  [x] Any actions which change data must be authenticated and the data must be "owned" by the user performing the change.
1.  [x] Have at least 1 resource that has a relationship to User

### DO NOT!!
Your app **must not**:
1.  [x]   Delete your repository at any time or start over.
1.  [x]   Rely on refreshing the page for any functionality.
1.  [x]   Have any user-facing bugs.
    - [x] Display non-functional buttons, nor buttons that do not successfully complete a task.
    - [x] Show actions at inappropriate times (example:  change password form when a user is not signed in).
    - [x] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [x]   Use alerts for anything.
1.  [x]   Display errors or warnings in the console.
1.  [x]   Display debugging messages in the console.
