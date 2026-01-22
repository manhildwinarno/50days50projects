const labels = document.querySelectorAll(".label");

labels.forEach((label) => {
  const huruf = [...label.textContent]
    .map(
      (letter, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>`,
    )
    .join("");
  label.innerHTML = huruf;
});
