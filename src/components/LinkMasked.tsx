import { FC } from 'react';

interface LinkMaskedProps {
  linkData: {
    url?: string;
    text?: string;
    name?: string;
  };
  cssClasses: string;
  target: string;
}

const LinkMasked: FC<LinkMaskedProps> = ({ linkData, cssClasses, target }) => (
  <div className="link-masked">
    <span className={`link-masked__placeholder ${cssClasses}`}>
      {linkData.text}
    </span>
    <div className="link-masked__mask">
      <a
        href={linkData.url}
        target={target}
        className={`link-masked__text ${cssClasses}`}
      >
        {linkData.text}
      </a>
    </div>
  </div>
);

export default LinkMasked;
