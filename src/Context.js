import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [verseText, setVerseText] = useState('');
    const [surah, setSurah] = useState('')
    const [ayah, setAyah] = useState('')

    function fetchVerse() {
        axios.get('https://api.quran.com/api/v4/verses/random?language=en&words=true') //api request using the axios library
            .then(answer => {
                const words = answer.data.verse.words.sort((c, d) => c.position - d.position);
                const verse = words.map(word => word.translation.text).join(' '); // translating to english from arabic,seperate by using space

                console.log(verse);
                setVerseText(verse);
                console.log(answer);
                const verseData = answer.data.verse.verse_key.split(':');
                setSurah(verseData[0]);
                setAyah(verseData[1]);
                localStorage.setItem('verseToday', JSON.stringify(verse))
                localStorage.setItem('verseData', JSON.stringify(verseData))
            })
            .catch(error => {
                console.log(error);
            });
    }

    const currentDate = new Date().toISOString().slice(0, 10);
    useEffect(() => {
        const lastApiCallDate = localStorage.getItem('lastApiCallDate');

        if (lastApiCallDate !== currentDate) {
            // Make the API call
            fetchVerse()
            localStorage.setItem('lastApiCallDate', currentDate);
        } else  if (lastApiCallDate === currentDate){
            const verseFromStorage = JSON.parse(localStorage.getItem("verseToday"))
            const verseDataFromStorage = JSON.parse(localStorage.getItem('verseData'))
            setSurah(verseDataFromStorage[0]);
            setAyah(verseDataFromStorage[1]);
            setVerseText(verseFromStorage)
        }
    }, [currentDate])

    return <AppContext.Provider value={{
        ayah,
        surah,
        verseText
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }


