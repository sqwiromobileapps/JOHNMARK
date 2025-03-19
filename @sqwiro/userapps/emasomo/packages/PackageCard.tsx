import React from 'react';
import { Block, Button, Image, Text } from '@expocraft/core';
import { Emasomo_packageProps } from '@cloudhub-ux/graphql';
import currencyFormat from '@sqwiro/appcore/utils/currencyFormat';
import { MdiChevronRight } from '@expocraft-icons/mdi';
import { colors } from '@sqwiro/app/theme';

const PackageCard = ({
  emasomopackage,
}: {
  emasomopackage: Emasomo_packageProps;
}) => {
  return (
    <Block flex={false} shadow style={{ height: 300 }} margin rounded>
      <Block flex={false} padding>
        <Text bold>{emasomopackage.PackageName}</Text>
        <Text small darkGray>
          {emasomopackage.Course.CourseName}
        </Text>
      </Block>
      <Block color="cyan">
        <Image
          source={{ uri: emasomopackage.PackageImage.Location }}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </Block>
      <Block flex={false} row padding middle>
        <Block left>
          <Text primary size={18} bold>{`KES ${currencyFormat(
            emasomopackage.Price
          )}`}</Text>
        </Block>
        <Block flex={false} right>
          <Button small transparent>
            <Text primary bold>
              Start Learning
            </Text>
            <MdiChevronRight color={colors.primary} />
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default PackageCard;
