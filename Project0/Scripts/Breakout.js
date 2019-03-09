
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;
var paddleX=(canvas.width-paddle.width)/2;

var ball = {
    x: 100,
    y: 100,
    vx: 4,   //velocity
    vy: 4,
    radius: 5,
    draw: function () {
        // //===Create Ball Gradient===
        var radGrad = ctx.createRadialGradient(this.x + 35, this.y + 35, 5, this.x + 42, this.y + 40, 15);
        radGrad.addColorStop(0, '#A7D30C');
        radGrad.addColorStop(0.9, '#019F62');
        radGrad.addColorStop(1, 'rgba(1,159,98,0)');

        //===Draw Circle===
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        // ctx.fillStyle = radGrad;
        // ctx.fillRect(this.x, this.y, 150, 150);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

};

var paddle = {
    x: 0,
    y: 0,
    height:10,
    width:75,

    draw: function () {
        ctx.beginPath();
        ctx.rect(paddlex,canvas.height-paddle.height,paddle.width,paddle.height);
        fillStyle="#0095DD";
        ctx.fill();
        closePath();
    }

}

//===Invoke Draw ===
function draw() {
    //===Clear canvas===
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(canvas.height, canvas.width);
    //===Gradient for Background===
    var lingrad = ctx.createLinearGradient(0, 0, 0, 500);
    lingrad.addColorStop(0, 'blue');
    lingrad.addColorStop(.8, 'grey');

    //===Draw Background===
    ctx.fillStyle = lingrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //===Draw Ball===
    ball.draw();//add Velocity
    ball.y += ball.vy;
    ball.x += ball.vx;
    if (ball.y + ball.vy > canvas.height-ball.radius || ball.y + ball.vy < ball.radius) {
        ball.vy = -ball.vy;
        console.log('velocity reversed "y"');
    }

    if (ball.x + ball.vx > canvas.width-ball.radius || ball.x + ball.vx < ball.radius) {
        ball.vx = -ball.vx;
        console.log('velocity reversed"y"');

        // paddle.x = e.clientX;
        // paddle.y = e.clientY;
        paddle.draw();
        console.log(paddle.x, ', ', paddle.y);
    }
    //paddle.draw();

    raf = window.requestAnimationFrame(draw);
}

//===Activate animation===
canvas.addEventListener('click', function (e) {
    if (running == false) {
        paddle.x=e.clientX;
        paddle.y=e.clientY;
        raf = window.requestAnimationFrame(draw);
        running = true;
        console.log('frame requested');
    }
    else {
        raf = window.cancelAnimationFrame(raf);
        running = false;
    }
});
// canvas.addEventListener('mouseout',function(e){
//     window.cancelAnimationFrame(raf);
//     console.log('Animation canceled');
// });

// ===Control Paddle===
// canvas.addEventListener('mousemove', function (e) {
    
//     paddle.x = e.clientX;
//     paddle.y = e.clientY;
//     raf = window.requestAnimationFrame(draw);
// });

var lingrad = ctx.createLinearGradient(0, 0, 0, 500);
lingrad.addColorStop(0, 'blue');
lingrad.addColorStop(.8, 'grey');

//===Draw Background===
ctx.fillStyle = lingrad;
ctx.fillRect(0, 0, canvas.width, canvas.height);