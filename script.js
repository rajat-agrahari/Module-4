//Declaration of Array

var names = ["Yaakov", "John", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var prop in names){
       if((names[prop].charAt(0)=='J')||(names[prop].charAt(0)=='j'))
        console.log("Good bye "+names[prop]);
        else
        console.log("Hello "+names[prop]);
}



