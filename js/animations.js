// fancy vbuck click animation
function VBuckClickAnimation(event, vpc) {
    const vbucksImgContainer = document.querySelector(".vbucks-img-container");

    // mus koordinater
    const x = event.offsetX;
    const y = event.offsetY; 

    // skapa element och ta bort den
    const div = document.createElement("div");
    div.innerHTML = `+${Math.round(vpc)}`;
    div.style.cssText = `
        color: white;
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        font-size: 15px;
        pointer-events: none;
    `;
    vbucksImgContainer.appendChild(div);

    div.classList.add('fade-up');

    setTimeout(() => div.remove(), 800);
}
