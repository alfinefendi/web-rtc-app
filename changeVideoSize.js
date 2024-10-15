const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
// console.log(supportedConstraints);

const changeVideoSize = ()=> {
    // console.log(stream.getVideoTracks());
    
    stream.getVideoTracks().forEach(track=>{
    // console.log(track.getCapabilities());
    // console.log(track);

    const capabilities = track.getCapabilities();
    const width = document.querySelector("#video-width").value;
    const height = document.querySelector("#video-height").value;
    const vConstraints = {
        width: {exact: width < capabilities.width.max ? width : capabilities.width.max},
        height: {exact: height < capabilities.height.max ? height : capabilities.height.max},
    }
    track.applyConstraints(vConstraints);
       
    });

    // stream.getTracks().forEach(track=>{
    //     console.log(track);
        
    //     const capabilities = track.getCapabilities();
    //     // console.log(capabilities);
        
    // })
}