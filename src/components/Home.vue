<template>
    <div class="container mt-5">
      <div class="row">
        <!-- Hero Section (Left Column) -->
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h1 class="display-4">Audio Event Detector and Notifier</h1>
          <p class="lead">Introducing <b>Audio Event Detector and Notifier App</b>, the smart app that listens to your surroundings 24/7 and alerts you instantly when specific sounds are detected. Choose from 521 sound types, and when your selected trigger sounds are heard, the app sends you SMS alerts with location data and can even make calls.<br>Paired with another app, <b>Events SMS Alert Viewer</b>,  you can see your alert history, read SMS alerts, and view the locations on a map with directions. Stay informed and in control, no matter where you are.</p>
          <a class="d-none" href="https://play.google.com/store/apps/details?id=com.emicasolutions.natvillefreshmantutor_inamharic" target="_blank">
            <img src="/play.png" alt="Download on Play Store" class="img-fluid mt-3" style="max-width: 50%;"/>
          </a>
          <h2>Download <b>Audio Events Detector App</b></h2>
<a href="/audio_event_detector.rar" target="_blank" download onclick="showFallback('collector')">
  <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;" />
</a>
<p id="fallback-collector" class="fallback-message" style="display: none;">
  If the download doesn't start, <a href="/audio_event_detector.rar" target="_blank">click here</a> to download Location Collector.
</p>

<h2>Download <b>Events SMS Alerts Viewer</b></h2>
<a href="/events_sms_alerts_viewer.apk" target="_blank" download onclick="showFallback('viewer')">
  <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;" />
</a>
<p id="fallback-viewer" class="fallback-message" style="display: none;">
  If the download doesn't start, <a href="/events_sms_alerts_viewer.apk" target="_blank">click here</a> to download Location Viewer.
</p>
        </div>
  
        <!-- Screenshots Section (Right Column) -->
        <div class="col-md-6">
      <div class="row">
          <div class="col-12 mb-4 justify-content-between screenshots">
            <img src="/audio_detector_working_mockup.png" alt="Screenshot 1" class="img-fluid screenshot screenshot-t"/>
            <img src="/audio_detector_settings_mockup.png" alt="Screenshot 2" class="img-fluid screenshot screenshot-b" />
            <img src="/audio_detector_settings_filled_mockup.png" alt="Screenshot 3" class="img-fluid screenshot screenshot-t"/>
        </div></div>
        <div class="row">
            <div class="col-12 mb-4 justify-content-between screenshots">
            <img src="/events_viewer_list_mockup.png" alt="Screenshot 3" class="img-fluid screenshot screenshot-t"/>
            <img src="/events_viewer_map_mockup.png" alt="Screenshot 3" class="img-fluid screenshot screenshot-t"/>
            <img src="/events_viewer_direction_mockup.png" alt="Screenshot 3" class="img-fluid screenshot screenshot-t"/>
            
        </div>

        </div>
       
      </div>
        
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Optional: Add custom styles here */
  .hero-section {
    text-align: left;
  }
  
  .screenshot {
    max-width: 100%;
    height: auto;
  
  }
  
  .screenshot-t {
      margin-top: 50px;
  }
  .screenshot-b {
      margin-top: -50px;
  }
  .phone-mockup {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 400px; /* Adjust based on the phone mockup size */
  }
  
  .phone-image {
    width: 100%;
    height: auto;
  }
  
  .screenshots {
    position: relative;
  }
  
  .screenshot {
    height: auto;
    width: 25%;
    margin-left: 20px;
    object-fit: fit;
    margin-bottom: 10px; /* Adjust spacing between screenshots */
    border-radius: 10px; /* Optional: Rounded corners for screenshots */
  }
  
  @media (max-width: 767px) {
    .screenshot {
    height: auto;
    width: 200px;
    object-fit: fit;
    margin-bottom: 10px; /* Adjust spacing between screenshots */
    border-radius: 10px; /* Optional: Rounded corners for screenshots */
    }
    .screenshot-t {
      margin-top: 20px;
  }
  .screenshot-b {
      margin-top: 20px;
  }
  }
  </style>
  