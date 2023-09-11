import React from 'react'
import { Button, ButtonProps } from 'react-native'

export const AddButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <Button {...props} />
}
