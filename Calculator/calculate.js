const gender = document.querySelector(".gender");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const section1 = document.querySelector("#calculate_page");
const section2 = document.querySelector("#section_2");

const male = document.querySelector("#male");
const female = document.querySelector("#female");

const arrowWrapper = document.querySelector(".arrow-wrapper");
const bmi_value = document.querySelector(".bmi_value");
const bmi_results = document.querySelector(".bmi_results");
const bmi_gender_img = document.querySelector(".bmi_gender_img img");
const bmi_answer = document.querySelector(".bmi_answer");
let result;
let selected_gender = "male";

calculate.addEventListener("click", calculate_bmi);
gender.addEventListener("click", selectgender);


function calculate_bmi(e) {
  e.preventDefault();

  let weight_value = weight.value;
  let height_value = height.value / 100;

  if (weight_value != "" && height_value != "") {
    let results = weight_value / Math.pow(height_value, 2);
    result = results.toFixed(1);

    section1.style.display = "none";
    section2.style.display = "block";

    arrowWrapper.style.transform = `rotate(${result}deg)`;

    bmi_value.textContent = `${result} `;

    if (selected_gender === "male") {
      if (result <= 18.5) {
        bmi_gender_img.src = "../assets/underweight_man.png";
bmi_answer.textContent =
  " Warning: You're officially a lightweight champ! Time to add some snacks to your training routine. It's essential to maintain a balanced diet for overall health. Consider consulting with a nutritionist.";

      } else if (result > 18.5 && result <= 24.9) {
        bmi_gender_img.src = "../assets/normal_man.png";
        bmi_answer.textContent =
          "Awesome job! Your BMI is in the normal range.You're in the healthy weight range. Keep up the good work with a balanced diet and regular exercise.";
      } else if (result >= 25 && result <= 29.9) {
        bmi_gender_img.src = "../assets/overweight_man.png";
        bmi_answer.textContent =
          "Breaking news: Your BMI says you're 'overweight.'A small adjustment in lifestyle can make a big difference. Consider incorporating more physical activity and making mindful food choices";
      } else {
        bmi_gender_img.src = "../assets/obesed_man.png.png";
        bmi_answer.textContent =
          "Guess what? Your BMI just called you 'fluffy', it's time to embrace the fluffiness revolution!. Its never too late to make positive changes. Consider consulting with a healthcare  to create a personalized plan for a healthier lifestyle.";
      }
    } else {
      if (result <= 18.5) {
        bmi_gender_img.src = "../assets/underweight_women.png";
        bmi_answer.textContent =
          "Warning: You're officially a lightweight champ! Time to add some snacks to your training routine. It's essential to maintain a balanced diet for overall health. Consider consulting with a nutritionist.";
      } else if (result > 18.5 && result <= 24.9) {
        bmi_gender_img.src = "../assets/normal_woman.png";
        bmi_answer.textContent =
          "Awesome job! Your BMI is in the normal range.You're in the healthy weight range. Keep up the good work with a balanced diet and regular exercise.";
      } else if (result >= 25 && result <= 29.9) {
        bmi_gender_img.src = "../assets/overweight_woman.png";
        bmi_answer.textContent =
          "Breaking news: Your BMI says you're 'overweight.'A small adjustment in lifestyle can make a big difference. Consider incorporating more physical activity and making mindful food choices";
      } else {
        bmi_gender_img.src = "../assets/obesed_woman.png.png";
        bmi_answer.textContent =
          "Guess what? Your BMI just called you 'fluffy', it's time to embrace the fluffiness revolution!. Its never too late to make positive changes. Consider consulting with a healthcare  to create a personalized plan for a healthier lifestyle.";
      }
    }
  } else {
    alert("input field can't be null");
  }
}

function selectgender(e) {
  e.preventDefault();

  selected_gender = e.target.classList[1];

  if (selected_gender == "male") {
    male.style.backgroundColor = "#a3f8c2";
    female.style.backgroundColor = "transparent";
  } else {
    male.style.backgroundColor = "transparent";
    female.style.backgroundColor = "#a3f8c2";
  }
}
