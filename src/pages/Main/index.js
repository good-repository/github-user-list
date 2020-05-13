import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, SubmitButton } from './styles'

const index = () => {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adicionar um usuário"
                />
                <SubmitButton>
                    <Icon name="add" size={20} color="#fff" />
                </SubmitButton>
            </Form>
        </Container>
    )
}

export default index
