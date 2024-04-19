const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."
];

function generateLoremIpsum() {
    const loremIpsumText = generateRandomText(50); // Generate Lorem Ipsum text with 50 words
    document.getElementById('loremIpsumDisplay').textContent = loremIpsumText;
}

function generateRandomText(wordsCount) {
    let loremIpsumText = "";
    for (let i = 0; i < wordsCount; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
        loremIpsumText += loremIpsumWords[randomIndex] + " ";
    }
    return loremIpsumText.trim(); // Remove trailing space
}
