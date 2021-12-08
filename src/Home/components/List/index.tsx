import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  ListContainer,
  ListWrapper,
  ListItem,
  ListItemText,
  SubtitleWrapper,
  Subtitle,
  ImageWrapper,
  ContentWrapper,
} from './styles';

// const data = [
//   {
//     id: 1,
//     name: 'Lorem Ipsum',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://aawafi.com/uploads/partners/profile/doctor.jpg',
//   },
//   {
//     id: 2,
//     name: 'Laura Elit',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://img.freepik.com/fotos-gratis/_114579-47701.jpg?size=626&ext=jpg',
//   },
//   {
//     id: 3,
//     name: 'Lorem Ipsum',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://aawafi.com/uploads/partners/profile/doctor.jpg',
//   },
//   {
//     id: 4,
//     name: 'John Doe',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
//   },
//   {
//     id: 5,
//     name: 'Laura Elit',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://img.freepik.com/fotos-gratis/_114579-47701.jpg?size=626&ext=jpg',
//   },
//   {
//     id: 6,
//     name: 'Laura Elit',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://img.freepik.com/fotos-gratis/_114579-47701.jpg?size=626&ext=jpg',
//   },
//   {
//     id: 7,
//     name: 'John Doe',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
//   },
//   {
//     id: 8,
//     name: 'Lorem Ipsum',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://aawafi.com/uploads/partners/profile/doctor.jpg',
//   },
//   {
//     id: 9,
//     name: 'John Doe',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
//   },
//   {
//     id: 10,
//     name: 'Lorem Ipsum',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://aawafi.com/uploads/partners/profile/doctor.jpg',
//   },
// ]

const data = [
  {
    id: 1,
    name: 'Brion Bjarne',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    id: 2,
    name: 'Laura Elit',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
  {
    id: 3,
    name: 'Bettye Atanasije',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
  {
    id: 4,
    name: 'Leevi Aimo',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    id: 5,
    name: 'Karan Annette',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    id: 6,
    name: 'Lakshman Willy',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
  {
    id: 7,
    name: 'John Doe',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
  {
    id: 8,
    name: 'Kári Bébinn',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 9,
    name: 'Asklepios Maja',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    id: 10,
    name: 'Anath Blazh',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
]

export function List() {
  return (
    <Container>

      {data.map(item => (
        <ListContainer
          key={item.id}
        >
          <ListWrapper>
            <ListItem>
              <ImageWrapper>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 70, height: 70 }}
                />
              </ImageWrapper>
              <ContentWrapper>
                <ListItemText>
                  {item.name}
                </ListItemText>
                <SubtitleWrapper>
                  <Subtitle>
                    {item.subtitle}
                  </Subtitle>
                </SubtitleWrapper>
              </ContentWrapper>
            </ListItem>
          </ListWrapper>
        </ListContainer>
      ))}

    </Container>
  );
}