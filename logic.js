$("#jake-image").on("click", function(){
    let jakeQuoteUrl = "https://adventure-time-quote-api.glitch.me/api/jake";
    let jakeGifUrl = "http://api.giphy.com/v1/gifs/random?tag=adventure+time+jake&api_key=wSCP998sGk4ILdpbjPhlS0EMr9227bNx";
    $.get(jakeGifUrl).then (function(){
        this.empty();
        let jakeGif = $("<img>").attr("src", jakeGifUrl);
        this.append(jakeGif);
    });
    $.get (jakeQuoteUrl).then (function(data){
        console.log(data);
        $("#jake-quote").empty();
        let jakeQuote = $("<p>").text(data);
        $("#jake-quote").append(jakeQuote);
    });
});

$("#finn-image").on("click", function(data){
    let finnQuoteUrl = "https://adventure-time-quote-api.glitch.me/api/finn";
    let finnGifUrl = "http://api.giphy.com/v1/gifs/random?tag=adventure+time+finn&api_key=wSCP998sGk4ILdpbjPhlS0EMr9227bNx";
    $.get(finnGifUrl).then (function(){
        this.empty();
        let finnGif = $("<img>").attr("src", finnGifUrl);
        this.append(finnGif);
    });
    $.get (finnQuoteUrl).then (function(data){
        console.log(data);
        $("#jake-quote").empty();
        let randomNumber = Math.floor(Math.Random()*10);
        let finnQuote = $("<p>").text(data.quotes[randomNumber]);
        $("#jake-quote").append(finnQuote);
    });
});

