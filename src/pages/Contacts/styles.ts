import { styled } from 'styled-components';

export const StyledCenterDiv = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
    place-items: center;
    padding: 3em;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1em;
    }
`;