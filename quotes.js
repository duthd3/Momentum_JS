const quotes = [
    {
        quote:"We can only learn to love by loving.",
        author:"Iris Murdoch",

    },
    {
        quote:"Learning to love yourself is the greatest love of all.",    
        author:"Michael Masser",
    },
    {
        quote:"Love is, above all else, the gift of oneself.",    
        author:"Jean Anouilh",
    },
    {
        quote:"The important thing was to love rather than to be loved.",    
        author:"Somerset Maugham",
    },
    {
        quote:"Real love is a permanently self-enlarging experience.",    
        author:"Scott Peck",
    },
    {
        quote:"It's not how much we give, but how much love we put into giving.",    
        author:"Mother Teresa",
    },
    {
        quote:"To love is to receive a glimpse of heaven.",     
        author:"Karen Sunde",
    },
    {
        quote:"Tis the most tender part of love, each other to forgive.",     
        author:"John Sheffield",
    },
    {
        quote:"The first duty of love is to listen.",     
        author:"Paul Tillich",
    },
    {
        quote:"Love looks not with the eyes, but with the mind.",     
        author:"William Shakespeare",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const length = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random()*length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;