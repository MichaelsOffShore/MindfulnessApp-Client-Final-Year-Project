import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import date from "date-and-time";

import axios from "axios";

import "../styling/Phil.css";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

StylesManager.applyTheme("defaultV2");

function PhilMindfulness() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function getDateTime() {
    const pattern = date.compile("MMM D YYYY h:m:s A");
    return date.format(new Date(), pattern);
  }
  function reverseScore(score) {
    switch (score) {
      case 1:
        return 5;
      case 2:
        return 4;
      case 3:
        return 3;
      case 4:
        return 2;
      case 5:
        return 1;
      default:
        return 0;
    }
  }

  const startTime = getDateTime();
  const surveyJson = {
    pages: [
      {
        elements: [
          {
            name: "1",
            title: "I am aware of what thoughts are passing through my mind.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "2",
            title: "I try to distract myself when I feel unpleasant emotions.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When talking with other people, I am aware of their facial and body expressions.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "4",
            title: "There are aspects of myself I don’t want to think about.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When I shower, I am aware of how the water is running over my body.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "I try to stay busy to keep thoughts or feelings from coming to mind.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When I am startled, I notice what is going on inside my body",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "8",
            title: "I wish I could control my emotions more easily",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When I walk outside, I am aware of smells or how the air feels against my face.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "10",
            title: "I tell myself that I shouldn’t have certain thoughts.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When someone asks how I am feeling, I can identify my emotions easily",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "12",
            title: "There are things I try not to think about.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "13",
            title: ". I am aware of thoughts I’m having when my mood changes.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "14",
            title: "I tell myself that I shouldn’t feel sad.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "I notice changes inside my body, like myheart beating faster or my muscles getting tense.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "If there is something I don’t want to think about, I’ll try many things to get it out of my mind.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "Whenever my emotions change, I am conscious of them immediately.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "18",
            title: "I try to put my problems out of mind.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              "When talking with other people, I am aware of the emotions I am experiencing",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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
              " When I have a bad memory, I try to distract myself to make it go away.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very Often" },
              { value: 4, text: "Often" },
              { value: 3, text: "Sometimes" },
              { value: 2, text: "Rarely" },
              { value: 1, text: "Never" },
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

    let acceptanceScore = 0;
    let awarenessScore = 0;

    let qDataNew = {};
    let numQuestionsAnswered = 0;

    qDataNew["Questions"] = [];

    for (let j = 0; j < qData.length; j++) {
      delete qData[j]["data"];
      delete qData[j]["isNode"];

      if (qData[j]["value"] == null) {
        qData[j]["value"] = 0;
        continue;
      }
      if ((j + 1) % 2 === 1) {
        // its an odd question
        awarenessScore += qData[j]["value"];
      } else {
        acceptanceScore += reverseScore(qData[j]["value"]);
      }

      numQuestionsAnswered++;

      qDataNew["Questions"].push(qData[j]);
    }
    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "Philadelphia Mindfulness Scale";

    if (numQuestionsAnswered === 20) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }

    qDataNew["Awareness Mindfulness Score"] = awarenessScore + "/50";
    qDataNew["Acceptance Mindfulness Score"] = acceptanceScore + "/50";

    qDataNew["Start Time"] = startTime;
    qDataNew["End Time"] = endTime;

    axios
      .post("http://localhost:8000/addQuestionnaireData", qDataNew)
      .then(function (response) {
        navigate("/pages/Home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <div className="PhilMindfulness">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <h2 className="header">Philadelphia Mindfulness Scale</h2>
      <Survey model={survey} />
    </div>
  );
}

export default PhilMindfulness;
