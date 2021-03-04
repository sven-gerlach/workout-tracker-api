# Planning Document
## Generic Planning
### Project Outline
I want to build a workout app that reduces the interaction with the interface to an absolute minimum during the workout session. Eventually, the interaction will be limited to the mobile device/fitness band/watch asking the wearer to confirm the weight used. All the other key data points, such as repetitions, exercise, duration, heart rate are collected and stored automatically. The key USP will be the AI-driven recognition of the exercise type and the repetitions. This app, for now, will not include this functionality but resemble a bare-bone fitness tracker with neat mobile-first UX / UI, sign-up and sign-in functionality, and basic exercise tracking, storing, and update/review functionality.

Every single fitness tracker I ever used failed to live up to the expectations because:
1. they were intrusive during my work-out - ideally, I do not want to be distracted by my phone at all unless it is data
   that allows me to alter my training (e.g. staying within a certain heart rate band)
1. these apps collect a lot of data, but I have yet to come across one app that actually gives me even a single actionable
   recommendation, based on the collected data, that improves my training.

### User Stories
+ As an athlete I want to sign-up fast and be able to use the app immediately on my existing training plans.
+ As an athlete I want to use the app predominantly on my phone with minimum distractions during my training.
+ As an athlete I want the app to store individual exercises, the sets, reps, weights, duration of the exercise, duration of breaks between reps and sets.
+ As an athlete I want to review recent training summaries and be able to comment on potential changes/amendments to my training regime for the next time I do this exercise.
+ As a personal instructor I want to review my client's training diary and comment on them and make changes to the
  upcoming training plan.

### Wireframes
![Wireframes](https://i.imgur.com/kt2Cru1.png)

### Entity Relationship Diagram
![ERD](https://i.imgur.com/5KjULoG.png)

### Resources
1. User:
    + name: String
    + surname: String
    + age: Number (min=16)
    + experience: enum (Pro, Experienced, Amateur, Rookie)
    + email: string, req, unique, custom regex validator
    + hashedPassword: String, req
    + *run setter on email to force lower case*

1. Workout
    + date: Date, req
    + startTime: date / time, req
    + endTime: date / time
    + user: { type: ObjectId, ref: User, req: true }
    + weight: { enum: [kg, lb], req=true, default=lb }
    + exercise: [exerciseSchema]

1. Exercise
    + title: String, req [ideally, front-end form field offers options of previously declared exercise titles]
    + description: String
    + sets: [setSchema]
    + run setter on title to force lower case
    + getter to capitalise words in title

1. Set
    + set: Int, min=1, req [ideally this field is automatically populated => inc set]
    + weight: Number, min=0, req
    + repetitions: Int, min=0, req
    + break: Number (seconds), req

### Routes
#### Users

Verb | URI | Body | Headers | Status | Body
--- | --- | --- | --- | --- | ---
POST | /sign-up | credentials | empty | 201, Created | user obj
POST | /sign-in | credentials | empty | 200, OK | user obj w/token
DELETE | /sign-out | empty | token | 201. Created | empty
PATCH | /change-password | passwords | token | 204, No Content |user obj w/token

#### Workouts

Verb | URI | Body | Headers | Status | Body
--- | --- | --- | --- | --- | ---
POST | /workouts | {} | token | 201, Created | created workout obj
GET | /workouts/:id | n/a | token | 200, OK | workout obj
GET | /workouts | n/a | token | 200, OK | workout obj array
PATCH | /workouts/:id | workout obj | token | 200, OK | workout obj
*DELETE* | */workouts/:id* | *n/a* | *token* | *201, Created* | *n/a*

## Core Tasks
### Planning
1.  [ ] Review [full-stack-project-practice](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice)
1.  [ ] Review [full-stack-project-modeling-lab](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-modeling-lab)
1.  [ ] Create User Stories
1.  [ ] Create Wire Frames
1.  [ ] Create ERD

### Set Up

API

1.  [x] [Download Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)
1.  [x] Create a Github Repository
1.  [ ] [Deploy to Heroku](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)

Client

1.  [x] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [x] Create a Github Repository
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### API
1.  [ ] Review [express-api-crud](https://git.generalassemb.ly/ga-wdi-boston/express-api-crud), [express-api-relationships](https://git.generalassemb.ly/ga-wdi-boston/express-api-relationships), and [express-api-auth](https://git.generalassemb.ly/ga-wdi-boston/express-api-auth)
1.  [ ] CRUD your resource
1.  [ ] Test your resource's endpoints with curl scripts
1.  [ ] Add the relationship to a User
1.  [ ] Add User ownership to the resource controller
1.  [ ] Test your resource's endpoints with curl scripts

### Client
1.  [ ] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/api-token-auth)
1.  [ ] Sign Up (curl then web app)
1.  [ ] Sign In (curl then web app)
1.  [ ] Change Password (curl then web app)
1.  [ ] Sign Out (curl then web page)
1.  [ ] All API calls have success or failure messages
1.  [ ] Review [query-ajax-post](https://github.com/ga-wdi-boston/jquery-ajax-post)
1.  [ ] Create resource (curl then web app)
1.  [ ] Get all of their owned resources (curl then web app)
1.  [ ] Delete single resource (curl then web app)
1.  [ ] Update single resource (curl then web app)

### Final Touches
1.  [ ] README
2.  [ ] Troubleshoot/Debug
3.  [ ] Style


## Stretch Goals
1. Instructors (can create templates, review recent exercises, comment on performance, make recommendations)
1. Exercise Templates (user || instructor created templates)
1. Manipulate historic workout data post hoc
