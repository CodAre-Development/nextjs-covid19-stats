module.exports = async function (x) {
    const res = await fetch(process.env.api + "countries");
    const json = await res.json();

    x.setState({
        allCountries: json
    });
}
