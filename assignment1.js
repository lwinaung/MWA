'use strict';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

var table = document.getElementById('matches');
var url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
const input = document.getElementById('txtTeam');
fetch(url).then(function (resp) {
    return resp.json();
}).then(function (data) {

    const { from, fromEvent } = rxjs;
    const { map, filter, debounceTime, throttleTime } = rxjs.operators;
    // console.log(data);
    const obs = fromEvent(input, 'keyup');
    obs.subscribe((e) => console.log(e.target.value));
    from(data.teams) //If I want to show all objects, I have to use 'of' instead of 'from' because 'of' work on objects and 'from' works on values.
        .pipe(
            // debounceTime(1),
            map(obj =>
                obj),
        // filter(obj => obj.id === 27)
    )
        .subscribe(team => {
            var tr = createNode('tr'),
                td = createNode('td'),
                div = createNode('div'),
                img = createNode('img'),
                span = createNode('span');
            img.src = team.flag;
            img.width = 40;
            span.innerHTML = team.name;

            append(div, img);
            append(div, span);
            append(td, div);
            append(tr, td);
            append(table, tr);
        });

})['catch'](function (error) {
    console.log(JSON.stringify(error));
});

