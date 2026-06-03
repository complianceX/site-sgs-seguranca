import { render, screen } from '@testing-library/react';
import { LegalPage } from '@/components/LegalPage';

test('renders LegalPage with badge and title', () => {
  const props: any = {
    badge: 'Test Badge',
    title: 'Test Title',
    description: 'Test description',
    lastUpdated: '2024-01-01',
    sections: [],
    relatedLink: { to: '/privacidade', label: 'Privacidade' },
  };
  render(<LegalPage {...props} />);
  expect(screen.getByText('Test Badge')).toBeInTheDocument();
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
