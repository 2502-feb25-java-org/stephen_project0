var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ---Score Variable---
var score = 0;
// ---time---
var startTime = new Date();
var endTime = 0;
var elapseTime = 0;
// ---Ball Variables---
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
// ---paddle---
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
// ---Keys---
var leftPressed = false;
var rightPressed = false;
//--Get User Input---
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
// ---Brick properties---
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
// ---Brick Array---
var bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: true };
    }
}
// ---Input Handlers---
function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    }
    else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
        console.log('right = ', rightPressed);
    }
    else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
        console.log('Left = ', leftPressed);
    }
}

// ---Draw Functions---
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == true) {
                bricks[c][r].x = (c * (brickPadding + brickWidth)) + brickOffsetLeft;
                bricks[c][r].y = (r * (brickPadding + brickHeight)) + brickOffsetTop;

                ctx.beginPath();
                ctx.rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);
                fillStyle = 'blue';
                ctx.fill();
                ctx.closePath();
            }
        }

    }
}
function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score = ' + score, 8, 20);
}

function drawTime(){
    var endTime = new Date();
    elapseTime = Math.floor((endTime - startTime) / 1000);
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Time = ' + elapseTime, 200, 20);
}
// ---Collision Detection---
function collDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == true) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = false;
                    score += 100;
                    if (score == (brickRowCount * brickColumnCount) * 100){
                        alert ("Congradulations! Your score: " + score + "\nYour time: "+ elapseTime);
                    }
                }
            }
        }
    }
}
// ---Main Draw Function---
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    drawTime();
    collDetection();
    drawBricks();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert('GAME OVER');
            document.location.reload();
            clearInterval(interval);
        }
    }
    x += dx;
    y += dy;

    //---Control Paddle---
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

//---Run animation---
var interval = setInterval(draw, 10);