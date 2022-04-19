import React from "react";
import {View} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "../styles";

const RatingComponent = (props) => {
    return (
        <View
            style={styles.ratingViewStyle}>
                <AirbnbRating
                    count={5}
                    reviews={[]}
                    defaultRating={props.rating || 3}
                    size={ props.starDim }
                    isDisabled={ !props.onFinishRating }
                    onFinishRating={ props.onFinishRating } />
                    
        </View>
    );
}

export default RatingComponent;