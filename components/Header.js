import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #2855AE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;


const Header = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <img 
          src="listou-icon.png"
          alt=""
          width={50}
          height={50}/>
        </Link>
      </div>
    </Nav>
  );
};

export default Header;