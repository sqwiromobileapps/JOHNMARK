import React from 'react';
import { Block } from '@expocraft/core';
import useGraphql, { Emasomo_packageProps } from '@cloudhub-ux/graphql';
import {
  RemoteDataFlatList,
  RemoteDataFlatListProps,
} from '@expocraft/core/lib/widgets';
import PackageCard from './PackageCard';

const Emasomo_packageList = ({
  navigation,
  params = {},
  ...props
}: RemoteDataFlatListProps & { navigation?: any }) => {
  const { Emasomo_package, errors, setErrors, loadingModels } = useGraphql();

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
    item: Emasomo_packageProps;
    index: number;
    onViewRow?: ({ row, index }: { row: any; index: number }) => any;
  }) => {
    //const initials = AvatarHelper.getInitials(item.AccountName);
    const initials = `${index + 1}`;

    return (
      <Block flex={false} key={index}>
        <PackageCard emasomopackage={item} />
      </Block>
    );
  };

  return (
    <Block>
      <RemoteDataFlatList
        showHeader
        headerHasHeight
        title={''}
        Graphqlmodel={Emasomo_package}
        params={{
          sort: {
            createdAt: -1,
          },
          ...params,
        }}
        searchPlaceholder="Search for a package..."
        ref={gridRef}
        renderItem={renderItem}
        onBack={navigation ? () => navigation.goBack() : null}
        actionButton={<></>}
        {...props}
      />
    </Block>
  );
};

export default Emasomo_packageList;
