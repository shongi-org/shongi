import React from 'react';
import Lottie from 'lottie-react';

type LottieAnimationProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any; 
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
} ;

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  style,
  ...rest
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width: '100%', height: '100%', ...style }} // 
      {...rest}
    />
  );
};

export default LottieAnimation;
