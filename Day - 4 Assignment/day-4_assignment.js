var student = [
    {
        fname: "Abhishek",
        lname: "Kumar",
        age: 20,
        city: "Bhagalpur"
    },

    {
        fname: "Shashi",
        lname: "Shekhar",
        age: 22,
        city: "Sultanganj"
    },

    {
        fname: "Anurag",
        lname: "Raj",
        age: 21,
        city: "Delhi"
    },

    {
        fname: "Prince",
        lname: "Kumar",
        age: 27,
        city: "Kolkata"
    },

    {
        fname: "Vivek",
        lname: "Kumar",
        age: 25,
        city: "Patna"
    }

]

// from for loop
for(var i=0; i< student.length; i++)
{
    console.log(student[i].fname + " " + student[i].lname);
    console.log(student[i].age);
}

//from forEach loop
student.forEach
(
    function(a,i)
    {
        console.log(a.fname + " " + a.lname);
        console.log(a.age);
    }
)