import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login Form', () => {

    test('should spinner not show on start form', () => {
        
        const { getByTestId } = render(<Login />);
        const formLoading = getByTestId('form-loading');
        expect(formLoading.childElementCount).toBe(0);

    });

});