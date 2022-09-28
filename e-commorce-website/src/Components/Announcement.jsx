import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background-color:  rgb(17, 17, 17);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>Super Deal! Free Shopping on Orders Over $50</Container>
  )
}

export default Announcement