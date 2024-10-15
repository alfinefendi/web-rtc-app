const videoEl = document.querySelector("#my-video");


let stream = null;
const constraints = {
    audio: true,
    video: true
}


const getMicAndCamera = async(e)=>{
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
    } catch (error) {
        console.log(error);
    }
}

const showMyFreed = e=>{
    console.log("show my feed workings");
    videoEl.srcObject = stream; // this is set our media stream <video/>
}

const stopMyFeed = e=> {
    const tracks = stream.getTracks();
    for(track of tracks) {
        console.log(track);
        track.stop();
    }
}

document.querySelector("#share").addEventListener("click", e=>getMicAndCamera(e));
document.querySelector("#show-video").addEventListener("click", e=>showMyFreed(e));
document.querySelector("#stop-video").addEventListener("click", e=>stopMyFeed(e));