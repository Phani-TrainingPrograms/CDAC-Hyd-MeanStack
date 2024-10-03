export interface Employee {
    id : number;
    name : string;
    address : string;
    salary : number;
    empPic : string; //Images will be placed in a folder under public. 
}

//An interface works like struct wher the methods work like fields and the implementation classes provide the actual definition to those functions. In TS, if U want a class that contain only fields but no functions in it, U can make it like an interface.  