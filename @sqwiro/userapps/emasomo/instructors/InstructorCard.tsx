import React from 'react';
import { Block, Image, Text } from '@expocraft/core';
import { Eschool_instructorProps } from '@cloudhub-ux/graphql';
import { Images } from '@sqwiro/app/theme';

const InstructorCard = ({
  instructor,
}: {
  instructor: Eschool_instructorProps;
}) => {
  const InstructorImage =
    instructor.InstructorImage || ({} as typeof instructor.InstructorImage);
  return (
    <Block
      flex={false}
      card
      rounded
      margin
      style={{
        minHeight: 200,
      }}
    >
      <Block row>
        <Block>
          <Block flex={false} padding>
            <Text bold>{instructor.InstructorName}</Text>
          </Block>
          <Block padding>
            {InstructorImage.Location ? (
              <Image
                source={{
                  uri: instructor.InstructorImage.Location,
                }}
                style={{
                  width: 150,
                  height: 150,
                }}
                objectFit="cover"
              />
            ) : (
              <Image
                source={Images.DefaultUser}
                style={{
                  width: 150,
                  height: 150,
                }}
                objectFit="cover"
              />
            )}
          </Block>
        </Block>
        <Block padding>
          {instructor.Subjects.map((subject, index) => (
            <Block flex={false} key={subject.id}>
              <Text bold>{`${index + 1}. ${subject.SubjectName}`}</Text>
            </Block>
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default InstructorCard;
