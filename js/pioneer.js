const rootElement = document.getElementById( "impress" );

rootElement.addEventListener( "impress:stepleave", ( event ) => {
    const nextStep = event.detail.next;
    const backgroundVideo = document.getElementById( "bg-video-honglingjin" );
    const songVideo = document.getElementById( "bg-video-song" );
    if ( nextStep.id === "p-subtitle-2" ) {
        backgroundVideo.pause();
        backgroundVideo.currentTime = 0;
        backgroundVideo.load();
    } else if ( nextStep.id === "p-song" ) {
        songVideo.pause();
        songVideo.currentTime = 0;
        songVideo.load();
    } else {
        backgroundVideo.pause();
        songVideo.pause();
    }
} );
