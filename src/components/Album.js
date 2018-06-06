import React from 'react';
import { Image, Text} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const Album = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.artist}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.url}</Text>
      </CardSection>
      {/* image, thumbnail_image */}
    </Card>
  )
};

export default Album
