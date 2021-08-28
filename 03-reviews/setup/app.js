// // // NOTES: // // //
// *** iterate array of objects by creating let currentItem
// and assigning it with the array reviews[currentItem],
// as currentItem is a number (0)

// to change an image in html with an array, simply use 
// (considering our variables): img.src = item.img;

// ______________________________________________________ //

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showPerson()
});

// if the currentItem being shown becomes greater than the
// length of the array, reset the process to 0 (first item
// of array)
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem)
});

prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 3;
    // or 
    // currentItem = reviews.length - 1;
  }
  showPerson(currentItem)
});

randomBtn.addEventListener('click', function() {
  currentItem = randomNumber();
  showPerson(randomNumber)
})

function randomNumber() {
  return Math.floor(Math.random() * reviews.length)
}

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

console.log(reviews.length);


