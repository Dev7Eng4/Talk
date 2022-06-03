import React, { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

const useClickOutSide = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
  refNonHandle?: RefObject<T>
) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;
      const elNon = refNonHandle?.current;

      if (
        !el ||
        el.contains(event.target as Node) ||
        elNon?.contains(event.target as Node)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener, false);
    document.addEventListener('touchstart', listener, false);

    return () => {
      document.removeEventListener('mousedown', listener, false);
      document.removeEventListener('touchstart', listener, false);
    };
  }, [ref, handler]);
};

export default useClickOutSide;
