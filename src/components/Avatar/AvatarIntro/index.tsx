import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx'; 

interface AvatarIntroProps {
  className?: string; // Custom classes for the component
  style?: CSSProperties; // Custom styles for the component
  children: ReactNode; // Content of the component
  textAlign?: 'left' | 'center' | 'right'; // Text alignment options
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'link' | string;
  italic?: boolean; // Determines if the text is italic
  noDecoration?: boolean; // Determines if the text has no decoration
  transform?: string; // Text transform option
  breakWord?: boolean; // Determines if the text breaks words
  truncate?: boolean; // Determines if the text is truncated
  weight?: string; // Weight of the text 
}

const AvatarIntro: React.FC<AvatarIntroProps> = ({
  className, // Custom classes for the component
  style, // Custom styles for the component
  children, // Content of the component
  textAlign, // Text alignment 
  variant, // Variant for text color or style
  italic = false, // Default to false for italic text
  noDecoration = false, // Default to false for no decoration
  transform, // Text transform option
  breakWord = false, // Default to false for break words
  truncate = false, // Default to false for truncate
  weight, // Weight of the text 
}) => {   

  const textAlignClass = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';
  
  return (
    <div 
      className={clsx(
        "avatar__intro",
        className,
        textAlignClass,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export default AvatarIntro;