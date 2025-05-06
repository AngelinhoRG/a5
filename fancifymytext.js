// fancifymytext.js

// 1. Increase font size to 24pt
function bigger() {
    const ta = document.getElementById("userText");
    ta.style.fontSize = "24pt";
  }
  
  // 2. Toggle between FancyShmancy and BoringBetty styles
  function toggleStyle() {
    const ta = document.getElementById("userText");
    if (document.getElementById("fancyShmancy").checked) {
      ta.style.fontWeight     = "bold";
      ta.style.color          = "blue";
      ta.style.textDecoration = "underline";
    } else {
      ta.style.fontWeight     = "normal";
      ta.style.color          = "black";
      ta.style.textDecoration = "none";
    }
  }
  
  // 3. Uppercase text and append "-MOO" to the last word of each sentence
  function moo() {
    const ta = document.getElementById("userText");
    // Uppercase all
    let text = ta.value.toUpperCase();
    // Split into sentences on "."
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
      let s = sentences[i].trim();
      if (s) {
        const words = s.split(" ");
        // Append "-MOO" to last word
        words[words.length - 1] = words[words.length - 1] + "-MOO";
        sentences[i] = words.join(" ");
      }
    }
    // Recombine and preserve ". " between sentences
    ta.value = sentences.join(". ");
  }
  