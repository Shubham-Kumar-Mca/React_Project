import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:60px;
`;
const Warraper = styled.div`
    padding:10px 30px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;
const Logo = styled.h1`
    font-weight: bold; 
`;
const Input = styled.input`
    border: none;
    outline: none;
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Right = styled.div`
    flex:1;
    display:flex;
    text-align:center;
    justify-content: flex-end;  
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
`


const Navbar = () => {
    return (
        <Container>
            <Warraper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray",fontSize: "16px"}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>SHUBH.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Warraper>
        </Container>
    )
}

export default Navbar