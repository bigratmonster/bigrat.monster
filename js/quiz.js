// bigratNOTE: This file loads external content.

let questionTemplate = '<p class="question-question">{}</p><div><form class="question-form"><input type="radio" name="option" value="0"/>Agree<br><input type="radio" name="option" value="1"/>Neutral/Unsure<br><input type="radio" name="option" value="2"/>Disagree<br></form></div><button class="question-button" onclick="nextQuestion();">Next</button>';

// I don't like how you're handling adding new HTML to the document, but for now it's OK.

const $ = id => document.getElementById(id);
let question = -1;
const questions = [
    "Hip-Hop is a good music genre.",
    "Social media is a good thing.",
    "Pink is a pretty color",
    "The following sentence is crazy:<br>They put me in a round room. A rubber room! Told me to sit in the corner. They put me in a rubber room with rats.",
    "If economic globalization is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.",
    "There is now a worrying fusion of information and entertainment.",
    "“from each according to his ability, to each according to his need” is a fundamentally good idea.",
    "All authority should be questioned.",
    "Bigrat is symbolism for something deeper.",
    "Javascript is a fantastic programming language.",
    "Cereal is good.",
    "this image is unsettling <br><img src=\"https://cdn.discordapp.com/attachments/689287762335367255/775898066074992650/s7f1gobxlkm51.jpg\" alt=\"An emote of a face.\">",
    "large?<br><img src=\"../media/bigrat.png\" alt=\"A big rat sitting on a person's leg.\">"
];

function nextQuestion() {
  if (question === 12) {
    let date = new Date();
    let axae = [
      date.getHours(),
      date.getDate(),
      date.getYear()/20,
      date.getMilliseconds()%18
    ]; // This is fucking funny
    let placement = `Entj Axis: ${axae[3]* ((Math.random() * 3) + 1)|0 + (((Math.random() * 6) + 1)-3)|0}pt<br>
                     Ratl Axis: ${axae[1]* ((Math.random() * 3) + 1)|0 + (((Math.random() * 6) + 1)-3)|0}pt<br>
                     Trll Axis: ${axae[2]* ((Math.random() * 3) + 1)|0 + (((Math.random() * 6) + 1)-3)|0}pt<br>
                     Msic Axis: ${axae[1]* ((Math.random() * 3) + 1)|0 + (((Math.random() * 6) + 1)-3)|0}pt<br>`;
    
    //  x|0 === Math.floor(Number(x)) ; 
    // There's a more complicated explanation involving bitwise operation, but that's effectively what it does.
    
    $("question-tab").innerHTML = `Lets see how you placed...<br><br><br>${placement}`;
              
  } else {
    question++;
    $("question-tab").innerHTML = questionTemplate.replace("{}", questions[question]);
  };
};
