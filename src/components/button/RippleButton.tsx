import React, { useState } from 'react';
import styles from './RippleButton.module.scss';

const RippleButton = () => {
  const [ripple, setRipple] = useState({ visible: false, x: 0, y: 0 });

  const handleClick = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipple({ visible: true, x, y });

    setTimeout(() => {
      setRipple({ visible: false, x: 0, y: 0 });
    }, 600); // 퍼지는 시간 조절 (600ms는 예시)
  };

  return (
    <div className={styles.rippleContainer}>
      <button onClick={handleClick} className={styles.rippleButton}>
        Click me
        <span
          className={styles.ripple}
          style={{ left: ripple.x, top: ripple.y }}
        ></span>
        {ripple.visible && (
          <span
            className={styles.ripple}
            style={{ left: ripple.x, top: ripple.y }}
          ></span>
        )}
      </button>
    </div>
  );
};

export { RippleButton };
