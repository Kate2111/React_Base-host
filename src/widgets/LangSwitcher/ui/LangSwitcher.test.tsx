import { screen } from '@testing-library/react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('LangSwitcher', () => {
    test('test render', () => {
        renderWithTranslation(<LangSwitcher />);
        expect(screen.getByTestId('lang-switcher-button')).toBeInTheDocument();
    });
});
