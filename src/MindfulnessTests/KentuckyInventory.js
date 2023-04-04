import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import date from "date-and-time";

import axios from "axios";

import "../styling/KentuckyInventory.css";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

StylesManager.applyTheme("defaultV2");

function KentuckyInventory() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const startTime = getDateTime();

  // check if the question name is present here
  const reverseQuestions = [
    "14",
    "18",
    "22",
    "3",
    "11",
    "23",
    "27",
    "31",
    "35",
    "4",
    "8",
    "12",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
  ];
  const observeQuestions = [
    "1",
    "5",
    "9",
    "13",
    "17",
    "21",
    "25",
    "29",
    "30",
    "33",
    "37",
    "39",
  ];
  const describeQuestions = ["2", "6", "10", "14", "18", "22", "26", "34"];
  const awarenessQuestions = [
    "3",
    "7",
    "11",
    "15",
    "19",
    "23",
    "27",
    "31",
    "35",
    "38",
  ];
  const judgementQuestions = [
    "4",
    "8",
    "12",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
  ];

  function getDateTime() {
    const pattern = date.compile("MMM D YYYY h:m:s A");
    return date.format(new Date(), pattern);
  }

  const surveyJson = {
    pages: [
      {
        elements: [
          {
            name: "1",
            title:
              "I notice changes in my body, such as whether my breathing slows down or speeds up.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],
            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "2",
            title: "I’m good at finding the words to describe my feelings.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I do things, my mind wanders off and I’m easily distracted.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I criticize myself for having irrational or inappropriate emotions.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I pay attention to whether my muscles are tense or relaxed.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I can easily put my beliefs, opinions, and expectations into words.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I’m doing something, I’m only focused on what I’m doing, nothing else.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I tend to evaluate whether my perceptions are right or wrong.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I’m walking, I deliberately notice the sensations of my body moving.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I’m good at thinking of words to express my perceptions, such as how things taste, smell, or sound.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I drive on “automatic pilot” without paying attention to what I’m doing.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I tell myself that I shouldn’t be feeling the way I’m feeling.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I take a shower or bath, I stay alert to the sensations of water on my body.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "It’s hard for me to find the words to describe what I’m thinking.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I’m reading, I focus all my attention on what I’m reading.",
            type: "radiogroup",
            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I believe some of my thoughts are abnormal or bad and I shouldn’t think that way.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I notice how foods and drinks affect my thoughts, bodily sensations, and emotions. ",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I have trouble thinking of the right words to express how I feel about things. ",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "When I do things, I get totally wrapped up in them and don’t think about anything else.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I make judgments about whether my thoughts are good or bad.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
              "I pay attention to sensations, such as the wind in my hair or sun on my face.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },

      {
        elements: [
          {
            name: "22",

            title:
              "When I have a sensation in my body, it’s difficult for me to describe it because I can’t  find the right words.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },

      {
        elements: [
          {
            name: "23",

            title:
              "I don’t pay attention to what I’m doing because I’m daydreaming, worrying, or otherwise distracted.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },

      {
        elements: [
          {
            name: "24",

            title:
              "I tend to make judgments about how worthwhile or worthless my experiences are.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },

      {
        elements: [
          {
            name: "25",

            title:
              "I pay attention to sounds, such as clocks ticking, birds chirping, or cars passing.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "26",

            title:
              "Even when I’m feeling terribly upset, I can find a way to put it into words.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "27",

            title:
              "When I’m doing chores, such as cleaning or laundry, I tend to daydream or think ofother things.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "28",

            title:
              "I tell myself that I shouldn’t be thinking the way I’m thinking.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "29",

            title: "I notice the smells and aromas of things.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "30",

            title: "I intentionally stay aware of my feelings.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "31",

            title:
              "I tend to do several things at once rather than focusing on one thing at a time.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "32",

            title:
              "I think some of my emotions are bad or inappropriate and I shouldn’t feel them.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "33",

            title:
              "I notice visual elements in art or nature, such as colors, shapes, textures, or patterns oflight and shadow.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "34",

            title: "My natural tendency is to put my experiences into words.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "35",

            title:
              "When I’m working on something, part of my mind is occupied with other topics, suchas what I’ll be doing later, or things I’d rather be doing.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "36",

            title: "I disapprove of myself when I have irrational ideas.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "37",

            title:
              "I pay attention to how my emotions affect my thoughts and behavior.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "38",

            title:
              "I get completely absorbed in what I’m doing, so that all my attention is focused on it.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
            ],

            isRequired: false,
          },
        ],
      },
      {
        elements: [
          {
            name: "39",

            title: "I notice when my moods begin to change.",

            type: "radiogroup",

            choices: [
              { value: 5, text: "Very often or always true" },
              { value: 4, text: "Often true" },
              { value: 3, text: "Sometimes true" },
              { value: 2, text: "Rarely true" },
              { value: 1, text: "Never or very rarely true" },
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
    function reverseScore(score) {
      let newScore = [];
      switch (score) {
        case 1:
          newScore.push(5);
          newScore.push("Very often or always true");
          break;

        case 2:
          newScore.push(4);
          newScore.push("Often true");
          break;

        case 4:
          newScore.push(2);
          newScore.push("Rarely true");
          break;

        case 5:
          newScore.push(1);
          newScore.push("Never or very rarely true");
          break;

        default:
          break;
      }
      return newScore;
    }
    let qDataNew = {};
    let numQuestionsAnswered = 0;
    let observationScore = 0;
    let descriptionScore = 0;
    let awarenessScore = 0;
    let judgmentScore = 0;

    qDataNew["Questions"] = [];

    for (let j = 0; j < qData.length; j++) {
      delete qData[j]["data"];
      delete qData[j]["isNode"];
      if (qData[j]["value"] == null) {
        qData[j]["value"] = 0;
        continue;
      }

      numQuestionsAnswered++;

      if (observeQuestions.includes(qData[j]["name"])) {
        if (reverseQuestions.includes(qData[j]["name"])) {
          let reverseTemp = reverseScore(qData[j]["value"]);
          observationScore += reverseTemp[0];
          qData[j]["value"] = reverseTemp[0];
          qData[j]["displayValue"] = reverseTemp[1];
        } else {
          observationScore += qData[j]["value"];
        }
      } else if (describeQuestions.includes(qData[j]["name"])) {
        if (reverseQuestions.includes(qData[j]["name"])) {
          let reverseTemp = reverseScore(qData[j]["value"]);
          descriptionScore += reverseTemp[0];
          qData[j]["value"] = reverseTemp[0];
          qData[j]["displayValue"] = reverseTemp[1];
        } else {
          descriptionScore += qData[j]["value"];
        }
      } else if (awarenessQuestions.includes(qData[j]["name"])) {
        if (reverseQuestions.includes(qData[j]["name"])) {
          let reverseTemp = reverseScore(qData[j]["value"]);
          awarenessScore += reverseTemp[0];
          qData[j]["value"] = reverseTemp[0];
          qData[j]["displayValue"] = reverseTemp[1];
        } else {
          awarenessScore += qData[j]["value"];
        }
      } else if (judgementQuestions.includes(qData[j]["name"])) {
        if (reverseQuestions.includes(qData[j]["name"])) {
          let reverseTemp = reverseScore(qData[j]["value"]);
          judgmentScore += reverseTemp[0];
          qData[j]["value"] = reverseTemp[0];
          qData[j]["displayValue"] = reverseTemp[1];
        } else {
          judgmentScore += qData[j]["value"];
        }
      }

      qDataNew["Questions"].push(qData[j]);
    }
    qDataNew["Token"] = localStorage.getItem("token");
    qDataNew["MindfulnessTest"] = "Kentucky Inventory";

    if (numQuestionsAnswered === 39) {
      qDataNew["status"] = "Questionnaire Completed";
    } else {
      qDataNew["status"] = "Questionnaire Partially Completed";
    }

    qDataNew["Observation Score"] = observationScore + "/60";
    qDataNew["Description Score"] = descriptionScore + "/28";
    qDataNew["Acting With Awareness Score"] = awarenessScore + "/26";
    qDataNew["Accepting Without Judgment Score"] = judgmentScore + "/9";

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
    <div className="KentuckyInventory">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>
      <h2>Kentucky Inventory</h2>
      <Survey model={survey} />
    </div>
  );
}

export default KentuckyInventory;
