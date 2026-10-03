
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAI,
    getGenerativeModel,
    GoogleAIBackend
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-ai.js";


const firebaseConfig = {
    apiKey: "AIzaSyAk0Cl1eMSQ_tE7YMMWUBYSqNiAZrW7YV4",
    authDomain: "magicball8-75e43.firebaseapp.com",
    projectId: "magicball8-75e43",
    storageBucket: "magicball8-75e43.firebasestorage.app",
    messagingSenderId: "896213587529",
    appId: "1:896213587529:web:c82dfc6c443e7ff6b55198"
};


const app = initializeApp(firebaseConfig);


const ai = getAI(app, {
    backend: new GoogleAIBackend()
});


const model = getGenerativeModel(ai, {
    model: "gemini-3.8-flash"
});


const comment = document.getElementById("comment");
const response = document.getElementById("response");


comment.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
    }
});


async function handleSubmit() {

    comment.style.display = "none";
    response.style.display = "block";
    response.innerHTML = "Thinking...";

    try {

        if (!comment.value.trim()) {
            throw new Error("Comment is blank.");
        }

        const result = await model.generateContent(
            `You are a sarcastic Magic 8-Ball.

Answer the user's question with a short,
funny and sarcastic response.

Do not explain your answer.
Keep the response under 15 words.

User's question:
${comment.value}`
        );

        response.innerHTML = result.response.text();

    } catch (error) {

        console.error("AI error:", error);

        response.innerHTML =
            "The AI refuses to answer. Try again.";
    }
}


function resetForm() {

    comment.style.display = "block";
    response.style.display = "none";
    comment.value = "";
    
}


window.resetForm = resetForm;
