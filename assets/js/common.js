// Get all copy buttons
const copyBtns = document.querySelectorAll(".code-copy-btn");

// Add click event listener to each copy button
copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    // Get code body of clicked code snippet
    const codeBody = copyBtn.parentElement.nextElementSibling;

    // Create a range to select the code body
    const range = document.createRange();
    range.selectNode(codeBody);

    // Select the code body
    window.getSelection().addRange(range);

    // Copy the selected code
    document.execCommand("copy");

    // Deselect the code body
    window.getSelection().removeAllRanges();

    // Change copy button text to 'Copied!'
    copyBtn.innerHTML = '<i class="fa-regular fa-paste"></i> Copied!';

    // Reset copy button text after 2 seconds
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    }, 2000);
  });
});