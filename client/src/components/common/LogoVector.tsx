import LogoBlackVector from '../../resources/images/stack-overflow-logo-black.svg';
import LogoOrangeVector from '../../resources/images/stack-overflow-logo-orange.svg';
import LogoWhiteVector from '../../resources/images/stack-overflow-logo-white.svg';

const LogoVectors: { [key: string]: string } = {
  black: LogoBlackVector,
  orange: LogoOrangeVector,
  white: LogoWhiteVector,
};

type Props = {
  color: string; // Header/Footer → Logo → LogoVector
};

export default function LogoVectorComponent(props: Props) {
  return <img src={LogoVectors[props.color]} alt='Logo' />;
}
