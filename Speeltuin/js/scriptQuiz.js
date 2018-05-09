
//Objecten - Quiz Intro
const quizStory = {
    part1:"Greetings, mortal. This website is an outreach to thine generation, the so-called generation of the many interwebs! As the below graph illustrates, we at Isis and Osiris, Inc. have noticed a significant decrease in pagan deity devotion in past 6000 years. Our most holy executives fear that, if we do nothing to reverse this trend, our market share will continue to dwindle in the next few millenia.<br><br>",
    button1:"Thine market forecasts are of limited interest to me, oh great  and most holy lord!",
    part2:"Therefore, as Amun smiles upon us, we at Isis and Osiris, Inc. have decided to change our marketing strategy. Letting people brutally sacrifice their farm animals just doesn't do the trick anymore in 2018. This problem is not limited to our company. Even succesful firms in our sector, like Christianity Corp and Islam Inc. are starting to move away from their old business model of conquering, subjugating en enslaving non-believers.<br><br>",
    button2:"But what's the point of absolute moral and spiritual authority if you can't use it to exploit others?",
    part3:"That's exactly what we, at Isis and Osiris, Inc. have been asking ourselves for the last few centuries. We have failed to see great innovations like the printing press and Twinkies coming. Missing another great market innovation would be the end of our company. So from now on, to keep up with the times, we will use our absolute moral authority to make slightly entertaining personality quizzes. Exactly as the young non-believers wish!<br><br>",
    button3:"What striking innovation, most holy one!",
    part4:"Behold our great innovation, weakly human! We will slightly entertain thee until thine faith in Isis and Osiris may be restored. If this personality quiz is succesful, we might even make one of those woefully boring farm-games that thine aunt has wasted many hours of her life on. Open are the double doors of the horizon! Unlocked are its bolts!<br><br>",
    button4:"Oh great gods and godesses, let the slightly entertaining personality quiz begin!",
    state:1
}
      
//Objecten - Vragen & Antwoorden

const question0 = {
    question:"It's a sunny saturday on the banks of the Nile, where you are hanging out after a hard weeks work. Suddenly, a crocodile comes by, looking weary and hungry. Crocodiles are known to be the most aggressive creatures in the Two Lands of Egypt. What do you feed him?",

    ans1:["I hate crocodiles and wouldn't feed the nasty buggers anything. Begone, ye violent reptile!", 3],
    ans2:["By mighty Sobek, we must feed him Osiris' penis!", 4],
    ans3:["The hearts of those judged unworthy", 1],
    ans4:["Salad with hummus and vegan-friendly cheese. Afterwards, I'd post a photo of myself and the crocodile on Instagram, pretending we're friends.", 0],

    state:1,
}

const question1 = {
    question:"Recently, your good father passed away after a good, honest life. You've been tasked with preparing him for burial. After removing your fathers entrails from his dead body through his nose, you realize that you have forgotten something very important. Your father can't pass on to the netherworld like this! What did you forget?",

    ans1:["Burials are jucky and decidedly uncool. They are also disastrous for my social media profile. It seems I forgot to make up an excuse to not be present here in the first place.", 0],
    ans2:["There is no such thing as an afterlife, you fool! There is only beforedeath.", 1],
    ans3:["I forgot to wrap dad's package in some extra mummy paper! We do wanna make sure it gets to the afterlife in good condition, don't we?", 2],
    ans4:["I forgot to rip out his intestines and conserve them in a little stone jar in the shape of a hawk! Oh, how silly of me", 3],

    state:1
}

const question2 = {
    question:"It is the great festival of Ra, and you're the most beautiful woman in all of Egypt. Looking for a suitable husband, you've done your very best to look as pretty as humanly possible. You've applied your lipstick made out of crushed beetles, smeared honey on your face and rubbed a mixture of water and ground rocks to your cheecks. During the festivities, four possible suitors present themselves to you and your parents, all smitten four by your beauty and beguiled by your general loveliness. Who will you choose?",

    ans1:["The uneducated but loving farmer, who toils in the field to grow our crops. A good and reliable man, if a little rough-on-the-edges.", 1],
    ans2:["The high-priest of Amun! I'm already looking forward to endless discussions on the mysteries of Amun with my celibate, twenty-years older husband.", 2],
    ans3:["The well-built and bronzed soldier. He might be stupid, but damn he's HOT! (And possibly has PTSD and anger management issues.)", 0],
    ans4:["The nobleman. Handsome and educated, he'll be a husband other women will envy.", 3],

    state:1,
}

