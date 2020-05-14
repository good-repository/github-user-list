import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import api from '../../services/api'

export default class User extends Component {
    static propTypes = {
        route: PropTypes.shape().isRequired
    }

    state = {
        stars: []
    }

    async componentDidMount() {
        const { route } = this.props
        const user = route.params.user

        const response = await api.get(`/users/${user.login}/starred`)

        this.setState({ stars: response.data })
    }

    render() {
        return <View />
    }
}


