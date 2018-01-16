import React from 'react';

export class LoggerComponent extends React.Component {
    render() {
        return (
            <ul>
                {this.getRecentLogs().map(
                    (entry) => (
                        <li key={entry.id}>
                            <pre>{entry.message}</pre>
                        </li>
                    )
                )}
            </ul>
        )
    }

    getRecentLogs(depth) {
        // const sourceArray = myFirstStore.getState().loggerHistory;
        const sourceArray = this.props.loggerHistory;
        if (depth) {
            return sourceArray.slice(0, depth)
        }
        return [...sourceArray];
    }
}