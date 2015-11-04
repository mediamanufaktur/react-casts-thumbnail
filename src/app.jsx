var options = {
    thumbnailData: [
        {
            title: "Show Courses",
            number: 323,
            header: "Learn React",
            description: "React is that fantastic new front end library for making fast, dynamic pages and web apps",
            imageUrl: "https://facebook.github.io/react/img/logo_og.png"
        },
        {
            title: "Show Courses",
            number: 323,
            header: "Learn Gulp",
            description: "Automate and enhance your development workflow. Precompile Facebook React JSX templates into JavaScript.",
            imageUrl: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
        },
        {
            title: "Show Courses",
            number: 323,
            header: "Learn Flux",
            description: "Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. ",
            imageUrl: "https://reactweek.com/images/flux.png"
        }
    ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector(".target"));