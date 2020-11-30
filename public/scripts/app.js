'use strict';

var visible = {
    Title: 'Visibility Toggle',
    content: ['i am gonna show something', 'i am hidden']
};
var appRoot = document.getElementById('app');
var visibility = false;
var visCounthide = void 0;
var visCountshow = void 0;

var show = function show() {

    visibility = !visibility;

    // const visCountshow = visible.content[0];
    // console.log(visCountshow);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            visible.Title
        ),
        React.createElement(
            'p',
            null,
            ' ',
            visibility ? ' ' : 'i am gonna show something'
        ),
        React.createElement(
            'button',
            { onClick: show },
            visibility ? 'show details' : 'hide'
        )
    );

    ReactDOM.render(template, appRoot);
};
render();
