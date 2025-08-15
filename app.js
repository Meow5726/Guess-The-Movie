let main = document.querySelector("#main");
let wel = document.querySelector("#wel");
let btn = document.querySelector("#btn");
let rest = document.querySelector("#reset");
let clue = document.querySelector("#clue");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let sc = document.querySelector("#sc");
let b = document.querySelectorAll(".b");
let msg = document.querySelector("#msg");
let points = 0;
let idx=0;
const hint = [
    "1. Movie Description - Avengers epic battle to restore balance to universe after thanos snap\n2. Genre - Superhero, sci-fi \n3. Releasing Year - 2019\n4. Category - Marvel",
    "1. Movie Description - An unnamed narrator exploring toxic masculinity\n2. Genre - Psychological, Thriller \n3. Releasing Year - 1999\n4. Category - Hollywood",
    "1. Movie Description - A man uncovers a long-buried secret that threatens society\n2. Genre - Sci-fi, Nei-Noir \n3. Releasing Year - 2017\n4. Category - Hollywood",
    "1. Movie Description - It's about a surgeon who spirals into addiction and toxic behaviour after breakup\n2. Genre - Romance, Drama \n3. Releasing Year - 2019\n4. Category - Bollywood",
    "1. Movie Description - It's about college students, navigating their life and friendship\n2. Genre - Comedy, Drama \n3. Releasing Year - 2018\n4. Category - Bollywood",
    "1. Movie Description - A high school student who forms a bond with a terminally ill classmate\n2. Genre - Romance, Drama \n3. Releasing Year - 2018\n4. Category - Anime",
    "1. Movie Description - It's about a lorry driver who becomes a sandalwood smuggler\n2. Genre - Action, Drama \n3. Releasing Year - 2021\n4. Category - Bollywood",
    "1. Movie Description - It is based on true story of paranormal investigators\n2. Genre - Horror \n3. Releasing Year - 2013\n4. Category - Hollywood",
    "1. Movie Description - Its a girl who fell for her step brother after her mother marries his wealthy father\n2. Genre - Romance, Drama \n3. Releasing Year - 2023\n4. Category - Hollywood"
]
const option1 = [
    "The Matrix",
    "American Psycho",
    "Interstellar",
    "Aashiqui 2",
    "Chhichhore",
    "A Silent Voice",
    "K.G.F:Chapter 1",
    "The Nun",
    "The Summer We Lived"
];
const option2 = [
    "Avengers:EndGame",
    "Fight Club",
    "Blade Runner 2049",
    "Kabir Singh",
    "3 Idiots",
    "I Want To Eat Your Pancrease",
    "Pushpa:The Rise",
    "The Conjuring",
    "My Fault"
];
const option3 = [
    "SpiderMan:Into the spider verse",
    "The Game",
    "Ex Machina",
    "Half Girlfriend",
    "Golmaal:Fun Unlimited",
    "Five Feet Apart",
    "Raees",
    "Annabelle",
    "After"
];
main.classList.add("hide");
rest.classList.add("hide");
const play=()=>{
    btn.addEventListener("click",()=>{
        msg.classList.add("hide");
        wel.classList.add("hide");
        main.classList.remove("hide");
        rest.classList.remove("hide");
        btn1.innerText = "Singing In The Rain";
        btn2.innerText = "La La Land";
        btn3.innerText = "Crazy, Stupid, Love";
        clue.innerText = "1. Movie Description - Its about 2 aspiring artists chasing their dreams in Los Angeles\n2. Genre - Romance, Music, Drama \n3. Releasing Year - 2016\n4. Category - Hollywood";
        b.forEach(b=>{
            b.addEventListener("click",()=>{ 
                setTimeout(()=>{
                    btn1.innerText = option1[idx];
                    btn2.innerText = option2[idx];
                    btn3.innerText = option3[idx];
                    clue.innerText = hint[idx];
                    idx++;
                    if(idx==10){
                        msg.classList.remove("hide");
                        main.classList.add("hide");
                        rest.classList.add("hide");
                        if(sc>=3 || points>=3){
                            msg.innerText = "CONGRATULATIONS!\nYOU WON THE GAME:)";
                        }else{
                            msg.innerText = "OOPS!\nBETTER LUCK NEXT TIME...";
                        }
                    }
                },300);
            });
        });
        points=0;
    });
};
btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor = "red";
    setTimeout(()=>{
        btn1.style.backgroundColor = "transparent";
    },300);
});
btn2.addEventListener("click",()=>{
    btn2.style.backgroundColor = "green";
    points++;
    sc.innerText=points;
    setTimeout(()=>{
        btn2.style.backgroundColor = "transparent";
    },300);
});
btn3.addEventListener("click",()=>{
    btn3.style.backgroundColor = "red";
    setTimeout(()=>{
        btn3.style.backgroundColor = "transparent";
    },300);
});
play();
rest.addEventListener("click",()=>{ 
    msg.classList.add("hide");
    main.classList.add("hide");
    rest.classList.add("hide");
    wel.classList.remove("hide");
    points = 0;
    sc.innerText=points;
    idx=0;
    play();
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
});