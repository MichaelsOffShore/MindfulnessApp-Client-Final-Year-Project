import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import date from "date-and-time";

import axios from "axios";

import "../styling/TorontoMindfulnessScale.css";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

StylesManager.applyTheme("defaultV2");

function TorontoMindfulnessScale() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // check if the question name is present here
  const curiosityScoreQuestions = ["3", "5", "6", "10", "12", "13"];
  const decenteringScoreQuestions = ["1", "2", "4", "7", "8", "9", "11"];

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
              "I experienced myself as separate from my changing thoughts and feelings",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am more concerned with being open to my experiences than controlling or changing them",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              " I am curious about what I might learn about myself by taking notice of how I react to certain thoughts, feelings or sensations",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              'I experience my thoughts more as events in my mind than as a necessarily accurate reflection of the way things "really" are',
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am curious to see what my mind is up to from moment to moment",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am curious about each of the thoughts and feelings that I was having",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am receptive to observing unpleasant thoughts and feelings withoutinterfering with them",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am more invested in just watching my experiences as they arose,than in figuring out what they could mean",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I approach each experience by trying to accept it, no matter whetherit was pleasant or unpleasant",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I remain curious about the nature of each experience as it arose",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am aware of my thoughts and feelings without over identifying with them",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "12",
            title: "I am curious about my reactions to things",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
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
              "I am curious about what I might learn about myself by just taking notice of what my attention gets drawn to",
            type: "radiogroup",
            choices: [
              { value: 4, text: "Very much" },
              { value: 3, text: "Quite a bit" },
              { value: 2, text: "Moderately" },
              { value: 1, text: "A little" },
              { value: 0, text: "Not at all" },
            ],
            isRequired: false,
          },
        ],
      },
    ],
  };
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  let curiosityScore = 0;
  let decenteringScore = 0;

  const alertResults = useCallback((sender) => {
    const endTime = getDateTime();
    const qData = JSON.parse(JSON.stringify(survey.getPlainData()));
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

      numQuestionsAnswered++;

      if (curiosityScoreQuestions.includes(qData[j]["name"])) {
        console.log(qData[j]["name"] + " is curiousity");
        curiosityScore += qData[j]["value"];
      } else if (decenteringScoreQuestions.includes(qData[j]["name"])) {
        console.log(qData[j]["name"] + " is decentering");
        decenteringScore += qData[j]["value"];
      }

      qDataNew["Questions"].push(qData[j]);
    }

    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "Toronto Mindfulness Scale";

    if (numQuestionsAnswered === 13) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }

    qDataNew["Curiosity Score"] = curiosityScore + "/24";
    qDataNew["Decentering Score"] = decenteringScore + "/28";

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
    <div className="TorontoMindfulnessScale">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>
      <h2>Toronto Mindfulness Scale</h2>
      <Survey model={survey} />
    </div>
  );
}

export default TorontoMindfulnessScale;
