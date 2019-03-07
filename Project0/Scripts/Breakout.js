
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
    x: 100,
    y: 100,
    vx: 4,   //velocity
    vy: 4,
    radius: 5,
    draw: function () {
        //===Create Ball Gradient===
        var radGrad = ctx.createRadialGradient(this.x+35, this.y+35, 5, this.x+42, this.y+40, 15);
        radGrad.addColorStop(0, '#A7D30C');
        radGrad.addColorStop(0.9, '#019F62');
        radGrad.addColorStop(1, 'rgba(1,159,98,0)');

        //===Draw Circle===
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = radGrad;
        ctx.fillRect(this.x, this.y, 150, 150);
        // ctx.fillStyle='red';
        // ctx.fill();
    }

};

//===Invoke Draw ===
function draw() {
    //debugger;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
        console.log('velocity reversed "y"');
    }

    if (ball.x + ball.vx > canvas.height || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
        console.log('velocity reversed"y"');
    }

    raf = window.requestAnimationFrame(draw);
}

//===Activate animation===
canvas.addEventListener('mouseover', function (e) {
    raf = window.requestAnimationFrame(draw);
    console.log('frame requested');
});
canvas.addEventListener('mouseout',function(e){
    window.cancelAnimationFrame(raf);
    console.log('Animation canceled');
});
//ball.draw();