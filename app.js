// App principal - Valencianismes
document.addEventListener('DOMContentLoaded', () => {
  const app = new ValencianismesApp();
  app.init();
});

class ValencianismesApp {
  constructor() {
    this.paraules = PARAULES;
    this.currentWord = null;
    this.todayWord = null;
    this.isShowingToday = true;
    this.musicPlaying = false;
    this.musicStarted = false;
    this.deferredPrompt = null;
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in navigator && navigator.standalone);
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    this.installBannerDismissed = false;
  }

  init() {
    this.todayWord = this.getWordOfTheDay();
    this.currentWord = this.todayWord;
    this.render();
    this.hideSplash();
    this.setupPWAInstall();
    this.setupMusic();
  }

  // Genera un índex basat en la data del dia (deterministic)
  getWordOfTheDay() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % this.paraules.length;
    return this.paraules[index];
  }

  // Obté una paraula aleatòria diferent a l'actual
  getRandomWord() {
    let newWord;
    let attempts = 0;
    do {
      const randomIndex = Math.floor(Math.random() * this.paraules.length);
      newWord = this.paraules[randomIndex];
      attempts++;
    } while (newWord.paraula === this.currentWord.paraula && attempts < 20);
    return newWord;
  }

  // Formata la data en valencià
  getFormattedDate() {
    const dies = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
    const mesos = ['de gener', 'de febrer', 'de març', "d'abril", 'de maig', 'de juny',
                   'de juliol', "d'agost", 'de setembre', "d'octubre", 'de novembre', 'de desembre'];
    const today = new Date();
    return `${dies[today.getDay()]}, ${today.getDate()} ${mesos[today.getMonth()]} ${today.getFullYear()}`;
  }

  // Setup background music
  setupMusic() {
    const music = document.getElementById('bgMusic');
    if (!music) return;
    
    music.volume = 0.15; // Volum baix per no molestar

    // Sincronització amb els esdeveniments natius de l'element d'àudio
    music.addEventListener('play', () => {
      this.musicPlaying = true;
      this.updateMusicButton();
    });

    music.addEventListener('pause', () => {
      this.musicPlaying = false;
      this.updateMusicButton();
    });

    // Inicia la música a la primera interacció de l'usuari (requerit pels navegadors)
    const startMusic = () => {
      if (!this.musicStarted) {
        this.musicStarted = true;
        music.play().then(() => {
          this.musicPlaying = true;
          this.updateMusicButton();
        }).catch(() => {
          this.musicStarted = false;
        });
      }
    };

    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
  }

  toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (!music) return;

    if (!music.paused) {
      music.pause();
      this.musicPlaying = false;
      this.updateMusicButton();
    } else {
      this.musicStarted = true;
      this.musicPlaying = true;
      this.updateMusicButton();
      music.play().catch((err) => {
        console.warn('Error en reproduir música:', err);
        this.musicPlaying = false;
        this.updateMusicButton();
      });
    }
  }

  updateMusicButton() {
    const btn = document.getElementById('btnMusic');
    if (btn) {
      btn.innerHTML = `<span class="music-btn__icon">${this.musicPlaying ? '🔊' : '🔇'}</span>`;
      btn.title = this.musicPlaying ? 'Silenciar música' : 'Activar música';
      btn.setAttribute('aria-label', this.musicPlaying ? 'Silenciar música' : 'Activar música');
    }
  }

  // Renderitza l'esquelet inicial de l'app
  render() {
    const appEl = document.getElementById('app');
    const word = this.currentWord;

    appEl.innerHTML = `
      <header class="header">
        <div class="header__logo">
          <img src="icon-192.png" alt="Valencianismes" class="header__icon" onerror="this.style.display='none'">
          <h1 class="header__title">Valencianismes</h1>
        </div>
        <p class="header__subtitle">Descobreix el tresor del nostre vocabulari</p>
        <button class="music-btn" id="btnMusic" aria-label="${this.musicPlaying ? 'Silenciar música' : 'Activar música'}" title="${this.musicPlaying ? 'Silenciar música' : 'Activar música'}">
          <span class="music-btn__icon">${this.musicPlaying ? '🔊' : '🔇'}</span>
        </button>
      </header>

      <div class="date-banner" id="dateBanner">
        <span class="date-banner__icon">📅</span>
        <span>${this.isShowingToday ? 'Paraula del dia · ' : 'Paraula aleatòria · '}${this.getFormattedDate()}</span>
      </div>

      <div id="installBanner" class="install-banner ${(!this.isStandalone && !this.installBannerDismissed) ? '' : 'hidden'}">
        <div class="install-banner__text">
          <div class="install-banner__title">📲 Instal·la l'app</div>
          <div class="install-banner__desc">Afig-la a la pantalla d'inici per accedir ràpidament</div>
        </div>
        <button class="install-banner__btn" id="installBtn">Instal·lar</button>
        <button class="install-banner__close" id="installClose" aria-label="Tancar">&times;</button>
      </div>

      <article class="word-card" id="wordCard">
        <div class="deco-mosaic deco-mosaic--1"></div>
        <div class="deco-mosaic deco-mosaic--2"></div>
        
        <span class="word-card__category">${word.categoria}</span>
        
        <h2 class="word-card__word">${word.paraula}</h2>
        
        <div class="word-card__translation">
          <span class="word-card__translation-icon">🇪🇸</span>
          <span>${word.castella}</span>
        </div>
        
        <div class="word-card__divider"></div>
        
        <div class="word-card__definition-label">Definició</div>
        <p class="word-card__definition">${word.definicio}</p>
        
        <div class="word-card__example">
          <div class="word-card__example-label">Exemple</div>
          <p class="word-card__example-text">«${word.exemple}»</p>
        </div>
        
        ${word.nota ? `
        <div class="word-card__note">
          <span class="word-card__note-icon">📝</span>
          <span>${word.nota}</span>
        </div>
        ` : ''}
      </article>

      <div class="actions">
        <button class="btn btn--primary" id="btnRandom">
          <span class="btn__icon">🔀</span>
          <span>Altra paraula</span>
        </button>
        <button class="btn btn--secondary" id="btnToday" ${this.isShowingToday ? 'style="opacity:0.5; pointer-events:none"' : ''}>
          <span class="btn__icon">📌</span>
          <span>Paraula del dia</span>
        </button>
      </div>

      <footer class="footer">
        <p class="footer__text">Fet amb <span class="footer__heart">❤️</span> per a la nostra llengua</p>
        <p class="footer__author">Creat per Pau Anyó Calabuig</p>
      </footer>
    `;

    // Event listeners
    document.getElementById('btnRandom').addEventListener('click', () => this.showRandom());
    document.getElementById('btnToday').addEventListener('click', () => this.showToday());
    document.getElementById('btnMusic').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMusic();
    });
  }

  showRandom() {
    this.currentWord = this.getRandomWord();
    this.isShowingToday = false;
    this.updateCard();
  }

  showToday() {
    this.currentWord = this.todayWord;
    this.isShowingToday = true;
    this.updateCard();
  }

  // Actualitza només la targeta i la data (mantenint visible el bàner d'instal·lació)
  updateCard() {
    const dateBanner = document.getElementById('dateBanner');
    if (dateBanner) {
      dateBanner.innerHTML = `
        <span class="date-banner__icon">📅</span>
        <span>${this.isShowingToday ? 'Paraula del dia · ' : 'Paraula aleatòria · '}${this.getFormattedDate()}</span>
      `;
    }

    const btnToday = document.getElementById('btnToday');
    if (btnToday) {
      btnToday.style.opacity = this.isShowingToday ? '0.5' : '1';
      btnToday.style.pointerEvents = this.isShowingToday ? 'none' : 'auto';
    }

    const card = document.getElementById('wordCard');
    if (card) {
      const word = this.currentWord;
      card.classList.remove('animate-in');
      void card.offsetWidth; // Força el reflow per a rellançar l'animació de transició
      
      card.innerHTML = `
        <div class="deco-mosaic deco-mosaic--1"></div>
        <div class="deco-mosaic deco-mosaic--2"></div>
        
        <span class="word-card__category">${word.categoria}</span>
        
        <h2 class="word-card__word">${word.paraula}</h2>
        
        <div class="word-card__translation">
          <span class="word-card__translation-icon">🇪🇸</span>
          <span>${word.castella}</span>
        </div>
        
        <div class="word-card__divider"></div>
        
        <div class="word-card__definition-label">Definició</div>
        <p class="word-card__definition">${word.definicio}</p>
        
        <div class="word-card__example">
          <div class="word-card__example-label">Exemple</div>
          <p class="word-card__example-text">«${word.exemple}»</p>
        </div>
        
        ${word.nota ? `
        <div class="word-card__note">
          <span class="word-card__note-icon">📝</span>
          <span>${word.nota}</span>
        </div>
        ` : ''}
      `;
      card.classList.add('animate-in');
    }
  }

  hideSplash() {
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (splash) {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 600);
      }
    }, 1500);
  }

  // PWA Install Prompt
  setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.updateInstallBanner();
    });

    document.addEventListener('click', (e) => {
      if (e.target.id === 'installBtn' || e.target.closest('#installBtn')) {
        this.handleInstallClick();
      }
      
      if (e.target.id === 'installClose' || e.target.closest('#installClose')) {
        this.installBannerDismissed = true;
        const banner = document.getElementById('installBanner');
        if (banner) banner.classList.add('hidden');
      }

      if (e.target.id === 'installHelpClose' || e.target.closest('#installHelpClose') || e.target.id === 'installHelpBackdrop') {
        const modal = document.getElementById('installHelpModal');
        if (modal) modal.remove();
      }
    });

    this.updateInstallBanner();
  }

  updateInstallBanner() {
    if (this.isStandalone || this.installBannerDismissed) return;

    const banner = document.getElementById('installBanner');
    if (!banner) return;

    banner.classList.remove('hidden');

    if (this.isIOS) {
      const desc = banner.querySelector('.install-banner__desc');
      const btn = banner.querySelector('.install-banner__btn');
      if (desc) desc.textContent = 'Prem Compartir ⬆ i "Afegir a pantalla d\'inici"';
      if (btn) btn.style.display = 'none';
    }
  }

  handleInstallClick() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          this.deferredPrompt = null;
          this.installBannerDismissed = true;
          const banner = document.getElementById('installBanner');
          if (banner) banner.classList.add('hidden');
        }
      });
    } else {
      this.showInstallHelpModal();
    }
  }

  showInstallHelpModal() {
    const existing = document.getElementById('installHelpModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'installHelpModal';
    modal.className = 'install-modal';
    modal.innerHTML = `
      <div class="install-modal__backdrop" id="installHelpBackdrop"></div>
      <div class="install-modal__content">
        <h3 class="install-modal__title">📲 Com instal·lar Valencianismes</h3>
        <ul class="install-modal__list">
          <li><strong>Android (Chrome):</strong> Prem el menú de tres punts (⋮) a dalt i selecciona <em>«Afegeix a la pantalla d'inici»</em> o <em>«Instal·la l'aplicació»</em>.</li>
          <li><strong>iPhone / iPad (Safari):</strong> Prem el botó Compartir (fletxa cap amunt ⬆️) i tria <em>«Afegeix a la pantalla d'inici»</em>.</li>
          <li><strong>Ordinador (Chrome / Edge):</strong> Fes clic a la icona d'instal·lar (ordinador amb fletxa ⬇️) a la barra d'adreces.</li>
        </ul>
        <button class="btn btn--primary install-modal__btn" id="installHelpClose">D'acord</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
}
