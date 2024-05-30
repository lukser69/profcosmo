export interface IButton {
  variant?: 'primary' | 'outlined';
  size?: 'md' | 'sm';
  title?: string;
  type?: "button" | "submit" | "reset";
  block?: boolean;
}