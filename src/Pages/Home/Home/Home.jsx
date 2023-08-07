import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ordertab from './Ordertab';
import useMenu from '../../../hooks/useMenu';
import Header from '../../Shared/Header';
const Home = () => {
    const categories = ['Rangamati','CoxsBazar','Sylhet','Bandarban'];
    const category = 'Rangamati';
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    

    const Rangamati = menu.filter(item => item.stop_destination === 'Rangamati');
    const CoxsBazar = menu.filter(item => item.stop_destination === 'CoxsBazar');
    const Sylhet = menu.filter(item => item.stop_destination === 'Sylhet');
    const Bandarban = menu.filter(item => item.stop_destination === 'Bandarban');
    return (
        <div>
            <Header></Header>
            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Rangamati</Tab>
                <Tab>Cox's Bazar</Tab>
                <Tab>Sylhet</Tab>
                <Tab>Bandarban</Tab>
            </TabList>
            <TabPanel>
                <Ordertab items={Rangamati}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={CoxsBazar}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={Sylhet}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={Bandarban}></Ordertab>
            </TabPanel>
            </Tabs>
        </div>
        </div>
    );
};

export default Home;