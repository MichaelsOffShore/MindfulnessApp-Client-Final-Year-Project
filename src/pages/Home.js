import React from "react";
import { useState, useEffect } from "react";
import "../styling/Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    getQuote();
  }, []);

  const navigate = useNavigate();

  let t = localStorage.getItem("token");
  const len = t.length;
  let testBooleans = {
    kentucky: true,
    toronto: true,
    maas: true,
    langer: true,
    phil: true,
    statemind: true,
    tasks: true,

  };
  for (let i = 4; i < len; i++) {
    let substring = t.substring(i, i + 2);
    switch (substring) {
      case "KI":
        testBooleans["kentucky"] = false;
        //document.getElementById("kentucky").style.filter = "blur(0px)";
        break;
      case "TO":
        testBooleans["toronto"] = false;
        //document.getElementById("toronto").style.filter =  "blur(0px)";
        break;
      case "MA":
        testBooleans["maas"] = false;
        //document.getElementById("maas").style.filter =  "blur(0px)";
        break;
      case "LA":
        testBooleans["langer"] = false;
        //document.getElementById("langer").style.filter =  "blur(0px)";
        break;
      case "PH":
        testBooleans["phil"] = false;
      //document.getElementById("phil").style.filter =  "blur(0px)";
      break;
      case "SM":
        testBooleans["statemind"] = false;
      //document.getElementById("phil").style.filter =  "blur(0px)";
      break;
      case "TA":
        testBooleans["tasks"] = false;
      //document.getElementById("phil").style.filter =  "blur(0px)";
      break;
      default:
        break;
    }
    i++;
  }

  function navigation(testName) {
    switch (testName) {
      case "kentucky":
        console.log("Kentucky");
        navigate("../MindfulnessTests/KentuckyInventory");
        break;
      case "toronto":
        console.log("toronto");
        navigate("../MindfulnessTests/TorontoMindfulnessScale");
        break;
      case "MAAS":
        navigate("../MindfulnessTests/MAAS");
        console.log("MAAS");
        break;
      case "langer":
        navigate("../MindfulnessTests/LangerMindfulness");
        console.log("langer");
        break;
      case "phil":
        navigate("../MindfulnessTests/PhilMindfulness");
        console.log("langer");
        break;
      case "statemind":
        console.log("Tasks");
        navigate("../MindfulnessTests/StateMindfulness");
        break;
      case "Tasks":
        console.log("Tasks");
        navigate("../MindfulnessTests/Tasks");
        break;
      default:
        break;
    }
  }

  function getQuote() {
    axios
      .get("https://prickly-waistcoat-cod.cyclic.app/quote")
      .then((response) => {
        console.log(response.data);
        document.getElementById("quote").innerHTML =
          '"' + response.data[0] + '"' + "<br>~" + response.data[1];
      })
      .catch((error) => {
        console.log(error);
        window.alert("There has been an error, please try again later...");
      });
  }

  return (
      <div className="Home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mindfulness App</title>
        </Helmet>
    
        <h1 className="header">Home</h1>
        
        <div className="quote">
          <h6>Quote</h6>
          <h7 id="quote"></h7>
        </div>
        
        <div className="button-container">
          <button
            class="mindfulnessTest"
            onClick={() => navigation("kentucky")}
            disabled={testBooleans["kentucky"]}
            id="kentucky"
          >
            Kentucky Inventory
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("toronto")}
            id="toronto"
            disabled={testBooleans["toronto"]}
          >
            Toronto Mindfulness Scale
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("MAAS")}
            id="maas"
            disabled={testBooleans["maas"]}
          >
            MAAS
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("langer")}
            id="langer"
            disabled={testBooleans["langer"]}
          >
            Langer Mindfulness Scale
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("phil")}
            id="phil"
            disabled={testBooleans["phil"]}
          >
            Philadelphia Mindfulness Scale
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("statemind")}
            style={{ backgroundColor: "#DEC20B", color: "white" }}
            disabled={testBooleans["statemind"]}
          >
            State Mindfulness
          </button>
          <br />
          <button
            class="mindfulnessTest"
            onClick={() => navigation("Tasks")}
            style={{ backgroundColor: "#7AA3CC", color: "white" }}
            disabled={testBooleans["tasks"]}
          >
            Tasks
          </button>
          <br />
          <button
            class="logout"
            onClick={() => navigate("/")}
            style={{ backgroundColor: "#ccc5b" }}
          >
            Logout
          </button>

        </div>
      </div>
  );
}

export default Home;
