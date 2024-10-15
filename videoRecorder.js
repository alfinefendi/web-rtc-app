let mediaRecorder;
let recordedBlobs;

const startRecord = () => {
    console.log("start");
    recordedBlobs = [];
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
        // console.log(e);
        // console.log(e.data);
        console.log("data available for the media recorder");
        recordedBlobs.push(e.data);
        console.log(recordedBlobs);
    }
    mediaRecorder.start();
}

const stopRecord = () => {
    console.log("stop");
    mediaRecorder.stop();
}

const playRecord = () => {
    console.log("playing");
    console.log(requestIdleCallback);
    const superBuffer = new Blob(recordedBlobs);
    const recordedVideoEl = document.querySelector("#other-video");
    recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
    recordedVideoEl.controls = true;
    recordedVideoEl.play();
    
}