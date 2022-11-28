import { AlertDialog, Button, Center } from "native-base";
import { useRef } from "react";

export const AlertConfirm = ({
  title = '',
  bodyMsg = '',
  confirmBtnTitle = '',
  cancelBtnTitle = '',
  isOpen = true,
  onConfirmBtnHandler,
  onCancelBtnHandler,
}) => {

  const cancelRef = useRef(null);

  return (
    <Center>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onCancelBtnHandler}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton></AlertDialog.CloseButton>
          <AlertDialog.Header>
            {title}
          </AlertDialog.Header>
          <AlertDialog.Body>
            {bodyMsg}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant='unstyled' colorScheme='coolGray' ref={cancelRef} onPress={onCancelBtnHandler}>
                {cancelBtnTitle}
              </Button>
              <Button colorScheme="danger" onPress={onConfirmBtnHandler}>
                {confirmBtnTitle}
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  )
}