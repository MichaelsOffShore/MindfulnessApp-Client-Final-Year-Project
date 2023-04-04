// see how long users take to complete tasks too
// get tasks from a task collection in mongodb
import React from "react";
import axios from "axios";
import "../styling/Tasks.css";
import { Helmet } from "react-helmet";
import "survey-core/defaultV2.min.css";
import { useNavigate } from "react-router-dom";
import date from "date-and-time";


function Tasks() {
  const navigate = useNavigate();
  const link = localStorage.getItem("link");
  let startTime = getDateTime();
  
  function submitInfo() {
    let responseValue = document.getElementById("response").value;
    if(responseValue === ""){
      responseValue = "Response Not Submitted";
    }
    axios.post("https://prickly-waistcoat-cod.cyclic.app/addQuestionnaireData", {
    "Token": localStorage.getItem("token"),
    "MindfulnessTest": "Task",
    "media-content":localStorage.getItem("link"),
    "reponse":responseValue,
    "startTime":startTime,
    "endTime": getDateTime()
    })
    .then(response => {
      navigate("/pages/Home");
    })
    .catch(error => {
      console.log(error);
      window.alert("There has been an error, please try again later...");
    });
  }
  function getDateTime() {
    const pattern = date.compile("MMM D YYYY h:m:s A");
    return date.format(new Date(), pattern);
  }
  return (
    <div className="Tasks">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <h1 className="header">Tasks</h1>

      <h5 id="subHeading">
        Please look at this image/video for the time specified by your researcher and talk about what thoughts went through your head while observing it.<br />How did it make you feel?
      </h5>

      <a href={link} target="_blank">
        {link}
      </a>
      <br />
      <br />
      <textarea id="response" cols="40" rows="10" defaultValue="" placeholder="Enter your response here!"></textarea>
      <br />
      <br />
      <button
        class="submitInfo"
        onClick={submitInfo}
        style={{ backgroundColor: "#ccc5b" }}
      >
        Submit
      </button>
      <br />
      <br /> <br />
      <br />
      <button
        class="back"
        onClick={() => navigate("/pages/Home")}
        style={{ backgroundColor: "#ccc5b" }}
      >
        Back
      </button>
    </div>
  );
}

export default Tasks;
