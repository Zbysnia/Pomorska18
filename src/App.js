import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Profile  from './features/profile'
const useStyles = makeStyles({
    App: {
        height: '100vh',
        position: 'relative',
        backgroundImage: 'url("http://fotopolska.eu/foto/300/300047.jpg")',
        opacity: '0.7',
        backgroundColor: 'green',
    },
    head: {
        fontSize: '72px',
        background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
        backgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        fontWeight: '700',
        textAlign: 'center',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        textShadow: '4px 4px #ff00ff',
    },
    Overlay: {
        background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        opacity: '0.8'
    }
});

const App = () => {
    const styles = useStyles();

    console.log(styles);
    return (
        <div className={styles.Overlay}>
            <div className={styles.App}>
                <Typography variant={"h1"} className={styles.head}>HALOOO MISNIA GDZIE JEST ZBYSNIA</Typography>
                <Profile imie={'Smiechul'} paszniak={"Osiedlowy"}/>
                <Profile imie={'eko'} paszniak={"Ddddobry"}/>
            </div>
        </div>
    )
};

export default App;


