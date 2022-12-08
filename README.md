# StudifyPro : One stop peer-to-peer learning

Studify Pro is a software that is directed at students to help them further their education. Many students have doubts with their work and using our platform, they can solve their problems in an interactive manner. Studify Pro serves as a central hub for students to interact with alumni, professors, other students, as well as tutors to further their education. With the cost of schooling, many students cannot afford tutors or to fail a course. Using Studify Pro, they unlock access to a plethora of information tailored to their field of study. 

### Features 
- User management - for registering students and authenticating users while using the platform
- One-To-One Session – This feature provides the functionality to student to interact with the tutor to solve their doubts in personalized way. 
- Learning Seminars – This feature provides functionality to students to gain knowledge on any topic and it provides platform to the tutor to share their knowledge to multiple students. So, this feature acts as a learning and gaining platform. 
- Chat Groups – This feature will provide functionality to students to create the group of their own field and to help each other to solve the smaller version of doubts. 
- Quiz – This feature includes functionality where students can take participation in Quiz game and if they successfully pass it then they can unlock the premium recorded session feature. 
- Masterclass Session – This feature will provide functionality to students to arrange their doubt-solving session or to clear concept of any topic with an experienced professor. 
- Recorded Session – This feature will provide functionality where tutors can share pre-recorded sessions and students can watch it to revise their concepts during the sessions. 

- [Keyur Vaghani](ky360972@dal.ca) - _(Owner)_
- [Ally Hirtle](al997737@dal.ca) - _(Maintainer)_
- [Ayush Verma](ayush.verma@dal.ca) - _(Maintainer)_
- [Janvi Patel](jn398689@dal.ca) - _(Maintainer)_
- [Aayushi Rashesh Gandhi](ay753882@dal.ca) - _(Maintainer)_
- [Nirav Radadiya](nr723865@dal.ca) - _(Maintainer)_

## Professor

---

[Akram Al-Otumi](akram-alotumi@dal.ca)

## Teaching Assistant

---

[Shehzeen](sh655624@dal.ca)

## Installation guide

Step 1: Git clone the project onto your local repository.

`git clone https://git.cs.dal.ca/kvaghani/studifypro`

Step 2: Next step is to run the installation of the npm modules using the following command :

`npm install`

Step 3: Once you see that modules are installed successfully, you can run the project using the following command.

`npm install`

Step 4: You can check and view the react UI.

## Deployed Link

The complete project is being deployed here :

[https://studify-pro.netlify.app/](https://studify-pro.netlify.app/)


### Quality of working prototype (does it work) and potential of the prototype to be advanced to the next stage of development)

URL : [https://studify-pro.netlify.app/](https://studify-pro.netlify.app/)

All seven features are working from the Front-End point of view. And yes, it's easy to extend the same code to the production level as we have followed the best practises for the code strcuture and deployment.

## User experience

We have followed the following principles of the user experience.

- Having a clear hierarchy.
- Three click principle.
- The user is in control for all their actions.
- Keeping the UI Consistent across the platform.
- Maintained the accessibility across the complete platform.

## Code quality

We have maintained the code quality across the project. We have used the ~.eslint for the project and have maintained it across the code structure.

## Architecture

We have included all seven tasks and their actual UI Implementation. We have build everything on the **ReactJS**

- User Management – From Scratch – 1/3rd 
- One-To-One Session – From scratch, used same theme and color as other pages – 1/3rd 
- Chat Groups – From Scratch – 1/3rd 
- Learning Seminars – Using Material UI library supported by ReactJS 
- Quiz – Using Bootstrap library – 2/3rd 
- Masterclass Session – Using Template – 2/3rd 
- Recorded Session – Using Template – 2/3rd 

# User work flow

### User registration
- User will be able to register trought their university mails or other mails 
- they wiil get the mail for the confermation and after conferming the link user will be able to login into the platform

### User login
- User can login using the credtials 
- User also have option to get magic link which will help user to login into the platform using confermation link into the mail

- After successfull login user will have option to use the platform feaute which are available in sidebar

### Masterclass 
- User will be able to see all the available course provided by tutors, teacher and professor.
- Using live class students can learn different topics 
  
### Recored lectures
- User will be ale to see list of all previously recored session

### ChatRoom
- User will be assigned to most suited tutor for the session.
- User can dicuss about different dounts and get solution from tutor
- There is also feature to draw on whiteboard and share image of it into the chat

### Quiz
- User can attend the quiz for the different topics set by tutors and teachers 
- User can get awared to motivate during there academics
- User can also see their study progress and performence

### Webinar
- User can see lists of all the webinars set by tutors, teacher
- User can attend the Webinar throught teams link
  
### One-to-one session
- User will be able to join session with tutor using video chat where tutors and students can attend session virtually.

## Usage of design patterns

We have added following design patters in the project :

- HOC Pattern - We have implemented the High Order Component patterns to fix the desingn pattern for the Root component.
- Provider pattern been useful to maintain the global state for the complete react app.
- We also tried to follow software development concepts by implementing some of the SOLID principles such as we tried to introduce the single responsibility principle by creating independent React Component for every small UI design. Apart from this, we also used Composite design patter to provide structural design for our front-end components. 
  
## References

- https://github.com/facebook/create-react-app/blob/main/README.md
- http://netlify.com
- https://mui.com/
- https://react-bootstrap.github.io/
- https://codepen.io/aybukeceylan/pen/pobbEYB
- https://reactjs.org/docs/faq-structure.html

## Performance optimization techniques used in the project

We have implemented the modules to optimize the cache on the browser. We have also made sure the minimum space comsumption when deadling with the Arrays or Data strctures in the react code.

Memory leaking React is a common problem which reduces the performance of the webapp, so we tried to remove the memory leaks using some of the effective ways of React. For example, we used the React Hooks to check the unmounted components which are the results of updated components. So, using useRef and useEffect helps check if component in front-end is still exists and to replace it with new component. 