const question3 = {
    question:"You're a young pharaoh, who has just ascended to the throne, as your father has recently died. Before you're a completely legitimate pharaoh, you'll have to get married to the woman who will help you achieve the daunting task of ruling Egypt. Who will be your wife and possibly the most powerful woman in Egypt?",

    ans1:["My sister! She always looks at me in a certain peculiar way... And we do want to keep our godly bloodline pure, right sis?", 3],
    ans2:["My mother! Marrying the former pharaoh's wife will give me legitimacy and an experienced co-ruler. Thank god incest hasn't been banned yet!", 2],
    ans3:["An educated woman from one of the noble families. While not of royal blood, she will be a fine consort and an intelligent partner.", 1],
    ans4:["One of the many buxom concubines walking around the palace. Or why not all of them at the same time? It is good to be pharaoh!", 0],

    state:1,
}

const question4 = {
    question:"It's 1200 BC, and you're an Egyptian military officer, guarding the borders near the land of Canaan. One day, a large group of strange-looking, light-skinned people request entrance into the Two Lands. They have brought their families, saying they are just fleeing violence and wish to build a new life in Egypt. What do you do?",

    ans1:["Let them in unconditionally, ensuing in a three-hundred year period of civil war and chaos.", 3],
    ans2:["Refuse entry, and tell 'em to piss off. They will probably attack you, or die of thirst in the desert.", 1],
    ans3:["Tell them they can come, if they promise to pay tribute to the Pharaoh. And a little to you, ofcourse.", 2],
    ans4:["Pretend that you're reading the hieroglyphs on the wall and can't hear them. What's humanitarian tragedy in Ancient Egyptian again?", 0],

    state:1,
}

const question5 = {
    question:"Multiple disasters have descended upon your family recently. First, your path was crosse by a black crow when going to the fields. A few days later, your oldest daughter forgot to put on her mascara to ward of the evil eye. Yesterday, a your wife spilled some salt when preparing dinner yesterday. Surely the combination of these dark signs will spell doom on your family. Which god will you sacrifice to, to regain the good will of the heavens?",

    ans1:["Ra! There is nothing the all-knowing and all-powerful god of the sun cannot do!", 1],
    ans2:["Isis! As the mother goddess of fertility, she protects those who pay their respects to her.", 2],
    ans3:["Hapi! Just look at him, he's so funny! How could I not choose the pot-bellied blue dude with manboobs?", 3],
    ans4:["Sekhmet! The fierce goddess of retribution will fight against the dark spirits with courage.", 0],

    state:1,
}

const question6 = {
    question:"Multiple disasters have descended upon your family recently. First, your path was crosse by a black crow when going to the fields. A few days later, your oldest daughter forgot to put on her mascare to ward of the evil eye. Lastly, a your wife spilled some salt when preparing dinner yesterday. Surely the combination of these dark signs will spell doom on your family. Which god will you sacrifice to, to regain the good will of the heavens?",

    ans1:["Ra! There is nothing the all-knowing and all-powerful god of the sun cannot do!", 1],
    ans2:["Isis! As the mother goddess of fertility, she protects those who pay their respects to her.", 2],
    ans3:["Hapi! Just look at him, he's so funny! How could I not choose the pot-bellied blue dude with manboobs?", 3],
    ans4:["Sekhmet! The fierce goddess of retribution will fight against the dark spirits with courage.", 0],

    state:1,
}

//Opslaan Antwoorden
let answerStorage = 0

//Opslaan aantal vragen
let numberOfQuestions = 0

//Willekeurig selecteren Vragen
const questionArray = [question0, question1, question2, question3, question4, question5, question6]

let randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)]

function getRandomQuestion(){
randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)]
    if (randomQuestion.state === 0) {
        getRandomQuestion()
    }
    else
    return randomQuestion
}

getRandomQuestion()

console.log(randomQuestion)

//Creatie begin quizverhaal
const body = document.getElementsByTagName("body")[0]
const answerBox = document.createElement("div")
answerBox.className = "col-xs-8 col-xs-offset-2"
answerBox.setAttribute = ("class", "jumbotron vertical-center")
answerBox.id = "answerBox"
body.appendChild(answerBox);
const storyBox = document.createElement("div")
storyBox.id = "storyBox"
storyBox.innerHTML = quizStory.part1
answerBox.appendChild(storyBox)
const graphBox = document.createElement("p")
answerBox.appendChild(graphBox)
graphBox.innerHTML = "<img id=deityDevotion src=images/deityDevotion.png>" 
const storyButton = document.createElement("button")
storyButton.innerHTML = quizStory.button1
storyButton.id = "buttonBox"
answerBox.appendChild(storyButton)

