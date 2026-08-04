export interface BugQuestion {
  code: string[];
  wrongToken: string;
  fixes: string[];
  correctFix: string;
}

export interface HUDProps {
  mission: number;
  total: number;
  attempts: number;
  score: number;
}

export interface CodeEditorProps {
  code: string[];
  wrongToken: string;
  selectedToken: string | null;
  hint: boolean;
  onSelect: (token: string) => void;
  onShoot: () => void;
}

export interface GunProps {
  selectedToken: string | null;
  shooting: boolean;
  onShoot: () => void;
}

export interface RepairModalProps {
  open: boolean;
  wrongToken: string;
  fixes: string[];
  onSubmit: (answer: string) => void;
}

export interface ResultModalProps {
  open: boolean;
  score: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}