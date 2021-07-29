import React, {Component} from "react";
import './content.css';
import SwipeComponent from "../swipe/swipe";
const USERS_NUM = 150

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
            userUrl: `https://randomuser.me/api/?results=${USERS_NUM}&exc=login,gender,nat,id,registered,phone&noinfo`,
            infoUrl: 'https://www.randomtext.me/api/gibberish/p-50/5-20' //gibberish | lerum
        }
    }

    render() {
        const {data} = this.state
        return (
            <div className='app-child'>
                <SwipeComponent data={data} loadData={this.loadData}/>
            </div>
        )
    }

    componentDidMount() {
        this.loadData().then(res => this.setState({data: res}))
    }

    async loadData() {
        const {userUrl, infoUrl} = this.state
        const text = await Promise.all(this.getInfoPromises(infoUrl, 0))
        const users = await Promise.resolve(fetch(userUrl).then(u => u.json()))
        const sanitizedText = this.sanitizeText(text)
        return this.buildResult(users, sanitizedText)
    }

    getInfoPromises(url, i) {
        return i < USERS_NUM/50 ?
            [fetch(url).then(t => t.json()), this.getInfoPromises(url, ++i)] : []
    }

    sanitizeText(str) {
        return str.map(t => t.text_out)
            .reduce((x,y) => x + y)
            .replaceAll(/<p>|<\/p>/g, '')
            .split(/\r/)
    }

    buildResult(users, info) {
        return users.results.map((user, idx) => ({...user, info: info[idx]}))
    }

}