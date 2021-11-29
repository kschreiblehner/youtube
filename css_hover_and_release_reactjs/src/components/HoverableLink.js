import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HoverableLink.scss';

export default function HoverableLink({ href, children }) {
  const [hoverAnimationStarted, setHoverAnimationStarted] = useState();
  const [leaveAnimationStarted, setLeaveAnimationStarted] = useState();

  function startHoverAnimation() {
    setHoverAnimationStarted(true);
  }

  function startLeaveAnimation() {
    setHoverAnimationStarted(false);
    setLeaveAnimationStarted(true);
  }

  function animate() {
    if (hoverAnimationStarted) {
      return 'hoverAnimation';
    }
    if (leaveAnimationStarted) {
      return 'leaveAnimation';
    }
  }

  return (
    <Link
      to={href}
      className="link"
      onMouseEnter={startHoverAnimation}
      onMouseLeave={startLeaveAnimation}
    >
      {children}
      <div className={`helper ${animate()}`}></div>
    </Link>
  );
}
