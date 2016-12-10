// John Channell
	// Tweet Generator

// Variables

var TweetLink = "";

// String Variables

var RandomTweets = [
	"There needs to be a third option because getting older or dying aren't working for me.",
	"Some people should come with subtitles.",
	"Wanna hear a joke? You.",
	"8 Ball ruins friendships.",
	"I told him I don't need a reality show to find a girl lol...",
	"Out of my mind. Back in five minutes.",
	"Borrow money from a pessimist–they don’t expect it back.",
	"Always remember that you are unique–just like everyone else.",
	"Eat right. Stay fit. Die anyway.",
	"Ask me about my vow of silence.",
	"Why is “abbreviation” such a long word?"
]

// Functions

function FindRandomNumbers() {
	var RandomNumber = RandomTweets.length - 1;
	var TweetNumber = Math.floor((Math.random() * RandomNumber));
	var Tweet = RandomTweets[TweetNumber];
	TweetLink = "https://twitter.com/intent/tweet?text="+Tweet+"&hashtags=Beta";
}

function WriteCustom() {
	var custom = document.getElementById("CustomText");
	var Tweet = custom.value;
	TweetLink = "https://twitter.com/intent/tweet?text="+Tweet+"&hashtags=Beta";
}

function Check() {
	WhatsChecked();
}

function WhatsChecked() {
	var customText = document.getElementById("CustomText");
	var random = document.getElementById("Random");
	var custom = document.getElementById("Custom");

	if (random.checked == true) {
		FindRandomNumbers();
	} else if (custom.checked == true && customText.value != "") {
		WriteCustom();
	} if (customText.value == "" && custom.checked == true) {
		WriteError();
	}

	if (TweetLink != "") {
		NewWindow();
	}
}

function NewWindow() {
	window.open(TweetLink, "myWindow", "width=750,height=470,resizeable=yes")
}

function WriteError() {
	var errorcontent = document.createTextNode("ERROR: Field can not be blank.");
	var form = document.getElementById("TweetForm")
	form.appendChild(errorcontent);
	setTimeout(Kill,2500);
	function Kill() {
		form.removeChild(errorcontent);
	}
}