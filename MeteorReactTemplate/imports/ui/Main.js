import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
              hi!
              <TextField
                id="outlined-name"
                label="Name"
                margin="normal"
                variant="outlined"
              />
              <CircularProgress/>
            </div>
        );
    }
}
