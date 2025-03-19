import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from '@expocraft/core';
import useGraphql, { Eschool_instructorProps } from '@cloudhub-ux/graphql';
import {
  RemoteDataFlatList,
  RemoteDataFlatListProps,
} from '@expocraft/core/lib/widgets';
import { colors, sizes, verticalScale } from '@sqwiro/app/theme';
import InstructorCard from './InstructorCard';

const Eschool_instructorList = ({
  navigation,
  params = {},
  ...props
}: RemoteDataFlatListProps & { navigation?: any }) => {
  const { Eschool_instructor, errors, setErrors, loadingModels } = useGraphql();

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
    item: Eschool_instructorProps;
    index: number;
    onViewRow?: ({ row, index }: { row: any; index: number }) => any;
  }) => {
    //const initials = AvatarHelper.getInitials(item.AccountName);
    const initials = `${index + 1}`;

    return (
      <Block
        flex={false}
        key={index}
        style={{
          minHeight: verticalScale(42),
          marginTop: sizes.margin * 2,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: colors.gray,
        }}
      >
        <InstructorCard instructor={item} />
      </Block>
    );
  };

  return (
    <Block>
      <Block>
        <RemoteDataFlatList
          title={'Farm Internal Audits'}
          Graphqlmodel={Eschool_instructor}
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

export default Eschool_instructorList;
