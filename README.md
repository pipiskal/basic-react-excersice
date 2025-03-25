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

# Technical Implementation

#### Its always better to work with a design system in mind so you have access only to the colors, spacing etc you need and decided with the design. In Our case i did a basic design system using css variable for the colors spacing etc that are being used in the page so i wont have to look for the color or the spacing every single time.

### 1. Folder architecture.

#### components

Its a small showcase but some of core separation of concerns are there. For example components hold the core pure presentation components for the whole app. They will never have any business logic its just pure components.

#### features

In my mind under features live basically the container components. Meaning it has business logic (fetching data etc,). So the whole 6 step process its a feature. It could be separated completely for a team to work on and has one goal (gather info from the user) make the final api call and its done. Most likely you wont see it anywhere else after that process

#### modules - misc

Can represent logic of your consts - common - helper functions etc

#### Services

Services generally encapsulate the logic of your api calls. For example SKIP.CREATE_NEW(skip). You might want to create multiple skips in different places so its easier to maintain expand and work with having your serviced gather in one place.

I have not created that in our case example cause a simple custom hook with a specific goal to fetch the list was enough.

I can go on describing The folder architecture but it most cases it depends on preferences or what the team has agreed upon and the project needs.

### 2. State management.

Analyze in my mind how the state will flow. Basic revisiting step 3 of Thought Process and Business analysis. Creating a clear image in my mind how this will work and then start implementing

### 3. Creating Basic Pure components

#### Text :

a generic text component that will provide us with the the needs of the site. Colors sizes etc. Another approach is to make a deal with the designer that h1 for example will look like that always. and structure from the beginning under your css globals your typography. Maybe a mid ore useful on a server side site not a client side with react.

Under text you can also have your "keys" for the translation and with typescript "protect it" to accept it the correct context. The same goes with design system. You can make generic types from our theme.ts for example and add them in the components that use color - spacings - Icons etc as props so in case we add a new color it will appear everywhere.

#### Button :

With a couple of variants etc.

#### Spinner :

Simple spinner using the icon library with a simple rotate animation

#### Tag :

A simple tag just for the design needs

### 4. Wrapping up.

- I have my components my "design system" my state management in mind. Time to create the SkipCard that take part of the Skip list. I design the SkipCard to be specific for this use case. Meaning it includes text that its specific for the use case. It could be more generic props like title, description etc and the whole text would be provided from the List(parent). For our case now i think its ok.

- For simplicity i did not tried to calculate the price after tax to show it to the user.

- Separating the list and the card component its easier to maintain i believe. I could have be done in one file but i prefer it that way

- Isolating The fetching -- and the rest of the business logic under the custom hook

- Finally our feature file SelectSkip is clear. It handle the "business" - state (I uplifted the state cause it was needed in the BottomSheet as well)

- I believe its maintainable easy to read and debug.

## Improvements :

- The fetching is basic and the error handling cause its a small case. Generally i encapsulate the fetching mechanism under a request that can accept "GET", "PATCH", "DELETE" etc, so i wont write again and again the boiler plate. I can handle global errors like 401 if you are working with rest or adjust it for something else like GraphQl

- Component wise - Recently i am working with Mantine so i could use that i guess for the basic components. But custom ones work as well.

- The loading spinner appears every single time the components gets rendered. We can implement custom caching perhaps with closure if i have it in "memory" do not run the call again if we know that the data wont change to reduce the network calls and we don not break the flow if the user when its going back and forth.

For that i like Tanstack query for client applications cause it has a very consistent way of getting info and making mutations also caching where you stale data. So it seems that like 1 person wrote the code.

- Personally for that use case i did not feel to use more complex technics like Provider or reducer for my state. The code is simpler that way anyone can read it and modify it. Also no need for useMemo or something for memoization

- We can add some testing. Unit tests for the components do they work as expected with the provided props?. Integration testing ? Mock fetching and make sure the list is working property. Also an end to end testing? The whole 6 step process that is working correctly.

- Finally for the design if i could provided a feedback, i felt as a user that i wanted the info to be more clear ("the contrast") for the price. I am gonna pay so i am always careful as a user that i have selected correctly and you point my selection Large and clear.

Thats it i guess i am open for any questions - improvements etc. Thank you.
