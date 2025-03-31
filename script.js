// ASCII Art Generator (simple version for "Patrick")
const asciiArt = `
PPPP   AAAAA  TTTTT  RRRR   III  CCCC  K   K
P   P  A   A    T    R   R   I   C      K  K
PPPP   AAAAA    T    RRRR    I   C      KKK
P      A   A    T    R  R    I   C      K  K
P      A   A    T    R   R  III  CCCC   K   K
`;

// Title list (50 titles)
const titles = [
  "Title 1: The Beginning",
  "Title 2: The Adventure Continues",
  "Title 3: Scroll to Collect",
  "Title 4: Unravel the Mystery",
  "Title 5: More to Discover",
  "Title 6: Keep Going",
  "Title 7: Almost There",
  "Title 8: You Are Close",
  "Title 9: The Ultimate Journey",
  "Title 10: Almost at the End",
  "Title 11: Victory Awaits",
  "Title 12: The Final Stretch",
  "Title 13: Keep Scrolling",
  "Title 14: New Horizons",
  "Title 15: Persistence Pays Off",
  "Title 16: Title 16",
  "Title 17: Title 17",
  "Title 18: Title 18",
  "Title 19: Title 19",
  "Title 20: Title 20",
  "Title 21: Title 21",
  "Title 22: Title 22",
  "Title 23: Title 23",
  "Title 24: Title 24",
  "Title 25: Title 25",
  "Title 26: Title 26",
  "Title 27: Title 27",
  "Title 28: Title 28",
  "Title 29: Title 29",
  "Title 30: Title 30",
  "Title 31: Title 31",
  "Title 32: Title 32",
  "Title 33: Title 33",
  "Title 34: Title 34",
  "Title 35: Title 35",
  "Title 36: Title 36",
  "Title 37: Title 37",
  "Title 38: Title 38",
  "Title 39: Title 39",
  "Title 40: Title 40",
  "Title 41: Title 41",
  "Title 42: Title 42",
  "Title 43: Title 43",
  "Title 44: Title 44",
  "Title 45: Title 45",
  "Title 46: Title 46",
  "Title 47: Title 47",
  "Title 48: Title 48",
  "Title 49: Title 49",
  "Title 50: The End"
];

let currentTitle = 0;
let titlesCollected = 0;

// Function to create an ASCII art element
function createAsciiElement() {
  const asciiElement = document.createElement('div');
  asciiElement.classList.add('ascii-art');
  asciiElement.innerHTML = `<pre>${asciiArt}</pre>`;
  return asciiElement;
}

// Function to update title count
function updateTitleCount() {
  const titleCount = document.getElementById("title-count");
  titleCount.innerText = titlesCollected;
  document.title = titles[titlesCollected - 1];  // Change the page title
}

// IntersectionObserver callback to load more content when visible in the viewport
function loadAsciiArtOnVisibility(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (titlesCollected < titles.length) {
        // Create new ASCII art element
        const newAsciiArt = createAsciiElement();
        document.getElementById("ascii-container").appendChild(newAsciiArt);

        // Increment the title counter and update it
        titlesCollected++;
        updateTitleCount();
        
        // Stop observing the element once it's loaded
        observer.unobserve(entry.target);

        // Dynamically add the next visible element for observing
        observer.observe(newAsciiArt);
      } else {
        // If the 50th title has been reached, continue adding art but no new titles
        const newAsciiArt = createAsciiElement();
        document.getElementById("ascii-container").appendChild(newAsciiArt);
        observer.unobserve(entry.target); // Stop observing this art element
        observer.observe(newAsciiArt); // Continue observing for new "Patrick" ASCII art
      }
    }
  });
}

// Set up the IntersectionObserver
const observer = new IntersectionObserver(loadAsciiArtOnVisibility, {
  root: null, // null means it will observe relative to the viewport
  rootMargin: "0px", // margin around the viewport
  threshold: 0.1 // Trigger when 10% of the element is in the viewport
});

// Start with creating the first ASCII art
const firstAsciiElement = createAsciiElement();
document.getElementById("ascii-container").appendChild(firstAsciiElement);

// Observe the first ASCII art element
observer.observe(firstAsciiElement);

// Continuously add new content by increasing the page's height dynamically
setInterval(() => {
  const bodyHeight = document.body.scrollHeight;
  if (bodyHeight < window.innerHeight * 3) {
    const newElement = createAsciiElement();
    document.getElementById("ascii-container").appendChild(newElement);
    observer.observe(newElement);
  }
}, 1000);
