const starter = confirm('Go?');
if (starter) {
    let time = 61;
    let pointsCounter = 0;
    const gameArea = document.getElementsByTagName('table')[0];
    const seconds = document.getElementsByClassName('seconds')[0];
    const points = document.getElementsByClassName('points')[0];
    const cellsCollection = document.getElementsByTagName('td');
    const cellsCount = cellsCollection.length;

    gameArea.addEventListener('click', (e) => {
        const target = e.target;
        if (target.className === 'active') {
            pointsCounter+=1;
            points.innerText = pointsCounter;
            target.classList.remove('active');
        }
    });

    const timer = setInterval(() => {
        if (time !== 0) {
            for (let cell of cellsCollection) {
                cell.classList.remove('active');
            }
            time-=1;
            seconds.innerText = time;
            let randomCell = Math.floor(Math.random() * cellsCount);
            cellsCollection[randomCell].classList.add('active');
        } else {
            clearInterval(timer);
            alert('Good game! Your points: ' + pointsCounter);
        }
    }, 1000)
} else {
    alert('Maybe next time :)')
}


