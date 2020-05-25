"use strict"



const CourseFetch = () => {
  fetch("https://6xw4o0lyig.execute-api.us-east-1.amazonaws.com/dev/getcourses").then(
    res=>{
      res.json().then(
        data =>{
          console.log(data);
          if(data.length>0){
            var temp = "";
            data.forEach((CourseData)=>{
              temp += "<tr>";
              temp += "<td>" + CourseData.courseid + "</td>";
              temp += "<td>" + CourseData.title + "</td>";
              temp += "<td>" + CourseData.desc + "</td></tr>";
            })
            document.getElementById("data").innerHTML = temp;
          }
        }
      )
    }
  )
}

window.onload = CourseFetch;
