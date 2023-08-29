// This code writes a random message in English which are about architects and random things they do.
// I use const because I don't want any parameters are changed for the random things I write. Which are very important random things, i guess.
const randomArchitect = ["Le Corbusiser", "Derrida" ,"Alvar Aalto","Emre Arolat","Nevzat Sayın","İbibik İbibikoğlu", "Metin Kozlu","Gönenç Kurpınar","Yeliz Kurpınar","Can Çinici","Fehmi Doğan"]
const randomVerb = ["have made a/an","ate some","drank some","though a/an","gave importance to","designed a/an","watched a/an","imagined something as"]
const randomObject =  ["apple","beer","cider","building","refrigator","human","scale","measurement","stucco","window"]

// Eventhought I could gateaway doing everything in an console log for the sake of the practice I will write a function. This is how cool I am...

const randomFunction = () => {
    // this is a random array for making up a sentence. The strings will be pushed in this array.
    let randomSentence = [];
    randomSentence.push(randomArchitect[Math.floor(Math.random()  * randomArchitect.length)])
    randomSentence.push(randomVerb[Math.floor(Math.random()  * randomVerb.length)])
    randomSentence.push(randomObject[Math.floor(Math.random()  * randomObject.length)])
    return randomSentence;
}
// Just for the sake of keeping it more complex I will write this function in order to get rid of punctiotion marks I DID NOT NEED A FUNCTION AT ALL FOR THIS BUT WHATEVER.

const noPunc = () => {
    let noPuncObject = randomFunction().join(' ');
    return noPuncObject;
}


// Logging the console the result aaaand it is done!
console.log(noPunc());