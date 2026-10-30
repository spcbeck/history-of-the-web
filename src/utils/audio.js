// Web Audio API Synthesizer for Authentic Retro & Modern Sound Effects

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.bgMusicPlaying = false;
    this.bgMusicOsc = null;
    this.bgMusicTimer = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick(year = 2026) {
    if (this.muted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    if (year <= 1998) {
      // 90s MECHANICAL MOUSE CLICK / CHIRP
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (year <= 2008) {
      // WEB 2.0 SOFT BUBBLE POP
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else {
      // MODERN SLEEK UI CHIME
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.08); // C6

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  }

  playDialup() {
    if (this.muted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const duration = 2.5;

    // Dial tone + handshake synth simulation
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'square';

    // Frequencies simulating modem handshake (350Hz + 440Hz dial tone -> baud chirps)
    osc1.frequency.setValueAtTime(350, now);
    osc2.frequency.setValueAtTime(440, now);

    osc1.frequency.setValueAtTime(1200, now + 0.6);
    osc2.frequency.setValueAtTime(2400, now + 0.6);

    osc1.frequency.setValueAtTime(980, now + 1.2);
    osc2.frequency.setValueAtTime(1800, now + 1.2);

    // Random noise overlay for static baud exchange
    const bufferSize = this.ctx.sampleRate * 1.0;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.05, now + 1.2);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    whiteNoise.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    whiteNoise.start(now + 1.2);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    whiteNoise.stop(now + duration);
  }

  toggleBgMusic(year = 1999) {
    this.initContext();
    if (this.bgMusicPlaying) {
      this.stopBgMusic();
      return false;
    } else {
      this.startBgMusic(year);
      return true;
    }
  }

  startBgMusic(year) {
    if (!this.ctx) return;
    this.bgMusicPlaying = true;

    // Synthesize a retro 8-bit / MIDI style arpeggio loop
    const notes = year < 2005 ? [261.63, 329.63, 392.00, 523.25] : [440, 554.37, 659.25, 880];
    let noteIdx = 0;

    const playNextNote = () => {
      if (!this.bgMusicPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = year < 2005 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(notes[noteIdx], now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);

      noteIdx = (noteIdx + 1) % notes.length;
    };

    this.bgMusicTimer = setInterval(playNextNote, 250);
  }

  stopBgMusic() {
    this.bgMusicPlaying = false;
    if (this.bgMusicTimer) {
      clearInterval(this.bgMusicTimer);
      this.bgMusicTimer = null;
    }
  }
}

export const soundManager = new SoundManager();
