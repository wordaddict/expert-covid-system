# Covid Expert System

<br>

## :notebook: Background

This is a simple expert system for covid written in JavaScript. The expert system is developed using [rools](https://github.com/frankthelen/rools), a small rule engine for Node.js, and [Handlebars.js](https://github.com/handlebars-lang/handlebars.js), a semantic templating language for JavaScript. [Try it here!](https://respiratory-diseases-es.herokuapp.com/)

<p align=center><img src="/img/covid-expert-system.png"></p>
<p align="center"><i>Diagnosis algorithm</i></p>

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
