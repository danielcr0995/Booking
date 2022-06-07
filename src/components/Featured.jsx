import React from 'react'
import styled from "styled-components";


const FeaturedElements = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    gap: 20px;
    z-index: 1;
    margin: 70px auto;
`

const FeaturedItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
    flex:1;
`
const FeaturedTitles = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    /* display: flex ; */
    /* align-items: center ; */
    
`   

const Image = styled.img`    
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Featured() {
  return (
    <FeaturedElements style= {{display: "flex", justifyContent:"center"}}>
        <FeaturedItem>
            <Image 
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""                
            />
            <FeaturedTitles>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </FeaturedTitles>
        </FeaturedItem>
        <FeaturedItem>
            <Image 
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""                
            />
            <FeaturedTitles>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </FeaturedTitles>
        </FeaturedItem>
        <FeaturedItem>
            <Image 
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""                
            />
            <FeaturedTitles>
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </FeaturedTitles>
        </FeaturedItem>
    </FeaturedElements>
  )
}

export default Featured