import { FC } from 'react';

import LinkMasked from './LinkMasked';
import { LINK_MASKED } from '@/utils/constants';
import { UnorderedListItem } from '@/utils/types';

interface UnorderedListProps {
  title?: string;
  items: UnorderedListItem[];
  type?: string;
}

const UnorderedList: FC<UnorderedListProps> = ({
  title = '',
  items = [],
  type = '',
}) => {
  const cssClassesLinkMasked =
    'unorderedlist__text font-s-18 text-c-mercury-light';

  const unorderedListItems = items.map(item => {
    if (type === LINK_MASKED) {
      return (
        <li key={item.id} className="unorderedlist__item">
          <LinkMasked
            linkData={item}
            cssClasses={cssClassesLinkMasked}
            target="_blank"
          />
        </li>
      );
    }

    return (
      <li key={item.id} className="unorderedlist__item">
        <a href={item.url} target="_blank" className="unorderedlist__text">
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <div className="unorderedlist">
      {title?.length > 0 && <h5 className="unorderedlist__title">{title}</h5>}
      <ul className="unorderedlist__list">{unorderedListItems}</ul>
    </div>
  );
};

export default UnorderedList;
