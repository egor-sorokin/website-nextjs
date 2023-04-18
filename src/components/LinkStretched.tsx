import { FC, MouseEvent } from 'react';

type LinkStretchedProps = {
  text?: string;
  url?: string;
  target?: string;
  cssClasses?: string;
  onClick?: (anchorId?: string) => void;
};

const LinkStretched: FC<LinkStretchedProps> = ({
  text,
  url,
  target,
  cssClasses = '',
  onClick = () => {},
}) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!url) {
      event.preventDefault();
      onClick?.();
    } else {
      onClick?.(event.currentTarget.dataset.anchorId!.substring(1));
    }
  };

  return (
    <a
      href={url}
      data-anchor-id={url}
      target={target}
      onClick={handleClick}
      className={`${cssClasses} link-stretched`}
    >
      {text}
    </a>
  );
};

export default LinkStretched;
