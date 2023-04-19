import styled from "@emotion/styled";

const StyledHeader = styled.header`
  padding: 16px 50px;
  display: flex;
  font-size: 12px;
  border-bottom: solid 2px white;
`;

const Header = (): JSX.Element => {
  return (
    <>
      <StyledHeader>
        <h2>Interviewers Dashboard</h2>
      </StyledHeader>
    </>
  );
};

export default Header;
