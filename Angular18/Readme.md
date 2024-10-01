# Angular 18
### About Angular
- A Framework based on JS developed by Google for developing rich internet based UI Apps in a faster, reliable and easy manner.
- As it is developed by Google, its reliable, has a large community that is working on this and used by major Software companies for developing UI based Apps. 
- Google promises to release new version in every 6 months for better coding and new features.

### Features:
1. It has got nice Component architecture where each component is self contained unit with its own code, HTML, CSS and Unit Testing also. UR App will be made of many such components.
2. It provides a Single Page Application design. UR components will be made available inside a parent component which shall have multiple components inside it. There will be only one page visible to the user and thru Routing features, we shall update the UI with the appropriate component with which the user interacts. 
3. It provides Data Binding features where we have a clean bond b/w the HTML and UR code(JS or TS files). It can be property binding, Event binding and 2-way binding. 
4. Angular provides a very powerful Dependency Injection feature of allowing services to be injected into the components from external components and used as a singleton object within the component. 
    - PS: Dependency Injection(DI) is a feature in programming where programmers can provide the required inputs for the successful creation of an object, so that it could be used without any issues or any additional calls. It could be done at the constructor level, Property level and method level(parameters).
5. It supports a Set of APIs for making REST Calls(Async Functions) using a concept of Observers/Subscribers. Similar to Promise in JS. It is availble in Angular as a seperate module called RxJs.
6. New statemanagement techniques to manage data among the components with automatic updations if the data is modified. This is achieved in Angular 17 onwards as BehaviorSubject.
7. Angular provides a powerful Routing features fo providing hyperlinks, parameters to the links that can share data from one component to another. 

### What do U learn in Angular?
1. Components and modules. 
2. Models or classes for data representations
3. Services for Singleton objects that can be shared among components. 
4. Pipes for Data Transformations. 
5. Directives for customized presentations. 
6. Routing for loading components. 
7. Lazy Loading of modules. 

### What is requried for learning Angular?
1. U need to know TypeScript, a JS based language developed by MS. It is Typesafe JS. 
2. Angular CLI, a Command line Utility for creating Angular boilerplate code.
3. Install Nodejs in UR machines.  

### How to create Angular Apps?
1. Install nodejs in UR machine.(Already done in our NODEJS Training). 
2. Install Angular CLI.
```
npm install -g @angular/cli
ng version
npm uninstall -g @angular/cli
```  
3. With the CLI, we can create angular apps from the terminal or the command line. With CLI commands, we can get a bare minimal code with all the std folder structure that is recommended by Angular. This shall have all the requirements for executing UR Angular Application and over it, U shall add your requried code and logic. --open shall open the application directly on the default browser, --port shall allow to modify the port no if requried. Default is 4200.  
```
ng new app-name
cd app-name
ng serve --open --port
```



