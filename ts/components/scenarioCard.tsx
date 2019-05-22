import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

interface IProps {
    label: string
}

export class ScenarioCard extends React.Component<IProps, {}> {
    public render() {
        const label = (!!this.props.label) ?
            <label>{this.props.label}</label> :
            null

        return (
            <Card>
                { label }
            </Card>
        )
    }
}
