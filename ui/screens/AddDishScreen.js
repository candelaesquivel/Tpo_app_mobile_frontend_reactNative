import { View, Text  } from 'react-native'
import React, { useState } from 'react';
import { NavBar } from '../components/navBar'
import { Icon, Switch , BottomSheet , ListItem } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import OverlayMessage from '../components/overlayMessage';

export default function AddDishScreen() {

    const [isVisibleChose, setIsVisibleChose] = useState(false);
    const [isVisibleAddCategory, setIsVisibleAddCategory] = useState(false);

    const list = [
        { title: 'Categoria1' },
        { title: 'Categoria2' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setIsVisibleChose(false),
        },
      ];

  return (
    <View style={{height: '100%',flexDirection : 'column', alignItems : 'center', marginTop : 23, backgroundColor:  colorPalette.White}}>
           
            <View style={{width:'85%', alignItems:'flex-start', marginTop:30}}>

            <Text
            style={{ fontSize:'20', color: colorPalette.Black}}
            >
               {I18n.t('name')}    
            </Text>
            <InputText color={colorPalette.White}></InputText>

            <Text
            style={{ fontSize:'20', color: colorPalette.Black}}
            >
               {I18n.t('price')}    
            </Text>
            <InputText color={colorPalette.White}></InputText>

            <Text
            style={{ fontSize:'20', color: colorPalette.Black}}
            >
               {I18n.t('ingredients')}    
            </Text>
            <InputText color={colorPalette.White}></InputText>

            <Text
            style={{ fontSize:'20', color: colorPalette.Black}}
            >
               {I18n.t('discount')}    
            </Text>
             <InputText color={colorPalette.White}></InputText>

             <View style={{flexDirection:'row', marginBottom:'5%' }}>
            <Text
            style={{ fontSize:'20', color: colorPalette.Black, width:'45%'}}
            >
               {I18n.t('vegan')}    
            </Text>
            <Switch></Switch>

            </View>
            
            <View style={{flexDirection:'row' }}>
            <Text
                    style={{fontSize:'20', color: colorPalette.Black, width:'45%'}}
                    >
                    {I18n.t('celiac')}    
                    </Text>
                    <Switch ></Switch>
            </View>
            <View style={{height:'3%'}}></View>  
            
            <View style={{flexDirection:'row' ,marginBottom:'5%'}}>
                <Text
                        style={{fontSize:'20', color: colorPalette.Black, width:'45%'}}
                        >
                        {I18n.t('addPicture')}    
                        </Text>
                        <Icon name='add-photo-alternate' Type='material-community' size={30} color={colorPalette.Orange}></Icon>
                </View>

                <Text
                style={{ fontSize:'20', color: colorPalette.Black,marginBottom:'5%'}}
                >
                {I18n.t('category')}    
                </Text>

                <View style={{flexDirection: 'row', height:'25%', justifyContent: 'space-evenly'}}>
                    <MyButton
                    title= {I18n.t('chose')} 
                    width='45%'
                    height='25%'
                    onPress={(e) => setIsVisibleChose(true)}
                    ></MyButton>
                    
                    <View style={{width: '8%'}}>
                    </View>
                    <MyButton
                    title= {I18n.t('addNewCategory')} 
                    width='45%'
                    height='25%'
                    onPress={(e) => setIsVisibleAddCategory(true)}
                    ></MyButton>

                </View>

           
                <BottomSheet modalProps={{}} isVisible={isVisibleChose} >
                {list.map((l, i) => (
                    <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}
                    >
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                    </ListItem>
                ))}
                </BottomSheet>
            </View>

            <View>
                <OverlayMessage
                message='Nueva categoria :'
                message3={false}
                showOverlay = {false}
                >
                </OverlayMessage>
            </View>
    </View>
  )
}