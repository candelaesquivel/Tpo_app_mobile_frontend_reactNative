import { Button } from "@rneui/themed";

export default function MyButton(props) {
    return (
        <Button
            title={props.title}
            buttonStyle={{
                borderRadius : 30,
                backgroundColor : '#FF511B'
            }}
        >
        </Button>
    )
}