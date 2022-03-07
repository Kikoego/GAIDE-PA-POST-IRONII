 function start() {   
    var canvas = document.getElementById('canvas'); 
    var c = canvas.getContext('2d') 
    c.fillStyle = 'red';
    c.beginPath();
    c.moveTo(10,30);
    c.bezierCurveTo(200,270,100,150,200,40);
    c.lineTo(200,90);
    c.lineTo(10,90);
    c.closePath();
    c.fill();
    c.lineWidth = 4;
    c.strokeStyle = 'black';
    c.stroke();


    c.fillStyle = 'red';
    c.beginPath();
    c.ellipse(90, 250, 50, 100, Math.PI / 1, 0, 2 * Math.PI);
    c.stroke();
    c.fill();

    c.beginPath();
    c.moveTo(100, 200);
    c.lineTo(300, 200);
    c.fillStyle = 'red';
    c.strokeStyle = 'black';
    c.stroke();
    c.fill();

    c.beginPath();
    c.moveTo(125, 180);
    c.lineTo(300, 170);
    c.stroke();

    c.beginPath();
    c.moveTo(100,350);
    c.lineTo(300, 2000);
    c.stroke();

    c.beginPath();
    c.moveTo(80,350);
    c.lineTo(0, 2000);
    c.stroke();

    var img = document.getElementById("photo");
    c.drawImage(img, 200, 65);

    c.fillStyle = 'black';
    c.beginPath();
    c.ellipse(90, 110, 10, 5, Math.PI / 1, 0, 2 * Math.PI);
    c.stroke();
    c.fill();
    c.fillStyle = 'black';
    c.beginPath();
    c.ellipse(150, 110, 10, 5, Math.PI / 1, 0, 2 * Math.PI);
    c.stroke();
    c.fill();
 }