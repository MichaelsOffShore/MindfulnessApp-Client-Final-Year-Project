import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";
import date from "date-and-time";
import axios from "axios";
import "../styling/StateMindfulness.css";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

StylesManager.applyTheme("defaultV2");

function MAAS() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function getDateTime() {
    const pattern = date.compile("MMM D YYYY h:m:s A");
    return date.format(new Date(), pattern);
  }

  const startTime = getDateTime();
  const surveyJson = {
    pages: [
      {
        elements: [
          {
            name: "1",
            title:
              "I was aware of different emotions that arose in me",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "2",
            title:
              "I tried to pay attention to pleasant and unpleasant sensations",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "3",
            title:
              "I found some of my experiences interesting",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "4",
            title:
              "I noticed many small details of my experience",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "5",
            title:
              "I felt aware of what was happening inside of me",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "6",
            title:
              "I noticed pleasant and unpleasant emotions",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "7",
            title:
              "I actively explored my experience in the moment",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "8",
            title:
              "I clearly physically felt what was going on in my body",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "9",
            title:
              "I changed my body posture and paid attention to the physical process of moving",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "10",
            title:
              "I felt that I was experiencing the present moment fully",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "11",
            title:
              "I noticed pleasant and unpleasant thoughts",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "12",
            title:
              "I noticed emotions come and go",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "13",
            title:
              "I noticed various sensations caused by my surroundings (e.g., heat, coolness, the wind on my face)",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "14",
            title:
              "I noticed physical sensations come and go",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "15",
            title:
              "I had moments when I felt alert and aware",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "16",
            title:
              "I felt closely connected to the present moment",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "17",
            title:
              "I noticed thoughts come and go ",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "18",
            title:
              "I felt in contact with my body",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "19",
            title:
              "I was aware of what was going on in my mind",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "20",
            title:
              "It was interesting to see the patterns of my thinking",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "21",
            title:
              "I noticed some pleasant and unpleasant physical sensations",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Well" },
              { value: 4, text: "Quite Well" },
              { value: 3, text: "Somewhat Well" },
              { value: 2, text: "Not Really Well" },
              { value: 1, text: "Not At All" },
            ],
            isRequired: false,
          },
        ],
      },
    ],
  };
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  const alertResults = useCallback((sender) => {
    const endTime = getDateTime();
    const qData = JSON.parse(JSON.stringify(survey.getPlainData()));
    const mindSubscaleBank = ["1","2","3","4","5","6","7","10","11","12","15","16","17","19","20"];
    let mindSubscale = 0;
    let bodySubscale = 0;
    let qDataNew = {};
    let numQuestionsAnswered = 0;
    let totalScore = 0;

    qDataNew["Questions"] = [];

    for (let j = 0; j < qData.length; j++) {
      delete qData[j]["data"];
      delete qData[j]["isNode"];

      if (qData[j]["value"] == null) {
        qData[j]["value"] = 0;
        continue;
      }
      let curScore = qData[j]["value"];
      if(mindSubscaleBank.includes(qData[j]["name"])){
        mindSubscale+=curScore;
      }else{
        bodySubscale+=curScore;
      }
      totalScore += curScore;
      numQuestionsAnswered++;
      qDataNew["Questions"].push(qData[j]);
    }
    
    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "StateMindfulness";

    if (numQuestionsAnswered === 21) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }
    
   qDataNew["Total Score"] = totalScore + "/105";
   qDataNew["Mind-Subscale"] = mindSubscale + "/75";
   qDataNew["Body-Subscale"] = bodySubscale + "/30";


    qDataNew["Start Time"] = startTime;
    qDataNew["End Time"] = endTime;

    axios
      .post("https://prickly-waistcoat-cod.cyclic.app/addQuestionnaireData", qDataNew)
      .then(function (response) {
        navigate("/pages/Home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <div className="StateMindfulness">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <h2 className="header">State Mindfulness</h2>
      <h4>Please use the rating scale to indicate how well each 
        statement describes your experiences in the past 15 minutes</h4>

      <Survey model={survey} />
    </div>
  );
}

export default MAAS;
