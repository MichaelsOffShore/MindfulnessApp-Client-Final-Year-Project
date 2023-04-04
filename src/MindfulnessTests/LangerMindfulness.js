import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import date from "date-and-time";

import axios from "axios";

import "../styling/LangerMindfulness.css";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

StylesManager.applyTheme("defaultV2");

function LangerMindfulness() {
  const navigate = useNavigate();

  let reverseScores = ["2", "5", "7", "8", "9", "15", "19", "21"];
  function getDateTime() {
    const pattern = date.compile("MMM D YYYY h:m:s A");
    return date.format(new Date(), pattern);
  }
  function reverseScore(score) {
    switch (score) {
      case 1:
        return 7;
      case 2:
        return 6;
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return 3;
      case 6:
        return 2;
      case 7:
        return 1;
      default:
        break;
    }
  }
  const startTime = getDateTime();
  const surveyJson = {
    pages: [
      {
        elements: [
          {
            name: "1",
            title: "I like to investigate things",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "2",
            title: "I generate few novel ideas",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "3",
            title: "I am always open to new ways of doing things",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "4",
            title: 'I "Get involved" in almost everything I do',
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "5",
            title: "I do not actively seek to learn new things",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "6",
            title: "I make many novel contributions",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "7",
            title: "I stay with the old tried and true ways of doing things",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "8",
            title: "I seldom notice what other people are up to",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "9",
            title: "I avoid thoguth provoking conversations",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "10",
            title: "I am very creative",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "11",
            title: "I can behave in many different ways for a given situation",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "12",
            title: 'I attend to the "big picture"',
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "13",
            title: "I am very curious",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "14",
            title: "I try to think of new ways of doing things",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "15",
            title: "I am rarely aware of changes",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
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
              "I have an open-mind about everything, even things that challenge my core believes",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "17",
            title: "I like to be challenged intellectually",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "18",
            title: "I find it wasy to create new and effective ideas",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "19",
            title: "I am rarely alert to new developments",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "20",
            title: "I like to figure out how things work",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "21",
            title: "I am not an original thinker",
            type: "radiogroup",
            choices: [
              { value: 7, text: "Strongly Agree" },
              { value: 6, text: "Agree" },
              { value: 5, text: "Slightly Agree" },
              { value: 4, text: "Neutral" },
              { value: 3, text: "Slightly Disagree" },
              { value: 2, text: "Disagree" },
              { value: 1, text: "Strongly Disagree" },
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

    // mindfulness scores
    let qDataNew = {};
    let numQuestionsAnswered = 0;

    let flexiblityScoreBank = ["3", "7", "11", "16"];
    let noveltySeekingScoreBank = ["1", "5", "9", "13", "17", "20"];
    let noveltyProducingScoreBank = ["2", "6", "10", "14", "18", "21"];

    // scores
    let overallScore = 0;
    let flexiblityScore = 0;
    let noveltySeekingScore = 0;
    let noveltyProducingScore = 0;
    let engagementScore = 0;

    qDataNew["Questions"] = [];

    for (let j = 0; j < qData.length; j++) {
      delete qData[j]["data"];
      delete qData[j]["isNode"];

      if (qData[j]["value"] == null) {
        qData[j]["value"] = 0;
        continue;
      }

      overallScore += qData[j]["value"];

      if (reverseScores.includes(qData[j]["name"])) {
        qData[j]["value"] = reverseScore(qData[j]["value"]);
      }

      if (flexiblityScoreBank.includes(qData[j]["name"])) {
        flexiblityScore += qData[j]["value"];
      } else if (noveltySeekingScoreBank.includes(qData[j]["name"])) {
        noveltySeekingScore += qData[j]["value"];
      } else if (noveltyProducingScoreBank.includes(qData[j]["name"])) {
        noveltyProducingScoreBank += qData[j]["value"];
      } else {
        engagementScore += qData[j]["value"];
      }

      numQuestionsAnswered++;

      if (reverseScores.includes(qData[j]["name"])) {
        console.log("Q" + qData[j]["name"] + " is reverse");
        //curiosityScore+=qData[j]["value"];
      }

      qDataNew["Questions"].push(qData[j]);
    }
    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "Langer Mindfulness Scale";

    if (numQuestionsAnswered === 21) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }

    qDataNew["Overall Mindfulness Score"] = overallScore + "/147";
    qDataNew["Flexibility Score"] = flexiblityScore + "/28";
    qDataNew["Novelty Seeking Score"] = noveltySeekingScore + "/42";
    qDataNew["Novelty Producing Score"] = noveltyProducingScore + "/42";
    qDataNew["Engagement Score"] = engagementScore + "/35";

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
    <div className="LangerMindfulness">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>
      <h2>Langer Mindfulness Scale</h2>
      <Survey model={survey} />
    </div>
  );
}

export default LangerMindfulness;
