import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

    //1. 데이터 담을 공간
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 네트워킹 함수
    const getData = async () => {
        return (
            await axios.get('https://api.kivaws.org/v1/loans/newest.json')
                // .then(aaa => console.log(aaa.data.loans))
                .then(aaa => {
                    setLoans(aaa.data.loans)
                    setLoading(false)

                })
                .catch(err => console.log(err))
        )
    }

    //2. 자동실행함수
    useEffect(() => {
        getData()
    },[])


    return (
        <div>
            {loans.map(loan => (
                <>
                    <h1>name : {loan.name}</h1>
                    <h2>activity : {loan.activity}</h2>
                    <h3>coutry : {loan.location.country}</h3>
                    {loan.description.languages.map(language => (
                        <h2>languages : {language}</h2>
                    ))}
                </>


            ))}
        </div>
    );
};




export default App;
