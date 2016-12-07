// John Channell
	// Tweet Generator

// Variables

var TweetLink = "";

// String Variables

var MeanTweets = [
	"Kill yourself.",
	"Why don't you go drown yourself?",
	"You stupid.",
	"Inbred.",
	"What the fuck are you doing?"
]

// Functions

function FindMeanNumbers() {
	var RandomNumber = MeanTweets.length - 1;
	var TweetNumber = Math.floor((Math.random() * RandomNumber));
	var Tweet = MeanTweets[TweetNumber]
	TweetLink = "https://twitter.com/intent/tweet?text="+Tweet+"&hashtags=Beta";
}

function FindSadNumbers() {
	var RandomNumber = MeanTweets.length;
	var TweetNumber = Math.floor((Math.random() * RandomNumber) + 1);
	RandomMean = TweetNumber;
}

function FindAngryNumbers() {
	var RandomNumber = MeanTweets.length;
	var TweetNumber = Math.floor((Math.random() * RandomNumber) + 1);
	RandomMean = TweetNumber;
}

function Check() {
	WhatsChecked();
}

function WhatsChecked() {
	var happy = document.getElementById("Happy");
	var sad = document.getElementById("Sad");
	var angry = document.getElementById("Angry");

	if (happy.checked == true) {

	} else if (sad.checked == true) {

	}  else if (angry.checked == true) {
		FindMeanNumbers();
	}

	if (TweetLink != "") {
		NewWindow();
	}
}

function NewWindow() {
	window.open(TweetLink, "myWindow", "width=750,height=470,resizeable=yes")
}