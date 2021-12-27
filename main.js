function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video , 0 , 0 , 640 , 480);

    stroke(168,10,10);
    fill(168,10,10);

    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 40, 50);
    circle(460, 40, 50);

    stroke(50,168,82);
    fill(50,168,82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(28,63,25,275);
    rect(448,63,25,275);

   
}
function take_snapshot(){
    save('picture.png');
}