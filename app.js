const $ = selector => document.querySelector(selector);
const main = $("#main"), welcome = $("#wel"), start = $("#btn"), reset = $("#reset"), clue = $("#clue"), score = $("#sc"), message = $("#msg");
const buttons = [$("#btn1"), $("#btn2"), $("#btn3")];
let points = 0, index = 0, answered = false;
const questions = [
    { hint: "1. Movie Description - Avengers epic battle to restore balance to universe after thanos snap\n2. Genre - Superhero, sci-fi\n3. Releasing Year - 2019\n4. Category - Marvel", options: ["The Matrix", "Avengers:EndGame", "SpiderMan:Into the spider verse"], answer: "Avengers:EndGame" },
    { hint: "1. Movie Description - An unnamed narrator exploring toxic masculinity\n2. Genre - Psychological, Thriller\n3. Releasing Year - 1999\n4. Category - Hollywood", options: ["American Psycho", "Fight Club", "The Game"], answer: "Fight Club" },
    { hint: "1. Movie Description - A man uncovers a long-buried secret that threatens society\n2. Genre - Sci-fi, Neo-Noir\n3. Releasing Year - 2017\n4. Category - Hollywood", options: ["Interstellar", "Blade Runner 2049", "Ex Machina"], answer: "Blade Runner 2049" },
    { hint: "1. Movie Description - A surgeon spirals into addiction and toxic behaviour after a breakup\n2. Genre - Romance, Drama\n3. Releasing Year - 2019\n4. Category - Bollywood", options: ["Aashiqui 2", "Kabir Singh", "Half Girlfriend"], answer: "Kabir Singh" },
    { hint: "1. Movie Description - College students navigating life and friendship\n2. Genre - Comedy, Drama\n3. Releasing Year - 2018\n4. Category - Bollywood", options: ["Chhichhore", "3 Idiots", "Golmaal:Fun Unlimited"], answer: "3 Idiots" },
    { hint: "1. Movie Description - A high school student bonds with a terminally ill classmate\n2. Genre - Romance, Drama\n3. Releasing Year - 2018\n4. Category - Anime", options: ["A Silent Voice", "I Want To Eat Your Pancrease", "Five Feet Apart"], answer: "I Want To Eat Your Pancrease" },
    { hint: "1. Movie Description - A lorry driver becomes a sandalwood smuggler\n2. Genre - Action, Drama\n3. Releasing Year - 2021\n4. Category - Indian Cinema", options: ["K.G.F:Chapter 1", "Pushpa:The Rise", "Raees"], answer: "Pushpa:The Rise" },
    { hint: "1. Movie Description - Based on the true story of paranormal investigators\n2. Genre - Horror\n3. Releasing Year - 2013\n4. Category - Hollywood", options: ["The Nun", "The Conjuring", "Annabelle"], answer: "The Conjuring" },
    { hint: "1. Movie Description - A girl falls for her stepbrother after her mother marries his wealthy father\n2. Genre - Romance, Drama\n3. Releasing Year - 2023\n4. Category - Hollywood", options: ["The Summer We Lived", "My Fault", "After"], answer: "My Fault" }
];
const shuffle = items => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};
function startGame() {
    points = 0;
    index = 0;
    score.textContent = points;
    message.classList.add("hide");
    welcome.classList.add("hide");
    main.classList.remove("hide");
    reset.classList.remove("hide");
    showQuestion();
}
function showQuestion() {
    if (index >= questions.length) {
        main.classList.add("hide");
        reset.classList.add("hide");
        message.classList.remove("hide");
        message.replaceChildren();
        const result = document.createElement("p");
        result.textContent = points >= 3
            ? "CONGRATULATIONS!\nYOU WON THE GAME :)"
            : "OOPS!\nBETTER LUCK NEXT TIME...";
        const replay = document.createElement("button");
        replay.className = "action-btn";
        replay.textContent = "✨ Play Again";
        replay.addEventListener("click", startGame);
        message.append(result, replay);
        return;
    }
    answered = false;
    const question = questions[index];
    const options = shuffle(question.options);
    clue.textContent = question.hint;
    buttons.forEach((button, i) => {
        button.textContent = options[i];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}
function handleAnswer(selectedIndex) {
    if (answered || index >= questions.length) return;
    answered = true;
    const answer = questions[index].answer;
    const selected = buttons[selectedIndex];
    const correct = buttons.find(button => button.textContent === answer);
    buttons.forEach(button => {
        button.disabled = true;
        if (button === correct) button.classList.add("correct");
    });
    if (selected.textContent === answer) {
        points++;
        score.textContent = points;
    } else {
        selected.classList.add("wrong");
    }
    setTimeout(() => {
        index++;
        showQuestion();
    }, 300);
}
start.addEventListener("click", startGame);
reset.addEventListener("click", startGame);
buttons.forEach((button, i) => button.addEventListener("click", () => handleAnswer(i)));
main.classList.add("hide");
reset.classList.add("hide");
