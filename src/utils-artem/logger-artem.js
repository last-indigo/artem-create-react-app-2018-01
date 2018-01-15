import React from 'react';

/**
 * WARNING!
 * This component still not working good yet.
 * Rewise and change later
 */
let _activity = [];

// export function log(...messages) {
//     let totalMessage = '';
//     for (let msg of messages) {
//         totalMessage += msg.toString()
//     }
//     _activity = [
//         {
//             message: totalMessage,
//             id: newUniqueId()
//         },
//         ..._activity
//     ];
// }

export function getRecentLogs(depth) {
    if (depth) {
        return _activity.slice(0, depth)
    }
    return [..._activity];
}

export class LoggerComponent extends React.Component {
    render() {
        return (
            <ul>
                {getRecentLogs().map(
                    (entry) => <li key={entry.id}>{entry.message}</li>
                )}
            </ul>
        )
    }
}