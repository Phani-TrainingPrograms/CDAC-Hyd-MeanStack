//Events are actions performed by the user on the object. Examples would be click, mouse activities, keyboard activities, resize are some of the events performed by the User on the UI. U can also create UR own events which has mechanism to raise at appropriate point of time and invoke a callback function if that action is performed.
//Nodejs gives a module Events module which allows to register an event and raise it when requried. 
//U must register for an event using on method and wait for the action to perform. Programmatically U can raise(act) an event using emit.

const myEvents = require('events');

const button = new myEvents();
//U shall register events for this button.
button.on('myClick', ()=>{
    console.log("Button was clicked");
});


 button.emit('myClick');//Emit is a method of the eventemiter to raise a specific event identified by the name of the event.
 //We shall use this feature in our Output directive of Angular for emitting the data to the outer component from the inner component. 
 
