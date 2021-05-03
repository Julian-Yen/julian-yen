const longshan = document.querySelector('.longshan');
const park = document.querySelector('.park');
const underground = document.querySelector('.underground');
const toggle = document.querySelector('.toggle');
const longshantext = document.querySelector('#longshantext');
const parktext = document.querySelector('#parktext');
const templeplay = document.querySelector('.templeplay');
const parkplay = document.querySelector('.parkplay');
var mode = 0;

function changeMode() {
  if (mode === 0) {
    mode = 1;
    toggle.textContent = 'Night';
    longshantext.textContent =
      "At night, often the temple is still filled with people worshipping. As the ambiance outside dies down, those inside also become much more quiet. At around 9:30, the guards slowly moves towards the metal gates to lock it up. The clanging of metal chains ring out in the rather empty front yard, signaling a day's end.";
    parktext.textContent =
      'As the still turns dark, chess players and the lottery crowd pack up their gear. Still, people scatter around the park eating, drinking and chatting into the night. At around 9pm, homeless people planning on staying the night would roll out their sleeping bags and get ready to sleep. The bustling of the park gradually dies down as others come home to rest.';
    templeplay.setAttribute(
      'src',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240727&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    );
    parkplay.setAttribute(
      'src',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240703&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    );
  } else {
    mode = 0;
    toggle.textContent = 'Day';
    longshantext.textContent =
      'Longshan temple bustles during the day. Thousands of visitors from nearby or overseas cram inside the temple. Upon entering the gates, the waterfall and its white-noise-like sonic texture blocks away outside rumble and sets the tranquil atmosphere inside the temple. On each morning and afternoon, the monks lead a scripture reciting session. The recurring, monotounous sound of the monks blend with the less in sync recitations by other worshippers, no one else would speak a word. In other moments, people socialize, pray and (always) throw divination blocks to seek answer from the above: either yes, no, or in between.';
    parktext.textContent =
      "Right across from the temple facing guangzhou street is Bangka Park. It was designed to synergize with Longshan Temple, and together revitalize the district's atmosphere and attractiveness. Before long, it became one of few gathering spots for the homeless population in Taipei City. Though some might find it dangerous or unpleasant, the park is in fact bustling with activities that attract people from all walks of life. During day time, people come and play chess, chat and (very enthusiastically) talk about which lottery number to go for. Some buy food and drinks from nearby and stay for the entire day. Others walk around and greet familiar faces in each part of the park. From the afternoon, a water show takes place in the central plaza every hour.";
    templeplay.setAttribute(
      'src',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240772&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    );
    parkplay.setAttribute(
      'src',
      'hhttps://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/988074154%3Fsecret_token%3Ds-uqCwo457U3L&color=%23341c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    );
  }

  longshan.classList.toggle('night');
  park.classList.toggle('night');
  underground.classList.toggle('night');
  toggle.classList.toggle('night');
}

toggle.addEventListener('click', changeMode);
