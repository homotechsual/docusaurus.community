import React, { CSSProperties } from 'react';
import clsx from 'clsx'; 
import useBaseUrl from '@docusaurus/useBaseUrl'; // Import the useBaseUrl function from Docusaurus for generate valide image url

interface AvatarImageProps {
  className?: string; // Custom classes for the component
  style?: CSSProperties; // Custom styles for the component
  avatarImageUrl: string; // URL of the avatar image
  alt: string; // Alt text for the image
  title?: string; // Title text for the image
  link?: boolean; // Determines if the image should be a link
  destination?: string; // Link URL if link = true
  avatarSize?: string; // Size class for the avatar image
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  className, // Custom classes for the component
  style, // Custom styles for the component
  avatarImageUrl, // URL of the avatar image
  alt, // Alt text for the image
  title, // Title text for the image
  link = false, // Default to false Determines if the image should be a link
  destination = '#', // Link URL if link = true, default value if destination is not provided
  avatarSize, // Size class for the avatar image
}) => {   
  const generatedAvatarUrl = useBaseUrl(avatarImageUrl);
  const avatarImageSizeClass = avatarSize ? `avatar__photo--${avatarSize}` : '';
  
  const imgElement = (
    <img
      className={clsx(
      "avatar__photo", 
      className, 
      avatarImageSizeClass
      )}

      style={style}
      src={generatedAvatarUrl}
      alt={alt}
      title={title}

    />
  );

  return link ? (
    <a className="avatar__photo-link" href={destination}>
      {imgElement}
    </a>
  ) : (
    imgElement
  );
};

export default AvatarImage;