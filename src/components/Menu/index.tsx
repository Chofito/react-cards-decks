import styled from 'styled-components';

interface MenuProps {
  testid: string;
  label: string;
  count: number;
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuLabel = styled.span`
  color: #fff;
  font-size: 12px;
`;

const MenuNumber = styled.div`
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 100%;
`;

const Menu: React.FC<MenuProps> = ({ count, label, testid }) => {
  return (
    <MenuContainer>
      <MenuNumber data-testid={testid}>{count}</MenuNumber>
      <MenuLabel>{label}</MenuLabel>
    </MenuContainer>
  );
};

export default Menu;
