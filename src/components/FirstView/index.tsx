import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 50%;
  padding 20px;
  margin: 100px auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FirstView = (): JSX.Element => {
  return (
    <Container>
      <h3>No interviewer has been registered</h3>
      <div>
        <IconButton
          color="secondary"
          size="large"
          aria-label="add an interviewer"
        >
          <PersonAddIcon />
        </IconButton>
        <p>Click here to add</p>
      </div>
    </Container>
  );
};

export default FirstView;
