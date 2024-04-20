function assignBalls() {
    var playerCount = document.getElementById('playerCount').value;
    var ballsPerPlayer = document.getElementById('ballsPerPlayer').value;
    var assignButton = document.querySelector('button'); // Ensure this is targeting the right button, might need more specific selector

    if (playerCount && ballsPerPlayer) {
        let totalBallsNeeded = playerCount * ballsPerPlayer;
        let balls = [];
        for (let i = 1; i <= 15; i++) {
            balls.push(i);
        }

        if (totalBallsNeeded > 15) {
            alert('Not enough balls for the selected number of players and balls per player.');
            return;
        }

        balls = shuffleArray(balls);

        let assignments = document.getElementById('assignments');
        assignments.innerHTML = '';

        for (let i = 0; i < playerCount; i++) {
            let playerNumber = i + 1;
            let assignedBalls = balls.splice(0, ballsPerPlayer);

            let div = document.createElement('div');
            div.className = 'assignment-container';
            let span = document.createElement('span');
            span.textContent = `Player ${playerNumber}: `;

            let button = document.createElement('button');
            button.textContent = 'Reveal Balls';
            button.className = 'reveal-button';

            let ballContainer = document.createElement('div');
            ballContainer.className = 'ball-container';

            button.className = 'reveal-button';  // This should already be set for the Reveal/Hide buttons

// Ensure all dynamically created buttons for reveal/hide also use this class
/*let revealButton = document.createElement('button');
revealButton.textContent = 'Reveal Balls';
revealButton.className = 'button';  // Apply the same class to style similarly
revealButton.onclick = function() {
    ballContainer.classList.toggle('visible');
    revealButton.textContent = ballContainer.classList.contains('visible') ? 'Hide Balls' : 'Reveal Balls';
};*/
let revealButton = document.createElement('button');
revealButton.textContent = 'Reveal Balls';
revealButton.className = 'reveal-button';  // Apply the new class for styling
revealButton.onclick = function() {
    ballContainer.classList.toggle('visible');
    revealButton.textContent = ballContainer.classList.contains('visible') ? 'Hide Balls' : 'Reveal Balls';
};

            button.onclick = function() {
                ballContainer.classList.toggle('visible');
                button.textContent = ballContainer.classList.contains('visible') ? 'Hide Balls' : 'Reveal Balls';
            };

            assignedBalls.forEach(ballNumber => {
                let img = document.createElement('img');
                img.src = `images/ball-${ballNumber}.png`;
                img.className = 'ball-image';
                ballContainer.appendChild(img);
            });

            div.appendChild(span);
            div.appendChild(button);
            div.appendChild(ballContainer);
            assignments.appendChild(div);
        }

        // Add shake class to all Reveal Balls buttons after reassign
        if (assignButton.textContent === 'Reassign Balls') {
            let revealButtons = document.querySelectorAll('.reveal-button');
            revealButtons.forEach(button => {
                button.classList.add('shake');

                // Optional: remove the shake class after the animation ends
                button.addEventListener('animationend', () => {
                    button.classList.remove('shake');
                });
            });
        }

        // Change the text of the assign button after the first click
        if (assignButton.textContent === 'Assign Balls') {
            assignButton.textContent = 'Reassign Balls';
        }
    } else {
        alert('Please select the number of players and balls per player.');
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//function adjustWidth(selectElement) {
 //   if (selectElement.value) {
 //       selectElement.style.width = '50px'; // Expanded width
 //   } else {
 //       selectElement.style.width = '100px'; // Default width
 //   }
//}//
