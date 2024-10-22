import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('sidebar', () => {
    test('test render', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test render', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(toggleBtn).toBeInTheDocument();
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
