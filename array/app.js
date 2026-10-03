
let comment = document.getElementById("comment");
let respon

comment.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
    }
});


async function handleSubmit() {

    comment.style.display = "none";
    response.style.display = "block";

    response.innerHTML = responses[Math.floor(Math.random() * 20)];
    // console.log(responses[Math.floor(Math.random() * 20)]);

}

function resetForm() {

    comment.style.display = "block";
    response.style.display = "none";
    comment.value = "";

}

const responses = [
    "Oh, absolutely. Because that always works.",
    "Sure. What could possibly go wrong?",
    "Signs point to: you already know the answer.",
    "Ask again when you're ready for the truth.",
    "Highly unlikely. But points for optimism.",
    "My sources say: seriously?",
    "Yes. Against all reasonable expectations.",
    "No. And I'm not explaining myself.",
    "Outlook good. Your judgment, however, remains questionable.",
    "Definitely. Regret is practically guaranteed.",
    "Reply hazy. Try making a better question.",
    "The universe has reviewed your request and laughed.",
    "Maybe. If you lower your standards.",
    "Absolutely not. Next question.",
    "Ask again. I wasn't done judging you.",
    "All signs point to a terrible idea.",
    "It could happen. Stranger things have ruined people's lives.",
    "Yes. Somehow, against my better judgment.",
    "The answer is clear. You just don't like it.",
    "Consult someone who actually knows what they're doing."
];
