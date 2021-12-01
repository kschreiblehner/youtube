import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HoverableLink.scss';

export default function HoverableLink({ href, children }) {
  const [hoverAnimationRunning, setHoverAnimationRunning] = useState(false);
  const [leaveAnimationRunning, setLeaveAnimationRunning] = useState(false);
  const [hoverAnimationEnded, setHoverAnimationEnded] = useState(false);
  const [hoverAnimationRegistered, setHoverAnimationRegistered] =
    useState(false);
  const [leaveAnimationRegistered, setLeaveAnimationRegistered] =
    useState(false);

  function startHoverAnimation() {
    if (!hoverAnimationRunning && !leaveAnimationRunning) {
      return setHoverAnimationRunning(true);
    }
    if (hoverAnimationRunning) {
      setLeaveAnimationRegistered(false);
      return setHoverAnimationRegistered(false);
    }
    if (leaveAnimationRunning) {
      return setHoverAnimationRegistered(true);
    }
  }

  function startLeaveAnimation() {
    if (!hoverAnimationRunning && !leaveAnimationRunning) {
      return setLeaveAnimationRunning(true);
    }
    if (leaveAnimationRunning) {
      setLeaveAnimationRegistered(false);
      return setHoverAnimationRegistered(false);
    }
    if (hoverAnimationRunning) {
      return setLeaveAnimationRegistered(true);
    }
  }

  function animationEnd() {
    if (hoverAnimationRunning) {
      setHoverAnimationRunning(false);
      setHoverAnimationEnded(true);
      if (leaveAnimationRegistered) {
        setLeaveAnimationRegistered(false);
        return setLeaveAnimationRunning(true);
      }
      return;
    }
    if (leaveAnimationRunning) {
      setLeaveAnimationRunning(false);      
      setHoverAnimationEnded(false);
      if (hoverAnimationRegistered) {
        setHoverAnimationRegistered(false);
        return setHoverAnimationRunning(true);
      }
      return;
    }
  }

  function animate() {
    if (hoverAnimationRunning) {
      return 'hoverAnimation';
    }
    if (leaveAnimationRunning) {
      return 'leaveAnimation';
    }
    if (hoverAnimationEnded && !leaveAnimationRunning) {
      return 'hoverAnimationEnded';
    }
    if (!hoverAnimationRunning && !leaveAnimationRunning) {
      return '';
    }
  }

  return (
    <Link
      to={href}
      className="link"
      onMouseEnter={startHoverAnimation}
      onMouseLeave={startLeaveAnimation}
      onAnimationEnd={animationEnd}
    >
      {children}
      <div className={`helper ${animate()}`}></div>
    </Link>
  );
}
