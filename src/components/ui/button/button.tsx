import React from 'react';
import styles from './button.module.scss'; 

type ButtonProps = {
  label: string; 
  onClick?: () => void; 
  type?: "button" | "submit" | "reset"; 
  disabled?: boolean;
  className?: string; 
};

export default function Button({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {label}
    </button>
  );
}
