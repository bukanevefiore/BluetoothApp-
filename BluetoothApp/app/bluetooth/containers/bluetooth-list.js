import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Layout from '../components/bluetooth-list-layout';
import Empty from '../components/empty';
import Toggle from '../components/toggle';
import Subtitle from '../components/subtitle';
import Device from '../components/devices';
import BluetoothSerial, { disable, enable } from 'react-native-bluetooth-serial-next';


function BluetoothList(props) {
 
    const [lista, setLista] = useState([]);
    const [bolEnable, setBolEnable] = useState(false);

    const renderEmpty = () => <Empty text='No hay dispositivos'/>
    const renderItem = ({item}) => {
        return <Device {...item} iconLeft={require('../../iconos/ic_laptop.png')} iconRight={require('../../iconos/ic_settings.png')}/>
    };


    // bluetooth
    useEffect(() => {

        async function init() {
            const enable = await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            setLista(lista);
            setBolEnable(enable);
            console.log(lista)
        }
        init();

        return() => {

            async function remove() {
                 await BluetoothSerial.stopScanning();
                 console.log('Termino scanner');
            }

            remove();
        }
    }, [])

    
    const enableBluetooth = async () => {
        try {
            await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(true);
            setLista(lista);
        } catch (error) {
            console.log(error);
        }
    };

    const disableBluetooth = async () => {
        try {
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setLista([]);
        } catch (error) {
            console.log(error);
        }
    }


    const toggleBluetooth = value => {
        if(value) {
            return enableBluetooth();
        }
        disableBluetooth();
    };


    return (
        <Layout title='Bluetooth'>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth}/>
            <Subtitle title='Lista Dispositivos'/>
            <FlatList data={lista}
            ListEmptyComponent={renderEmpty}
                renderItem={ renderItem}
            />
        </Layout>
    )
}

export default BluetoothList;

 /*  const lista = [
        {
            name: 'Cris',
            key: '1'
        },
        {
            name: 'Lara',
            key: '2'
        },
    ];   */