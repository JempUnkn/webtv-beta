document.addEventListener('DOMContentLoaded', function () {
    const channelsDiv = document.getElementById('channels');
    const player = document.getElementById('player');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const theme = document.getElementById('theme');
    const listViewBtn = document.getElementById('list-view');
    const gridViewBtn = document.getElementById('grid-view');


    function updateConnectionStatus() {
        const statusDisplay = document.getElementById('status-display'); // Elemento que mostrará o status
    
        if (navigator.onLine) {
            statusDisplay.innerHTML = 'Online 🟢';
        } else {
            statusDisplay.innerHTML = 'Offline 🔴';
            alert('Detectamos que você está offline!');
        }
    }
    window.addEventListener('load', updateConnectionStatus);
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);



    // Toggle menu display
    menuIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        theme.style.display = theme.style.display === 'block' ? 'none' : 'none';
    });

    
    // ............................................................................................................................................................
    // ............................................................................................................................................................
    // TEMA THEME POPUP 
    document.getElementById('theme-link').addEventListener('click', () => {
        theme.style.display = theme.style.display === 'block' ? 'none' : 'block';
    });
        // Aplicação de tema de cores com boxShadow
        document.getElementById('blue-color').addEventListener('click', () => {
            menu.style.boxShadow = '0px 0px 15px #0ff'; // Azul
            menu.style.background = 'rgba(0, 0, 0, 0.9)';
            body.style.background = '#000';
            body.style.color = '#fff';
        });

        document.getElementById('red-color').addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            const body = document.body;
            const channel = document.querySelector('.channel');
            const channelimg = document.querySelector('.channel img');
            const bannerimg = document.querySelector('.banner img');
            if (menu) {
                menu.style.boxShadow = '0px 0px 15px rgb(255, 0, 0)'; // pode mudar
                menu.style.background = 'rgba(0, 0, 0, 0.9)';
            }
            if (body) {
                body.style.background = '#000';
                body.style.color = '#fff';
            }
            if (channel) {
                channels.style.boxShadow = '0px 0px 15px rgb(255, 0, 0)'; // pode mudar
                channels.styles.borderRadius = '8px';
            }
            if (channelimg) {
                channelimg.style.boxShadow = '0px 0px 15px rgb(255, 0, 0)'; // pode mudar
            }
            if (bannerimg) {
                bannerimg.style.boxShadow = '0px 0px 15px rgb(255, 0, 0)'; // pode mudar
            }
        });


        document.getElementById('purple-color').addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            const body = document.body;
            const channel = document.querySelector('.channel');
            const channelimg = document.querySelector('.channel img');
            const bannerimg = document.querySelector('.banner img');
            if (menu) {
                menu.style.boxShadow = '0px 0px 15px rgb(128, 0, 128)'; // pode mudar
                menu.style.background = 'rgba(0, 0, 0, 0.9)';
            }
            if (body) {
                body.style.background = '#000';
                body.style.color = '#fff';
            }
            if (channel) {
                channels.style.boxShadow = '0px 0px 15px rgb(128, 0, 128)'; // pode mudar
                channels.styles.borderRadius = '8px';
            }
            if (channelimg) {
                channelimg.style.boxShadow = '0px 0px 15px rgb(128, 0, 128)'; // pode mudar
            }
            if (bannerimg) {
                bannerimg.style.boxShadow = '0px 0px 15px rgb(128, 0, 128)'; // pode mudar
            }
        });
        

        document.getElementById('green-color').addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            const body = document.body;
            const channel = document.querySelector('.channel');
            const channelimg = document.querySelector('.channel img');
            const bannerimg = document.querySelector('.banner img');
            if (menu) {
                menu.style.boxShadow = '0px 0px 15px rgb(72, 253, 0)'; // pode mudar
                menu.style.background = 'rgba(0, 0, 0, 0.9)';
            }
            if (body) {
                body.style.background = '#000';
                body.style.color = '#fff';
            }
            if (channel) {
                channels.style.boxShadow = '0px 0px 15px rgb(72, 253, 0)'; // pode mudar
                channels.styles.borderRadius = '8px';
            }
            if (channelimg) {
                channelimg.style.boxShadow = '0px 0px 15px rgb(72, 253, 0)'; // pode mudar
            }
            if (bannerimg) {
                bannerimg.style.boxShadow = '0px 0px 15px rgb(72, 253, 0)'; // pode mudar
            }
        });

        document.getElementById('light-color').addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            const body = document.body;
            const channel = document.querySelector('.channel');
            const channelimg = document.querySelector('.channel img');
            const bannerimg = document.querySelector('.banner img');
            if (menu) {
                menu.style.background = 'rgba(218, 218, 216, 0.9)';
            }
            if (channel) {
                channels.style.boxShadow = 'rgba(218, 218, 216, 0.9)';
                channels.styles.borderRadius = '8px';
            }
            if (body) {
                body.style.background = 'rgba(218, 218, 216, 0.9)';
                body.style.color = 'rgb(44, 44, 44)';
            }
        });

        document.getElementById('light-color').addEventListener('click', () => {
            menu.style.background = 'rgba(218, 218, 216, 0.9)'; // light
            body.style.background = 'rgba(218, 218, 216, 0.9)';
            body.style.color = 'rgb(44, 44, 44)';
        });
        // Theme end

    document.getElementById('about-link').addEventListener('click', () => {
        alert('Sobre: Aqui você encontra as melhores transmissões de TV e Rádio online.');
    });
    document.getElementById('terms-link').addEventListener('click', () => {
        alert('Termos: Todo o conteúdo é de responsabilidade de seus respectivos proprietários.');
    });
    document.getElementById('tv-link').addEventListener('click', () => {
        loadChannels('tv');
    });
    document.getElementById('radio-link').addEventListener('click', () => {
        loadChannels('radio');
    });
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        player.innerHTML = ''; // Limpa o conteúdo do player
    });
    listViewBtn.addEventListener('click', () => {
        channelsDiv.className = 'channels';
    });
    gridViewBtn.addEventListener('click', () => {
        channelsDiv.className = 'channels grid-view';
    });
});
