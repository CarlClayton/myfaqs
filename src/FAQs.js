import React from 'react';

const services = require("./services.js");

class FAQs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        services.getFaq().then((body) => {
            this.setState({ faqs: body });
        }).catch((error) => {
            console.error(error);
        });


    }

    render() {
        return (
            <div>This is a FAQ
                <input id="searchBox" type="text" value={this.state.searchQuestion} onChange={this.filterResults} placeholder="Search FAQ" />
                {/* {this.state.map(faq, index) => {
                    return (
                        <FAQ key={index} question={faq.question} answer={faq.answer} />
                    );
                }} */}
                <div>
                    {this.state.faqs.map((faq, index) => {
                        return (
                            <ul key={index}>
                                {Object.keys(faq).map((key) => {
                                    return (
                                        <li key={key + index}>{key}:{faq[key]}</li>
                                    )
                                })}
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default FAQs;

