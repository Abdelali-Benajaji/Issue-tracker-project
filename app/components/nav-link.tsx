import NextLink from 'next/link'
import { Link as StyledLink } from '@radix-ui/themes'
 
interface Props{
    href:string;
    children:string;
}
 
function NavLink({ href, children }:Props) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
 
export default NavLink