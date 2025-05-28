---
layout: post
title: "Welcome Ukraine 🇺🇦"
date: 2025-05-11
categories: [events]
tags: [events, ‘s-Hertogenbosch]
post_image: "/assets/img/events/2025-05-11-welcome-ukraine.webp"
---

«Welcome Ukraine 🇺🇦» — is the biggest event of this spring ‘s-Hertogenbosch, dedicated to Ukraine!

On 29 of May 2025 for the second time, ‘s-Hertogenbosch will welcome Ukrainians and their friends, who are supporting Ukraine through this difficult time of full scale invasion. Parade square near the Parochie Sint-Janskathedraal church will embrace everyone to show solidarity, devotion to the struggle of Ukrainian people.
Join us! 🌻

- 📅  Date: 29.05.2025
- 🕰️ Time: 13:00-18:30
- 📍Location: Parade,  ‘s-Hertogenbosch
- 🎯 free of charge

This heartfelt meeting is dedicated to 110 thousand Ukrainian refugees: opening of the event, speeches from official representatives, worships by Dutch and Ukrainian priests, choirs: Makivka and Korali. It might be a great experience for everyone, because you not only will greet your old friends, but might also meet new! You can become a part of a big march with Ukrainian flag, and a concert performed by famous Ukrainian artists!

The program of the day:

- official opening ceremony of the action on Parade Square, ‘s-Hertogenbosch at 13:00
- general march with Ukrainian flag 🇺🇦 ;
- church service in Sint-Janskathedraal🙏;
- grand concert with the participation of famous Ukrainian singers: Oleh Skrypka & VV, Patsyki z Franyka, Ivan Navi, and Veronika Morska.

«Welcome Ukraine 🇺🇦» event will be attended by the Ukrainian ambassador and honorary consul, representatives of the city community, Ukrainian military personnel, famous Ukrainian singers, and choirs.

Join us with your families and local friends. We will be happy to meet you at the event, wearing embroidered shirts and with Ukrainian flags! Together we are strong! Slava Ukraine!

The event live stream will be available here 👇 on the day of event.
<div id="promo-video" style="margin-bottom: 20px;">
  <video id="ukraine-video" width="100%" style="aspect-ratio: 16/9; min-height: 340px;" autoplay muted loop>
    <source src="/assets/img/events/2025-05-11-welcome-ukraine.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<iframe id="live-stream" src="https://player.castr.com/live_e1d85d103a6011f08bef6379935bb298" width="100%" style="aspect-ratio: 16/9; min-height: 340px; display: none;" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen  webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen>
</iframe>

<script>
(function() {
  // Event start time: 2025-05-29 13:00:00 CET
  const eventStartTime = new Date('2025-05-29T13:00:00+02:00');
  const promoVideo = document.getElementById('promo-video');
  const liveStream = document.getElementById('live-stream');

  function checkEventTime() {
    const now = new Date();

    if (now >= eventStartTime) {
      // Hide promo video and show live stream
      if (promoVideo) {
        promoVideo.style.display = 'none';
      }
      if (liveStream) {
        liveStream.style.display = 'block';
      }
      // Stop checking since event has started
      return;
    }

    // Check again in 1 minute
    setTimeout(checkEventTime, 60000);
  }

  // Start checking when page loads
  checkEventTime();
})();
</script>
