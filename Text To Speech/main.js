
let text = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    text = input.value;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = "en"
    utterThis.voice = ""
    window.speechSynthesis.speak(utterThis);

    input.value = "";
})