# expert-covid-system
# Respiratory Diseases Expert System

<br>

## :notebook: Background

This is a simple expert system for covid written in JavaScript. The expert system is developed using [rools](https://github.com/frankthelen/rools), a small rule engine for Node.js, and [Handlebars.js](https://github.com/handlebars-lang/handlebars.js), a semantic templating language for JavaScript. [Try it here!](https://respiratory-diseases-es.herokuapp.com/)

<p align=center><img src="/docs/img/covid-expert-system.png"></p>
<p align="center"><i>UI of the expert system</i></p>

<br>


The differential diagnosis is based on a set of 13 factors that are categorized into:
- **Epidemiological factors**
  - Age group
  - Gender
  - Family history
  - Smoking history
- **Clinical factors**
  - Duration
  - Chest pain
  - Cough
  - Coughing up blood (Hemoptysis)
  - Fever
  - Rapid breathing (Tachypnea)
  - Rapid heartbeat (Tachycardia)
  - Shortness of breath (dyspnea)
  - Wheezing

<br>

## :evergreen_tree: Building Decision Tree using ID3 Algorithm

The [Iterative Dichotomiser 3 (ID3) algorithm](https://en.wikipedia.org/wiki/ID3_algorithm#:~:text=In%20decision%20tree%20learning%2C%20ID3,and%20natural%20language%20processing%20domains.) is used to generate a decision tree for the expert system. The decision tree can be converted into a comparable rule set in which each rule corresponds to a possible path from the root node to any leaf node. The rule set is used as the rule engine for the expert system.

<p align=center><img src="/docs/img/decision_tree.png"></p>
<p align="center"><i>The decision tree</i></p>

<br>

```
npm install
npm devstart
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### **Deploy the app on cloud**

This app is also deployed on [Heroku](https://covid-expert-system.herokuapp.com/).

<br>

## :black_nib: References

- [WikiDoc for Respiratory Disease Differential Diagnosis](https://www.wikidoc.org/index.php/Respiratory_disease_differential_diagnosis)
- [WikiDoc for COVID-19 Differential Diagnosis](https://www.wikidoc.org/index.php/COVID-19_differential_diagnosis)
- [An expert system for diagnosis of diabetes](https://github.com/ZenHuzaini/node-js-expert-system-diabetes)
- [rools - a small rule engine for Node.js](https://github.com/frankthelen/rools)
- [Python scripts for generating decision trees](https://github.com/Erikfather/Decision_tree-python)
- [Handlebars.js - a simple semantic templating langauge](https://github.com/handlebars-lang/handlebars.js)
