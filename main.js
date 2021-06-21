noseX=0;//this a varaable for web postion x
noseY=0;//this a varaable for web postion y
function setup()
{
    video = createCapture(VIDEO);//this is creating the video
    video.size(450,400);//these are the settings for the video

    canvas = createCanvas(550,500);//this is creating the canvas
    canvas.position(500,150)// postion settings for canvas

    poseNet = ml5.poseNet(video, modelLoaded)//this is loading the posenet variable
    poseNet.on('pose', gotPose);//this will give u 17 points on your body

}
function draw()
{
    background('#32a87d')//this is the background for the canvas
    fill('blue');//this will fill the square to blue
    stroke('red');//this is the outline color of the square
    square(noseX, noseY, 100);//this is the settings for the square
}

function modelLoaded()
{
    console.log('Posenet is initalized')//this will be displayed when the module is loaded
}

function gotPose(results)
{
    if(results.length > 0)//if the length is greather than 0, then it will show results
    {
        console.log(results);//this will log the results
        noseX = results[0].pose.nose.x;//this will store the pose nose x
        noseY = results[0].pose.nose.y;//this will store the pose nose y
        console.log("noseX ="+ noseX +"noseY ="+ noseY);//this will log if its tracking your nose
    }
}