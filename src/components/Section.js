import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Wrap = styled.div`
    z-index: 0;
    inline-size: 100vw;
    block-size: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}');`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

const ItemText = styled.div`
    padding-block-start: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-block-end: 30px;
    // margin: 16px;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, .8);
    block-size: 40px;
    inline-size: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: .65;
    color: black;
`

const DownArrow = styled.img`
    margin-block-start: 20px;
    block-size: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``


function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
      
    )
      
}

export default Section;
