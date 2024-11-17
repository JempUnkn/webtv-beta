// Espera até que o script de canais seja carregado
window.onload = function() {
    const channelsContainer = document.getElementById('channels');
    canais.forEach((canal, index) => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.innerHTML = `
            <img src="${canal.icon}" alt="${canal.name}">
            <h3>${canal.name}</h3>
            <button onclick="playChannel(${index})">Assistir</button>
        `;
        channelsContainer.appendChild(channelElement);
    });
};

// Função para reproduzir o canal selecionado
function playChannel(index) {
    const video = document.getElementById('video');
    const videoSrc = canais[index].content;

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    } else {
        console.error("HLS não é suportado no seu navegador.");
    }

    document.getElementById('popup').style.display = 'block';
    menu.style.display = menu.style.display === 'block' ? 'none' : 'none';
    theme.style.display = theme.style.display === 'block' ? 'none' : 'none';
}

// Fechar o popup
document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
    const video = document.getElementById('video');
    video.pause();
    video.src = '';
};