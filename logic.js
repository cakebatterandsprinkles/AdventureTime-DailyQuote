$("#jake-image").on("click", function(){
    let jakeQuoteUrl = "https://adventure-time-quote-api.glitch.me/api/jake";
    let jakeGifUrl = "http://api.giphy.com/v1/gifs/random?tag=adventure+time+jake&api_key=wSCP998sGk4ILdpbjPhlS0EMr9227bNx";
    let element = $(this);
    $.get(jakeGifUrl).then (function(data){
        element.attr("src", data.data.image_original_url);
    });
    $.get (jakeQuoteUrl).then (function(data){
        $("#jake-quote").empty();
        let randomNumber = Math.floor(Math.random()*20);
        let jakeQuote = $("<p>").text(data[0].quotes[randomNumber]);
        $("#jake-quote").append(jakeQuote);
    });
});

$("#finn-image").on("click", function(){
    let finnQuoteUrl = "https://adventure-time-quote-api.glitch.me/api/finn";
    let finnGifUrl = "http://api.giphy.com/v1/gifs/random?tag=adventure+time+finn&api_key=wSCP998sGk4ILdpbjPhlS0EMr9227bNx";
    let element = $(this);
    $.get(finnGifUrl).then (function(data){
        element.attr("src", data.data.image_original_url);
    });
    $.get (finnQuoteUrl).then (function(data){
        console.log(data);
        $("#finn-quote").empty();
        let randomNumber = Math.floor(Math.random()*10);
        let finnQuote = $("<p>").text(data[0].quotes[randomNumber]);
        $("#finn-quote").append(finnQuote);
    });
});

