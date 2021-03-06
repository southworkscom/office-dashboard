import * as React from 'react';
import * as Utilities from './utilities';
import { SelectBox } from './selectbox';


interface AboutProps extends React.Props<About> {
}

interface AboutState {
}

export class About extends React.Component<AboutProps, AboutState> {
    constructor(props, state) {
        super(props, state);
        this.state = {}
    }

    public render() {
        return (
            <div id="About" className="modal fade">
                <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times; </button>
                                <h4 className="modal-title">About</h4>
                                </div>
                            <div className="modal-body">
                                <h4>Office Dashhoard</h4>
                                <p>To report bugs or provide feedback go to <br/>
                                       <a href="https://github.com/johnshew/office-dashboard/issues">https://github.com/johnshew/office-dashboard/issues</a></p>
                                <p>This is an open source application.  For more information please see the <a href="https://github.com/johnshew/office-dashboard/blob/gh-pages/LICENSE">license</a>.</p>
                                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                    </div>
                </div>
        );
    }
}
