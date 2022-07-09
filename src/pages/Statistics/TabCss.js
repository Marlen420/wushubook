import styled from 'styled-components';

export const Tab = styled.button`
    padding-right: 20px;
    padding-left: 10px;
    margin-right: 30px;
    border: 0;  

    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    cursor: pointer;
    background: 0;
    color: #565656;

    @media (max-width: 462px) {
    padding-right: 0px;
    padding-left:2px;
    margin-right: 0px;


    }
    @media (max-width: 334px) {
        font-size: 13px;

    
    }
    
    ${({ active }) =>

        active && `border-bottom:  3px solid #6786F4; 
            line-height: 3em;
            font-weight: 700;
            color: #000000;

            @media (max-width: 780px) {
                line-height: 1em;
            }
    `} 
`;