import React from 'react';
import { Block } from '@expocraft/core';
import useGraphql, { Eschool_courseProps } from '@cloudhub-ux/graphql';
import {
  RemoteDataFlatList,
  RemoteDataFlatListProps,
} from '@expocraft/core/lib/widgets';
import CourseCard from './CourseCard';

const Eschool_CourseList = ({
  navigation,
  params = {},
  ...props
}: RemoteDataFlatListProps & { navigation?: any }) => {
  const { Eschool_course, errors, setErrors, loadingModels } = useGraphql();

  const gridRef = React.useRef<any>(null);

  const onSave = () => {
    if (typeof gridRef.current.reload === 'function') {
      gridRef.current.reload();
    }
  };

  const renderItem = ({
    item,
    index,
    onViewRow,
  }: {
    item: Eschool_courseProps;
    index: number;
    onViewRow?: ({ row, index }: { row: any; index: number }) => any;
  }) => {
    //const initials = AvatarHelper.getInitials(item.AccountName);
    const initials = `${index + 1}`;

    return (
      <Block flex={false} key={index}>
        <CourseCard course={item} />
      </Block>
    );
  };

  return (
    <Block>
      <Block>
        <RemoteDataFlatList
          title={'Courses'}
          Graphqlmodel={Eschool_course}
          params={{
            sort: {
              createdAt: -1,
            },
            ...params,
          }}
          ref={gridRef}
          renderItem={renderItem}
          onBack={navigation ? () => navigation.goBack() : null}
          actionButton={<></>}
          {...props}
        />
      </Block>
    </Block>
  );
};

export default Eschool_CourseList;
