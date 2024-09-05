import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomNavLink = ({ href, children, className, activeClassName }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a className={`${className} ${isActive ? activeClassName : ''}`}>
        {children}
      </a>
    </Link>
  );
};

export default CustomNavLink;