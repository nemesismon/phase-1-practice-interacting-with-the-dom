document.addEventListener('DOMContentLoaded', () => {

let seconds = 0;


document.querySelector('h1#counter').innerText = seconds;
document.getElementById('pause').className = 'active';

function secondsTimer () {
    
    setInterval(() => {
        if (document.getElementById('pause').className === 'active') {
            seconds += 1;
            document.querySelector('h1#counter').innerText = seconds;
        }
        else if (document.getElementById('pause').className === 'inactive') {
            document.querySelector('h1#counter').innerText = seconds;
        }
        
    }, 1000) 

    document.getElementById('minus').addEventListener('click', () => {
        seconds -= 1;
        document.querySelector('h1#counter').innerText = seconds;
    })

    document.getElementById('plus').addEventListener('click', () => {
        seconds += 1;
        document.querySelector('h1#counter').innerText = seconds;
    })
};
const secsClickLogger = [
    {'seconds': 0, 'clickLikes': 0},
];

let c = 0;

document.getElementById('heart').addEventListener('click', () => {
    likedSeconds = document.querySelector('h1#counter').innerText;
    
    let timesClicked = document.getElementById('heart');
    timesClicked.onclick = ++c;
    
    //click counter here

    const liked = document.createElement('li');
    liked.innerText = `${likedSeconds} was liked ${c} times`;
    document.getElementsByClassName('likes')[0].appendChild(liked);

    c = 0;

});

document.getElementById('pause').addEventListener('click', () => {

    if (document.getElementById('pause').className === 'active') { 
            document.getElementById('pause').className = 'inactive';
            document.getElementById('minus').disabled = true;
            document.getElementById('plus').disabled = true;
            document.getElementById('heart').disabled = true;
            document.getElementById('pause').innerText = 'resume';
    }
    else if (document.getElementById('pause').className === 'inactive') {
        document.getElementById('pause').className = 'active';
        document.getElementById('pause').innerText = 'pause';
    }

});

let form = document.getElementById('comment-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitComment(e.target.comment.value);
    form.reset();
});

function submitComment(comment){
    let p = document.createElement('p');
    p.textContent = `${comment}`;
    document.getElementById('comment-form').appendChild(p);
};

    secondsTimer();

});