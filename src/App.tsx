import React from 'react';
import {SContentWrapper, SHeader, SMainContent, SServiceWrapper, SWrapper} from "./AppStyle";
import {NavElem} from "./componets/NavElem/NavElem";
import {Service} from "./componets/Service/Service";
import {MainContent} from "./componets/MainContent/MainContent";

export function App() {
    return (
        <SWrapper>
            <SHeader>
                <NavElem text='Главная' variant='blue'/>
                <NavElem text='Доставка' variant='green'/>
                <NavElem text='Оплата' variant='yellow'/>
                <NavElem text='Акции' variant='violet'/>
                <NavElem text='Статьи' variant='orange'/>
                <NavElem text='Контакты' variant='pink'/>
            </SHeader>
            <SContentWrapper>
                <SServiceWrapper>
                    <Service text='Услуга 1' variant='red'/>
                    <Service text='Услуга 2' variant='red'/>
                    <Service text='Услуга 3' variant='red'/>
                    <Service text='Услуга 4' variant='red'/>
                    <Service text='Услуга 5' variant='red'/>
                </SServiceWrapper>
                <SMainContent>
                    <MainContent/>
                </SMainContent>
            </SContentWrapper>
        </SWrapper>
    );
}
