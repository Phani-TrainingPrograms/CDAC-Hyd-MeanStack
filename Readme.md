# Mean Stack Training for CDAC-Hyd.
### Content coverage:
1. javascript basics and work on the UI app development using JS
2. Nodejs, platform for developing JS Apps.(1 day). 
3. UI App Development using Angular.(3 days)
4. React App development. 
### Timings:
- It starts from 10 AM to 12 PM and then 2 PM to 4 PM. 

### Software and hardware U need to practise:
1. Windows OS. 
2. VS Code, an Text editor for developing JS based Applications.
3. UR backend storage : FileSystems, Database(MySQL, MongoDb, SQL server), Cloud setup(Azure, AWS). 
4. Ability to connect to internet and download the packages(Additional libraries) for our development work. 

### Scripting languages: 
- Languages that are designed to work on thin software called browsers are called as Scripting languages. They are designed to be light weight and executed inside the browsers. These browsers have interpretors that shall understand the code that U want to execute in them. The most popular scripting language is JavaScript. It is open source and maintained by a Group of Computer manufacturers called ECMA(European Computer manufactureres association).
- Client side scripting and Server side scripting : All scripting languages are designed to work for internet based application development. here app could be executed in a dedicated machine called as Web server. This software shall process every interaction from the user thru internet and returns(RENDERS) the content to the requested user. Prominent web servers are IIS(Windows), Apache Tomcat(open source, multiple platforms), Websphere(IBM). Apps that are hosted in this web server and all the programming aspects are supposed to be executed in this machine are called as Server side applications. Prominent server side programming are JSP, ASP.NET and PHP. 
- Client side programming is where the content that performs the programming logic shall be placed inside the HTML pages and are executed inside the browser. Browsers reside in the client machines. As the processing happens in the client machines, we call such scripting languages as client side scripting languages. Prominent scripting languages are JS, VBScript, Python. JS is the most popular scripting languages. It is also the default scripting language in all the browsers. 
- Web Apps are developed in the form of HTML Pages. The stds for the web apps are maintained by W3C(World wide Web Consortium), here JS is recommended to be the default scripting language for all the browsers. so this is the reason why JS is the most popular scripting langauge among the Web App Developers.

### How to develop Web Apps?
- U need to have a dedicated machine where all the content(Web pages) that U want to publish is stored. 
- A Web server to host UR Web Pages. 
- A Technology for having a Persistance layer(Data saving layer). This could be ASP.NET, PHP, Perl, Python and JSP.
- All Web Apps are developed using HTML.  
- HTML pages are static by nature. (They dont get automatically modified based on any programming logic).
- To generate the html output based on a certain logic which is achieved using a Scripting language, we need JS.

### JS Basics:
#### What is JavaScript?
1. JS is a open source scripting language that helps in developing rich internet based applications using both client side as well as server side technologies(NODE.js).
2. JS code is executed either inside a browser where we embed the JS code inside the HTML pages or we can execute the JS files directly using Node Terminals.
3. JS executable out of browser are called as NODEJS Apps.

#### How to perform basic inputs and display in a HTML Page.
- We shall use &lt;script&gt; tag to place any JS code inside the HTML. 
- For UI based interactions we have 3 functions of JS that can be used to take inputs and display the content as output. 
```
<script>

</script>
``` 
1. alert : Used to display high priority messages to the user on the browser. It is blocking Function where the user has to acknowledge before the next execution could happen. 
2. prompt: It allows the user to view a question and type the answer for the question and that shall be the return value for this function. 
3. confirm: Used when U want to question the user and expect a boolean answer, yes, no, okay, cancel kind of answers.

### Variables in JS:
1. variables are not type specific in JS, there is not type declarations for variables in JS.
2. var, let and const are the ways of creating variables in JS.
    - var is the old way of declaring variables which is now obselete and is not popular among the new developers. 
    - let is used to declare variables. let is more scope based compared to var.  
    - const is used to declare constants or the data that does not modify in its course.
3. JS identifies number, string, boolean, object as the possible data types.
4. If a variable is declared but not assigned to anything, it is called as undefined. JS allows variables to be refered without declaring it. In that case, if an unassigned variable is refered, it is considered as undefined.  
5. use const keyword for the data that U dont intend to change. Most of the cases, the inputs will be const data as they shall not be modified after the input is recieved from the user.
6. var is the old way of declaring variables, but it is not safe. It is more global in nature compared to let which is more scope based. let is scope based.  




