export const getData = async() => {

    const response = await fetch('https://auth-faa20-default-rtdb.firebaseio.com/values.json');
    const obj = await response.json();

    return {
        response,
        obj
    };
};

export const ws = new WebSocket('wss://trade.trademux.net:8800/?password=1234');