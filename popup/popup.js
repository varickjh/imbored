function getRandomWebsite() {
    const websites = [
      "https://blockly.games",
      "https://beinternetawesome.withgoogle.com/en_us/interland",
      "https://studio.code.org/s/mc/lessons/1/levels/1",
      "https://krunker.io/",
      "https://totaljerkface.com/happy_wheels.tjf",
      "https://venge.io/",
      "https://astrodud.io/",
      "https://zombsroyale.io/",
      "https://bloxorz.io/",
      "https://shellshock.io/?mercZoneFinalGift",
      "https://smashkarts.io/",
      "https://kirka.io",
      "https://lolbeans.io/",
      "https://battledudes.io/",
      "https://ev.io/",
      "https://voxiom.io/",
      "https://superhex.io/",
      "https://musiclab.chromeexperiments.com/Song-Maker",
      "https://www.autodraw.com/",
      "http://www.heysnapshere.com/apps/softbuddy/index.html",
      "http://savethesounds.info/",
      "https://artsandculture.google.com/experiment/what-came-first/ZQGBUPErEE3bVg?hl=en",
      "http://radio.garden/",
      "https://optical.toys/",
      "https://popcat.click/",
      "https://paint.toys/",
      "https://checkbox.toys/",
      "https://cursoreffects.com/",
      "https://maze.toys/mazes/mini/daily/",
      "https://www.nytimes.com/games/wordle/index.html",
      "https://asoftmurmur.com/",
      "https://blankwindows.com/",
      "https://bongo.cat/",
      "https://cat-bounce.com/",
      "https://www.cleverbot.com/",
      "https://www.fallingfalling.com/",
      "http://listen.hatnote.com/",
      "https://www.incredibox.com/demo/",
      "https://littlealchemy.com/",
      "https://strobe.cool/",
      "https://playtictactoe.org/",
      "https://playsnake.org/",
      "https://hexxagon.com/",
      "https://bouncyballs.org/",
      "https://trypap.com/",
      "https://quickdraw.withgoogle.com/",
      "http://weavesilk.com/",
      "https://thezen.zone/break/5",
      "https://zoomquilt.org/",
      "http://flashbynight.com/drench/",
    ];
    const randomIndex = Math.floor(Math.random() * websites.length);
    return websites[randomIndex];
  }
  console.log("This is a popup!")
  document.addEventListener("DOMContentLoaded", function () {
    const redirectButton = document.getElementById("redirectButton");
    redirectButton.addEventListener("click", function () {
      const randomWebsite = getRandomWebsite();
      chrome.tabs.create({ url: randomWebsite });
    });
  });