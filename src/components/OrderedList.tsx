import React, { FC } from 'react';

import LinkMasked from '@/components/LinkMasked';
import { LINK_MASKED } from '@/utils/constants';

interface OrderedListProps {
  title?: string;
  items?: Array<{ id: string; url: string; name?: string; text?: string }>;
  type?: string;
}

const OrderedList: FC<OrderedListProps> = ({
  title = '',
  items = [],
  type = ''
}) => {
  const cssClassesLinkMasked = 'orderedlist__text font-s-18 text-c-mercury-light';
  const orderedListItems = items?.map((item) => {
    if (type === LINK_MASKED) {
      return (
        <li
          key={item.id}
          className="orderedlist__item"
        >
          <div className="orderedlist__item-dash"/>
          <LinkMasked
            linkData={item}
            cssClasses={cssClassesLinkMasked}
            target="_blank"
          />
        </li>
      );
    }

    return (
      <li
        key={item.id}
        className="orderedlist__item"
      >
        <div className="orderedlist__item-dash"/>
        <a
          href={item.url}
          target="_blank"
          className="orderedlist__text"
        >
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <div className="orderedlist">
      {title?.length > 0 && <h5 className="orderedlist__title font-s-12-secondary">{title}</h5>}
      <ol className="orderedlist__list">{orderedListItems}</ol>
    </div>
  );
};

export default OrderedList;
