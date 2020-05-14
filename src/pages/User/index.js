import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../../services/api'

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
    Loading
} from './styles'

export default class User extends Component {
    static propTypes = {
        route: PropTypes.shape().isRequired
    }

    state = {
        stars: [],
        loading: true
    }

    async componentDidMount() {
        this.load();
    }

    load = async () => {
        const { route } = this.props
        const user = route.params.user

        const response = await api.get(`/users/${user.login}/starred`)

        this.setState({
            stars: response.data,
            loading: false
        })
    }

    render() {
        const { route } = this.props
        const { stars, loading } = this.state

        const user = route.params.user

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? <Loading /> :
                    <Stars
                        data={stars}
                        keyExtractor={star => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred>
                                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                }
            </Container>
        )
    }
}


