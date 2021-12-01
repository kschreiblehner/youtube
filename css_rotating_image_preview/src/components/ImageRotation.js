import { useState } from 'react';
import './ImageRotation.scss';

export default function HoverableLink({ src, description }) {
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
    <div
      className={`container ${animate()}`}
      onMouseEnter={startHoverAnimation}
      onMouseLeave={startLeaveAnimation}
      onAnimationEnd={animationEnd}
    >
      <img src={src} alt="rotating pic" />
      <p>{description}</p>
    </div>
  );
}
