const string = "Привет! Как дела?";

const vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels = extractedVowels + currentLetter;
        }
    }
    
    return extractedVowels;
}

console.log(getVowels(string));
