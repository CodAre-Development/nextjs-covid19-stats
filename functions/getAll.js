module.exports = async function (x) {
    const res = await fetch(process.env.api + "all");
    const json = await res.json();

    x.setState({
        globalStats: json
    });
}
