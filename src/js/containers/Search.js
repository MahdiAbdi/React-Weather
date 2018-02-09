import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { asyncFetchWeather } from '../actions/'

class Search extends Component {
    render() {
        let input
        return(
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                this.props.asyncFetchWeather(input.value)
                input.value = ''
            }}
            >
                <input
                    ref={node => {
                    input = node
                    }}
                />
                <button type="submit">
                    asyncFetchWeather
                 </button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({asyncFetchWeather: asyncFetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)