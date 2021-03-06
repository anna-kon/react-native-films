import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
//import Reactotron from 'reactotron-react-native';

import { View } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './styles';

import RenderTextInput from '../../../../../../views/RenderTextInput';

const RegisterForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
            <Field
                style={styles.textField}
                name='username'
                label="Username"
                type="text"
                placeholder='Username'
                placeholderTextColor='white'
                component={RenderTextInput}
            />
            <Field
                style={styles.textField}
                name='email'
                label="Email"
                type="text"
                placeholder='Email'
                placeholderTextColor='white'
                component={RenderTextInput}
            />
            <Field
                style={styles.textField}
                name='password'
                label="Password"
                type="password"
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='white'
                component={RenderTextInput}
            />
            <Button style={styles.button} disabled={pristine || submitting} block onPress={handleSubmit} title='login'>
                <Text style={styles.logIn}>SIGN UP</Text>
            </Button>
        </View>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default reduxForm()(RegisterForm);