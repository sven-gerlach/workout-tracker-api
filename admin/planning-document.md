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
PATCH | /users | user details | token | 200, OK | user obj
DELETE | /users/:id | empty | token | 204 | empty

##### POST Sign-up
```shell
{
  "user": {
    "_id": "604234bd95293106a28bebfd",
    "email": "rg@rg.com",
    "createdAt": "2021-03-05T13:40:13.192Z",
    "updatedAt": "2021-03-05T13:40:13.192Z",
    "__v": 0
  }
}
```

##### POST Sign-in
```shell
{
  "user": {
    "_id": "60410798b3f054e39d5b68b9",
    "email": "sg@sg.com",
    "createdAt": "2021-03-04T16:15:20.950Z",
    "updatedAt": "2021-03-05T13:42:00.356Z",
    "__v": 0,
    "token": "d655aa89a37d26fd7339df213b7acc75"
  }
}
```

##### DELETE Sign-out
```shell
'header: 204 No Content'
```

##### PATCH Change PW
```shell
'header: 204 No Content'
```

##### PATCH User details
```shell
{
  "user": {
    "_id": "604234bd95293106a28bebfd",
    "email": "rg@rg.com",
    "createdAt": "2021-03-05T13:40:13.192Z",
    "updatedAt": "2021-03-05T13:53:05.924Z",
    "__v": 0,
    "token": "1147f8d8b92c966f60aa51e7af6ee87f",
    "age": 74,
    "experience": "Rookie",
    "name": "Renate",
    "surname": "Gerlach"
  }
}
```

##### DELETE User
```shell
{
  "user": {
    "_id": "604234bd95293106a28bebfd",
    "token": "1147f8d8b92c966f60aa51e7af6ee87f"
  }
}
```

#### Workouts

Verb | URI | Body | Headers | Status | Body
--- | --- | --- | --- | --- | ---
POST | /workouts | {} | token | 201, Created | created workout obj
GET | /workouts/:id | n/a | token | 200, OK | workout obj
GET | /workouts | n/a | token | 200, OK | workouts obj array
PATCH | /workouts/:id | exercise obj | token | 201, OK | workout obj
PATCH | /workouts/:id_w/exercise/:id_e | set obj | token | 201, OK | exercise obj
*DELETE* | */workouts/:id* | *n/a* | *token* | *201, Created* | *n/a*

##### POST Create workout
```shell
{
  "workout": {
    "_id": "60423d8739fff1075e3e5774",
    "weightUnit": "kg",
    "owner": "604234bd95293106a28bebfd",
    "exercise": [],
    "createdAt": "2021-03-05T14:17:43.980Z",
    "updatedAt": "2021-03-05T14:17:43.980Z",
    "__v": 0
  }
}
```

##### GET Find workout
```shell
{
  "workout": {
    "_id": "60423d8739fff1075e3e5774",
    "weightUnit": "kg",
    "owner": "604234bd95293106a28bebfd",
    "exercise": [],
    "createdAt": "2021-03-05T14:17:43.980Z",
    "updatedAt": "2021-03-05T14:17:43.980Z",
    "__v": 0
  }
}
```

##### GET Find all workouts
```shell
{
  "workouts": [
    {
      "_id": "60423d8739fff1075e3e5774",
      "weightUnit": "kg",
      "owner": "604234bd95293106a28bebfd",
      "exercise": [],
      "createdAt": "2021-03-05T14:17:43.980Z",
      "updatedAt": "2021-03-05T14:17:43.980Z",
      "__v": 0
    }
  ]
}
```

##### PATCH Create a new exercise
```shell
{
  "exercise": {
    "_id": "60423fad39fff1075e3e5775",
    "title": "Body weight squats",
    "sets": []
  }
}
```

##### PATCH Create a new set inside an exercise
```shell
{
  "set": {
    "_id": "6042e1e62e35d6335e31734e",
    "weight": 100,
    "repetitions": 10,
    "createdAt": "2021-03-06T01:59:02.502Z",
    "updatedAt": "2021-03-06T01:59:02.502Z"
  }
}
```

## Core Tasks
### Planning
1.  [x] Review [full-stack-project-practice](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice)
1.  [x] Review [full-stack-project-modeling-lab](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-modeling-lab)
1.  [x] Create User Stories
1.  [x] Create Wire Frames
1.  [x] Create ERD

### Set Up

API

1.  [x] [Download Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)
1.  [x] Create a Github Repository
1.  [x] [Deploy to Heroku](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)

Client

1.  [x] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [x] Create a Github Repository
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### API
1.  [x] Review [express-api-crud](https://git.generalassemb.ly/ga-wdi-boston/express-api-crud), [express-api-relationships](https://git.generalassemb.ly/ga-wdi-boston/express-api-relationships), and [express-api-auth](https://git.generalassemb.ly/ga-wdi-boston/express-api-auth)
1.  [x] CRUD your resource
1.  [x] Test your resource's endpoints with curl scripts
1.  [x] Add the relationship to a User
1.  [x] Add User ownership to the resource controller
1.  [x] Test your resource's endpoints with curl scripts

### Client
1.  [x] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/api-token-auth)
1.  [x] Sign Up (curl then web app)
1.  [x] Sign In (curl then web app)
1.  [x] Change Password (curl then web app)
1.  [x] Sign Out (curl then web page)
1.  [x] All API calls have success or failure messages
1.  [x] Review [query-ajax-post](https://github.com/ga-wdi-boston/jquery-ajax-post)
1.  [x] Create resource (curl then web app)
1.  [x] Get all of their owned resources (curl then web app)
1.  [x] Delete single resource (curl then web app)
1.  [x] Update single resource (curl then web app)

### Final Touches
1.  [ ] README
2.  [x] Troubleshoot/Debug
3.  [x] Style


## Stretch Goals
1. Instructors (can create templates, review recent exercises, comment on performance, make recommendations)
1. Exercise Templates (user || instructor created templates)
1. Manipulate historic workout data post hoc
