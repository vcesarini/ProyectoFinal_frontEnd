import Image from 'react-bootstrap/Image';
import { HeroSectionProps } from '../../types/props';

const HeroImage = ({ url }: HeroSectionProps) => {
    return (
        <Image src={url} fluid /> 
    )
}

export default HeroImage