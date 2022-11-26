import { useToast } from 'native-base';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { restoreToast } from '../../../redux/slices/feedBackReducer';

export const ToastScreen = ({

}) => {
  
  const toast = useToast();
  const message = useSelector(state => state.feedback.message);
  const status = useSelector(state => state.feedback.status);
  const dispatch = useDispatch();

  useEffect(() => {

    if (message.length > 0){
      toast.show({
        title : message,
        duration : 1000,
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