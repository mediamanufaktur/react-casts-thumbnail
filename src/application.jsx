var React = require("react");
var ThumbnailList = require("./thumbnail-list");

var options = {
    thumbnailData: [
        {
            title: "See Tutorials",
            number: 17,
            imageUrl: "https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png",
            header: "Learn React",
            description: "React ist that fantastic new JavaScript library for making real slick dynamic fast user interfaces"
        },
        {
            title: "See Tutorials",
            number: 33,
            imageUrl: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400",
            header: "Learn Gulp",
            description: "Speed up your devb workflow with Gulp!"
        },
        {
            title: "See Tutorials",
            number: 29,
            imageUrl: "https://reactweek.com/images/flux.png",
            header: "Learn Flux",
            description: "Flux is the application architecture that Facebook uses for building client-side web applications."
        }
    ]
}

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector(".container"));