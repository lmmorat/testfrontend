import { Card, CardContent, CardMedia, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
    media: {
        height: 140,
        width: 140
    },
    description: {
        display: "block"
    },
    searchPanel :{
        padding: "24pt" , 
    },
    searchInput :{ 
        width: "100%"
    }
});

const CharactersPanel = () => {

    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((data) => data.json())
            .then((dataJson) => {
                console.log(dataJson.results);

                const knownCharacters = dataJson.results.filter((character) => { 
                    return character.status !== 'unknown';
                }) 
                setCharacters(knownCharacters.slice(0,20));
                setFilteredCharacters(knownCharacters.slice(0,20));
            })
    }, []);

    const classes = useStyles();

    const search = (event) => { 
        const filtered = characters.filter(  (item) => {
            console.log(item.name,event.target.value)
            return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
         })

         setFilteredCharacters(filtered);
    }

    const showEpisodes = () => {

    }


    return (
        <div className="characters">
            <div className={classes.searchPanel}>
                <TextField className={classes.searchInput} id="filterText" variant="outlined" label="Search" onChange={ (event) => search(event) } />

            </div>

            <Grid container spacing={2} onClick={showEpisodes}>
                {
                    filteredCharacters.map((character) => {
                        return <Grid key={character.id} item xs={12} md={4}>                             
                            <div>
                                <div>
                                    <img src={character.image} />
                                </div>
                                <div>
                                <strong className={classes.description}>{character.name}</strong>
                                     <span className={classes.description}>Status:{character.status}</span>
                                    <span className={classes.description}>Origin: {character.origin.name}</span>
                                    <span className={classes.description}>Gender: {character.gender}</span>
                                    <span className={classes.description}>Type: {character.type}</span>
                                </div>
                            </div>
                        </Grid>

                    })
                }
            </Grid>
        </div>
    )
}

export default CharactersPanel;