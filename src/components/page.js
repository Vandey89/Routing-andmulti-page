import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
background : ${({color='blue'}) => color};
width: 100vw ;
height: 100vh;
`


export const NotFound = () =>{          //eto budet funkcionalniy komponent 
useEffect(() =>{                        //ispolzuem 'useEffect'
let title = document.title;
document.title = 'Not Found';
return () =>{
    document.title = title;             //vrnuli funckciu 'useEffect' srabotaet odin  raz
}
}, [])
return (<Page color="red">
    <h1>OOPS 404</h1>
</Page>)

}

/* dalshe sdelaem dinami4eskiy put' i  dobavlenie cveta budet iz adresnoi stroki dobavlenie
cveta budet tolko 4erez nazvanie(red,green,white) */

export const DynamicPage = (props) =>{          //delaem dinami4eskuy stranicu  ona budet polu4at' props 
    console.log(useParams())
    return  <Page color={useParams().myColor}></Page>                       // i vozvrashat' props

}
