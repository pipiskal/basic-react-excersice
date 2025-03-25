# React exercise.

First of all i wanted to implement the replica without using the help of external libraries so the code will be more pure and clean.

I like the idea of using css modules with the tsx cause its like a package that is isolated. You can drag it and drop in anywhere especially if its a pure component.

## Thought Process and Business analysis

1. Analyzed the design for components - Look and feel - Find inconsistencies ("checkmark not being displayed when a skip is selected") - get a feeling how the page works.

2. Checking deeper the functionality - What happens on refresh? Does it keep the state or the user have to provide the info again. What happens on skip selection (Bottom sheet appears) - whats its purpose ? (Go to the next step from the whole "registration process").

3. Trying to understand the real use case of an exercise like that and create the User Story in my mind. For example :
   - We need to collect data from a 6 step process from the user
   - We have the need to go back and forth in each step so the information can be changed.
   - We want you to select something so once you made a selection you can only change to an other option. Meaning you cant go to the next step if you do not provide details

## Technical Implementation

1. Its always better to work with a design system in mind so you have access only to the colors, spacing etc you need and decided with the design. In Our case i did a basic design system using css variable for the colors spacing etc that are being used in the page so i wont have to look for the color or the spacing every single time.

2. Folder architecture.

   ### components

   Its a small showcase but some of core separation of concerns are there. For example components containers the core pure presentation components for the whole app. They will never have any business logic its just pure components.

   ### features

   in my mind under features live basically the container components. Meaning it has business logic (fetching data etc,). So the whole 6 step process its a feature. It could be separated completely a team to work on and was one goal (gather info from the user) make the final api call and its done.Most likely you wont see it anywhere else after that process

   ### modules - misc

   Can represent logic of your consts - common - helper functions etc

   ### Services

   Services generally encapsulate the logic of your api calls. For example SKIP.CREATE_NEW(skip). You might want to create multiple skips in different places so its easier to maintain expand and work with having your serviced gather in one place.

   I have not create that in our case example cause a simple custom hook with a specific goal to fetch the list was enough.

   I can go on describing The folder architecture but it most cases it depends on preferences or what the team has agreed upon and the project needs.

3. Analyze in my mind how the state will flow. Basic revisiting step 3 of Thought Process and Business analysis. Creating a clear image in my mind how this will work and then start implementing

4. Creating of Basic pure components.

   ### Text :

   a generic text component that will provide us with the the needs of the site. Colors sizes etc. Another approach is to make a deal with the designer that h1 for example will look like that always. and structure from the beginning under your css globals your typography. Maybe a mid ore useful on a server side site not a client side with react

   ### Button :

   With a couple of variants etc.

   ### Spinner :

   Simple spinner using the icon library with a simple rotate animation

   ### Tag :

   A simple tag just for the design needs

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
