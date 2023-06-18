function atualizarMoji () {
    const mojis = ['🤔', '🤨', '😯', '🙂', '🤗', '😛', '😜', '😝', '😄', '🥰', '😍'];
    const mojiDiv = document.querySelector(".moji");

    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const width = entry.contentRect.width;
            const totalWidth = entry.target.parentNode.offsetWidth;
            const percent = Math.round((width / totalWidth) * 100);
            const index = Math.floor(percent / 10);

            if (index >= 0 && index < mojis.length) {
                mojiDiv.textContent = mojis[index];
            }
        }
    });

    const progressBar = document.getElementById("emojiRange");
    observer.observe(progressBar);
}

atualizarMoji();