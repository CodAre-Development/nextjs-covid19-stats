import React, {Component} from "react";
import Link from "next/link";
import getAllCountries from "../functions/getAllCountries";

export default class CountriesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCountries: [],
            selectedCountry: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        await getAllCountries(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return <div className={"countries rounded-t-lg m-5 w-5/6 mx-auto"}>
            <input type={"text"} value={this.state.selectedCountry} name={"selectedCountry"} onChange={this.handleChange} placeholder={"Choose Country"} style={{display: "block", marginBottom: "20px"}} className="px-2 py-2 relative rounded text-md border outline-none focus:outline-none focus:ring justify-center w-52" />
            {this.state.allCountries.filter(x => this.state.selectedCountry === "" || x.country.toLowerCase().includes(this.state.selectedCountry.toLowerCase())).map((country, key) =>
                <Link key={key} href={"/country/" + country.countryInfo["_id"]}>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">{country.country}</span>
                </Link>
            )}
        </div>
    }
}
