import * as React from 'react';
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import * as styles from './InputTextArea.scss';

const duration: number = 300;
const delay: number = 100;

const defaultStyles: React.CSSProperties = {
  transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  opacity: 0,
  transform: 'translateX(20%)'
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: 'translateY(0)' },
  entered: { opacity: 1, transform: 'translateY(0)' },
}

function InputTextarea(props: InputTextAreaProps) {
  const [inProp, setInProp] = useState<boolean>(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return(
    <Transition in={inProp} timeout={duration + delay}>
      {state => (
        <textarea
          className={styles.normal}
          placeholder="ここに文字を入れてね‪♪(๑ᴖ◡ᴖ๑)♪"
          value={props.inputtedText}
          onChange={(e) => { props.onSetInputtedText(e.target.value) }}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        ></textarea>
      )}
    </Transition>
  )
}

export default InputTextarea;
