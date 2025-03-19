import React from 'react';
import { Block, Text, Divider, Button } from '@expocraft/core';
import { Eschool_courseProps } from '@cloudhub-ux/graphql';
import { MdiChevronRight } from '@expocraft-icons/mdi';

const CourseCard = ({ course }: { course: Eschool_courseProps }) => {
  const ExaminationBody =
    course.ExaminationBody || ({} as typeof course.ExaminationBody);

  return (
    <Block flex={false} padding card rounded margin>
      <Block flex={false}>
        <Text bold>{course.CourseName}</Text>
        {course.CourseCode !== course.CourseName && (
          <Text bold darkGray>
            {course.CourseCode}
          </Text>
        )}
      </Block>
      <Divider />

      <Block flex={false}>
        <Text>{course.Description}</Text>

        <Block flex={false} marginT>
          {ExaminationBody.BodyName && (
            <Text
              darkGray
            >{`This course is examined by ${ExaminationBody.BodyName}`}</Text>
          )}
        </Block>
      </Block>
      <Block></Block>
      <Block flex={false} row>
        <Block></Block>
        <Block flex={false}>
          <Button small transparent>
            <Text bold cropped>
              Explore
            </Text>
            <MdiChevronRight size={28} />
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default CourseCard;
