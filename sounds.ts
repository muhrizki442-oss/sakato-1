let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

function playTone(
  frequency: number,
  duration: number,
  startTime: number,
  type: OscillatorType = 'sine',
  volume: number = 0.3,
) {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gainNode.gain.setValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

export function playCorrectSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    playTone(523.25, 0.15, now, 'sine', 0.25);
    playTone(659.25, 0.15, now + 0.1, 'sine', 0.25);
    playTone(783.99, 0.3, now + 0.2, 'sine', 0.25);
  } catch (e) {
    // Audio not supported
  }
}

export function playWrongSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    playTone(220, 0.2, now, 'sawtooth', 0.2);
    playTone(155.56, 0.4, now + 0.15, 'sawtooth', 0.2);
  } catch (e) {
    // Audio not supported
  }
}
