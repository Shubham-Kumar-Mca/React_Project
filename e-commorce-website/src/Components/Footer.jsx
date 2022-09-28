import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding:20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
    text-align: justify;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    background-color:#${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;



const Center = styled.div`
    padding:20px;
    flex:1;
`;
const Right = styled.div`
    flex:1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHUBH.</Logo>
                <Desc>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact</Title>
            <ContectItem>Purnia, Bihar</ContectItem>
            <ContectItem>+91 62034 52775</ContectItem>
            <ContectItem>krshubhamjaiswal2000@gmail.com</ContectItem>
            </Right>

        </Container>
    )
}

export default Footer