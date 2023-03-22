import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [verseText, setVerseText] = useState('');
    const [surah, setSurah] = useState('')
    const [ayah, setAyah] = useState('')
    const [marchschedule, setSchedulemarch] = useState([]);
    const [aprilschedule, setScheduleapril] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.aladhan.com/v1/calendarByCity?city=Mukono&country=Uganda&method=1&month=4&year=2023"
            )
            .then((response) => {
                setSchedulemarch(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(
                "https://api.aladhan.com/v1/calendarByCity?city=Mukono&country=Uganda&method=1&month=3&year=2023"
            )
            .then((response) => {
                setScheduleapril(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

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
        } else if (lastApiCallDate === currentDate) {
            const verseFromStorage = JSON.parse(localStorage.getItem("verseToday"))
            const verseDataFromStorage = JSON.parse(localStorage.getItem('verseData'))
            setSurah(verseDataFromStorage[0]);
            setAyah(verseDataFromStorage[1]);
            setVerseText(verseFromStorage)
        }
    }, [currentDate])

    const schedule = aprilschedule.concat(marchschedule);//it matters how you concatenate the array
    const final = schedule.filter((day) => {//day represents each element in the schedule array
        let days = new Date(day.date.readable)
        const begin = new Date('2023-03-23T00:00:00+03:00') //T00:00:00+03:00 is the time zone offset represents the difference in time between Coordinated Universal Time (UTC) and a specific location's time.
        const end = new Date('2023-04-21T23:59:59+03:00')
        return days >= begin && days <= end;
    });
    console.log(final);

    const prayerTimes = final.map(({ timings: { Fajr, Maghrib }, date: { readable } }) => ({
        start : new Date(`${readable} ${Fajr.substr(0,5)}`),
        end: new Date(`${readable} ${Maghrib.substr(0,5)}`),
        event: new Date(readable),
    }))
    console.log(prayerTimes);

    return <AppContext.Provider value={{
        ayah,
        surah,
        verseText,
        final, 
        prayerTimes
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }