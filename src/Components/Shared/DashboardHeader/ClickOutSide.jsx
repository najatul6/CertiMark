import { useRef, useEffect } from 'react';

const ClickOutside = ({ children, exceptionRef, onClick, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInside = wrapperRef.current?.contains(event.target) || exceptionRef?.current?.contains(event.target);
      if (!clickedInside) onClick();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClick, exceptionRef]);

  return (
    <div ref={wrapperRef} className={className || ''}>
      {children}
    </div>
  );
};

export default ClickOutside;