//Eventlisteners quizverhaal
storyButton.addEventListener("click", function(){
    if (quizStory.state === 1) {
        storyBox.innerHTML = quizStory.part2
        storyButton.innerHTML = quizStory.button2
        answerBox.appendChild(storyButton)
        graphBox.innerHTML = ""
        quizStory.state = 2
    }
    else if (quizStory.state === 2) {
        storyBox.innerHTML = quizStory.part3
        storyButton.innerHTML = quizStory.button3
        answerBox.appendChild(storyButton)
        quizStory.state = 3
    }
    else if (quizStory.state === 3) {
        storyBox.innerHTML = quizStory.part4
        storyButton.innerHTML = quizStory.button4
        answerBox.appendChild(storyButton)
        quizStory.state = 4
    }
    else if (quizStory.state === 4) {
        storyBox.innerHTML = ""
        storyButton.innerHTML = "Which Egyptian deity are you?<br><img src=images/Kheper.svg><br>Click here to begin the quiz!"
        storyButton.style.margin = "auto"
        answerBox.appendChild(storyButton)
        quizStory.state = 5
    }
    else {
        const questionBox = document.createElement("div");
        questionBox.id = "questionBox"
        answerBox.appendChild(questionBox)
        answerBox.removeChild(storyBox)
        answerBox.removeChild(storyButton)
        createButtonsInitial()
        getQuestion(randomQuestion)
        let quizButton1 = document.getElementById("quizButtonBox1")
        let quizButton2 = document.getElementById("quizButtonBox2")
        let quizButton3 = document.getElementById("quizButtonBox3")
        let quizButton4 = document.getElementById("quizButtonBox4")
    }
})

document.addEventListener('click', function (event){
    numberOfQuestions += 1
    if (event.target.classList.contains("quizButtonBox") ){
        getResult(randomQuestion)
        getRandomQuestion()
        getQuestion(randomQuestion)
    }
    else if (numberOfQuestions === 4) {}
})

document.addEventListener('click', function (event){
    if (event.target.quizButton1){
    answerStorage += randomQuestion.ans1[1]
    }
    else if (event.target.quizButton2){
        answerStorage += randomQuestion.ans2[1]
        }
    else if (event.target.quizButton3){
        answerStorage += randomQuestion.ans3[1]
        }
    else if (event.target.quizButton4){
        answerStorage += randomQuestion.ans4[1]
        }
})

// Verwerken resultaat, opschonen hoofd-div
function getResult(randomQuestion){
    randomQuestion.state = 0
    questionBox.innerHTML = ""
    answerDiv1.innerHTML = "<button class='quizButtonBox' id='quizButtonBox1'>1</button>" 
    answerDiv2.innerHTML = "<button class='quizButtonBox' id='quizButtonBox2'>2</button>"
    answerDiv3.innerHTML = "<button class='quizButtonBox' id='quizButtonBox3'>3</button>"
    answerDiv4.innerHTML = "<button class='quizButtonBox' id='quizButtonBox4'>4</button>"
}

//Creëren van en toewijzen ID's aan knoppen en div
function createButtonsInitial(){
    for (i = 1; i <= 4; i++) {
        const answerDiv = document.createElement("div")
            answerBox.appendChild(answerDiv)
            answerDiv.id = "answerDiv"+[i]
            answerDiv.className = "answerDiv"
        const quizButton = document.createElement("button")
            quizButton.innerHTML = [i]
            quizButton.className = "quizButtonBox"
            quizButton.id = "quizButtonBox"+[i]
            answerDiv.appendChild(quizButton)
    }
}

//Laden van willekeurige vraag
function getQuestion(randomQuestion){
    questionBox.innerHTML = randomQuestion.question
    answerDiv1.innerHTML += randomQuestion.ans1[0]
    answerDiv2.innerHTML += randomQuestion.ans2[0]
    answerDiv3.innerHTML += randomQuestion.ans3[0]
    answerDiv4.innerHTML += randomQuestion.ans4[0]
}

function endOfQuiz(){
    questionBox.innerHTML = "Good work mortal! We hope you have found this quiz to be slightly entertaining!"
}