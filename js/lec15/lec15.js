// browser events and listener

// monitorEvents(document); and unmonitorEvents(document);

// event target: an entity where your location has been received (button-clicked)
// event listener: an action required to be taken when event target occurs through an event

// eg: playButton, click is event, playBtn is target and video is action. This all done in eventListener

function change(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "hi shineeeeeeeeeeeee"
};

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', change); // bubbling phase
//fpara.removeEventListener('click', change);

// Phases : capturing and bubbling phase(root-to-target and target-to-root)
// default action : <a> : going to links
let anchor = document.getElementById('anchor');
anchor.addEventListener('click', function(event){
    event.preventDefault(); // removes default action
    anchor.textContent = 'Link has been clicked';
});

// avoiding too many listeners, for loop for multiple tags/ids
function alert(event){
    if(event.target.nodeName == 'SPAN'){ // conditional event
        console.log("Clicked on:", event.target.textContent);
    }
}