import { useToast } from 'native-base';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { restoreToast } from '../../../redux/slices/feedBackReducer';
import { Alert, Text, VStack, HStack } from 'native-base';

export const ToastScreen = ({

}) => {
  
  const toast = useToast();
  const message = useSelector(state => state.feedback.message);
  const status = useSelector(state => state.feedback.status);
  const dispatch = useDispatch();

  const CustomToast = () => {
    return (
      <Alert w="100%" status={status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {message}
              </Text>
            </HStack>
            </HStack>
        </VStack>
      </Alert>
    )
  }

  useEffect(() => {

    if (message.length > 0){
      toast.show({
        render : CustomToast,
        duration : 1500,
        onCloseComplete : () => {
          dispatch(restoreToast());
        }
      })
    }
    
  }, [message, status])

  return (
    <View>
    </View>
  )
}