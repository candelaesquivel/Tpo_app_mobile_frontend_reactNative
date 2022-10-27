import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {Text, Card, Icon} from '@rneui/themed';
import {colorPalette} from '../styles/colors';
import I18n from '../../assets/localization/I18n';

function DishCard({
  name = 'Tarta de Atun',
  vegan = true,
  celiac = true,
  ingredients = [],
  price = 0,
}) {
  const VeganComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="leaf"
          type="font-awesome-5"
          color={colorPalette.Black}
          size={20}></Icon>
        <Text
          style={{color: colorPalette.Black, fontSize: 18}}
          marginBottom={30}>
          {' '}
          {I18n.t('vegan')}{' '}
        </Text>
      </View>
    );
  };

  const CeliacComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="leaf"
          type="font-awesome-5"
          color={colorPalette.Black}
          size={20}></Icon>
        <Text
          style={{color: colorPalette.Black, fontSize: 18}}
          marginBottom={30}>
          {' '}
          {I18n.t('celiac')}{' '}
        </Text>
      </View>

         );
  };

  const renderItem = ({item}) => (
    <View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Icon name="circle" color={colorPalette.Black} size={7}></Icon>
        <Text style={{fontSize: 18, color: colorPalette.Black}}>
          {item.name}

      </View>

      </View>
  );


  return (
    <View>
      <Card containerStyle={{borderRadius: 30}}>
        <View>
          <View width="100%" style={{alignItems: 'center'}}>
            <Text
              h4
              style={{
                flexDirection: 'column',
                color: colorPalette.Black,
                fontWeight: 'bold',
              }}>
              {name}
            </Text>
          </View>
          <View width="10%" height="10%"></View>
          {vegan && <VeganComponent />}
          {celiac && <CeliacComponent />}
          <View width="10%" height= "10%"></View>
          {/* {
            ingredients.map((l,o) => (

           <View style={{alignItems: 'center',flexDirection: 'row' }}>
                <Icon name="circle"  color={colorPalette.Black} size={7}></Icon>
                <Text style={{ fontSize:18,color: colorPalette.Black}}>{l}</Text>

            </View>

            ))
        } */}

          {
            <FlatList
              data={ingredients}
              renderItem={renderItem}
              keyExtractor={item => {
                return item.name;
              }}></FlatList>
          }


        <View width={300} style={{ alignItems: 'center'}}>
            <Text
              h4
              style={{flexDirection: 'column', color: colorPalette.Orange}}>
              {I18n.t('priceSymbol')}
              {price}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default DishCard;
