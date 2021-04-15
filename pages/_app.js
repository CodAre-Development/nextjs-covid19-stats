import {ThemeProvider} from "next-themes";
import "../dist/styles.css";
import "../dist/global.css";

export default function Root({Component, pageProps}) {
    return <ThemeProvider attribute={"class"}>
        <Component {...pageProps} />
    </ThemeProvider>
}
