export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'tree' | 'broom' | 'snowflake' | 'wrench' | 'hammer' | 'brick';
}

export interface NavLink {
  label: string;
  href: string;
}

// Web Speech API Types
export interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

export interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

export interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

export interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

export interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onerror: (event: any) => void;
  onstart: (event: any) => void;
  onend: (event: any) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
}

// Augment window to include SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}