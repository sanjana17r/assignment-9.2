//Constructor Function that returns object
function Airplane(model, seatingcapacity,maximumspeed) {
    var o = {
     model: model,
     seatingcapacity:seatingcapacity,
     maximumspeed: maximumspeed,
     print: function(){
      console.log("Model " + this.model + " seating " + this.seatingcapacity + " max speed " + this.maximumspeed);
     }
    }
    return o;//the properties of the airplane is returned,(through print method).
   };
   //three objects are declared corresponding to airplane
   var airplane1=new Airplane("jumbo",286,800);
   var airplane2=new Airplane("mini jumbo",200,700);
   var airplane3=new Airplane("jumbo",320,900);
   function createprint() //this function is used to call the print methods of all the three objects.
   {  
       airplane1.print();
       airplane2.print();
       airplane3.print();
   };
   createprint(); //print methods of all the three objects are called.

   function modification() //this function is used to modify the properties of the objects as asked in the assignment.
   {   //maximum speed for all the objects are deleted.
       delete airplane1.maximumspeed;
       delete airplane2.maximumspeed;
       delete airplane3.maximumspeed;
       //seating capacity for all the objects are increased to 10.
       airplane1.seatingcapacity+=10;
       airplane2.seatingcapacity+=10;
       airplane3.seatingcapacity+=10;
        //new property average speed for all the objects are set to 600.
       airplane1.averagespeed=600;
       airplane2.averagespeed=600;
       airplane3.averagespeed=600;
   };

  modification();//by calling this function,all the 3 objects get modified as shown above.
  console.log(airplane1)
   

