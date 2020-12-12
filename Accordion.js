import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: null
    };

    renderLi(section, index, currentSectionIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        );
    }

    handleClick = (index) => {
        this.setState({ currentSectionIndex: index });
    }

    render() {
        return (
            <ul className='accordion'>
              {this.props.sections.map((section, index) => this.renderLi(section, index, this.state.currentSectionIndex))}
            </ul>
        );
    };
}

export default Accordion;