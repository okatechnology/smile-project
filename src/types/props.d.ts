type InputTextAreaProps = {
  inputtedText: string;
  onSetInputtedText: (s: string) => void;
}

type OutputTextAreaProps = {
  outputText: string;
  onsetRefOfOutputTextarea: (ref: React.MutableRefObject<HTMLTextAreaElement>) => void;
}

type ConversionButtonProps = {
  onSetOutputText: (s: string) => void;
  inputtedText: string;
}

type TweetButtonProps = {
  tweetText: string;
}

type CopyButtonProps = {
  outputText: string;
  areaToSelect: React.MutableRefObject<HTMLTextAreaElement>;
}

type TransitionStyles = {
  entering?: React.CSSProperties;
  entered?: React.CSSProperties;
  exiting?: React.CSSProperties;
  exited?: React.CSSProperties;
}
