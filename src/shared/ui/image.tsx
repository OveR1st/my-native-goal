import { Image, ImageProps } from 'react-native'

export const ImageComponent: React.FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} />
}
