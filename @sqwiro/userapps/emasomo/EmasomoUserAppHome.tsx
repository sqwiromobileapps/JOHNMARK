import React from 'react';
import { Block, Button, Text, Header, IconButton } from '@expocraft/core';
import {
  MenuButton,
  TopMenuNavigationScreen,
} from '@expocraft/core/lib/widgets';
import { colors } from '@sqwiro/app/theme';

import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';
import {
  MdiBook,
  MdiBox,
  MdiChevronRight,
  MdiGraduationCap,
  MdiTeacher,
} from '@expocraft-icons/mdi';
import Emasomo_packageList from './packages/Emasomo_packageList';
import Eschool_CourseList from './courses/Eschool_CourseList';
import Eschool_instructorList from './instructors/Eschool_instructorList';

const EmasomoUserAppHome = () => {
  const [selected, setSelected] = React.useState('packages');
  const { authNavigator, dispatch } = useMerchantAppNavigation();

  return (
    <TopMenuNavigationScreen
      header={
        <Header
          hasHeight
          onBack={() => {
            // rootDrawerNavigator.goBack();
          }}
          leftComponent={<IconButton>{}</IconButton>}
          rightComponent={
            <Button
              small
              transparent
              onPress={() => {
                if (
                  authNavigator &&
                  typeof authNavigator.navigate === 'function'
                ) {
                  authNavigator.navigate('PhoneScreen');
                }
              }}
            >
              <Text cropped>Sign in</Text>
              <MdiChevronRight size={20} />
            </Button>
          }
        />
      }
      buttons={[
        <MenuButton
          id="packages"
          title="Packages"
          // description={`45+`}
          iconSize={44}
          buttonColor={colors.cyan[100]}
          IconComponent={<MdiBox />}
          color={colors.cyan[500]}
          lightColor={colors.cyan[100]}
          buttonStyle={{
            width: 120,
          }}
        />,
        <MenuButton
          id="courses"
          title="Courses"
          iconSize={44}
          buttonColor={colors.pink[100]}
          IconComponent={<MdiGraduationCap />}
          color={colors.pink[500]}
          lightColor={colors.pink[100]}
          buttonStyle={{
            width: 120,
          }}
        />,
        <MenuButton
          id="instructors"
          title="Instructors"
          iconSize={44}
          buttonColor={colors.green[100]}
          IconComponent={<MdiTeacher />}
          color={colors.green[500]}
          lightColor={colors.green[100]}
          buttonStyle={{
            width: 120,
          }}
        />,
        <MenuButton
          id="subjects"
          title="Subjects"
          iconSize={44}
          buttonColor={colors.indigo[100]}
          IconComponent={<MdiBook />}
          color={colors.indigo[500]}
          lightColor={colors.indigo[100]}
          buttonStyle={{
            width: 120,
          }}
        />,
      ]}
      selected={selected}
      onChange={(selected) => setSelected(selected)}
    >
      <Block>
        {selected === 'packages' && <Emasomo_packageList showHeader={false} />}
        {selected === 'courses' && <Eschool_CourseList showHeader={false} />}
        {selected === 'instructors' && (
          <Eschool_instructorList showHeader={false} />
        )}
      </Block>
    </TopMenuNavigationScreen>
  );
};

export default EmasomoUserAppHome;
