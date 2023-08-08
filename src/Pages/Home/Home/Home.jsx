import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ordertab from './Ordertab';
import useMenu from '../../../hooks/useMenu';
import Header from '../../Shared/Header';
import useCommunity from '../../../hooks/useCommunity';
import Communitydata from '../../Communitydata';
import Footer from '../../Footer';
const Home = () => {
    const categories = ['Rangamati','CoxsBazar','Sylhet','Bandarban'];
    const category = 'Rangamati';
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const [community] = useCommunity();
    

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
       <div>
        <h2 className='text-center text-4xl mt-6 mb-2 text-primary'>Join Different Communities</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  lg:ml-0 mb-10'>
          {
            community.map(item => 
                    <Communitydata
                key={item._id}
                item={item}
            ></Communitydata>
            )
          }
        </div>
       </div>
       <Footer></Footer>
        </div>
    );
};

export default Home;