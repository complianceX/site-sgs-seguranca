import { render, screen } from '@testing-library/react';
import { createRootRouteWithContext, createRoute, createRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import { LegalPage, type LegalPageProps } from '@/components/LegalPage';

function createTestRouter(props: LegalPageProps) {
  const rootRoute = createRootRouteWithContext()({
    component: () => <Outlet />,
  });
  const indexRoute = createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: () => <LegalPage {...props} />,
  });
  const routeTree = rootRoute.addChildren([indexRoute]);
  return createRouter({ routeTree, context: {} });
}

test('renders LegalPage with badge and title', () => {
  const props: LegalPageProps = {
    badge: 'Test Badge',
    title: 'Test Title',
    description: 'Test description',
    lastUpdated: '2024-01-01',
    sections: [],
    relatedLink: { to: '/privacidade', label: 'Privacidade' },
  };
  const router = createTestRouter(props);
  render(<RouterProvider router={router} />);
  expect(screen.getByText('Test Badge')).toBeInTheDocument();
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
