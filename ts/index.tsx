import Button from '@material-ui/core/Button'
import React from 'react'
import ReactDom from 'react-dom'
import { ScenarioCard } from './components/scenarioCard'

const container = document.getElementById('contents')

ReactDom.render(
    <ScenarioCard label="テスト" />,
    container
)
