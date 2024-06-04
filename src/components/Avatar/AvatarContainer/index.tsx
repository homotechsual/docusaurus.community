import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

interface AvatarContainerProps {
  className?: string; // Custom classes for the component
  style?: CSSProperties; // Custom styles for the component
  children: ReactNode; // Content of the component
  vertical?: boolean; // Option for vertical position
}

const AvatarContainer: React.FC<AvatarContainerProps> = ({
  className, // Custom classes for the component
  style, // Custom styles for the component
  children, // Content of the component
  vertical = false, // Default to false for vertical position
}) => {   
  const avatarPosition = vertical ? 'avatar--vertical' : '';

  return (
    <div className={clsx(
        "avatar", 
        className, 
        avatarPosition
        )} 
        
        style={style}>

      {children}
    </div>
  );
}

export default AvatarContainer;