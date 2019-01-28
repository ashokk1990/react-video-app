import React from 'react'

class SearchBar extends React.PureComponent {
    state = {
        term: ''
    };

    handleSearchSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.term)
    }

    handleOnChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSearchSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleOnChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
