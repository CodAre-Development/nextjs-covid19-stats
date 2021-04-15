import React, {useState} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import NumberFormat from "react-number-format";

export default function Country({country}) {
    const router = useRouter();
    const {getRouterCountry} = router.query;
console.log(country)
    return <>
        <Head>
            <title>{country[0].country} Status</title>

            <meta name={"description"} content={country[0].country + " Covid-19 Status"} />
            <link rel="icon" href={country[0].countryInfo.flag}/>
        </Head>
    
        <p className="text-lg text-center font-bold m-5">{country[0].country} Status - <Link href={"/"}>Go Back</Link></p>

        <table className="rounded-t-lg m-5 w-5/6 mx-auto dark:bg-gray-800 dark:text-gray-200">
            <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="px-4 py-3">Updated</th>
                    <th className="px-4 py-3">Tests</th>
                    <th className="px-4 py-3">Cases</th>
                </tr>
            </thead>

            <tbody>
            <tr className="dark:bg-gray-700 border-b border-gray-600">
                <td className="px-4 py-3"><NumberFormat value={country[0].updated} displayType={"text"} thousandSeparator={true}/></td>
                <td className="px-4 py-3"><NumberFormat value={country[0].tests} displayType={"text"} thousandSeparator={true}/></td>
                <td className="px-4 py-3"><NumberFormat value={country[0].cases} displayType={"text"} thousandSeparator={true}/></td>
            </tr>
            </tbody>
        </table>

        <table className="rounded-t-lg m-5 w-5/6 mx-auto dark:bg-gray-800 dark:text-gray-200">
            <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="px-4 py-3">Deaths</th>
                    <th className="px-4 py-3">Recovered</th>
                    <th className="px-4 py-3">Critical</th>
                </tr>
            </thead>

            <tbody>
                <tr className="dark:bg-gray-700 border-b border-gray-600">
                    <td className="px-4 py-3"><NumberFormat value={country[0].deaths} displayType={"text"} thousandSeparator={true}/></td>
                    <td className="px-4 py-3"><NumberFormat value={country[0].recovered} displayType={"text"} thousandSeparator={true}/></td>
                    <td className="px-4 py-3"><NumberFormat value={country[0].critical} displayType={"text"} thousandSeparator={true}/></td>
                </tr>
            </tbody>
        </table>

        <table className="rounded-t-lg m-5 w-5/6 mx-auto dark:bg-gray-800 dark:text-gray-200">
            <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="px-4 py-3">Today Cases</th>
                    <th className="px-4 py-3">Today Deaths</th>
                    <th className="px-4 py-3">Today Recovered</th>
                </tr>
            </thead>

            <tbody>
                <tr className="dark:bg-gray-700 border-b border-gray-600">
                    <td className="px-4 py-3"><NumberFormat value={country[0].todayCases} displayType={"text"} thousandSeparator={true}/></td>
                    <td className="px-4 py-3"><NumberFormat value={country[0].todayDeaths} displayType={"text"} thousandSeparator={true}/></td>
                    <td className="px-4 py-3"><NumberFormat value={country[0].todayRecovered} displayType={"text"} thousandSeparator={true}/></td>
                </tr>
            </tbody>
        </table>
    </>
}

export async function getServerSideProps({params}) {
    const res = await fetch(process.env.api + "countries");
    const json = await res.json();
    const country = json.filter(x => x.countryInfo["_id"] === Number(params.country));

    return {
        props: {
            country
        }
    }
}
