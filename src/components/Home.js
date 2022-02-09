import React from 'react';
import Section from './Section';
import styled from 'styled-components';

const Container = styled.div`
    block-size: 100vh;
`

const carModels = [
    {
        
    }
]

function Home() {
  return (
      <Container>
          <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
          />
          {/* <Section />
          <Section />
          <Section /> */}
      </Container>
  );
}

export default Home;
