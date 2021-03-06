import React from 'react';

import { View } from 'react-native';
import styles from './styles';
import Spinner from 'react-native-spinkit';

const Loading = () => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Spinner style={styles.spinner} isVisible={true} size={50} type={'Wave'} color='white' />
            </View>
        </React.Fragment>

    );
};


export default Loading;