import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import date from "date-and-time";

import axios from "axios";

import "../styling/MAAS.css";

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
              "I could be experiencing some emotion and not be conscious of it until some time later",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I break or spill things because of carelessness, not paying  attention, or thinking of something else",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I find it difficult to stay focused on what’s happening in the present",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I tend to walk quickly to get where I’m going without paying attention to what I experience along the way",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I tend not to notice feelings of physical tension or discomfort  until they really grab my attention",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I forget a person’s name almost as soon as I’ve been told it  for the first time",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "It seems I am “running on automatic,” without much awareness  of what I’m doing",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I rush through activities without being really attentive to them",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I get so focused on the goal I want to achieve that I lose touch  with what I’m doing right now to get there",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I do jobs or tasks automatically, without being aware of what  I'm doing",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I find myself listening to someone with one ear, doing  something else at the same time",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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
              "I drive places on ‘automatic pilot’ and then wonder why I went  there",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "13",
            title: "I find myself preoccupied with the future or the past",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "14",
            title: "I find myself doing things without paying attention",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "15",
            title: "I snack without being aware that I’m eating",
            type: "radiogroup",
            choices: [
              { value: 6, text: "Almost Never" },
              { value: 5, text: "Very Infrequently" },
              { value: 4, text: "Somewhat Infrequently" },
              { value: 3, text: "Somewhat Frequently" },
              { value: 2, text: "Very Frequently" },
              { value: 1, text: "Almost Always" },
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

    let dispositionalMindfulnessScore = 0;
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
      totalScore += qData[j]["value"];
      numQuestionsAnswered++;

      qDataNew["Questions"].push(qData[j]);
    }

    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "MAAS";

    if (numQuestionsAnswered === 15) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }

    dispositionalMindfulnessScore = totalScore / numQuestionsAnswered;
    if (dispositionalMindfulnessScore % 1 !== 0) {
      dispositionalMindfulnessScore =
        Math.round((dispositionalMindfulnessScore + Number.EPSILON) * 100) /
        100;
    }

    qDataNew["Dispositional Mindfulness Score"] =
      dispositionalMindfulnessScore + "/6";

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
    <div className="MAAS">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <h2 className="header">MAAS</h2>
      <Survey model={survey} />
    </div>
  );
}

export default MAAS;
