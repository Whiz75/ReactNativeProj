import * as React from 'react';
import { DefaultTheme} from 'react-native-paper';
import App from './src/App';

const theme = {
    DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#32BB78',
        accent: '#f1c40f',
    },
    button:{

    },
};