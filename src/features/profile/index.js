import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    profileWrapper: {
        position: 'relative',
        width: '50%',
        float: 'left',
        height: '75%',

    },
    avatarContainer: {
        position: 'relative',
        width: '100%',
        height: '70%',
    },
    avatarBlock: {
        borderRadius: '15%',
        width: '60%',
        height: '80%',
        position: 'absolute',
        top: '10%',
        left: props => props.imie === 'eko' ? '5%' : "30%",
        background: 'black',
        boxShadow: '4px 4px 4px #000000',
        backgroundImage: props => props.imie === 'eko' ? 'url("https://i.imgur.com/T9HlTq7.jpg,")' : 'url("https://i.imgur.com/yoPP7en.jpg,,")',
        backgroundSize: '100% 100%',
    },
    profileInfoContainer: {
        width: '100%',
        height: '20%',
        position: 'relative',
    },
    infoBlock: {
        width: '60%',
        height: '80%',
        position: 'absolute',
        top: '10%',
        left: props => props.imie === 'eko' ? '5%' : "30%",
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5%'
    },
    title: {
        backgroundColor: '#19832d',
        background: 'linear-gradient(315deg, #19832d 0%, #0d324d 74%)',
        backgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        fontWeight: '700',
        textAlign: 'center',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        boxShadow: '4px 4px 4px #000000',
    }
});


const Profile = ({imie, paszniak}) => {
    const styles = useStyles({imie});
    console.log(imie);
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.avatarContainer}>
                <div className={styles.avatarBlock} >
                </div>
            </div>
            <div className={styles.profileInfoContainer}>
                <div className={styles.infoBlock}>
                    <div className={styles.title}>
                        <Typography variant={'h5'}>Imie: {imie === 'eko' ? "Ekonometrus" : imie}</Typography>
                    </div>
                    <div className={styles.title}>
                        <Typography variant={'h5'}>Paszniak: {paszniak}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;