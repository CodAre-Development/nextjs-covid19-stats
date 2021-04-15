import Head from "next/head";
import MainComponent from "../components/Main.component";

export default function Index() {
    return <div>
        <Head>
            <title>Global Status</title>

            <meta name={"description"} content={"Covid-19 Global Status"} />
            <link rel="icon" href="https://www.thecompassforsbc.org/sites/default/files/COVID-19%20icon%202FINAL.png"/>
        </Head>

        <MainComponent />
    </div>
}
