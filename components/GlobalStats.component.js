import React, {Component} from "react";
import NumberFormat from "react-number-format";
import getAll from "../functions/getAll";

export default class GlobalStatsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            globalStats: {}
        }
    }

    async componentDidMount() {
        await getAll(this);
    }

    render() {
        return <>
            <p className="text-lg text-center font-bold m-5">Global Status</p>

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
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.updated} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.tests} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.cases} displayType={"text"} thousandSeparator={true}/></td>
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
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.deaths} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.recovered} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.critical} displayType={"text"} thousandSeparator={true}/></td>
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
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.todayCases} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.todayDeaths} displayType={"text"} thousandSeparator={true}/></td>
                        <td className="px-4 py-3"><NumberFormat value={this.state.globalStats.todayRecovered} displayType={"text"} thousandSeparator={true}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    }
}
