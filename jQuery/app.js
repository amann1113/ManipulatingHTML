let $organizer = $("#organizer")

let $button = $("<button>Objective 1</button>").attr({ id: "btnAlert", class: "btn"})
$button.click(function () {
    alert('A very nice message');
})
$organizer.prepend($button);

$('#button2').click(function (e) {
    let $textSubmit = $('#textSubmit').val();
    alert($textSubmit);
});

let $box = $('#box')
$box.mouseenter(function () {
    $box.css("background-color", 'blue')
})
$box.mouseleave(function () {
    $box.css('background-color', '')
});

let $addP = $('<p>').attr({ class: "mb-3 w-50" }).text('This changes to a random color when you click on it')

$addP.click(function () {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $addP.css('color', randomColor)
});

$addP.insertBefore('#listContainer')

let $buttonName = $('<button>').attr({ class: 'btn btn-primary' }).text('Click for my name');
let $divName = $('<div>').attr({
    class: 'my-3 w-50',
    id: 'divName'
})
$buttonName.click(function () {
    let $span = $('<span>').attr({ class: "mr-3" }).text('Austin Mann')
    $divName.append($span);
    $buttonName.attr("disabled", true);
});
$buttonName.insertAfter($addP);
$divName.insertAfter($buttonName);

let friends = ['Russo', 'Nick', 'Braden', 'Bradley', 'Stew', 'Shaun', 'Sam', 'Joe', 'Noah', 'Jake']
let $list = $('#list');

$buttonList.click(function () {
    friends.forEach(friend => {
        let $listItem = $('<li>').attr({class:'list-group-item w-25'}).text(friend);
        $list.append($listItem);
    });
    $buttonList.attr("disabled",true);
});


 
