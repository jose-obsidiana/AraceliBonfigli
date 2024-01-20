
    const audio = document.getElementById('audio');
    const currentSongTitle = document.getElementById('currentSongTitle');
    const currentSongAuthor = document.getElementById('currentSongAuthor');
    //const playlistItems = document.querySelectorAll('#playlist li');
    const playlistItems = document.querySelectorAll('.playlist-item');


    const playlist = [
        { title: 'Mi Despertar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/00-MIDESPERTAR.mp3' },
        { title: 'Si Querés La Verdad', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/01-SIQUERESLAVERDAD.mp3' },
        { title: 'Desordenada', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/02-DESORDENADA.mp3' },
        { title: 'Oda Al Otoño Por Venir', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/03-ODAALOTONOPORVENIR.mp3' },
        { title: 'Tu Luz Sin Fin', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/04-TULUZSINFIN.mp3' },
        { title: 'Levitar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/05-LEVITAR.mp3' },
        { title: 'El Mar Volar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/06-ELMARVOLAR.mp3' },
        { title: 'Dibujando El Cielo', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/07-DIBUJANDOELCIELO.mp3' },
        { title: 'Aire', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/08-AIRE.mp3' },
        { title: 'Suelto Los Tientos', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2023-ElDegrade-Vivo/09-SUELTOLOSTIENTOS.mp3' },

        { title: 'Clara', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/10-CLARA.mp3' },
        { title: 'Andar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/11-ANDAR.mp3' },
        { title: 'Anidar Primaveras', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/12-ANIDARPRIMAVERAS.mp3' },
        { title: 'Instante Fugaz', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/13-INSTANTEFUGAZ.mp3' },
        { title: 'Abre', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/14-ABRE.mp3' },
        { title: 'Bienvenida', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/15-BIENVENIDA.mp3' },
        { title: 'Mariposa', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/16-MARIPOSA.mp3' },
        { title: 'Sonrisa De Cristal', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/17-SONRISADECRISTAL.mp3' },
        { title: 'Cálido Invierno', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/18-CALIDOINVIERNO.mp3' },
        { title: 'No Estés Acá', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/19-NOESTESACA.mp3' },
        { title: 'Desprender', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/20-DESPRENDER.mp3' },
        { title: 'Fluir', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2017-Fluir/21-FLUIR.mp3' },

        { title: 'Si Querés La Verdad', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2022-ElDegrade-LadoB/22-SIQUERESLAVERDAD.mp3' },
        { title: 'El Mar Volar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2022-ElDegrade-LadoB/23-ELMARVOLAR.mp3' },
        { title: 'Aire', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2022-ElDegrade-LadoB/24-AIRE.mp3' },
        { title: 'Levitar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2022-ElDegrade-LadoB/25-LEVITAR.mp3' },
        { title: 'Oda Al Otoño Por Venir', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2022-ElDegrade-LadoB/26-ODAALOTONOPORVENIR.mp3' },

        { title: 'Mi Despertar', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2021-ElDegrade-LadoA/27-MIDESPERTAR.mp3' },
        { title: 'Tu Luz Sin Fin', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2021-ElDegrade-LadoA/28-TULUZSINFIN.mp3' },
        { title: 'Dibujando El Cielo', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2021-ElDegrade-LadoA/29-DIBUJANDOELCIELO.mp3' },
        { title: 'Desordenada', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2021-ElDegrade-LadoA/30-DESORDENADA.mp3' },
        { title: 'Suelto Los Tientos', author: 'Araceli Bonfigli', src: '../multimedia/canciones/2021-ElDegrade-LadoA/31-SUELTOLOSTIENTOS.mp3' },

        



        // Add more songs as needed
    ];

    let currentSongIndex = 0;

    const loadSong = (index) => {
        const currentSong = playlist[index];
        audio.src = currentSong.src;
        currentSongTitle.textContent = currentSong.title;
        currentSongAuthor.textContent = currentSong.author;
        audio.load();
    };

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60),
            seconds = Math.floor(secs % 60),
            returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    };

    audio.addEventListener('loadedmetadata', () => {
        document.getElementById('SongLength').textContent = calculateTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
        // Play the next song when the current one ends
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        audio.play();
    });

    audio.ontimeupdate = function () {
        document.getElementById('CurrentSongTime').textContent = calculateTime(audio.currentTime);
        setProgress();
    };

    function setProgress() {
        let percentage = (audio.currentTime / audio.duration) * 100;
        document.querySelector('.progress').style.width = percentage + '%';
    }

    document.getElementById('PlayPause').addEventListener('click', () => {
        if (audio.paused) {
            document.getElementById('PlayPause').src = '../multimedia/png/pause.svg';
            audio.play();
        } else {
            document.getElementById('PlayPause').src = '../multimedia/png/Play.svg';
            audio.pause();
        }
    });

    document.getElementById('Plus10').addEventListener('click', () => {
        audio.currentTime += 10;
    });

    document.getElementById('Back10').addEventListener('click', () => {
        audio.currentTime -= 10;
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            currentSongIndex = parseInt(index);
            loadSong(currentSongIndex);
            audio.play();
        });
    });

    loadSong(currentSongIndex); // Load the first song

