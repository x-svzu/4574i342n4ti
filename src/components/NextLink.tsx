import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  key?: string | number;
}

const Link = ({ href, children, prefetch, ...props }: LinkProps) => {
  // Handle external links
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
